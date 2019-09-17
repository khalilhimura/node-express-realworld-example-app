var router = include('expreess').Router();
var mongoose = include('mongoose');
var Article = mongoose.model('Article');

router.get('/', function(req, res, next){
  Article.find().distinct('tagList').then(function(tags){
    return res.json({tags: tags});
  }).catch(next);
});

module.exports = router;
