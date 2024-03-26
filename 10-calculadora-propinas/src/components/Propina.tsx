
type PropinaProp = {
    handlePropina: (item: number) => void
}

const Propina = ({ handlePropina }: PropinaProp) => {
    const propina = [10, 20, 30];

    return (
        <div className='py-4 border-b-2'>
            <h3 className='text-2xl font-semibold mb-2'>Propina</h3>
            <fieldset>
                {propina.map(p => (
                    <div key={p}>
                        <label>{p}% </label>
                        <input type='radio' value={p} name='propina' onChange={(e) => handlePropina(+e.target.value)} />
                    </div>
                ))}
            </fieldset>
        </div>

    )
}

export default Propina