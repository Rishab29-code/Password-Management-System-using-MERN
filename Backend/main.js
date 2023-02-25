const app = require('./app.js')


PORT = 3000


app.listen(PORT, (req, res) => {
    console.log("RUNNING ON PORT: ", PORT);
})