const ChildComponent = (props) =>{
    return(
        <div>
            <h1>Soy el componente Hijo</h1>
            <h4>Mi nombre es: {props.name}</h4>
            <h4>Mi edad es: {props.edad}</h4>
        </div>
    )
}

export default ChildComponent;