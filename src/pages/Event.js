import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from "react";
import Event1 from "../components/event1";
import Event2 from "../components/event2";
import Event3 from "../components/event3";
import Event4 from "../components/event4";
import Event5 from "../components/event5";
import Event6 from "../components/event6";

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
          style={{ backgroundColor: color === 1 ? "#B8E7E1" : "white" }}
          onClick={() => {
            setPageNo(1);
            setColor(1);
          }}
        >
          Janmotseva
        </button>
        <button
          type="button"
          className="btn"
          style={{ backgroundColor: color === 2 ? "#FFABAB" : "white" }}
          onClick={() => {
            setPageNo(2);

            setColor(2);
          }}
        >
          Blood Donation Camp
        </button>
        <button
          type="button"
          className="btn"
          style={{ backgroundColor: color === 3 ? "#FCFFB2" : "white" }}
          onClick={() => {
            setPageNo(3);
            setColor(3);
          }}
        >
          Event 3
        </button>
        <button
          type="button"
          className="btn"
          style={{ backgroundColor: color === 4 ? "#DBDFAA" : "white" }}
          onClick={() => {
            setPageNo(4);
            setColor(4);
          }}
        >
          Event 4
        </button>
        <button
          type="button"
          className="btn"
          style={{ backgroundColor: color === 5 ? "#FFE194" : "white" }}
          onClick={() => {
            setPageNo(5);
            setColor(5);
          }}
        >
          Event 5
        </button>
        <button
          type="button"
          className="btn"
          style={{ backgroundColor: color === 6 ? "#ECCDB4" : "white" }}
          onClick={() => {
            setPageNo(6);
            setColor(6);
          }}
        >
          Event 6
        </button>
      </aside>

      <div className="col">{LoadPage()}</div>
    </div>
    <Footer />
    </>
  );
}

export default Event;
