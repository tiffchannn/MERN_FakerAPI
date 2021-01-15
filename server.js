const express = require('express');
const faker = require('faker');
const app = express();
const port = 8000;

class User {
  constructor() {
    this._id = faker.random.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
// console.log(new User());

class Company {
  constructor() {
    this._id = faker.random.number();
    this.name = faker.company.companyName();
    this.address = {
      "street": faker.address.streetAddress(),
      "city": faker.address.city(),
      "state":faker.address.stateAbbr(),
      "zipCode": faker.address.zipCode(),
      "country": faker.address.country()
    }
  }
}
// console.log(new Company());

app.use(express.json())

app.get("/api/users", (req, res) => {
  res.json({ message: "Hello! This is for Faker API!" });
});

//  Create an api route "/api/users/new" that returns a new user
app.get('/api/users/new', (req, res) => {
  // similar to render(request, "index.html")
  res.json({
    user: new User()
  })
  console.log("New User was generated")
})

//  Create an api route "/api/companies/new" that returns a new company
app.get('/api/companies/new', (req, res) => {
  res.json({
    company: new Company()
  })
  console.log("New Company was generated")
})

//  Create an api route "/api/user/company" that returns both a new user and a new company
app.get('/api/user/company', (req, res) => {
  res.json({
    user: new User(),
    company: new Company()
  })
  console.log("Generated a new User AND Company!")
})


//  Run your server.js file using nodemon
//  Using Postman, test your new GET routes





const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${port}!`)
);