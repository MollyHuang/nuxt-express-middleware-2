export default function (context) {
  const { app } = context
  if (process.server) {
    // eslint-disable-next-line no-console
    console.log('hello world...')
  }
  // eslint-disable-next-line no-console
  console.log(app)
}
