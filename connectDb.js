const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ptum7.mongodb.net/twitter?retryWrites=true&w=majority`;

    const connection = await mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

    console.log(`Connected to database ${connection.connections[0].name}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDb;
