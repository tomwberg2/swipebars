import express from "express";

const app = express();

let PORT = 3001;

app.listen(PORT, () => 
  console.log(`Listening at port http://localhost:${PORT}`)
)

app.get('/whatever', (req,res) => {
  // Koppla upp mot vår databas
  res.send("woowowowowow")
})




// GOogle firbe
// Localhost API