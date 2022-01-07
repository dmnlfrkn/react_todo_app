import React, { useState } from "react";
import "./App.css";



const INITIAL_NOT_DONE_LIST = [
  { id: 0, title: "Shopping", isDone: false },
  { id: 1, title: "Pay bills", isDone: false }
];
const INITIAL_DONE_LIST = [
  {
    id: 2, title: "go sport", isDone: true
  }
];

export default function App() {
  const [doneList, setDoneList] = useState(INITIAL_DONE_LIST);
  const [notDoneList, setNotDoneList] = useState(INITIAL_NOT_DONE_LIST);
  const [newone, setNewone] = useState("");
  const [id_cntr,setId_cntr]=useState(3);

  function editlist(item) {
    if (item.isDone === false) {
      item.isDone = true;
      setNotDoneList(notDoneList.filter(data=>data.id!==item.id));
      setDoneList([...doneList, item]);
    }
    else {
      item.isDone = false;
      setDoneList(doneList.filter(data=>data.id!==item.id));
      setNotDoneList([...notDoneList, item]);
    }
  };
  return (
    <div className="App">
      <div className="main_div">
        <h1> My List</h1>
        <div>
          <input
            value={newone}
            placeholder="Add to List..."
            onChange={(e) => setNewone(e.target.value)}
          />
          <button
            onClick={() => {
              newone === ""
                ? alert("Cannot add blank to list !")
                : setNotDoneList([
                  ...notDoneList,
                  {
                    id: id_cntr,
                    title: newone,
                    isDone: false
                  }
                ]);
                setId_cntr(id_cntr+1);
              setNewone("");
            }}
          >
            Ekle
          </button>
        </div>
        <div className="list">
          <div className="done_List">
            <h3>Done List</h3>
            {doneList.map((item) => (
              <div
                key={item.id}
                className={item.isDone ? "done" : "notDone"}
              >
                {item.title}

                <button onClick={() => editlist(item)}>not mark</button>
              </div>
            ))}
          </div>
          <div className="not_Done_List">
            <h3 >Not Done List</h3>
            {notDoneList.map((item) => (
              <div
                key={item.id}
                className={item.isDone ? "done" : "notDone"}

              >
                {item.title}

                <button onClick={() => editlist(item)}>mark</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

