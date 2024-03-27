import React from 'react'
import { useState } from 'react'

function AddNote({ handleAddNote }) {
    const [noteText, setNoteText] = useState("");
    const characterLimit = 200;


    const handleChage = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    };
    const handleSaveClick = () => {
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }
        handleAddNote(noteText);
    };
  return (
    <div className='note new'>
        <textarea placeholder='type to add a new  note..'
         cols="8"
          rows="10"
          value={noteText}
          onChange={handleChage}>
          </textarea>
          <div className="note-footer">
            <small>{characterLimit - noteText.length } remaining</small>
            <button className='save' onClick={handleSaveClick}>save</button>
          </div>
    </div>
  )
}

export default AddNote