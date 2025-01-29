## Functionalities

### **POST - Create a User**
```json
{
  "name": "Javidan Akbarov",
  "email": "johndoe@example.com",
  "password": "password123"
}

http://localhost:5000
GET all users: GET http://localhost:5000/users
Create a user: POST http://localhost:5000/users
Update a user: PUT http://localhost:5000/users/:id
Delete a user: DELETE http://localhost:5000/users/:id

MongoDB Admin Connection

docker exec -it mongo_db mongosh -u root -p rootpassword --authenticationDatabase admin

Then, inside the MongoDB shell, run:
use cloudDB
show collections
db.users.find().pretty()
