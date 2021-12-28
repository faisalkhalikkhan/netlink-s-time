import "./App.css";
import { Modal, Button, Input, Alert, message } from "antd";
import AnalogClock from "./components/analog-clock/AnalogClock";
import { useState, useEffect } from "react";
import DigitalClock from "./components/digital-clock/DigitalClock";
function App() {
  const [hour, setHour] = useState();
  const [minutes, setMinutes] = useState();
  const [second, setSecond] = useState();
  const [active, setActive] = useState(false);
  const [initialR, setInitialR] = useState(true);

  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);
  const clockHandler = () => {
    const deg = 6;
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");

    let hh = hour * 30;
    let mm = minutes * deg;
    let ss = second * deg;

    hr.style.setProperty("--rotation", hh + mm / 12);
    mn.style.setProperty("--rotation", mm);
    sc.style.setProperty("--rotation", ss);

    if (hour > 12) {
      setHour(1);
    } else if (minutes >= 59) {
      setMinutes(0);
      setHour(hour + 1);
    } else if (second >= 59) {
      setSecond(0);
      setMinutes(minutes + 1);
    } else {
      setSecond(second + 1);
    }
  };
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
    setActive(false);
    setInitialR(false);
  };

  const handleOk = () => {
    if (
      parseInt(h) > 12 ||
      parseInt(h) < 0 ||
      parseInt(m) > 59 ||
      parseInt(m) < 0 ||
      parseInt(s) > 59 ||
      parseInt(s) < 0
    ) {
      message.error("Invalid Input");
      setInitialR(true);
      setActive(false);
    } else {
      setHour(parseInt(h));
      setMinutes(parseInt(m));
      setSecond(parseInt(s));
    }
    setVisible(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  useEffect(() => {
    if (initialR) {
      let day = new Date();
      setHour(day.getHours());
      setMinutes(day.getMinutes());
      setSecond(day.getSeconds());
    }

    if (active) {
      return;
    }
    const id = setInterval(clockHandler, 1000);
    return () => clearInterval(id);
  }, [hour, minutes, second, active]);

  return (
    <div className="App">
      <header>
        <h1>Netlink's Clock</h1>
      </header>
      <section className="the_clocks">
        <AnalogClock />
        <DigitalClock hour={hour} minutes={minutes} second={second} />
      </section>
      <section className="btn__group">
        <div>
          <Button style={{ width: "100px" }} type="primary" onClick={showModal}>
            Set Time
          </Button>
          <Modal
            title="Set Time"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div className="times">
              <Input
                onChange={(e) => setH(e.target.value)}
                required
                type="number"
                placeholder="HOURS"
              />
              <Input
                onChange={(e) => setM(e.target.value)}
                required
                type="number"
                placeholder="Munites"
              />
              <Input
                onChange={(e) => setS(e.target.value)}
                required
                type="number"
                placeholder="Seconds"
              />
            </div>
          </Modal>
        </div>
        <div>
          <Button
            style={{ width: "100px" }}
            type="primary"
            onClick={() => {
              setInitialR(true);
              setActive(false);
            }}
          >
            Reset Time
          </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
