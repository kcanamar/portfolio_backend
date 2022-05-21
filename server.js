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
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show

///////////////////////////
// Server Listener
///////////////////////////