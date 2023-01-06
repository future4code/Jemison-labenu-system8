import { Turma } from "../class/Turma";
import {Request, Response} from "express"
import connection from "../database/connection";


export default async function getTurma (req: Request, res: Response):Promise<void> {
    try {
        const {name} = req.query   

        const characters: Turma[] = await connection ("TURMA")
    
        res.send(characters)
    } catch (error) {
        res.status(500).end()
    }
}