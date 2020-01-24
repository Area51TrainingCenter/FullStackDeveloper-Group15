import * as yenv from "yenv"

const env = yenv()

const connectionString = `mongodb+srv://${env.DATABASE_USER}:${env.DATABASE_PASSWORD}@${env.HOST}/${env.DATABASE_NAME}?retryWrites=true&w=majority`

export default connectionString