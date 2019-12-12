import express from 'express'
import uuidv4 from 'uuid/v4'
import _ from 'underscore'
import Joi from '@hapi/joi'
import validator_joi from 'express-joi-validation'

const validator = validator_joi.createValidator({})
const querySchema = Joi.object({
    login: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    age: Joi.number().min(4).max(130).required()
})
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 3000

let users = []

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
})

app.get('/users/:userId', (req, res) => {
    const userIndex = getUserPosition(req.params.userId)
    if(userIndex == -1){
        return res.send('Cant find user\n'+req.body)
    }
    else{
        return res.send(Object.values(users[userIndex]))
    }
})

app.get('/select', (req, res) => {
    return res.send(Object.values(getAutoSuggestUsers(req.query.login, req.query.count)));
})

app.post('/users', validator.body(querySchema), (req, res) => {
    const id = uuidv4()
    const user = {
        id,
        login: req.body.login,
        password: req.body.password,
        age: req.body.age,
        isDeleted: false
    }
    users.push(user);
    return res.send("User\n"+Object.values(user)+"\nwas added to the users list")
})

app.put('/users/:userId', validator.body(querySchema), (req, res) => {

    const userIndex = getUserPosition(req.params.userId)
    if(userIndex == -1){
        res.send('Cant find user\n'+req.body)
    }
    else{
        if(req.body.login)
            users[userIndex].login = req.body.login
        if(req.body.password)
            users[userIndex].password = req.body.password
        if(req.body.age)
            users[userIndex].age = req.body.age
        if(req.body.isDeleted)
            users[userIndex].isDeleted = req.body.isDeleted
        res.send(users[req.params.userId])
    }
})

app.delete('/users/:userId', (req, res) => {
    const userIndex = getUserPosition(req.params.userId)
    if(userIndex == -1){
        return res.send('Cant find user with Id - \n'+req.params.userId)
    }
    else{
        users[userIndex].isDeleted = true
        return res.send('PUT request at /users/${req.params.userId}')
    }
})

app.listen(port, () => console.log(`My task app listening on port ${port}!`))

function getAutoSuggestUsers(loginSubString, limit){
    return _.first(users.filter(entry => entry.login.includes(loginSubString)), limit)
}

function getUserPosition(id){
    return users.findIndex((element) => element.id == id)
}