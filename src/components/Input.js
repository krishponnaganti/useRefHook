import React from "react";
function Input({ type, onKeyDown, value }, ref) {
  return <input type={type} value={value} ref={ref} onKeyDown={onKeyDown} />;
}
const forwardInput = React.forwardRef(Input);
export default forwardInput;
