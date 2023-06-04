import React, { Component } from "react";
import { makeStyles } from "@mui/styles";
import { Button, createTheme } from "@mui/material";
const themes = createTheme();
const useStyles = makeStyles((theme) => ({
  // root: {
  //   textTransform: "none",
  //   backgroundColor: "#296d98",
  //   color: "#FFFFFF",
  //   borderRadius: "5px",
  //   height: "35px",
  //   width: "100%",
  //   fontSize: "16px",
  //   fontWeight: "600",
  //   ["@media (max-width:1020px)"]: {
  //     fontSize: "12px",
  //   },
  //   boxShadow: "none",
  //   "&:hover": {
  //     backgroundColor: "#ffffff",
  //   },
  //   "& .css-sghohy-MuiButtonBase-root-MuiButton-root": {
  //     backgroundColor: "#296d98",
  //   },
  // },
  // extendedIcon: {
  //   marginRight: themes.spacing(1),
  // },
  menuStyle: {
    // cursor: 'pointer',
    padding: '10px',
    // borderImage:"linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)",
    borderRadius: "3px 15px",
    // transition: 'transform .2s',
    borderImageSlice: '1',
    '&:hover': {
      // transform: 'scale(0.6)',
      color: '#AB26A3',
    },
    '&:active': {
      color: 'red',
      boxShadow: 'outset 1px 0px 3px 4px #948bb94d',
      // transform: 'scale(0.6)',
      borderRadius: '7px',
    },
  },
}));
export default function ActionButton(props) {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      className={classes.menuStyle}
      style={{
        width: props.width ? props.width : "fit-content",
        textTransform: "capitalize",
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : "#219070",
        color: props.color
          ? props.color
          : "white",
          border: props.border,
          fontWeight:"700",
          borderRadius: props.borderRadius ?props.borderRadius:'16px',
          // borderImage: 'linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)',
          // borderImageSlice: '1',
        height: props.height,
        fontSize: props.fontSize,
        boxShadow: props.boxShadow,
        backgroundImage: props.backgroundImage,
      }}
      handlechange={props.handleChange}
      onClick={props.handleSubmit}
      disabled={props.disabled}
    >
      {props.buttonText}
    </Button>
  );
}
