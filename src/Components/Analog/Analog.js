import React from 'react'
import './Analog.css'
const Analog = () => {
    return (
        <div className='analog'>
            <div className='hand hour' id='hr'></div>
            <div className='hand minutes' id='mn'></div>
            <div className='hand second' id='sc'></div>
            <div className='number number1'>1</div>
            <div className='number number2'>2</div>
            <div className='number number3'>3</div>
            <div className='number number4'>4</div>
            <div className='number number5'>5</div>
            <div className='number number6'>9</div>
            <div className='number number7'>7</div>
            <div className='number number8'>8</div>
            <div className='number number9'>9</div>
            <div className='number number10'>10</div>
            <div className='number number11'>11</div>
            <div className='number number12'>12</div>
        </div>
    )
}

export default Analog
