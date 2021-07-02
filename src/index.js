const express =  require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits:{   
//         fileSize: 50000000
//     },
//     fileFilter(req,file,cb){
//         if(!(file.originalname.match(/\.(doc|docx)$/) || (file.originalname.endsWith('.pdf')) || (file.originalname.match(/\.(jpg|jpeg|png)$/)))){
//             return cb(new Error('Please upload a word document or pdf'))
//         }
//         cb(undefined,true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message })
// })