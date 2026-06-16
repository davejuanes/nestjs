[GET] http://localhost:3000/

Hello World

[GET] http://localhost:3000/users > Return all users (200)

Response: Juan Maria Pedro Luis Ana Jose Maria Pedro Luis Ana

[GET] http://localhost:3000/users/:id > Return a user by id (200)

Response: Juan Maria Pedro Luis Ana Jose Maria Pedro Luis Ana

[POST] http://localhost:3000/users > Create a new user (201)

Body: { "name": "Juan", "email": "juan@gmail.com" }

[PUT] http://localhost:3000/users/:id > Update a user (200)

Body: { "name": "Juan", "email": "" }

[DELETE] http://localhost:3000/users/:id > Return status { success: true } or { error: "User not found" } (200)
