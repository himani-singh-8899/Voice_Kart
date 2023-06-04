import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  textData: {
    fontSize: " 12px",
    textAlign: "right",
    color: "darkred",
    marginRight: "10px",
  },
}));
export default function ErrorMessage(props) {
  const classes = useStyles();
  return (
    <div
      className={classes.textData}
      style={{
        color: props.color,
        marginLeft: props.marginLeft,
        marginTop: props.marginTop,
      }}
    >
      <span>{props.message}</span>
    </div>
  );
}
