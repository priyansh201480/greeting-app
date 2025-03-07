const express = require("express")
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());  

app.get('/api/greet', (req, res) => {
  const name = req.query.name;
  if (!name){
    return res.status(400).json({ error: "Name is Required." });
  }
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.`})

});

const PORT = process.env.PORT || 5000; 


app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
});
