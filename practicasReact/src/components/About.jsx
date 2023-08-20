const usuario = {
    name: 'Fernando Ruiz',
    imag: './captura.PNG'
}

export const About = () => {
  return (
    <div>
        <img style={{margin: '0 auto'}} src={usuario.imag} alt={usuario.name} />
        <h2 className="text-center title">{usuario.name}</h2>
    </div>

  )
}
    