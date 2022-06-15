import Budget from '../models/Budget.js';
import asyncHandler from '../utils/asyncHandler.js';
import AppError from '../utils/appError.js';

// Middlewares

const getAll = asyncHandler(async (req, res) => {
  const all = await Budget.find();

  res.status(200).json({
    status: 'success',
    results: all.length,
    data: {
      all,
    },
    AppError,
  });
});

const createBudget = asyncHandler(async (req, res) => {
  const newBudget = await Budget.create(req.body);
  res.status(201).json({
    status: 'success',
    data: newBudget,
  });
});

const deleteBudget = asyncHandler(async (req, res, next) => {
  const budget = await Budget.findByIdAndRemove(req.params.id);

  if (!budget) {
    return next(
      new AppError(`Can't find budget with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    status: 'success',
    message: 'Budget deleted',
  });
});

export { createBudget, getAll, deleteBudget };
