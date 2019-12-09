import express from 'express'
import uuidv4 from 'uuid/v4'
import { EDESTADDRREQ } from 'constants'
// const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 3000

let users = []

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
})

app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
})

app.post('/users', (req, res) => {
    const id = uuidv4();
    
    const user = {
        id,
        login: req.body.login,
        password: req.body.password,
        age: req.body.age,
        isDeleted: false
    }

    users[id] = user;
    return res.send(users)
})

app.put('/users/:userId', (req, res) => {

    try {
        if(users[req.params.userId] == undefined){
            res.send('Cant find user\n'+req.body)
        }
        else{
            users[req.params.userId].login = req.body.login
            users[req.params.userId].password = req.body.password
            users[req.params.userId].age = req.body.age
            res.send(users[req.params.userId])
        }
    } catch (err) {
        res.send('ERROR OCCURED\n'+err)
    }
})

app.delete('/users/:userId', (req, res) => {
    return res.send('PUT request at /users/${req.params.userId}')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))