import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'פרטי',
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'פרטי',
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current === null ? 'הוספת איש קשר' : 'עריכת איש קשר'}
      </h2>
      <input
        type="text"
        placeholder="שם"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
      <input
        type="email"
        placeholder='דוא"ל'
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="phone"
        placeholder="טלפון"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>קטגוריית איש קשר</h5>
      <input
        type="radio"
        name="type"
        value="פרטי"
        checked={type === 'פרטי'}
        onChange={onChange}
      />{' '}
      פרטי{' '}
      <input
        type="radio"
        name="type"
        value="עסקי"
        checked={type === 'עסקי'}
        onChange={onChange}
      />{' '}
      עסקי
      <div>
        <input
          type="submit"
          value={current === null ? 'הוספת איש קשר' : 'עדכון איש קשר'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <button
          className="btn btn-light btn-block"
          style={{
            border: '1px solid rgb(199 191 191)',
            marginRight: '0px',
          }}
          onClick={clearAll}
        >
          ניקוי
        </button>
      )}
    </form>
  );
};

export default ContactForm;
