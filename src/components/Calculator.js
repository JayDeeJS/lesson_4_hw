import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Calculator = () => {

    const [inputOne, setInputOne] = useState('')
    const [inputTwo, setInputTwo] = useState('')
    
    const dispatch = useDispatch()
    const {result} = useSelector(state => state)

    const handleCalculate = (type) => {
        if (inputOne === '' || inputTwo === '') {
            dispatch({
                type: 'CHECK_INPUTS'
            })
        } else {
            dispatch({
                type: type,
                payload: {
                    numOne: Number(inputOne),
                    numTwo: Number(inputTwo)
                }
            })
            setInputOne('')
            setInputTwo('')
        }
    }

    return (
        <div className="calcContent">
            <div className="calcInput width">
                <input
                  value={inputOne}
                  onChange={(e) => setInputOne(e.target.value)}
                  type="number"
                  placeholder="Введите #1"
                />
                <input
                  value={inputTwo}
                  onChange={(e) => setInputTwo(e.target.value)}
                  type="number"
                  placeholder="Введите #2"
                />
            </div>
            <div className="calcControls width">
                <button onClick={ () => handleCalculate('ADD_NUMS') }>+</button>
                <button onClick={ () => handleCalculate('SUBTRACT_NUMS') } >-</button>
                <button onClick={ () => handleCalculate('MULTIPLY_NUMS') } >*</button>
                <button onClick={ () => handleCalculate('DIVIDE_NUMS') } >/</button>
            </div>
            <div className="width">
                <p className="output">{result}</p>
            </div>
        </div>
    )
};

export default Calculator;