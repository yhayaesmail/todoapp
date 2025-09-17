import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "../prismaclient.js";

const router = express.Router();

router.get('/', async(req,res)=>{
    const todos = await prisma.todo.findMany({
        where :{
            userId : req.userId
        }
    });
    res.json(todos);
});


router.post('/',async (req,res)=>{
    const { task }= req.body;
    const addedtodo = await prisma.todo.create({
        data:{
            task,
            userId:req.userId
        }
    });
    res.json(addedtodo)
})

router.put('/:id',async(req,res)=>{
    const {completed} =req.body;
    const {id} = req.params;
    const updatedtodo = await prisma.todo.updateMany({
        where:{
            userId : req.userId,
            id :parseInt(id)
        },
        data:{
            completed :!!completed
        }
    });
    res.json(updatedtodo);
});


router.delete('/:id',async(req,res)=>{
    const {id} = req.params;
    await prisma.todo.deleteMany({
        where:{
            id : parseInt(id),
            userId: req.userId
        }
    });
    res.json({message :" deleted"})
})

export default router;