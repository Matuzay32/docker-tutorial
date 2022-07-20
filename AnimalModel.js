import mongoose from "mongoose";

const Animal = mongoose.model(
	"Animal",
	new mongoose.Schema({
		tipo: String,
		estado: String,
	})
);

export default Animal;
