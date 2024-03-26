export const formatoDinero = (cantidad: number) => {
    return cantidad.toLocaleString('es-US', {
        style: 'currency',
        currency: 'USD'
    })
}
    
