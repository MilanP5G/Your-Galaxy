import React, { useState } from 'react';
import Phone from './Phone'
import { Link } from 'react-router-dom'
import '../../styling/Phones.css'

const Phones = props => {
  const [state, setState] = useState({
    search: ''
  })

  const updatedSearch = (event) => {
    setState({
      search: event.target.value
    })
  }


    return(
      <div>
       <div>
       <input
         type='text'
         className='phones-search'
         value={state}
         onChange={updatedSearch}
        />
        {props.phones.phones.map(phone => (
          <Phone phone={phone} key={phone.id} />
        ))}
        <Link to='/phones/add' >
            <button className='add-phone'>+</button>
        </Link>
      </div>
     </div>
    );
};

export default Phones
