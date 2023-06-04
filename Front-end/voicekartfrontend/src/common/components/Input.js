import * as React from "react";
import {Box, FormControl} from "@mui/material";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { makeStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "10px",
      fontSize: "12px",
    },
    "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
      marginTop: "-9px",
    },
    "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
      margin: "0px",
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    },
  },
}));

export default function FormPropsTextFields(props) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const [curser, setCurser] = React.useState(false);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      props.onSubmit();
    }
  };
  const handlePasswordIcon = (data) => {
    setShowPassword(data);
    props.handlePasswordIcon(data);
  };
  const handleChangeE=(e)=>{
    console.log('event',e.target.value)
  }
  const handleSelect=()=>{
    setCurser(true)
  }
  const handleBlur=(e)=>{
    setCurser(false)
    if(props.handleBlur){
      props.handleBlur(e)
    }
    
  }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { margin: "8px 0px", width: props.width?props.width:"100%" },
      }}
      noValidate
      // autoComplete="off"
    >
      <div className={classes.root}>
        <TextField
          disabled={props.disabled}
          required={props.required}
          variant="outlined"
          id={props.id}
          label={props.label}
          name={props.name}
          style={{ width: props.width }}
          size="small"
          value={props.value}
          type={props.type}
          onChange={props.handleChange}
          onSelect={handleSelect}
          {...props.inputRef}
          defaultValue={props.defaultValue}

          helperText={props.helperText}
          // inputRef={props.inputRef}
          onBlur={handleBlur}
          inputProps={{
            autoComplete: 'off',
            max: props.max
        }}
          InputProps={{
            readOnly: props.readOnly,
            sx: {
              fontWeight: props.fontWeight
            },
            endAdornment: (
              <InputAdornment position="end">
                {props.visibilityIcon?showPassword ? (
                  <VisibilityIcon
                    onClick={() => {
                      handlePasswordIcon(false);
                    }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => {
                      handlePasswordIcon(true);
                    }}
                  />
                ):props.sbxAdorment?'@sbx':''}
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: props.shrink?props.shrink:props.watch?!!props.watch(props.name)||curser||props.value===0||props.value?true:false:false,
          }}
          onKeyPress={props.handleKeyPress}
          onWheel={props.type === "number" ? (e) => e.target.blur() : null}
        />
      </div>
    </Box>
  );
}
