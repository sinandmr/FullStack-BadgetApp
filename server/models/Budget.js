import mongoose from 'mongoose';
import moment from 'moment';
const budgetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A budget must be have a name'],
    unique: true,
    trim: true,
  },
  amount: { type: Number, required: [true, 'A budget must be have a amount'] },
  category: {
    type: String,
    enum: ['income', 'expense'],
  },
  createdAt: {
    type: String,
    default: moment(Date.now()).format('LLL'),
  },
});

export default mongoose.model('Budget', budgetSchema);
