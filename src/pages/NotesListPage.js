import React from 'react'
import { useState,useEffect } from 'react'
import ListItems from '../components/ListItems'
import AddButton from '../components/AddButton'
const NotesListPage = () => {

const [notes,setNotes]=useState([])

useEffect(() => {
    const getNotes=async()=>{
        const noteData=await fetch('/api/notes/')
        const data=await noteData.json()
        setNotes(data);
    }
    getNotes();
}, [])
  return (
   <div className='notes'>
    <div className='notes-header'>
        <div className='notes-title'>
            <h2>Notes</h2>
        </div>
        <div className='notes-count'>
            <p>{notes.length}</p> 
        </div>
    </div>
        <div className='notes-list'>
        {
            notes.map((e,i)=>{
                return(
                    <ListItems
                    key={i}
                    notes={e}
                    />
                )
            })
        }
        </div>
    <AddButton/>
   </div>
  )
}

export default NotesListPage