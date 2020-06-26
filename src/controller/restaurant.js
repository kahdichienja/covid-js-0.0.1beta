import mongoose from 'mongoose'
import { Router } from 'express'
import Restaurant from '../model/restaurant'


export default({ config, db }) => {
    let api = Router()

    // 'v1/restaurant/add --create

    api.post('/add', async (req, res) => {
        let newRest = new Restaurant()  
        
        newRest.name = await req.body.name

        await newRest.save(err => {
            if (err) {
                res.send(err)
            }
            res.json({ message: "restaurant saved successfully" })
        })
    })

    //  'v1/restaurant/ --Read
    api.get('/', async (req, res) => {
        await Restaurant.find({}, (err, restaurants) => {
            if (err) {
                res.send(err)
            }            
            res.json(restaurants)
        })
    })

    //'v1/restaurant/:id --Read 1
    api.get('/:id', async (req, res) => {
        await Restaurant.findById(req.params.id, (err, restaurant) => {
            if (err) {
                res.send(err)
            }
            res.json(restaurant)
        })
    })

    //'v1/restaurant/:id --update 
    api.put('/:id', async (req, res) => {
        await Restaurant.findById(req.params.id, (err, restaurant) =>{
            if (err) {
                res.send(err)
            }
            restaurant.name = req.body.name
            restaurant.save(err => {
                if (err) {
                    res.send(err)
                }
                res.json({ message: "Restaurant Info Updated" })
            })
        })
    })

    //'v1/restaurant/:id --Delete
    api.delete('/:id', async (req, res) => {
        await Restaurant.remove({
            _id: req.params.id
        }, (err, restaurant) => {
            if (err) {
                res.send(err)
            }
            res.json({ message: "Restaurant Successfully Removed" })
        })
    })

    return api
}