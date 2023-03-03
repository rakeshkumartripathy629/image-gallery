const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unqiue: true,
    },
    otp:{
        type: String,
        required:true
    },
    created_at:{
      type:Date,
      default:Date.now,
      expires:300
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Otp", OtpSchema);
