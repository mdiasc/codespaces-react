const express = require("express")
const cors = require("cors")
const routeObject = require("./Routes/objects")

const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))

app.use('/objects', routeObject)

const port = 3001

app.listen(port, () => {
    console.log(`Escutando a porta ${port} `)
})