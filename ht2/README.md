# Task 2.1
Create REST service with CRUD operations for User entity.

Start server:
```
npm start
```

View users
```
curl -X GET http://localhost:3000/users
```

Get User by Id
```
curl -X GET http://localhost:3000/users/2cee3328-baf4-42d3-81ab-d9a66ae1bc1f
```

Add new User
```
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"login":"userLogin","password":"password","age":"12"}'
```

Update User
```
curl -X PUT http://localhost:3000/users/2cee3328-baf4-42d3-81ab-d9a66ae1bc1f -H "Content-Type: application/json" -d '{"login":"userLogin","password":"password","age":"33"}'
```

Delete User
```
curl -X DELETE http://localhost:3000/users/2cee3328-baf4-42d3-81ab-d9a66ae1bc1f
```

Auto suggest users
```
localhost:3000/select?login=login&count=100
```

# Task 2.2
* All fields are required: login, password and age
* Login validation
* Password validation
* Age validation