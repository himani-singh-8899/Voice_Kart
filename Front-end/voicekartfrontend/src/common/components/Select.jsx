import React from "react";
import SelectMui from "./TextFieldSelect";
import { Controller } from "react-hook-form";
function ControllerSelect(props) {
  return (
    <div>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue=""
        rules={{ required: props.required }}
        render={({ field: { onChange, value } }) => (
          <SelectMui
            label={props.label}
            listItems={props.listItems}
            name={props.name}
            value={props.value ? props.value : value}
            keyValue={props.keyValue}
            displayValue={props.displayValue}
            width={props.width}
            disabled={props.disabled}
            readOnly={props.readOnly}
            shrink={props.shrink?props.shrink:value||props.value?true:false}
            handleChange={(event) => {
              onChange(event);
              props.handleChange ? props.handleChange(event) : onChange(event);
            }}
          />
        )}
      />
    </div>
  );
}
export default ControllerSelect;
