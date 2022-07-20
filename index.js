import express from "express";
import main from "./db.js";
const port = 3000;
const app = express();
import Animal from "./AnimalModel.js";

app.get("/", async (_req, res) => {
	console.log("listando... chanchitos...");
	const animales = await Animal.find({});
	return res.send(animales);
});
app.get("/crear", async (_req, res) => {
	console.log("creando...");
	await Animal.create({ tipo: "Chanchito", estado: "Feliz" });
	return res.send("ok");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
