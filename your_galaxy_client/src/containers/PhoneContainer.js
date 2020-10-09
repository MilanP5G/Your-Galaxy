import React, { Component } from 'react'
import Phones from '../components/phone/Phones'
import PhoneShow from '../components/phone/PhoneShow'
import PhoneForm from '../components/phone/PhoneForm'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPhones } from '../actions/PhoneAction'

class PhonesContainer extends Component {

  componentDidMount(){
    this.props.fetchPhones()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/phones/add' component={PhoneForm} />
          <Route exact path='/phones/:id' render={(props) => <PhoneShow {...props} phones={this.props.phones}/>} />
          <Route exact path='/phones' render={(props) => <Phones {...props} phones={this.props.phones} />} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ phones }) => ({ phones })


export default connect(mapStateToProps, { fetchPhones })(PhonesContainer)
