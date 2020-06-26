import dotenv from 'dotenv'

dotenv.config()
let appConfigs = {
    "port" : process.env.SERVER_PORT,
    "mongoUrl" : process.env.DB_CONNECT_URL,
    "bodyLimit": process.env.BODY_LIMIT
}
export default appConfigs