import React from 'react'
import {Link} from 'react-router-dom'

const ListItems = ({notes}) => {
  return (
    <Link to={`/notes/${notes.id}`}>
      <div className='notes-list-item'>
        {notes.body}
      </div>
    </Link>
    
  )
}

export default ListItems