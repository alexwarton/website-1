import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { email, name } = JSON.parse(req.body);
    await prisma.user.create({
        data: {
            email: email,
            name: name
        }
    })
    res.status(200).send({message: "success" })
};
