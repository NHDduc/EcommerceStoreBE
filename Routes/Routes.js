const {Router} = require("express")
const {signUp,login} = require("../Controllers/AccountController")
const {saveProduct,getProduct} = require("../Controllers/ProductController")


const routes = Router()

// Routes Accounts
routes.post('/signup', signUp)
routes.post('/login',login)

// Routes Products
routes.post('/uploadProduct', saveProduct)
routes.get('/getProduct', getProduct)

module.exports = routes;