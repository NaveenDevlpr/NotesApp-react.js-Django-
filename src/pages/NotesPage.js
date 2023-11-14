import React from 'react'
import { useState,useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import { Link } from 'react-router-dom';

const NotesPage = ({}) => {

    
    const id=useParams('');
    const [note,setNote]=useState('')

    useEffect(() => {
        const getNote=async()=>{
            if(id.id==='new') return
            const noteData=await fetch(`/api/notes/${id.id}/`);
            const data=await noteData.json();
            setNote(data);
        }

       
        getNote();
        
    }, [id])
 

    const deleteNote=async()=>{
      await fetch(`/api/notes/${id.id}/delete/`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        },
      })
    }

    const updateNote=async()=>{
      await fetch(`/api/notes/${id.id}/update/`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(note)
      })
    }

    const handleSubmit=()=>{
      if(id.id!=='new' && note.body==='')
        {
         deleteNote()
        }else if(id.id!=='new'){
          updateNote();
        }else if(id.id==='new' && note.body!==null)
        {
          addNote();
        }
    }


    const addNote=async()=>{
      await fetch(`/api/notes/create/`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(note)
      })
    }
  return (
    <div className='note'>
      <div className='note-header'>
        <Link to='/' onClick={handleSubmit}>
            <ArrowBackIosNewSharpIcon />
        </Link>
        {id.id!=='new'?(
          <Link to='/' onClick={deleteNote}>
          <button>
            delete
          </button>
          </Link>
        ):
        <Link to='/' onClick={handleSubmit}>
        <button>
          done
        </button>
        </Link>
        }
        
          
      </div>
      <textarea onChange={(e)=>setNote({...note,'body':e.target.value})} value={note.body}></textarea>
    </div>
   
  )
}

export default NotesPage