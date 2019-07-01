const express = require('express')
require('./db/mongoose')
// const User = require('./models/user') 
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT 

// app.use((req, res, next ) => {
//   if(req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port , () => {
  console.log('Server is up on port ' + port)
})


const multer = require('multer')
const upload = multer({
  dest: 'images',
  limits: {
    fileSize: 1000000
  },
  fileFilter(req,file,cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error('Please upload a word document'))
    }
    // cb(new Error('File must be a PDF'))
    cb(undefined,true)
    // cb(undefined,false)
  }
})


// const errorMiddleWare = (req,res,next) => {
//   throw new Error('From my middleware')
// }


app.post('/upload', upload.single('upload'), (req,res)=>{
  res.send()
}, (error, req, res, next) => {
  res.status(400).send({error: error.message})
})
// const pet = {
//   name: 'hal'
// }

// pet.toJSON = function () {
//   {}
// }
// console.log(JSON.stringify(pet))



// const bcrypt = require('bcryptjs')

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123'}, 'thisismynewcourse', {expiresIn: '7 days'}) 
//   console.log(token)

//   const data = jwt.verify(token, 'thisismynewcourse')
//   console.log(data)
// }

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//   // const task = await Task.findById('5d1943694384f02530089663')
//   // await task.populate('owner').execPopulate()
//   // console.log(task.owner)

//   const user = await User.findById('5d19430d8ca12e3e3c5ee7dc')
//   await user.populate('tasks').execPopulate()
//   console.log(user.tasks)
// }

// main()

//  myFunction()