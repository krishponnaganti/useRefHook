import { useRef, useEffect } from "react";
function UserForm() {
  let firstName = useRef(null);
  let lastName = useRef(null);
  let submit = useRef(null);
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
    e.preventDefault();
  }
  return (
    <form>
      <input type="text" ref={firstName} onKeyDown={handleFirstname} />
      <input type="text" ref={lastName} onKeyDown={handleLastname} />
      <input type="submit" ref={submit} onKeyDown={handleSubmit} />
    </form>
  );
}
export default UserForm;
