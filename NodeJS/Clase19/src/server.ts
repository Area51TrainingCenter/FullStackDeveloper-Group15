import { initializeServer, initializeDatabase } from "./services"

const begin = async () => {
    try {
        await initializeServer()
        console.log("Server is running on port 3000")
    } catch (error) {
        console.log(error)
    }

    try {
        await initializeDatabase()
        console.log("Connected to Mongo")
    } catch (error) {
        console.log(error)
    }
}

begin()