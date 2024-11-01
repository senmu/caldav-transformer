require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const request = new Request(process.env.CAL_URL);

  (async () => {
     let response = await fetch(request)
     res.status(response.status)
     if(response.ok) {
     	for (const entry of response.headers.entries()) {
     		res.set(entry[0], entry[1])
     	}
        response = await response.text()
        
        // Replace all EST timezone identifiers with MST
        response = response.replace(/America\/New_York/g, "America/Edmonton")
        
        res.send(response)
     } else {
        console.error("Response received, but NOT OK")
     }
  })().catch(err => {
      console.error(err)
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})