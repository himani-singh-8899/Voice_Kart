import React from "react";

export default function NewCardLayout(props) {
  return (
    <div style={{padding:'0px 25px'}}>
    <div
      style={
        props.style
          ? props.style
          : {
              backgroundColor: props.backgroundColor ? props.backgroundColor : 'white' ,
              marginBottom: props.marginBottom,
              margin: props.margin,
              border: props.border,
              height: props.height,
              padding: "25px",
              width: props.width,
              marginTop: props.marginTop,
              borderRadius: "6px",
              boxShadow: "rgb(0 0 0 / 20%) 0px 1px 9px",
              backgroundImage: props.backgroundImage,
              fontSize: props.fontSize,
              marginLeft: props.marginLeft,
              marginRight: props.marginRight,
            }
      }
      onClick={props.handleSubmit}
    >
      {props.cardContent}
    </div>
    </div>
  );
}
