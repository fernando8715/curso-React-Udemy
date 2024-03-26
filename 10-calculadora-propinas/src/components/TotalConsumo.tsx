import { OrdenItem } from "../types";
import {formatoDinero} from '../helpers/formatData';
import { useMemo } from "react";

type TotalProp = {
    orden: OrdenItem[],
    selectPropina: number
}

export default function TotalConsumo({orden, selectPropina} : TotalProp) {

    const subtotal = useMemo(()=>orden.reduce((total, producto) => total + producto.amount * producto.price, 0), [orden])   
    let propina : number = (subtotal * selectPropina)/100

    return (
        <div className='flex flex-col  py-4 gap-2'>
            <h3 className='text-2xl font-semibold mb-2'>Totales y Propina</h3>
            <p>Subtotal a pagar: <span className='font-semibold'>{formatoDinero(subtotal)}</span></p>
            <p>Propina: <span className="font-semibold">{formatoDinero(propina)}</span></p>
            <p className="text-lg font-semibold">Total a Pagar: <span>{formatoDinero(subtotal+propina)}</span></p>
        </div>
    )
}
