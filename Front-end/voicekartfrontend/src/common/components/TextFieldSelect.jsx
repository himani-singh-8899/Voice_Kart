import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
      {
        padding: "7px",
        fontSize: "12px",
      },
    "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
      marginTop: "-9px",
    },
    "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
      margin: "0px",
    },
  },
}));

export default function SelectTextFields(props) {
  const classes = useStyles();
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: "8px 0px",
          width: "100%",
          color: "black",
          textAlign: "start",
          width: props.width ? props.width : "100%",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div className={classes.root}>
        <TextField
          id="outlined-select-currency"
          select
          required={props.required}
          variant="outlined"
          style={{width:props.width}}
          label={props.label}
          name={props.name}
          disabled={props.disabled}
          value={props.value}
          helperText={props.helperText}
          onChange={props.handleChange}
          InputLabelProps={{
            shrink: props.shrink,
          }}
          InputProps={{
            readOnly: props.readOnly,
          }}
        >
          <MenuItem disabled selected value="">
            {props.defaultOption}
          </MenuItem>

          {props.listItems&& props.listItems.length>0?props.listItems.map((option, index) => (
            <MenuItem key={index} value={option[props.keyValue]}>
              {option[props.displayValue]}
            </MenuItem>
          )):null}
        </TextField>
      </div>
    </Box>
  );
}
