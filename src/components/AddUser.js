import React from 'react'

const AddUser = () => {
  return (
    <form className='container'>
      <div className='mb-3'>
        <label className='form-label'>User</label>
        <input
          type="text"
          placeholder="add text"
          className='form-control'
        />
      </div>
      <input type="submit" value="Save User" className='btn btn-primary mb-3'/>
    </form>
  )
}

export default AddUser