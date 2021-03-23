import React from "react";
const SlotM=(props) =>{
    let {x,y,z}=props;
    let Matching="";
    (x==y && x==z)?Matching="Congrats, It is Matching!!":Matching="Sorry, It isn't Matching!!";
      return (<div className="slot_inner">
    <h1>{"  "+x+"  "+y+"  "+z+"  "}</h1>
    <h1>{Matching}</h1><hr/>
      </div>);

  }
  export default SlotM;