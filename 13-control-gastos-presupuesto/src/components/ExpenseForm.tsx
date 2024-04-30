import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import type { DraftExpense, Value } from '../types';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { categories } from "../data/categories";
import useBudget from '../hooks/useBudget';
import { ErrorMessage } from './ErrorMessage';


export const ExpenseForm = () => {

    const [expense, setExpense] = useState<DraftExpense>({
        name: '',
        amount: 0,
        category: '',
        date: new Date()
    });

    const [error, setError] = useState('');
    const [previosAmount, setPreviousAmount] = useState(0)
    const { state, dispatch,avaliableBudget} = useBudget();


    useEffect(()=>{
        if(state.editingById){
            const editingExpense = state.expenses.filter(expense => expense.id === state.editingById)[0];
            setExpense(editingExpense);
            setPreviousAmount(editingExpense.amount);
        }
    }, [state.editingById])


    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        const isAmountField = ['amount'].includes(name);
        setExpense({
            ...expense,
            [name]: isAmountField ? +value : value
        })

    }

    const handleChangeDate = (value: Value) => {
        setExpense({
            ...expense,
            date: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //validar gasto
        if (Object.values(expense).includes('') || Object.values(expense).includes(0)) {
            setError('Todos los campos son obligatorios')
            return
        }
        
        //validar que no exceda presupuesto
        if ((expense.amount - previosAmount) > avaliableBudget) {
            setError('Este valor excede tu presupuesto')
            return
        }
        // resetear state
        setPreviousAmount(0);
        
        // agregando o editar gasto
        if(state.editingById){
            dispatch({ type: 'update-expense', payload: { expense: {id: state.editingById, ...expense} } });
        }else {
            dispatch({ type: 'add-expense', payload: { expense } });
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <legend className="text-2xl font-bold uppercase border-b-4 border-blue-600 text-center">{`${state.editingById ? 'Actualizar Gasto' : 'Nuevo Gasto'}`}</legend>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="pt-5 space-y-5 md:w-10/12 mx-auto">
                <div className="flex flex-col">
                    <label htmlFor="expenseName" className="text-lg font-semibold">Nombre del gasto:</label>
                    <input
                        id="name"
                        type="text"
                        name='name'
                        placeholder="Ingresa el nombre del gasto"
                        className="border rounded-lg bg-slate-300 p-1 px-4"
                        value={expense.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="amount" className="text-lg font-semibold">Valor:</label>
                    <input
                        id="amount"
                        type="number"
                        min={0}
                        name='amount'
                        placeholder="Ingresa la cantidad"
                        className="border rounded-lg bg-slate-300 p-1 px-4"
                        value={expense.amount}
                        onChange={handleChange}
                    />
                </div>


                <div className="flex flex-col">
                    <label htmlFor="category" className="text-lg font-semibold">Categoria:</label>
                    <select
                        id='category'
                        name='category'
                        className="border rounded-lg shadow-lg bg-slate-300 p-1 px-2"
                        value={expense.category}
                        onChange={handleChange}
                    >
                        <option value="">--Seleccione--</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-semibold">Fecha:</label>
                    <DatePicker
                        onChange={handleChangeDate}
                        value={expense.date}
                        dayPlaceholder="dd"
                        monthPlaceholder="mm"
                        yearPlaceholder="yyyy"
                        required={true}
                    />
                </div>

                <input type="submit" value={`${state.editingById ? 'Guardar Cambios' : 'Registrar gasto'}`} className="bg-blue-600 hover:bg-blue-700 cursor-pointer uppercase text-white w-full p-2 rounded-lg font-semibold" />
            </div>
        </form>
    )
}
