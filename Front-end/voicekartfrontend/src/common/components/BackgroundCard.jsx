import React from "react";
//  import IsolationMode1 from "../../assests/images/Isolation_Mode1.svg";

 
export default function BackgroundCard(props) {
return (
      <div
      style={
        props.style
          ? props.style
          : {
              // backgroundColor: props.backgroundColor?props.backgroundColor:'white',
              // background:`#fff url(${IsolationMode1}) no-repeat center bottom`,
              marginBottom: props.marginBottom,
              padding: "15px 15px 40px",
              marginTop: '3px',
              margin: props.margin,
              border: props.border,
              height: props.height,
              width: props.width,
              // marginTop: props.marginTop,
              borderRadius: "5px",
              boxShadow: "rgb(0 0 0 / 20%) 0px 1px 4px",
              // backgroundImage: props.backgroundImage,
              fontSize: props.fontSize,
              marginLeft: props.marginLeft,
              marginRight: props.marginRight,
            }
      }
      onClick={props.handleSubmit}
    >
      <div style={{padding: props.padding ? props.padding:'0px 25px 7px 25px'}}>
      {props.backgroundContent}</div>
    </div>
     
  );
}
