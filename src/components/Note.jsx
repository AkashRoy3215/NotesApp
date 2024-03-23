import React from 'react'
import {MdDeleteForever} from "react-icons/md"
const Note = () => {
  return (
    <div className='note'>
<span>Hello this is our first note!</span>
<div className="note-footer">
  <small>23-03-24</small>
  <MdDeleteForever className="delete-icon" size='1.3em'/>
</div>

    </div>
  )
}

export default Note