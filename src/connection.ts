import knex from "knex";
import dotenv from "dotenv"

dotenv.config()

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
        port: 3306,
        multiStatements: true
    }
})

export default connection 