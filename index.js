const holaexpress = require ('express')

const app= holaexpress()

app.get('/',( request,Response) =>{
   Response.send("hello word express")
})

app.listen(3000,() => {
console.log('listening on port 3000')

})