import { useMemo } from "react";
import useBudget from "../hooks/useBudget"
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseList = () => {

    const { state } = useBudget();

    const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);

    const filterbyCategory = (state.currentCategory) ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses;

    return (
        <>
            {
                isEmpty ? <p className="text-center font-semibold text-xl ">No hay gastos registrados</p>
                    : (
                        <>
                            <p className="text-center font-semibold text-xl pb-3">Listado de gastos</p>
                            <div className="flex flex-col space-y-1">
                                {filterbyCategory.map(expense => (
                                    <ExpenseItem key={expense.id} expense={expense} />
                                ))}
                            </div>
                        </>

                    )

            }
        </>

    )
}
