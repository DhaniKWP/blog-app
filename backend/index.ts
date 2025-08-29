import { app } from "./app";
import config from "./config/index";
import connectDB from "./config/connection";
const { PORT} = config;

async function start() {
  try {
    await connectDB()
    app.listen(PORT, async () => {
      console.log(`Running in http://localhost:${PORT}`)

      // Testing DB here
      // const whisper1 = await store.create('halo nigga kamu suka makan apa?')
      // console.log(whisper1)
    })
  } catch (error) {
    console.error(error)
  }
}

start()
