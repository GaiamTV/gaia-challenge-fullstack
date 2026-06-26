/**
 * OpenAI API client for making chat completion requests via Brooklyn proxy
 * Endpoint: /openai/v1/chat/completions
 */

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface ChatCompletionRequest {
  model: string
  messages: ChatMessage[]
  temperature?: number
  response_format?: { type: 'json_object' | 'text' }
}

export interface ChatCompletionResponse {
  choices: Array<{
    message: {
      content: string
      role: string
    }
    finish_reason: string
    index: number
  }>
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

interface RequestOptions {
  body: ChatCompletionRequest
  timeout?: number
}

/**
 * Get the Brooklyn API base URL from environment
 */
function getBrooklynUrl(): string {
  const url = process.env.BROOKLYN_URL
  if (!url) {
    throw new Error('BROOKLYN_URL environment variable is not set')
  }
  return url
}

/**
 * Get the bearer token for authentication
 * Set via BROOKLYN_BEARER_TOKEN environment variable (raw JWT or "Bearer <jwt>")
 */
function getBearerToken(): string {
  const token = process.env.BROOKLYN_BEARER_TOKEN
  if (!token) {
    throw new Error('BROOKLYN_BEARER_TOKEN environment variable is not set')
  }
  if (/^Bearer\s/i.test(token)) {
    return token
  }
  return `Bearer ${token}`
}

/**
 * Make an authenticated request to the OpenAI chat completions endpoint
 * via Brooklyn proxy
 */
export async function makeOpenAIRequest(
  options: RequestOptions,
): Promise<ChatCompletionResponse> {
  const { body, timeout = 120000 } = options
  const url = `${getBrooklynUrl()}/openai/v1/chat/completions`
  const token = getBearerToken()

  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`)
    }

    return response.json()
  } catch (error) {
    clearTimeout(timeoutId)

    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeout / 1000} seconds`)
    }

    throw error
  }
}

/**
 * Helper function for simple chat completions
 */
export async function chatCompletion(
  messages: ChatMessage[],
  options?: {
    model?: string
    temperature?: number
    responseFormat?: 'json_object' | 'text'
  },
): Promise<string> {
  const response = await makeOpenAIRequest({
    body: {
      model: options?.model || 'gpt-4o',
      messages,
      temperature: options?.temperature ?? 0.7,
      ...(options?.responseFormat
        ? { response_format: { type: options.responseFormat } }
        : {}),
    },
  })

  const content = response.choices?.[0]?.message?.content
  if (!content) {
    throw new Error('No content in OpenAI response')
  }

  return content
}
