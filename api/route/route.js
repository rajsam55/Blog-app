const express = require("express")

const blogRouter = require("express.Router")


const { fetchBlogList, deleteABlog, upDateABlog, addNewBlog }  = require("../conntroller/blog-controller")

app.get("/", fetchBlogList)
app.post("/add", addNewBlog)
app.delete("/api/delete/:id", deleteABlog)
app.update("api/update/:id",upDateABlog)

module.exports = blogRouter