import { Request, Response } from "express";
import connection from "../database/connection";

export default async function createEstudante(req: Request, res: Response):Promise<void> {
    try {
        const {nome, email, data_nasc, turma_id, hobbies} = req.body

        await connection("ESTUDANTE")
            .insert({nome, email, data_nasc, turma_id, hobbies})

        res.status(201).end()
    } catch (error) {
        res.status(500).send("Server error")
    }
}