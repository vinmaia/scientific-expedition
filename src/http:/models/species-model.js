import { Schema, model } from "mongoose";
import { boolean } from "webidl-conversions";

const speciesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  discoveryLocation: {
    type: String,
    required: true,
  },
  rarity: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  documented: {
    type: object,
    properties: {
      isItDocumented: {
        type: boolean,
      },
    },
    required: [isItDocumented],
  },
});

const Species = model("Species", speciesSchema);

export default Species;
