import { Request, Response } from "express";
import connection from "../database/connection";

//Substituir o void por Turma
export default async function createTurma(req: Request, res: Response):Promise<void> {
    try {
        const {nome, docentes, estudantes, modulo} = req.body

        await connection("TURMA")
            .insert({nome, docentes, estudantes, modulo})

        res.status(201).end()
    } catch (error) {
        res.status(500).send("Server error")
    }
}