import { Estudante } from "../class/Estudante";
import {Request, Response} from "express"
import connection from "../database/connection";


export default async function getTurma (req: Request, res: Response):Promise<void> {
    try {
        const {name} = req.query   

        const characters: Estudante[] = await connection ("ESTUDANTE")
    
        res.send(characters)
    } catch (error) {
        res.status(500).end()
    }
}