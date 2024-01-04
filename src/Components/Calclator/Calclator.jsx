import React from 'react'
import "./Calclator.css"

const Calclator = () => {
  return (
    <div className='calculator'>
        <form action="eval">
            <div className="display">
                <input type="text" name="display" />
            </div>
            <div>
                <input type="button" value='AD' onclick="display.value= '' " />
                <input type="button" value='DE' onClick={'display.valu = display.valu.toString().slice(0,-1)'} />
                <input type="button" value='.' className='opa' />
                <input type="button" value='÷' className='opa' />
            </div>
            <div>  
                <input type="button" value='7' onclick="display.value += '7'" />
                <input type="button" value='8'onclick="display.value += '8'" />
                <input type="button" value='9' onclick="display.value += '9'" />
                <input type="button" value='×' onclick="display.value += '*'" className='opa' />
            </div>
            <div>
                <input type="button" value='4' onclick="display.value += '4'" />
                <input type="button" value='5'onclick="display.value += '5'" />
                <input type="button" value='6' onclick="display.value += '6'" />
                <input type="button" value='-' onclick="display.value += '-'" className='opa' />
            </div>
            <div>
                <input type="button" value='1' onclick="display.value += '1'" />
                <input type="button" value='2' onclick="display.value += '2'" />
                <input type="button" value='3' onclick="display.value += '3'" />
                <input type="button" value='+' onclick="display.value += '+'" className='opa' />
            </div>
            <div>
                <input type="button" value='00'onclick="display.value += '00'"/>
                <input type="button" value='0' onclick="display.value += '0'" />
                <input type="button" value='=' onclick="display.value = eval(display.value) " style={{color:'#33ffd9'}} className='eqal opa' />
            </div>
        </form>
    </div>
  )
}

export default Calclator