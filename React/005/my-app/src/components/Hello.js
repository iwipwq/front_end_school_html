import React from "react";

function Hello(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5];

  const numComArr = num.map((i) =>
  <h1 key={i.toString()}>안녕, {name}, {i}호</h1>);
  return(
    <div>
      {numComArr}
      
    </div>
  )
}

export default Hello;