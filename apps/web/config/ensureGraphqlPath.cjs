/**
 * Gaia GraphQL base URLs are often configured without the `/graphql` path.
 * Normalize so Apollo always posts to the actual endpoint.
 */
function ensureGraphqlPath(uri) {
  const trimmed = String(uri).trim().replace(/\/+$/, '')
  if (!trimmed || trimmed === '/') {
    return '/graphql'
  }
  if (trimmed.endsWith('/graphql')) {
    return trimmed
  }
  return `${trimmed}/graphql`
}

module.exports = { ensureGraphqlPath }
