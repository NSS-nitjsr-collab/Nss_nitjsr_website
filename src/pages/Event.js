import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Event1 from "../components/event1";
import Event2 from "../components/event2";
import Event3 from "../components/event3";
import Event4 from "../components/event4";
import Event5 from "../components/event5";
import Event6 from "../components/event6";
import "../components/events.css";

function Event() {
  const [pageNo, setPageNo] = useState(1);
  const [color, setColor] = useState(1);

  var Ui = <Event1 />;
  const LoadPage = () => {
    switch (pageNo) {
      case 1:
        Ui = <Event1 />;
        break;
      case 2:
        Ui = <Event2 />;
        break;
      case 3:
        Ui = <Event3 />;
        break;
      case 4:
        Ui = <Event4 />;
        break;
      case 5:
        Ui = <Event5 />;
        break;
      case 6:
        Ui = <Event6 />;
        break;
      default:
        Ui = <Event1 />;
        break;
    }
    return Ui;
  };
  return (
    <>
      <Header />
      <div className="row">
        <aside className="abc">
          <button
            type="button"
            className="btn btn1"
            style={{ backgroundColor: color === 1 ? "#95fcf1" : "white" }}
            onClick={() => {
              setPageNo(1);
              setColor(1);
            }}
          >
            Blood Donation
          </button>
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: color === 2 ? "#fbf1dc" : "white" }}
            onClick={() => {
              setPageNo(2);

              setColor(2);
            }}
          >
            Cloth Donation Drive
          </button>
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: color === 3 ? "#eed8f8" : "white" }}
            onClick={() => {
              setPageNo(3);
              setColor(3);
            }}
          >
            Cleanliness Drive
          </button>
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: color === 4 ? "#feecec" : "white" }}
            onClick={() => {
              setPageNo(4);
              setColor(4);
            }}
          >
            Run For Unity
          </button>
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: color === 5 ? "#e0fbdb" : "white" }}
            onClick={() => {
              setPageNo(5);
              setColor(5);
            }}
          >
            World Bicycle Day
          </button>
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: color === 6 ? "#cfe8fc" : "white" }}
            onClick={() => {
              setPageNo(6);
              setColor(6);
            }}
          >
            World Environment Day
          </button>
        </aside>

        <div className="col">{LoadPage()}</div>
      </div>
      <Footer />
    </>
  );
}

export default Event;
