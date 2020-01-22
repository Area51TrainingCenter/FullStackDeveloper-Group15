import { initializeServer } from "./services"
import * as yenv from "yenv"

const env = yenv()

const begin = async () => {
    try {
        await initializeServer()
        console.log(`Server is running on port ${env.PORT}`)
    } catch (error) {
        console.log(error)
    }
}

begin()