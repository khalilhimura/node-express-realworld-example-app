var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: { type: mongoose.schema.Types.ObjectId, ref: 'User' },
  article: { type: mongoose.schema.Types.ObjectId, ref: 'Article' }
}, {timestamps: true});

// Requires population of author
CommentSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    body: this.body,
    createdAt: this.createAt,
    author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Comment', CommentSchema);
