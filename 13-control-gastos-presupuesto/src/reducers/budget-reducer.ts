import { v4 as uuid } from 'uuid';
import { Category, DraftExpense, Expense } from "../types"

export type BudgetAction =
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'display-modal' } |
    { type: 'close-modal' } |
    { type: 'add-expense', payload: { expense: DraftExpense } } |
    { type: 'get-expense-by-id', payload: { id: Expense['id'] } } |
    { type: 'delete-expense', payload: { id: Expense['id'] } } |
    { type: 'update-expense', payload: { expense: Expense } } |
    { type: 'reset-budget' } |
    { type: 'filter-category', payload: {id: Category['id']}}

export type BudgetState = {
    budget: number
    modal: boolean
    expenses: Expense[],
    editingById: Expense['id'],
    currentCategory: Category['id'],
}

const initialBudget = () : number=>{
    const localStorageBudget = localStorage.getItem('budget');
    return localStorageBudget ? +localStorageBudget : 0
}

const initialExpenses = () : Expense[] => {
    const localStorageExpenses = localStorage.getItem('expenses')
    return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
}

export const initialState: BudgetState = {
    budget: initialBudget(),
    modal: false,
    expenses: initialExpenses(),
    editingById: '',
    currentCategory: '',
}

const createExpense = (drafExpense: DraftExpense): Expense => {
    return {
        ...drafExpense,
        id: uuid()
    }
}

export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetAction
) => {
    if (action.type === 'add-budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if (action.type === 'display-modal') {
        return {
            ...state,
            modal: true
        }
    }

    if (action.type === 'close-modal') {
        return {
            ...state,
            modal: false,
            editingById: '',
        }
    }

    if (action.type === 'add-expense') {
        const expense = createExpense(action.payload.expense);

        return {
            ...state,
            expenses: [...state.expenses, expense],
            modal: false,
        }
    }

    if (action.type === 'delete-expense') {

        return {
            ...state,
            expenses: state.expenses.filter(expense => expense.id !== action.payload.id)
        }
    }

    if (action.type === 'get-expense-by-id') {
        return {
            ...state,
            modal: true,
            editingById: action.payload.id
        }
    }

    if (action.type === 'update-expense') {

        return {
            ...state,
            expenses: state.expenses.map(expense => (expense.id === action.payload.expense.id) ? action.payload.expense : expense),
            modal: false,
            editingById: ''
        }
    }

    if (action.type === 'reset-budget') {
        return {
            ...state,
            budget: 0,
            expenses: [],
        }
    }

    if(action.type === 'filter-category'){
        return {
            ...state,
            currentCategory: action.payload.id
        }
    }


    return state
}