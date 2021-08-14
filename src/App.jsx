import React,{useState} from 'react'
import words from 'lodash.words';
/*eslint no-eval:0*/
//Components
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import Numbers from './components/Numbers'

//CSS
import './App.css'

// Función Flecha o Arrow Function
const App = () => {
    
    //Array destructuring
    //1er posición: Valor
    //2da posición funcion que permite modificar "texto" o el estado
    const [stack,setStack] = useState("");

    const items = words(stack, /[^-^+^*^/]+/g)

    // Lo que ejecuta la función
    
    //Si es mayor que 0, haces lo que hay despues del "?"
    //si no, haces lo que hay despues del ":"
    const value = items.length > 0 ? items[items.length-1] : "0";
    console.log("Renderización de App",value);
    return (
    <main className='react-calculator'>
        <Result value={value} />

        <Numbers onClickNumber={number => setStack(`${stack}${number}`)}//Template literals
        />
        
        <Functions 
            onContentClear={() => setStack("")}
            onDelete={() => {
                if(stack.length > 0){
                    const newStack = stack.substring(0,stack.length - 1)
                    setStack(newStack);
                }
            }}
        />

        <MathOperations 
            onClickOperation={operation => setStack(`${stack}${operation}`)} 
            
            onClickEqual={equal => setStack(eval(stack).toString())}
        />
    </main>)
}

export default App


