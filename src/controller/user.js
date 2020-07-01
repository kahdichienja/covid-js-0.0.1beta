import mongoose from 'mongoose'
import { Router } from 'express'
import User from '../model/user'

export default ({ db, config}) => {
    let api = Router()
    // 'v1/user/add --create
    api.post('/add', async (req, res) =>{
        let newUser = new User()

        newUser.firstname = await req.body.firstname
        newUser.lastname = await req.body.lastname
        newUser.username = await req.body.username
        newUser.email = await req.body.email

        await newUser.save(err =>{
            if (err){
                res.send(err)
            } 
            res.json({ success: "User Created successfully" })
        })

        
    })

    //  'v1/User/ --Read
    api.get('/', async (req, res) => {
        await User.find({}, (err, users) => {
            if (err) {
                res.send(err)
            }            
            res.json(users)
        })
    })
    //  'v1/user/:id' ReadOne
    api.get('/:id', async (req, res) =>{
        await User.findById(req.params.id, (err, user) =>{if(err){res.send(err)} res.json(user)})
    })
    //  'v1/user/:id' Update
    api.put('/:id', async (req, res)=> {
        User.findById(req.params.id, (err, user) =>{
            if(err){
                res.send(err)
            }
            user.firstname = req.body.firstname
            user.lastname = req.body.lastname
            user.email = req.body.email
            user.username = req.body.username
            user.save(err =>{
                if(err){
                    res.send(err)
                }
                res.json({ success: 'User info Updated' })
            })
        })
    })
    //  'v1/user/:id' delete
    api.delete('/:id', async (req, res) => {
       await User.deleteOne({
            _id: req.params.id
        },(err, user)=>{
            if(err){
                res.send(err)
            }
            res.json({ success: 'user was deleted succesfully' })
        })
    })

    return api
}