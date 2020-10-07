import React, { Component } from 'react'
import { deletePhone } from '../../actions/PhoneAction'
import { connect } from 'react-redux'
import '../../styling/Phone.css'

class Phone extends Component {

  render() {
    const { phone } = this.props;

    return (
        <div className='phoneCard'>
          <h1 className='phoneTitle'>{phone.title}</h1>
          <br></br>
          <div className='phone-image' >
            <img
              src={phone.image_url}
              alt=" "
            />
          </div>
          <br></br>
          {phone.pros}
          <br></br>
          {phone.cons}
          <br></br>
          <button onClick={() => this.props.deletePhone(phone)}> Delete </button>
        </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return { deletePhone: phone => dispatch(deletePhone(phone))}
}



export default connect(null, mapDispatchToProps)(Phone)
