const factoryController = require("./factoryController");
const catchAsync = require("../utils/catchAsync");
const Book = require("../models/bookModel");

const Review = require("../models/reviewModel");

exports.setBookUserBody = catchAsync(async (req, res, next) => {
  req.body.user = req.user._id;
  req.body.book = req.params.bookId;
  next();
});

exports.createReview = factoryController.createOne(Review);
exports.getAllReviews = factoryController.getAll(Review);
exports.getReview = factoryController.getOne(Review);
exports.updateReview = factoryController.updateOne(Review);
exports.deleteReview = factoryController.deleteOne(Review);
