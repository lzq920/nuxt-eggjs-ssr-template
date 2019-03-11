module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const NewsSchema = Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
  });
  return mongoose.model("News", NewsSchema);
};
