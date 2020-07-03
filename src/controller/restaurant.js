import mongoose from 'mongoose'
import { Router } from 'express'
import Restaurant from '../model/restaurant'


export default ({ config, db }) => {
    let api = Router()

    // 'v1/restaurant/add --create

    api.post('/add', async (req, res) => {
        try {
            const { name, user } = req.body
            const newRest = await Restaurant.create(req.body)


            return res.status(201).json({
                success: true,
                data: newRest,
                message: "restaurant saved successfully"
            })

        } catch (err) {
            if (err.name === 'ValidationError') {
                const msg = Object.values(err.errors).map(val => val.message)
                return res.status(400).json({
                    success: false,
                    error: msg
                })
            }else{
                return res.status(500).json({
                    success: false,
                    error: 'Server Error'
                })
            }
        }
    })

    //  'v1/restaurant/ --Read
    api.get('/', async (req, res) => {
        await Restaurant.find({}, (err, restaurants) => {
            if (err) {
                res.send(err)
            }
            res.json({
                success: true,
                count: restaurants.length,
                data: restaurants
            })
        })
    })

    //'v1/restaurant/:id --Read 1
    api.get('/:id', async (req, res) => {
        await Restaurant.findById(req.params.id, (err, restaurant) => {
            if (err) {
                res.send(err)
            }
            res.json({
                success: true,
                count: restaurant.length,
                data: restaurant
            })
        })
    })

    //'v1/restaurant/:id --update 
    api.put('/:id', async (req, res) => {
        await Restaurant.findById(req.params.id, (err, restaurant) => {
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
        await Restaurant.deleteOne({
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