 Functionalities

POST:

{
  "name": "Javidan Akbarov",
  "email": "johndoe@example.com",
  "password": "password123"
}


API url

http://localhost:5000
http://localhost:5000/users

GET all users: GET http://localhost:5000/users
UPDATE a user: PUT http://localhost:5000/users/:id
DELETE a user: DELETE http://localhost:5000/users/:id



Connection to admin 
docker exec -it mongo_db mongosh -u root -p rootpassword --authenticationDatabase admin

use cloudDB

show collections
db.users.find().pretty()
