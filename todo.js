import React, { useState } from "react";
import { addtodo, deletetodo } from "../actions";
import { useSelector, useDispatch } from "react-redux";
function Todo() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);
  return (
    <div>
      <div className="flex">
        <input
          placeholder="Enter text"
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />

        <i
          className="fa fa-plus add-btn"
          onClick={() =>
            dispatch(
              addtodo(inputData),
              setInputData(""),
              console.log(inputData)
            )
          }
        ></i>
      </div>
      <div>
        {console.log(list)}
        {list.map((ele) => {
          return (
            <div className="bg-gray-300 flex m-2 p-2 " key={ele.id}>
              <h1 className="px-20">{ele.data}</h1>
              <i
                className="fa fa-trash-alt add-btn"
                title="Delete"
                onClick={() =>
                  dispatch(deletetodo(inputData), console.log(inputData))
                }
              ></i>
            </div>
          );
        })}
      </div>
      
      
    </div>
  );
}

export default Todo;
