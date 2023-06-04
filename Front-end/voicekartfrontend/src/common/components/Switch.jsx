import * as React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { alpha, styled } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: yellow[600],
    "&:hover": {
      backgroundColor: alpha(yellow[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: yellow[600],
  },
}));
const handleChange = (event) => {
  console.log(event.target.checked);
};

export default function SwitchToggle(props) {
  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          // value="end"
          control={
            <GreenSwitch
              color={props.color}
              checked={props.checked}
              onChange={props.handleChange}
            />
          }
          label={props.label}
          labelPlacement={props.labelPlacement}
        />
      </FormGroup>
    </FormControl>
  );
}
