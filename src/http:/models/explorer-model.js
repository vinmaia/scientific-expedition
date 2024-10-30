import { Schema, model } from "mongoose";

const explorerSchema = new Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  fieldOfStudy: {
    type: String,
    required: true,
    trim: true,
  },
  expeditionsParticipated: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Explorer = model("Explorer", explorerSchema);

export default Explorer;
