import { useState } from 'react';
import ChildComponet from './ChildComponent';
import Counter from './Counter';

const MyComponent = () =>{

    // const name = "Jose Antonio Torrez";
    // const edad = 20;

    const [name, setName] = useState("Jose Antonio Torrez");
    const [edad, setEdad] = useState(20);

    const changeData = () =>{
        setName("María Campos Salazar");
        setEdad(19);
    }

    return(
        <>
            <div>Soy Componente Padre</div>
            <div>Bienvenid@s</div>
            <ChildComponet name={name} edad={edad} />
            <button onClick={changeData}>Cambiar Nombre y edad</button>
            <Counter />
        </>
    )
}

export default MyComponent;