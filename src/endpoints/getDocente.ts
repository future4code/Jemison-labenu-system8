import { docente } from './../types'; //Verificar o import do caminho correto
import {Request, Response} from "express"
import connection from '../connection';


export default async function getTurma (req: Request, res: Response):Promise<void> {
    try {
        const {name} = req.query   

        const characters: docente[] = await connection ("DOCENTE")
    
        res.send(characters)
    } catch (error) {
        res.status(500).end()
    }
}