import React from 'react';
import { useGlobalContext } from '../context.js';
import { AiOutlineClose } from 'react-icons/ai';

const Form = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    city,
    setCity,
    country,
    setCountry,
    emailOne,
    setEmailOne,
    emailTwo,
    setEmailTwo,
    emailThree,
    setEmailThree,
    phoneOne,
    setPhoneOne,
    phoneTwo,
    setPhoneTwo,
    phoneThree,
    setPhoneThree,
    phones,
    setPhones,
    emails,
    setEmails,
    setPeople,
    people,
    isEditing,
    editId,
    setShowForm,
    resetForm,
  } = useGlobalContext();

  const addEmail = () => {
    if (emails.length === 1) {
      setEmails([...emails, { emailId: 2 }]);
    } else if (emails.length === 2) {
      setEmails([...emails, { emailId: 3 }]);
    }
  };
  const removeEmail = () => {
    if (emails.length === 3) {
      setEmails([{ emailId: 1 }, { emailId: 2 }]);
    } else if (emails.length === 2) {
      setEmails([{ emailId: 1 }]);
    }
  };
  const addPhone = () => {
    if (phones.length === 1) {
      setPhones([...phones, { phoneId: 2 }]);
    } else if (phones.length === 2) {
      setPhones([...phones, { phoneId: 3 }]);
    }
  };
  const removePhone = () => {
    if (phones.length === 3) {
      setPhones([{ phoneId: 1 }, { phoneId: 2 }]);
    } else if (phones.length === 2) {
      setPhones([{ phoneId: 1 }]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let personEmails = [emailOne];
    if (emails.length === 2) {
      personEmails = [emailOne, emailTwo];
    } else if (emails.length == 3) {
      personEmails = [emailOne, emailTwo, emailThree];
    }
    let personPhones = [phoneOne];
    if (phones.length === 2) {
      personPhones = [phoneOne, phoneTwo];
    } else if (phones.length === 3) {
      personPhones = [phoneOne, phoneTwo, phoneThree];
    }
    if (!isEditing) {
      const id = new Date().getTime().toString();
      const newPerson = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        country: country,
        emails: personEmails,
        phones: personPhones,
      };
      setPeople([...people, newPerson]);
      resetForm();
      setShowForm(false);
    } else if (isEditing) {
      setPeople(
        people.map((person) => {
          if (person.id === editId) {
            return {
              ...person,
              firstName: firstName,
              lastName: lastName,
              address: address,
              city: city,
              country: country,
              emails: personEmails,
              phones: personPhones,
            };
          }
          return person;
        })
      );
      resetForm();
      setShowForm(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      <span className='input-container'>
        <label htmlFor='firstName'>first name</label>
        <input
          type='text'
          id='firstName'
          placeholder='John'
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
      </span>
      <span className='input-container'>
        <label htmlFor='lastName'>last name</label>
        <input
          type='text'
          id='lastName'
          placeholder='Smith'
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
        />
      </span>
      <span className='input-container'>
        <label htmlFor='address'>address</label>
        <input
          type='text'
          id='address'
          placeholder='Veternik'
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
      </span>
      <span className='input-container'>
        <label htmlFor='city'>city</label>
        <input
          type='text'
          id='city'
          placeholder='Prishtina'
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
        />
      </span>
      <span className='input-container'>
        <label htmlFor='country'>country</label>
        <input
          type='text'
          id='country'
          placeholder='Kosova'
          value={country}
          required
          onChange={(e) => setCountry(e.target.value)}
        />
      </span>
      <span className='input-container'>
        <label htmlFor='email'>email</label>
        {emails.map((email, index) => {
          if (email.emailId === 1) {
            return (
              <div className='input-container-inner' key={index}>
                <input
                  type='email'
                  id='email'
                  placeholder='email@email.com'
                  value={emailOne}
                  required
                  onChange={(e) => setEmailOne(e.target.value)}
                />
                {emails.length > 1 && (
                  <button
                    className='btn-icon'
                    type='button'
                    onClick={removeEmail}
                  >
                    <AiOutlineClose />
                  </button>
                )}
              </div>
            );
          } else if (email.emailId === 2) {
            return (
              <div className='input-container-inner' key={index}>
                <input
                  type='email'
                  id='email'
                  placeholder='email@email.com'
                  value={emailTwo}
                  required
                  onChange={(e) => setEmailTwo(e.target.value)}
                />
                {emails.length > 1 && (
                  <button
                    className='btn-icon'
                    type='button'
                    onClick={removeEmail}
                  >
                    <AiOutlineClose />
                  </button>
                )}
              </div>
            );
          } else if (email.emailId === 3) {
            return (
              <div className='input-container-inner' key={index}>
                <input
                  type='email'
                  id='email'
                  placeholder='email@email.com'
                  value={emailThree}
                  required
                  onChange={(e) => setEmailThree(e.target.value)}
                />
                {emails.length > 1 && (
                  <button
                    className='btn-icon'
                    type='button'
                    onClick={removeEmail}
                  >
                    <AiOutlineClose />
                  </button>
                )}
              </div>
            );
          }
        })}
        {emails.length < 3 && (
          <button className='btn' type='button' onClick={addEmail}>
            addEmail
          </button>
        )}
      </span>
      <span className='input-container'>
        <label htmlFor='phone'>phone number</label>
        {phones.map((phone, index) => {
          if (phone.phoneId === 1) {
            return (
              <div className='input-container-inner' key={index}>
                <input
                  type='tel'
                  pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{3}'
                  id='phone'
                  placeholder='383 45 123 123'
                  value={phoneOne}
                  required
                  onChange={(e) => setPhoneOne(e.target.value)}
                />
                {phones.length > 1 && (
                  <button
                    className='btn-icon'
                    type='button'
                    onClick={removePhone}
                  >
                    <AiOutlineClose />
                  </button>
                )}
              </div>
            );
          } else if (phone.phoneId === 2) {
            return (
              <div className='input-container-inner' key={index}>
                <input
                  type='tel'
                  pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{3}'
                  id='email'
                  placeholder='383 45 123 123'
                  value={phoneTwo}
                  required
                  onChange={(e) => setPhoneTwo(e.target.value)}
                />
                {phones.length > 1 && (
                  <button
                    className='btn-icon'
                    type='button'
                    onClick={removePhone}
                  >
                    <AiOutlineClose />
                  </button>
                )}
              </div>
            );
          } else if (phone.phoneId === 3) {
            return (
              <div className='input-container-inner' key={index}>
                <input
                  type='tel'
                  pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{3}'
                  id='email'
                  placeholder='383-45-123-123'
                  value={phoneThree}
                  required
                  onChange={(e) => setPhoneThree(e.target.value)}
                />
                {phones.length > 1 && (
                  <button
                    className='btn-icon'
                    type='button'
                    onClick={removePhone}
                  >
                    <AiOutlineClose />
                  </button>
                )}
              </div>
            );
          }
        })}
        {phones.length < 3 && (
          <button className='btn' type='button' onClick={addPhone}>
            add phone
          </button>
        )}
      </span>
      <button className='btn' type='submit'>
        {isEditing ? 'edit' : 'save'}
      </button>
    </form>
  );
};

export default Form;
