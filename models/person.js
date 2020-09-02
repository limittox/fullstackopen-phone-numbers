const mongoose = require('mongoose')

const url =
  `mongodb+srv://fullstack:mithun12@cluster0.4ikcq.mongodb.net/person?retryWrites=true&w=majority`

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

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})