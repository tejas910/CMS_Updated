import React from 'react'
import './AddBooks.css'

function AddBooks() {
  return (
    <>
      <div className='addbooks'>
          <form>
            <h1>Book Details Form</h1>
            <label for="fname">Book Name</label>
            <input type="text" id="name" name="name"/>
            <label for="lname">Book Author</label>
            <input type="text" id="author" name="author"/>
            <label for="lname">Book Description</label>
            <input type="text" id="des" name="des"/>
            <label for="lname">Issued</label>
            <input type="text" id="issued" name="issued"/>
            <label for="lname">Location</label>
            <input type="text" id="loc" name="loc"/>
            <button>Submit</button>
          </form>
      </div>
    </>

  )
}

export default AddBooks