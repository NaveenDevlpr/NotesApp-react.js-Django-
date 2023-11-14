import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
const AddButton = () => {
  return (
    <Link to='/notes/new'>
        <div className='floating-button'>
            <AddIcon/>
        </div>
    </Link>
   
  )
}

export default AddButton