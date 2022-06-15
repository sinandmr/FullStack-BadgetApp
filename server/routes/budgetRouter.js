import express from 'express';
import * as budgetController from '../controllers/budgetController.js';
const router = express.Router();

router
  .route('/')
  .post(budgetController.createBudget)
  .get(budgetController.getAll);

router.route('/:id').delete(budgetController.deleteBudget);

export default router;
