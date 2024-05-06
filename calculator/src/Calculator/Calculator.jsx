import { useState } from 'react';
import './Calculator.css';

const Calculator = ()=>{

    const array = [7,8,9,'+',4,5,6,'-',1,2,3,'*','C',0,'=','/']

    const [ number , setNumber ] = useState('');
    const [ result , setResult ] = useState('');

    const handleClick = (value) => {
        if(value === '='){
            const res = eval(number);
            setResult(res);           
        }
        else if(value === 'C'){
            setNumber('');
            setResult('');
        }else{
            setNumber(number + value);
        }
    }

    return <>
    <h1>React Calculator</h1>
    <input type="text" value={number} />
    <h3>{result}</h3>
    <div className='container'>
        {array.map((ele)=>{
            return( 
            <button 
            onClick={()=>handleClick(ele)} 
            key={ele}
            className="numbers">
                {ele}
            </button>)
        })}
    </div>
    </>
}

export default Calculator;