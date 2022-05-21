////////////////////////
// Setup - Import deps and create app object
////////////////////////
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const projects = require("./projects.json")
const about = require("./about.json")
const app = express()
const PORT = process.env.PORT || 4200
//////////////////////
// Declare Middleware
//////////////////////
app.use(cors())
app.use(morgan("dev"))
///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show
app.get("/", (req, res) => {
    res.send("Welcome back....")
})
app.get("/projects", (req, res) => {
    res.json(projects)
})
app.get("/about", (req, res) => {
    res.json(about)
})
///////////////////////////
// Server Listener
///////////////////////////