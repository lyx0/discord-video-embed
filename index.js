const express = require('express')
const app = express()

app.get('/', function (req, res) {
    // res.send("tagId is set to " + req.url); 
  // res.send('Hello World')
    res.send(`
    <html>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Discord Video Embedder</title>
        <meta charset="UTF-8" />
        <meta name="description" content="" />
    </head>
    <body style="background-color:#181a1b;">
    <h1 style="color:#d84cf">Discord Video Embedder</h1>
    <p style="color:#d8d4cf">Simply paste the link to a discord video at the end of this url(after the /, if there is none add one) to watch it in the browser instead of downloading it by default.</p>
    <p style="color:#d8d4cf">Like this: <a href="https://dc.noury.ee/https://cdn.discordapp.com/attachments/381520882608373761/989666371178754068/denkcats_1639474686233272.mp4">https://dc.noury.ee/https://cdn.discordapp.com/attachments/381520882608373761/989666371178754068/denkcats_1639474686233272.mp4</a></p>
    <p style="color:#d8d4cf"><sup>this is beautiful web design shut up</sup></p>
    </body>
    </html>
    `)
})

app.get('/*', function (req, res) {
    var url = req.params[0];
    // res.send("tagId is set to " + req.params[0]); 
  
    res.send(`
    <html>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Discord Video Embedder</title>
        <meta charset="UTF-8" />
        <meta name="description" content="" />
    </head>
    <body>
    <video
        controls
        autoplay
        width="500px"
        src="${url}"
    >
    </body>
    </html>
    `)
})
app.listen(3000)