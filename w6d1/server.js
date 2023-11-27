const express = require("express")
const app = express()
const mongoose = require("mongoose")

const PORT = 5000;
const router = express.Router()

app.use(express.json())


connectDataBase().catch((e) => console.log(e))
async function connectDataBase() {
    await mongoose.connect("mongodb+srv://<username>:<password>@todos.2gefvei.mongodb.net/")
}


const TodoSchema = new mongoose.Schema({
    text: {
        type: "string"
    },
    status: {
        type: Boolean
    }
})

const TodoModal = mongoose.model("todo", TodoSchema)

router.get('/', async (req, res) => {
    const TodoList = await TodoModal.find()
    res.json(TodoList)
})

router.post('/todo', async (req, res) => {
    const { text, status } = req.body
    const newTask = await TodoModal({
        text: text, status: status
    })
    newTask.save()
    res.json(newTask)
})

router.get('/todo', async (req, res) => {
    const status1 = await TodoModal.find({status : true})
    res.json(status1)
})


router.all('/', (req, res) => {
    res.json({
        message: "we are Live on server"
    })
})


app.use(router)


app.listen(PORT, () => {
    console.log(`Server Started at port : ${5000}`)
})