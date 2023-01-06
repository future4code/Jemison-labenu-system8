import { Request, Response } from "express";
import connection from "../connection";

//Trocar void por Docente
export default async function createEstudante(req: Request, res: Response):Promise<void> {
    try {
        const {nome, email, data_nasc, turma_id, especialidades} = req.body

        await connection("DOCENTE")
            .insert({nome, email, data_nasc, turma_id, especialidades})

        res.status(201).end()
    } catch (error) {
        res.status(500).send("Server error")
    }
}