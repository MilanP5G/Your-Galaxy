import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { deletePhone } from '../../actions/PhoneAction'
import { connect } from 'react-redux'
import '../../styling/Phone.css'

class Phone extends Component {

  render() {
    const { phone } = this.props;

    return (
        <div className='phoneCard'>
        <Link to={`/phones/${phone.id}`} >
          <h1 className='phoneTitle'>{phone.title}</h1>
        </Link>
          <br></br>
          <div className='phone-image' >
            <img
              src={phone.image_url}
              onLoad={phone}
              alt=" "
            />
          </div>
          <br></br>
          <div className="dlte-phone-button">
            <button className="delete-phone" onClick={() => this.props.deletePhone(phone)}> Delete </button>
          </div>
        </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return { deletePhone: phone => dispatch(deletePhone(phone))}
}



export default connect(null, mapDispatchToProps)(Phone)
