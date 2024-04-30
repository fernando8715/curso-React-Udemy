import { useMemo, useState } from "react";
import useBudget from "../hooks/useBudget";

const BudgetForm = () => {

  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault(),
    dispatch({type: 'add-budget', payload: {budget}})
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <fieldset className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-2xl text-center font-bold text-blue-600"
        >
          Define tu presupuesto
        </label>
        <input
          id="budget"
          type="number"
          min={0}
          placeholder="define un presupuesto"
          className="w-full border-gray-300 rounded-md text-xl py-3 px-5 border"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
      </fieldset>
      <input
        type="submit"
        value='Definir presupuesto'
        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl text-center p-2 rounded-md disabled:opacity-40"
        disabled={isValid}
      />
    </form>
  )
}

export default BudgetForm