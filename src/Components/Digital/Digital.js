import './Digital.css'
import { useState, useEffect } from 'react'
const Digital = ({ active, hour, minutes, second, setTime }) => {
    const [inputText, setInputText] = useState('')

    useEffect(() => {
        console.log(inputText);
    }, [inputText])

    return (
        <div className='digital'>
            <h1 onInput={e => setTime(e.currentTarget.textContent)} contentEditable={`${active}`} className='input'>{`${hour > 12 ? hour - 12 : hour} : ${minutes} : ${second}`}</h1>
        </div>
    )
}
export default Digital
