import "./App.css";
import Analog from "./Components/Analog/Analog";
import Digital from "./Components/Digital/Digital";

import { useState, useEffect } from 'react'

function App() {

  const [hour, setHour] = useState();
  const [minutes, setMinutes] = useState();
  const [second, setSecond] = useState();

  const [time, setTime] = useState('')
  const [active, setActive] = useState(false)
  const[initialR , setInitialR] = useState(true)

  const clockHandler = () => {

    const deg = 6;
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");

    // let day = new Date();

    // let hh = day.getHours() * 30;
    // let mm = day.getMinutes() * deg;
    // let ss = day.getSeconds() * deg;

    let hh = hour * 30;
    let mm = minutes * deg;
    let ss = second * deg;

    hr.style.setProperty('--rotation', (hh + mm / 12))
    mn.style.setProperty('--rotation', mm)
    sc.style.setProperty('--rotation', ss)

    if (hour > 12) {
      setHour(1)
    } else if (minutes >= 59) {
      setMinutes(0)
      setHour(hour + 1)
    } else if (second >= 59) {
      setSecond(0)
      setMinutes(minutes + 1)
    } else {
      setSecond(second + 1)
    }
  };

  useEffect(() => {
    if (initialR) {
      let day = new Date();
      setHour(day.getHours())
      setMinutes(day.getMinutes())
      setSecond(day.getSeconds())
    }
    console.log("Initial Time ", time);

    if (active) {
      return;
    }
    const id = setInterval(clockHandler, 1000);
    return () => clearInterval(id);

  }, [hour, minutes, second, active])

  return (
    <div className="app">
      <header>
        <div className="box">
          <div className="lightbar"></div>
          <div className="topLayer"></div>
          <h2>Netlink's Time</h2>
        </div>
      </header>
      <section>
        {active ? (
          <div className="time__form">
            <div onClick={() => {
              setInitialR(false)
              console.log(time);
              const newTimeArray = time.split(" : ");
              console.log(newTimeArray);
              setHour(parseInt(newTimeArray[0]))
              setMinutes(parseInt(newTimeArray[1]))
              setSecond(parseInt(newTimeArray[2]))
              setActive(false)
            }} className="btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Go With it
            </div>
            <div onClick={() => {
              setInitialR(true)
              setActive(false)
            }} className="btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              ReSet Time
            </div>
          </div>
        ) : (
          <div className="time__form">
            <div onClick={() => {
              setActive(true)
            }} className="btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Set Time
            </div>
            <div onClick={() => {
                setActive(false)
                setInitialR(true)
            }} className="btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              ReSet Time
            </div>
          </div >
        )}
        <div className="times">
          <div className="times__top">
            <Analog />
          </div>
          <div className="times__bottom">
            <Digital active={active} hour={hour} minutes={minutes} second={second} setTime={setTime} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
