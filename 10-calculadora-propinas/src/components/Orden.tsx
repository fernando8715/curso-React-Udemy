import { formatoDinero } from '../helpers/formatData'
import type { OrdenItem } from '../types'

type OrdenProps = {
    item: OrdenItem,
    handleCantidad: (value: number, item: OrdenItem) => void,
    removeItem: (id: number)=> void,
}

const Orden = ({ item, handleCantidad, removeItem }: OrdenProps ) => {

    return (
        <div className='flex flex-col gap-2 border-b-2 py-3 px-4'>
            <div className='flex justify-between items-start gap-3 md:gap-0'>
                <p className='font-semibold text-lg'>{item.name}</p>
                <button onClick={()=>removeItem(item.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>{/*boton elimina item*/}
            </div>

            <fieldset className='flex'>
                <label className='pr-2' htmlFor={`${item.id}`}>Cantidad:</label>
                <select 
                    className='w-4/12 md:w-2/12 text-center bg-slate-200 rounded-md' 
                    id={`${item.id}`}
                    onChange={(e)=>{
                        handleCantidad(+e.target.value, item)
                    }}    
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </fieldset>

            <p>Precio: <span>{formatoDinero(item.amount * item.price)}</span></p>
        </div>
    )
}

export default Orden