import React, { useState } from "react";


const SetTimeOut = () => {
    const [fruitsList, setFruitsList] = useState(["Mango", "Apple", "Orange", "Pine Apple", "Banana"]);
    return (
        <div style={{ fontWeight: "bold", textAlign: "left", paddingLeft: 20 }}>
      {fruitsList.map((fruit, index) => {
        setTimeout(() => {
          console.log(fruit);
        }, 1000 * index);
      })}
      {
            fruitsList.map((fruit, index) => (
                <p key={index}>
                    {fruit}
                </p>
            ))
        }
    </div>
    );
};

export default SetTimeOut;