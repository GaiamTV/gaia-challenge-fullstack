import 'dotenv/config'
import { createApp } from './app'

const portRaw = process.env.PORT
const port = portRaw !== undefined && portRaw !== '' ? Number(portRaw) : 9001

async function main() {
  const app = await createApp()
  app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`)
  })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
