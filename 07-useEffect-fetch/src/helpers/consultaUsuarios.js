
export const consultaUsuarios = async(setUsuarios)=> {
    const url = 'https://reqres.in/api/users?page=2';

    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    setUsuarios(data);
}