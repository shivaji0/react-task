import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function Task3() {
  const [topic, setTopic] = useState("");
  const [val, setVal] = useState(null);
  const [fav ,setFav]= useState(false);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=60354f82a9f74c1897cd1b2d4beeebe3`
      )
      .then((e) => {
        setVal(e.data.articles);
        console.log(e.data.articles);
      })
      .catch((e) => {
        console.log("error");
      });
  }, [topic]);

   
  function sortBylength(){
    let x = val.length;

    //console.log(val[0].author.length);
   
    const sorted = [...val].sort((a,b)=>{
      if( a.author==null || b.author==null){
          return ;
      }
      console.log(a.author.length);
      let x = a.author.length;
       console.log(x);
        if (a.author.length < b.author.length ) {
      return -1;
    } else if (a.author.length > b.author.length ) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(sorted.length)
  
     setVal(sorted);
  }

  function changeFav(index) {
  const updatedVal = [...val];
  updatedVal[index].isFav = !updatedVal[index].isFav;
  setVal(updatedVal);
}
  
   function sortDataAlphabetically() {
    //console.log("clicked");
    const sortedData = [...val].sort((a, b) => {
      
        
      if (a.author < b.author) {
        return -1;
      }
      if (a.author > b.author) {
        return 1;
      }
      return 0;
    });
    console.log("clicked ended");
    
    setVal(sortedData);

  }
  return (
    <div>
      <div className="p-5">
        <input
          className="bg-gray-200 pb-5 mb-2 px-2"
          type="text"
          placeholder="Search..."
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
        />
      </div>
      <div className="p-5">
        <button className="bg-gray-300 h-7 w-20 rounded-md" onClick={() => setTopic("business")}>Business</button>
          <button  className="bg-gray-300 h-7 w-20 mx-2 rounded-md" onClick={() => setTopic("technology")}>Tech</button>

      </div>
      <div className="p-5">
        <button className="bg-gray-300 h-8 w-35 px-2 rounded-md" onClick={() => sortDataAlphabetically()}>Sort by Char</button>
                <button className="bg-gray-300 h-8 w-35 px-2 rounded-md" onClick={() => sortBylength()}>Sort by length</button>

        <ul>
          {val == null ? (
            <h1>Data Not found!</h1>
          ) : (
            val.map((item,index) => {
              return <div className="flex p-1">
                
                 <button className={`${item.isFav ? 'bg-red-300' :'bg-gray-200'}`} onClick={
                  () => changeFav(index)
                  
                  
                  }>
                  
                  <li  key={item.id}>{item.author}</li>
                 
                 </button>

              </div>;
            })
          )}
        </ul>
      </div>
    </div>
  );
}

export default Task3;
