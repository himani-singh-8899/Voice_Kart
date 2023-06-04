import React from "react";

export default function Title(props) {
  return (
    <div
      style={{
        fontSize: "25px",
        fontWeight:'700',
        marginBottom: props.marginBottom ? props.marginBottom : "10px",
        color: "#38ab8b",
        marginLeft: props. marginLeft? props.marginLeft : "25px",
        marginTop: props.marginTop ? props.marginTop : "none",
        paddingTop: props.paddingTop ? props.paddingTop : "none",
        paddingLeft: props.paddingLeft ? props.paddingLeft : "none",
        paddingBottom: props.paddingBottom ? props.paddingBottom : "none",
        padding:props.padding?props.padding:'none',
      }}
    >
      {props.titleText}
    </div>
  );
}
