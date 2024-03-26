import { MenuItem} from '../types'

type ItemProp = {
    item: MenuItem,
    addItem: (item:MenuItem) => void
}

const Item = ({ item, addItem }: ItemProp) => {

    return (
        <button
            className="flex justify-between items-center text-lg py-2 px-4 border-2 border-green-300 gap-3 rounded-lg"
            onClick={()=> addItem(item)}
        >
            <p className='text-start text-balance'>{item.name}</p>
            <p className='font-semibold'>${item.price}</p>
        </button >


    )
}

export default Item