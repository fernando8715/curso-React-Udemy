import { useEffect, useMemo } from "react";
import BudgetForm from "./components/BudgetForm"
import useBudget from "./hooks/useBudget"
import { BudgetTracker } from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import { ExpenseList } from "./components/ExpenseList";
import FilterCategory from "./components/FilterCategory";

function App() {

  const { state } = useBudget();
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString());
    localStorage.setItem('expenses', JSON.stringify(state.expenses));  
  }, [state]);
  

  return (
    <>
      <header className="bg-blue-600 py-5 max-h-72">
        <h1 className="text-white text-4xl font-bold text-center">Control de gastos</h1>
      </header>

      <div className="bg-gray-200 py-10">
        <div className="max-w-3xl mx-auto bg-white border rounded-lg shadow-lg p-10 ">
          {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
        </div>

        {isValidBudget && (
          <main className="max-w-3xl mx-auto mt-10">
            <FilterCategory />
            <ExpenseList />
            <ExpenseModal />
          </main>
        )}
      </div>
    </>
  )
}

export default App
