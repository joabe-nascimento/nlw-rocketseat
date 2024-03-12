import fastify from "fastify"

const app = fastify()

//GET, POST, PUT, DELETE
app.post('/polls', (request) => {
    console.log(request.body)

    return 'Hello Joabe'
})



app.listen({port: 3333}).then(() => {
    console.log("HTTP server running")
})