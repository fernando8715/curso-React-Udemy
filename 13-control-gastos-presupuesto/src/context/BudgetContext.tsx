 import { useReducer, createContext, ReactNode, useMemo, Dispatch } from "react";
 import { BudgetAction, BudgetState, budgetReducer, initialState } from "../reducers/budget-reducer";

 type BudgetContextProps = {
    state : BudgetState
    dispatch: Dispatch<BudgetAction>
    totalExpenses: number
    avaliableBudget: number
 }

 type BudgetProviderProps = {
    children : ReactNode
 }

 export const BudgetContext = createContext<BudgetContextProps>(null!);
 
 export const BudgetProvider = ({children} : BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState);
    const totalExpenses = useMemo(()=> state.expenses.reduce((total, expense)=> total + expense.amount, 0), [state.expenses]);
    const avaliableBudget = state.budget - totalExpenses;


   return (
     <BudgetContext.Provider value={{
        state,
        dispatch,
        totalExpenses,
        avaliableBudget,
     }}>
        {children}
     </BudgetContext.Provider>
   )
 }
 