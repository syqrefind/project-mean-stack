const mongoose = require("mongoose");

const resourceSchema = mongoose.Schema({    // schema - collections
  title: { type: String, required: true },  // title - documents
  data: { type: Array, required: true },   // data - array of contents of documents
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Resource", resourceSchema);