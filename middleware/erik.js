export default function (context) {
  const { app } = context
  if (process.server) {
    // eslint-disable-next-line no-console
    console.log('[erik.js] hello world...')
  }
  // eslint-disable-next-line no-console
  console.log('[erik.js] app=', app.head.title)
}
