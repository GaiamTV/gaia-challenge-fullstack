/**
 * ForkTsChecker / tsc read source before DefinePlugin runs. Webpack replaces each
 * `process.env.*` below with a string literal in the bundle (no runtime `process`).
 */
declare const process: {
  env: {
    NODE_ENV: string
    GAIA_STAGE_GRAPHQL_URI: string
    CODING_CHALLENGE_GRAPHQL_URI: string
    GRAPHQL_AUTH: string
  }
}
