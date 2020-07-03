import mongoose from 'mongoose'
import config from './config'

export default callback => {
    let db = mongoose.connect(config.mongoUrl, {
          useUnifiedTopology: true, 
          useNewUrlParser: true ,
          useFindAndModify: false,
          useCreateIndex: true
        })
    callback(db)
}