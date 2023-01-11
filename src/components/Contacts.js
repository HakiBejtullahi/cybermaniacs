import React from 'react';
import { useGlobalContext } from '../context';

const Contacts = () => {
  const {
    people,
    setPeople,
    setIsEditing,
    setEditId,
    setFirstName,
    setLastName,
    setAddress,
    setCity,
    setCountry,
    setEmailOne,
    setEmailTwo,
    setEmailThree,
    setPhoneOne,
    setPhoneTwo,
    setPhoneThree,
    setPhones,
    phones,
    setEmails,
    emails,
    setShowForm,
  } = useGlobalContext();

  const deletePerson = (e) => {
    const id = e.target.dataset.id;
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const editPerson = (e) => {
    const specificPerson = people.find(
      (person) => person.id === e.target.dataset.id
    );
    setShowForm(true);
    setIsEditing(true);
    setEditId(e.target.dataset.id);
    setFirstName(specificPerson.firstName);
    setLastName(specificPerson.lastName);
    setAddress(specificPerson.address);
    setCity(specificPerson.city);
    setCountry(specificPerson.country);
    setEmailOne(specificPerson.emails[0]);
    setPhoneOne(specificPerson.phones[0]);
    if (specificPerson.emails.length === 2) {
      setEmails([...emails, { emailId: 2 }]);
      setEmailTwo(specificPerson.emails[1]);
    }
    if (specificPerson.emails.length === 3) {
      setEmails([{ emailId: 1 }, { emailId: 2 }, { emailId: 3 }]);
      setEmailTwo(specificPerson.emails[1]);
      setEmailThree(specificPerson.emails[2]);
    }
    if (specificPerson.phones.length === 2) {
      setPhones([...phones, { phoneId: 2 }]);
      setPhoneTwo(specificPerson.phones[1]);
    }
    if (specificPerson.phones.length === 3) {
      setPhones([{ phoneId: 1 }, { phoneId: 2 }, { phoneId: 3 }]);
      setPhoneTwo(specificPerson.phones[1]);
      setPhoneThree(specificPerson.phones[2]);
    }
  };

  if (people.length < 1) {
    return (
      <p className='contacts-empty'>Please add contact to show on the list</p>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Country</th>
          <th>Email</th>
          <th>Number</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index) => {
          return (
            <tr key={index}>
              <td>
                <p>{person.firstName}</p>
              </td>
              <td>
                <p>{person.lastName}</p>
              </td>
              <td>
                <p>{person.address}</p>
              </td>
              <td>
                <p>{person.city}</p>
              </td>
              <td>
                <p>{person.country}</p>
              </td>
              <td>
                {person.emails.map((email, index) => {
                  const id = `${index}${new Date().getTime().toString()}`;

                  return <p key={id}>{email}</p>;
                })}
              </td>
              <td>
                {person.phones.map((number, index) => {
                  const id = `${index}${new Date().getTime().toString()}`;
                  return <p key={id}>{number}</p>;
                })}
              </td>
              <td>
                <button
                  className='btn'
                  data-id={person.id}
                  onClick={editPerson}
                >
                  edit
                </button>
              </td>
              <td>
                <button
                  className='btn'
                  data-id={person.id}
                  onClick={deletePerson}
                >
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Contacts;
