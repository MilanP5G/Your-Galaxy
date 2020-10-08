import React from 'react';
import Phone from './Phone'
import { Link } from 'react-router-dom'
import '../../styling/Phones.css'

const Phones = props => {

    return(
      <div>
        {props.phones.phones.map(phone => (
          <Phone phone={phone} key={phone.id} />
        ))}
        <Link to='/phones/add' >
            <button className='add-phone'>+</button>
        </Link>
      </div>
    );
};

export default Phones
