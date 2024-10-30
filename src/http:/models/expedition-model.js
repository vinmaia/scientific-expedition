import { Schema, model } from "mongoose";

const expeditionSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    validate: {
      validator(v) {
        return /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-((19|20)\d\d)$/.test(
          v
        );
      },
    },
  },
  participants: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Explorer",
  },
  speciesFound: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Species",
  },
});

const Expedition = model("Expedition", expeditionSchema);

export default Expedition;
