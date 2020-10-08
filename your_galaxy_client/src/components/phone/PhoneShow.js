import React from 'react'

const PhoneShow = ({ match, phones }) => {

    const phone = phones.phones.filter( phne => phne.id === parseInt(match.params.id))

    return (
      <div>
        <h1>{phone.title}</h1>
        <img
          src={phone.image_url}
          alt=' '
        />
        <p>{phone.pros}</p>
        <p>{phone.cons}</p>
      </div>
    )
}


export default PhoneShow
