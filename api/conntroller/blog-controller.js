const mongoose = require("mongoose")

const Blog = require("../model/Blog")


const  fetchBlogList = async(req,res)=>{


    let blogList
    

    try{

        blogList = await Blog.find()
        }
        catch (e){
            console.log(e)


        }

        if(!blogList){

            res.status(400).json({message : "no blog list found"})
        }
            res.send(200).json(blogList)

        


    }

    

    

const deleteABlog =  async (req,res)=>{

   const id = req.params.id

   

   try{

    const findCurrentBlog  = await Blog.findByIdAndDelete(id)
    if(!findCurrentBlog){
        return res.status(400).json({message :"Blog not found"})
    }
        return res.send(200).json({message : "successfully deleted"})

   }
   catch(e){

        console.log(e)
        res.send(404).json({message:"unable to delete please try again"})


   }


}

const addNewBlog = async(req,res)=>{
    const {title, description} = req.body
    const currentDate = new Date()

    const newlyCreatedBlog = new Blog ({
        title,description, date : currentDate
    })

    try{
        await newlyCreatedBlog.save()

    }
    catch(e) {
        console.log(e)

    }

    try{
        const session = mongoose.startSession()
        session.startTransaction()
        await newlyCreatedBlog.save(session)
        session.commitSession()
        
        


    }
    catch(e){

        console.log(e)

    }
    if(!newlyCreatedBlog){
       return res.status(404).json({message : "could not find a blog"})
    }

       return res.send(200).json(newlyCreatedBlog)

}

const upDateABlog = async(req,res)=>{

    const id = req.params.id
    const {title,description} = req.body

    try{

        const currentlyUpDatedBlog = await Blog.findByIdAndUpdate(id,{title,description})


    }
    catch(e){

        console.log(e)
        res.send(500).json({message : "something went wrong, please try again"})
    }
    if(!newlyUpDatedBlog){

       return res.status(400).json({message : "couldn't update the blog"})
    }
       return res.send(200).json(newlyUpDatedBlog)

    



}

module.exports = {fetchBlogList, addNewBlog,deleteABlog,upDateABlog}