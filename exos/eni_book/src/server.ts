import express, { Request, Response } from "express";
import { config } from "dotenv";
import * as sqlite from "sqlite3";

config();

const app = express();
const port = Number(process.env.PORT) || 3000;
const dbPath = process.env.DB_PATH || "";

const db = new sqlite.Database(dbPath);

app.get("/", (req: Request, res:Response) => {res.send("Hello World!\n")});

app.get("/employee", (req: Request, res:Response) => {
	db.all("SELECT * FROM Employee", [], (err, rows) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	})
});

app.listen(
	port,
//	'0.0.0.0', 
	() => console.log(`Example app listening on port ${port}!`)
);