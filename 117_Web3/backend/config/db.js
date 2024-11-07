const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.set('strictQuery', true);
    mongoose
      .connect(process.env.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log(""))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
