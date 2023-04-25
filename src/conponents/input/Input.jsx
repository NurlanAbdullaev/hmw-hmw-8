import { forwardRef } from "react";

export const Input = forwardRef(({ type, children }, ref) => {
  return (
    <>
      <label>{children}</label>
      <input ref={ref} type={type} />
    </>
  );
});
