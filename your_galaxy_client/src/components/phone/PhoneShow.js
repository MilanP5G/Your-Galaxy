import React from 'react'
import '../../styling/PhoneShow.css'

const PhoneShow = ({ match, phones }) => {

    if (phones.phones.length === 0) return null
    const phone = phones.phones.find( phone => phone.id === parseInt(match.params.id))

    return (
      <div className='phone-show-card'>
        <h1>{phone.title}</h1>
        <div className='phone-show-image'>
          <img
            src={phone.image_url}
            alt=' '
          />
        </div>
        <div className='phone-pros-cons' >
          <h2>Pros:</h2>
          <p>{phone.pros}</p>
          <h2>Cons:</h2>
          <p>{phone.cons}</p>
        </div>
      </div>
    )
}


export default PhoneShow
