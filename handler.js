const handler = (req, res) => {
    console.log(req.app); 
    res.send("I am from Handler.....!")
}

module.exports = handler;