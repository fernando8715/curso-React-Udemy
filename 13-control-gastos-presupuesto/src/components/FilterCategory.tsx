import { categories } from '../data/categories';
import useBudget from '../hooks/useBudget';


const FilterCategory = () => {

    const {dispatch} = useBudget();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=> {
       dispatch({type: 'filter-category', payload: {id: e.target.value}})
    }

    return (
        <div className='py-5 px-2 space-y-2 md:flex items-center justify-around bg-white rounded-lg mb-7 shadow-lg'>
            <label className='font-bold text-xl pr-2' htmlFor='category'>Filtrar por categoria</label>
            <select
                id='category'
                className='p-2 rounded-lg w-full md:w-8/12 cursor-pointer bg-slate-200'
                onChange={ handleChange}
            >
                <option value={''}>Todas las categorias</option>
                {
                    categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default FilterCategory