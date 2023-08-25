import { useEffect, useState } from "react"
import { consultaUsuarios } from "../helpers/consultaUsuarios";


export const ListaUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
        
    useEffect( ()=> {

        setTimeout(() => {
            consultaUsuarios(setUsuarios);
            setLoading(false);
        }, 2000);
    }, []);

    if(loading) {
        return (
            <>
                <h2>Cargando datos</h2>
            </>
        )
    } else {
        return (
          <>
              <h1>ListaUsuarios</h1>
              <ol>
                  {usuarios.map( ({id, first_name, last_name, avatar, email}) => (
                      <li key={id}>
                        <p>
                            <img src={avatar} alt={first_name} />
                            &nbsp;
                            {first_name} {last_name}
                        </p>
                        <p>{email}</p>
                      </li>
                  ))}
              </ol>
          </>
        )
    }

}
