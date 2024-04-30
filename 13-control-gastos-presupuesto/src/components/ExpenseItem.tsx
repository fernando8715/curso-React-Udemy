import { useMemo } from "react";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import { formatData, formatDate } from "../helpers";
import { Expense } from "../types";
import { categories } from "../data/categories";
import 'react-swipeable-list/dist/styles.css';
import useBudget from "../hooks/useBudget";


type ExpenseProp = {
    expense: Expense
}

export const ExpenseItem = ({ expense }: ExpenseProp) => {

    const categoryInfo = useMemo(() => categories.find(categoria => categoria.id === expense.category), [expense]);
    const {dispatch} = useBudget();

    const leadingActions = () => {

        return (
    
            <LeadingActions>
                <SwipeAction onClick={() => dispatch({type: 'get-expense-by-id', payload: {id: expense.id}})}>
                    Editar
                </SwipeAction>
            </LeadingActions>
        )
    };
    
    const trailingActions = () => {
    
        return (
    
            <TrailingActions>
                <SwipeAction
                    destructive={true}
                    onClick={() => dispatch({type: 'delete-expense', payload: {id: expense.id}})}
                >
                    Eliminar
                </SwipeAction>
            </TrailingActions>
        )
    };  

    return (

        <SwipeableList>
            <SwipeableListItem
                maxSwipe={1}
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="flex gap-4 p-6 border-2 border-gray-200 bg-white shadow-xl rounded-lg items-center cursor-pointer w-full">
                    <img src={`/icono_${categoryInfo?.icon}.svg`} className="w-20" alt={`icono de ${categoryInfo?.name}`} />
                    <div className="flex-1 space-y-1">
                        <p className="text-slate-600 text-sm font-semibold">{categoryInfo?.name}</p>
                        <p className="font-bold text-xl first-letter:uppercase">{expense.name}</p>
                        <p>{formatDate(expense.date!.toString())}</p>
                    </div>
                    <p className="font-bold text-lg">{formatData(expense.amount)}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
