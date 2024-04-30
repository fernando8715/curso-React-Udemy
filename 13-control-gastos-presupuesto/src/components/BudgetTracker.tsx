import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useBudget from "../hooks/useBudget";
import { AmountDisplay } from "./AmountDisplay";


export const BudgetTracker = () => {
    const { state, dispatch, totalExpenses, avaliableBudget } = useBudget();

    const handleResetBudget = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch({ type: 'reset-budget' })
    }
    const percentage = Number(((totalExpenses*100) / state.budget).toFixed(1));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex justify-center">
                <CircularProgressbar 
                    value={percentage} 
                    text={`${percentage}%`} 
                    styles={buildStyles({
                        pathColor: `${percentage === 100 ? '#e81418e6' : '#3b82f6'}`,
                        trailColor: '#f5f5f5',
                        textColor: `${percentage === 100 ? '#e81418e6' : '#3b82f6'}`
                    })}
                    />;
            </div>
            <div className="flex flex-col justify-evenly items-center md:items-start">
                <button
                    onClick={handleResetBudget}
                    type="button"
                    className="bg-pink-600 hover:bg-pink-700 w-full p-2 text-white font-semibold uppercase rounded-lg"
                >Resetear Presupuesto</button>
                <div className="space-y-7">
                    <AmountDisplay
                        label="Presupuesto"
                        amount={state.budget}
                    />
                    <AmountDisplay
                        label='Gastos'
                        amount={totalExpenses}
                    />
                    <AmountDisplay
                        label='Disponible'
                        amount={avaliableBudget}
                    />
                </div>
            </div>
        </div>
    )
}
