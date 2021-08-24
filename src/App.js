import { useRef, useEffect, useState } from "react";
import Input from "./components/Input";
function UserForm() {
  let firstName = useRef(null);
  let lastName = useRef(null);
  let submit = useRef(null);
  const [status, handleStatus] = useState("");
  useEffect(() => {
    firstName.current.focus();
    console.log();
  }, []);
  function handleFirstname(e) {
    if (e.key === "Enter") {
      lastName.current.focus();
    }
  }
  function handleLastname(e) {
    if (e.key === "Enter") {
      submit.current.focus();
    }
  }
  function handleSubmit(e) {
    console.log("wo");
    handleStatus("Working fine");
  }
  return (
    <>
      <form>
        <Input type="text" ref={firstName} onKeyDown={handleFirstname} />
        <Input type="text" ref={lastName} onKeyDown={handleLastname} />
        <Input type="button" value="GO" ref={submit} onKeyDown={handleSubmit} />
      </form>
      <div>{status}</div>
    </>
  );
}
export default UserForm;
