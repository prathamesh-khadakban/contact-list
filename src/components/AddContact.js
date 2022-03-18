import { useRef } from "react";

function AddContact(props) {
  const name = useRef("");
  const email = useRef("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const submitedName = name.current.value;
    const submittedEmail = email.current.value;
    props.addContact({ name: submitedName, email: submittedEmail });
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" ref={name} name="name" />
        <input type="text" ref={email} name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddContact;
