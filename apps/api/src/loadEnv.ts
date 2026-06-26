import { config } from 'dotenv'
import path from 'path'

/**
 * Load env from repo root `.env` first, then apps/api `.env` (later wins).
 * Works whether the process cwd is the monorepo root or apps/api.
 */
export function loadEnv(): void {
  const apiDir = path.resolve(__dirname, '..')
  const repoRoot = path.resolve(apiDir, '../..')

  config({ path: path.join(repoRoot, '.env') })
  config({ path: path.join(apiDir, '.env') })
}
