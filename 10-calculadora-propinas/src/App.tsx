import type { MenuItem, OrdenItem } from './types'
import { menuItems } from './data/db'
import Item from "./components/Item"
import useOrden from "./hooks/useOrden"
import Orden from './components/Orden';
import Propina from './components/Propina';
import TotalConsumo from './components/TotalConsumo';



function App() {

  // Agregar funcionalidad al boton de guardar orden

  const { orden, selectPropina, handleAddItem, handlePropina, handleCantidad, removeItem, saveOrden } = useOrden();

  return (
    <>
      <header className="font-bold text-4xl bg-green-500">
        <h1 className='text-center py-4'>Calculadora de propinas y consumo</h1>
      </header>

      <main className="md:flex gap-10 p-4 md:p-10">
        <div className="mb-5 md:w-6/12 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4">Menu</h2>
          <div className="flex flex-col gap-4">
            {menuItems.map((item: MenuItem) => (
              <Item key={item.id} item={item} addItem={() => handleAddItem(item)} />
            ))}
          </div>
        </div> {/*Menu*/}

        <div className='mt-10 md:mt-0 md:w-6/12'>
          <h2 className="text-3xl font-semibold text-center mb-4">Consumo</h2>
          {orden.length === 0 ? (
            <>
              <p className='text-lg mb-6 text-center'> Selecciona algun elemento del menu </p>
              <TotalConsumo orden={orden} selectPropina={selectPropina} />
            </>)
            : (<>
              <div className='border-2 rounded-lg'>
                {orden.map((item: OrdenItem) => (
                  <Orden key={item.id} item={item} handleCantidad={handleCantidad} removeItem={removeItem} />
                ))}
                <div className='bg-slate-50 px-4'>
                <Propina handlePropina={handlePropina} />
                <TotalConsumo orden={orden} selectPropina={selectPropina} />
                </div>
              </div>

              <button
                className='py-2 px-4 mt-3 bg-slate-500 hover:bg-slate-700 w-full text-lg text-white font-semibold rounded-md mb-5 md:mb-0'
                onClick={saveOrden}
              >
                Guardar Orden
              </button>

            </>)}

        </div> {/*Consumo */}
      </main>
    </>
  )
}

export default App
