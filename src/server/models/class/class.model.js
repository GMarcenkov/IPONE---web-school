const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    quantity: {
      type: Number,
      required: true,
      trim: true,
      minlength: 3
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    students: {
      type: Array,
      required: true,
    },
    years: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    teacher: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
