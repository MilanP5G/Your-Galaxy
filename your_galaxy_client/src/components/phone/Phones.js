import React, { useState } from 'react';
import Phone from './Phone'
import { Link } from 'react-router-dom'
import '../../styling/Phones.css'

const Phones = props => {
  const [state, setState] = useState({
    search: ''
  })

  const updatedSearch = event => {
    setState({
      search: event.target.value
    })
  }

  const filteredPhones = props.phones.phones.filter(
    (phone) => {
      return phone.title.toLowerCase().indexOf(state.search.toLowerCase()) !== -1;
    }
  )


    return(
      <div>
       <div>
        <input
          type='text'
          className='phone-search'
          placeholder="Search Devices"
          value={state.search}
          onChange={updatedSearch}
         />
         <i class="fas fa-search"></i>
        </div>
       <div>
        {filteredPhones.map(phone => (
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
