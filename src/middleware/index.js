import { Router} from 'express'
import morgan from 'morgan'

export default({ config, db }) => {
    let api = Router()

    // add middleware
    let loger = morgan("dev")
    return api
}
