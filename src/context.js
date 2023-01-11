import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const setLocalStorage = (name, obj) => {
    localStorage.setItem(name, JSON.stringify(obj));
  };
  const getLocalStorage = (name) => {
    let element = localStorage.getItem(name);
    if (element) {
      return JSON.parse(localStorage.getItem(name));
    } else {
      return [];
    }
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [people, setPeople] = useState(getLocalStorage('people'));

  useEffect(() => {
    setLocalStorage('people', people);
  }, [people]);

  // form
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [emailOne, setEmailOne] = useState('');
  const [emailTwo, setEmailTwo] = useState('');
  const [emailThree, setEmailThree] = useState('');
  const [phoneOne, setPhoneOne] = useState('');
  const [phoneTwo, setPhoneTwo] = useState('');
  const [phoneThree, setPhoneThree] = useState('');
  const [emails, setEmails] = useState([{ emailId: 1 }]);
  const [phones, setPhones] = useState([{ phoneId: 1 }]);

  const resetForm = () => {
    setIsEditing(false);
    setEditId(null);
    setFirstName('');
    setLastName('');
    setAddress('');
    setCity('');
    setCountry('');
    setEmailOne('');
    setEmailTwo('');
    setEmailThree('');
    setPhoneOne('');
    setPhoneTwo('');
    setPhoneThree('');
    setEmails([{ emailId: 1 }]);
    setPhones([{ phoneId: 1 }]);
  };

  return (
    <AppContext.Provider
      value={{
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
        isEditing,
        setIsEditing,
        editId,
        setEditId,
        emails,
        setEmails,
        phones,
        setPhones,
        people,
        setPeople,
        showForm,
        setShowForm,
        resetForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
