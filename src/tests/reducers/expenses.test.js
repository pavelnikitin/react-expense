import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
});

test('should remove expense by id', () => {
   const action = {
       type: 'REMOVE_EXPENSE',
       id: expenses[1].id
   };

   const state = expensesReducer(expenses, action);
   expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expenses if id not found', () => {
   const action = {
       type: 'REMOVE_EXPENSE',
       id: '-1'
   };

   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses);
});

test('should add an expense', () => {
   const expense = expenses[0];
   const action = {
       type: 'ADD_EXPENSE',
       expense
   };

   const state = expensesReducer(expenses, action);
   expect(state).toEqual([expenses[0], expenses[1], expenses[2], expenses[0]]);
});


test('should edit an expense', () => {
   const action = {
       type: 'EDIT_EXPENSE',
       id: '1',
       updates: {
           description: 'water',
           amount: 35
       }
   };

   const state = expensesReducer(expenses, action);
   expect(state).toEqual([{ id: '1',
   description: 'water',
   note: '',
   amount: 35,
   createdAt: 0}, expenses[1], expenses[2]]);
});

test('should not edit expense if expense not found', () => {
   const action = {
       type: 'EDIT_EXPENSE',
       id: '8',
       updates: {
           description: 'water',
           amount: 35
       }
   };

   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses);
});



