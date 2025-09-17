import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "../prismaclient.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedpass = bcrypt.hashSync(password, 8);
  try {
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedpass,
        email,
      },
    });
    const defulttodo = `add your first task`;
    await prisma.todo.create({
      data: {
        task: defulttodo,
        userId: user.id,
      },
    });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.json({ token });
  } catch (err) {
    console.log(err.message);
res.status(503).send({ message: "Server error" });

  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
        where:{
            username : username
        }
    })
      if (!user) {
    return res.status(401).send({ message: `no user found` });}
   const passwordvalid =   await bcrypt.compare(password,user.password);
   if(!passwordvalid){return res.status(401).send({ message: `invalid password` });}
   const token = jwt.sign({id : user.id }, process.env.JWT_SECRET,{expiresIn : '24h'});
   res.json({token})
  } catch (err) {
        console.log(err.message);
res.status(503).send({ message: "Server error" });

  }
});

export default router;