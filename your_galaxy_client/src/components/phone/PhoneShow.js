import React from 'react'
// import { useParams } from 'react-router-dom'
// import Phones from './Phones'


const PhoneShow = ({ match, phones }) => {
  // const { phoneId } = useParams()

  // if(phones.phones.length === 0) return null
  // const phone = phones.phones.find((phone) => phone.id === parseInt(phoneId))

  const phone = phones.phones.find( p => p.id === parseInt(match.params.id))
  if (phones.phones.length === 0) return null



  return (
    <div>
      {phone.title}
    </div>
  )

}

export default PhoneShow
