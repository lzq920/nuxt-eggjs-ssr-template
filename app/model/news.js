module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const NewsSchema = Schema({
    title: { type: String },
    content: { type: String }
  });
  return mongoose.model("News", NewsSchema);
};
