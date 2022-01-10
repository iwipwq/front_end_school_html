import React from "react";

function Hello2(props) {
    const name = props.name;
    if(name){
      return (
        <div>
          <h1>{props.name}</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>이 입력된 것이 없습니다.</h1>
        </div>
      )
    }
  }

export default Hello2;