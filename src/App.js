import Form from './components/Form.js';
import Contacts from './components/Contacts.js';
import { useGlobalContext } from './context.js';
import { AiOutlineClose } from 'react-icons/ai';

function App() {
  const { showForm, setShowForm, resetForm } = useGlobalContext();
  return (
    <>
      <h1 className='page-title'>PhoneBook</h1>
      <div className='section-center'>
        <span className='pageTop'>
          <h2 className='pageTop-title'>Contacts</h2>
          <button
            className='btn btn-addContact'
            onClick={() => setShowForm(true)}
          >
            Add Contact
          </button>
        </span>
        <div className='table-container'>
          <Contacts />
        </div>
        <aside
          className={`form-container ${
            showForm ? 'form-container-show' : null
          }`}
        >
          <button
            className='btn-closeForm'
            onClick={() => {
              setShowForm(false);
              resetForm();
            }}
          >
            <AiOutlineClose />
          </button>
          <Form />
        </aside>
      </div>
    </>
  );
}

export default App;
