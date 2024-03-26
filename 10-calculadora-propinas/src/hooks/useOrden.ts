import { useState } from "react"
import { MenuItem, OrdenItem } from "../types"

function useOrden() {

    const [orden, setOrden] = useState<OrdenItem[]>([]);
    const [selectPropina, setSelectPropina] = useState(0);

    const handleAddItem = (item: MenuItem)=> {
      if(orden.some(prod => prod.id === item.id)){
        return
      }else {
        const updateItem = {...item, amount: 1};
        setOrden([...orden, updateItem])
      }
    } 

    const handlePropina = (value : number)=>{
      setSelectPropina(value)
    }

    const handleCantidad = (value: number, item : OrdenItem )=> {
      const upDateOrden = orden.map(prod =>{
        if(prod.id === item.id){
          prod.amount = value;
          return prod
        }else {
          return prod
        }
      })
      setOrden(upDateOrden);
    }

    const removeItem = (id: OrdenItem['id'])=> {
      const updateOrden = orden.filter(prod => prod.id !== id);
      setOrden(updateOrden)
    }

    const saveOrden = ()=> {
      setOrden([]);
      setSelectPropina(0);
    }

  return {
    orden,
    selectPropina,
    handleAddItem,
    handlePropina,
    handleCantidad,
    removeItem,
    saveOrden,
  }

}

export default useOrden
