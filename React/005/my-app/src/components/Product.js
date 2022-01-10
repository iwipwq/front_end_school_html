import React from "react";

function Product(props) {
    const productList = {
      products: [
        {
          title: "개발자 무릎 담요",
          price: 17500,
          id: 101,
        },
        {
          title: "Hack Your Life 개발자 노트북 파우치",
          price: 29000,
          id: 102,
        },
        {
          title: "우당탕탕 라이켓의 실험실 스티커북",
          price: 29000,
          id: 103,
        },
        {
          title: "버그를 Java라 버그잡는 개리씨 키링",
          price: 29000,
          id: 104,
        },
      ],
    };
  
    const showList = productList.products.map((item, index) =>
    <div>
      <h1 key={item.id}>{index +1} {item.title}! </h1>
      <p>{item.price}</p>
    </div>);
    return(
      <div>
        {showList}
      </div>
    )
  }

  export default Product;