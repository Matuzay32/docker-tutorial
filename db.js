import mongoose from "mongoose";

main().catch((err) => console.log(err));

export default async function main() {
	const db = await mongoose.connect(
		//eze seria el user name

		//moguito seria el nombre del contenedor de mongo
		//miapp seria el nombre la db que se va crear o a la cual se va conectar
		//luego seria el authSource admin

		"mongodb://eze:password@monguito:27017/miapp?authSource=admin"
	);
	await console.log(db.connection.host.toUpperCase(), "DB CONECTED");
}
