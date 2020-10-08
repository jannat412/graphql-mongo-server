import Mongoose from "mongoose";

export const PersonModel = Mongoose.model("person", {
    name: String,
    area: String,
    gender: String,
    image: String
});

