const tuts = (mongoose) => {
  const tutorialSchema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
    },
    {
      timeStamps: true,
    },
  );

  tutorialSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model('tutorial', tutorialSchema);

  return Tutorial;
};

module.exports = tuts;
