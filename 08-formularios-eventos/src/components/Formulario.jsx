import { useState } from "react";


export const Formulario = () => {

    const [formulario, setFormulario] = useState(null);

    const handleFormulario = (e)=> {
        e.preventDefault();
        const {nombre, apellido, genero, bibliografia} = e.target;
        const newUsuario = {
            nombre: nombre.value,
            apellido: apellido.value,
            genero: genero.value,
            bibliografia: bibliografia.value
        }
        setFormulario(newUsuario);
    }

    const cambiosusuario = (e)=> {
        let campo = e.target.name
        let dato = e.target.value;
        if(formulario){
            setFormulario( valorPrevio=> ({
                    ...valorPrevio,
                    [campo]:dato
                }
            ))
        }
    }

  return (
    <>
        { (formulario) && (
            <div>
                <p><strong>soy {formulario.nombre} {formulario.apellido}</strong></p>
                <p>Genero: {formulario.genero}</p>
                <p>Bibliofrafia: {formulario.bibliografia}</p>
            </div>
        )}
        <form onSubmit={handleFormulario} className="formulario">
            <label >Nombre</label>
            <input 
                type="text"
                name="nombre"
                placeholder="Ingresa tu nombre"
                onChange={cambiosusuario} />
            <label >Apellido</label>
            <input 
                type="text"
                name="apellido"
                placeholder="Ingresa tu Apellido"
                onChange={cambiosusuario} />
            <label>Genero</label>
            <select name="genero" className="formulario__genero" onChange={cambiosusuario}>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
            </select>
            <textarea 
                name="bibliografia" cols="30" rows="10" 
                placeholder="Bibliografía"
                onChange={cambiosusuario}>
            </textarea>
            <button className="formulario__btn" type="submit">Enviar</button>
        </form>
    </>
  )
}
