import { useState } from 'react';

const AddUser = ({ onAdd }) => {
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert('Please add a name');
      return;
    }

    onAdd({ name });

    setName('');
  };
  return (
    <form className='container' onSubmit={onSubmit}>
      <div className='mb-3'>
        <label className='form-label'>User</label>
        <input
          type="text"
          placeholder="add text"
          className='form-control'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <input type="submit" value="Save User" className='btn btn-primary mb-3'/>
    </form>
  )
}

export default AddUser