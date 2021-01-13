import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-right">
        {name}{' '}
        <span
          style={{ float: 'left' }}
          className={`badge ${
            type === 'עסקי' ? 'badge-success' : 'badge-primary'
          }`}
        >
          {type}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-info btn-sm"
          onClick={() => setCurrent(contact)}
        >
          עריכה
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          הסר
        </button>
      </p>
    </div>
  );
};

ContactItem.prototype = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
