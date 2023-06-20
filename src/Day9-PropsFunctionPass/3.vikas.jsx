import { useState } from "react";
import Childlist from "./childlist";

export default function Parentinput() {
  const [data, setdata] = useState("");
  const [childdata, setchilddata] = useState([]);
  const setdatafn = (e) => {
    let { value } = e.target;
    setdata(() => {
      return value;
    });
  };
  let newdata;
  const expandlist = (elm) => {
    newdata = elm;
  };

  const senddata = () => {
    setchilddata((lastdata) => {
      lastdata = [...lastdata, ...newdata];

      console.log("updated data:", lastdata);
      return lastdata;
    });
    setchilddata([...childdata, data]);
  };

  return (
    <>
      <input name="" type="text" value={data} onChange={setdatafn} />
      <button onClick={senddata}>click me</button>
      <Childlist listToParent={expandlist} newdata={childdata} />
    </>
  );
}
//child
import { useState } from "react";
export default function Childlist({ listToParent, newdata }) {
  const [list, setlist] = useState(["vikas", "ajit", "deepak"]);
  //   setlist(newdata);
  listToParent(list);

  return (
    <>
      <div>
        <ul>
          {newdata.map((elm, i) => {
            return (
              <li key={i} style={{ color: elm }}>
                {elm}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
