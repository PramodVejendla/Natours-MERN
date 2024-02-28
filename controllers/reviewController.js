const Review = require('../models/reviewModel');
// const catchAsync = require('../utils/catchAsync');
const handleFactory = require('./handleFactory');

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createReview = handleFactory.createOne(Review);
exports.getReview = handleFactory.getOne(Review);
exports.getAllReviews = handleFactory.getAll(Review);
exports.deleteReview = handleFactory.deleteOne(Review);
exports.updateReview = handleFactory.updateOne(Review);
