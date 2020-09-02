const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
  }
  
  const password = process.argv[2]
  
  const url =
    `mongodb+srv://fullstack:${password}@cluster0.4ikcq.mongodb.net/person?retryWrites=true&w=majority`
  
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  
  const personSchema = new mongoose.Schema({
    person: String,
    number: Number,
  })
  
  const Person = mongoose.model('Person', personSchema)
  
  const person = new Person({
    person: process.argv[3],
    number: process.argv[4],
  })
  
  person.save().then(result => {
    console.log('Person saved'),
    mongoose.connection.close()
  })