function ContactList(props) {
  const deletehandler = (id) => {
    props.getContactId(id);
  };
  const renderList = props.contacts.map((contact) => {
    return (
      <li key={contact.id}>
        {`${contact.name} - ${contact.email}`}
        <button onClick={(e) => deletehandler(contact.id)}>Delete</button>
      </li>
    );
  });
  return (
    <div>
      <ul>{renderList}</ul>
    </div>
  );
}

export default ContactList;
