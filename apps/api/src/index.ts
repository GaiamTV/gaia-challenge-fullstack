import { createApp } from './app'

const portRaw = process.env.PORT
const port = portRaw !== undefined && portRaw !== '' ? Number(portRaw) : 9001

const app = createApp()
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`)
})
