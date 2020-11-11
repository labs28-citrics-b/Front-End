import React from 'react'
import { CardBody, CardTitle, CardText, CardImg } from 'reactstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function UserProfile(props) {
  const { item } = props
  return (
    <div
      class="body"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      <div
        className="card"
        style={{
          width: '30%',
          backgroundColor: '#05386B',
          alignItems: 'center',
          color: '#EDF4E1',
          fontFamily: 'Tajawal, sans-serif',
          marginTop: '5%',
        }}
      >
        <CardImg
          src="https://images.unsplash.com/photo-1431887915357-68b819fae322?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
          top
          width="100%"
          alt="Username"
        />
        <CardBody>
          <CardTitle tag="h3"> Name Here </CardTitle>
        </CardBody>
      </div>
      <div
        class="card"
        style={{
          width: '50%',
          alignItems: 'center',
          backgroundColor: '#5BDB95',
          borderColor: '#05386B',
          color: '#05386B',
          fontFamily: 'Tajawal, sans-serif',
          marginTop: '5%',
          marginLeft: '5%',
        }}
      >
        <CardBody alignItems="center">
          <CardTitle tag="h2"> User Preferences </CardTitle>
          <CardText> </CardText>
        </CardBody>
      </div>

      <div
        class="card"
        style={{
          width: '30%',
          backgroundColor: '#5BDB95',
          alignItems: 'center',
          color: '#05386B',
          borderColor: '#05386B',
          fontFamily: 'Tajawal, sans-serif',
          marginTop: '5%',
          marginRight: '5%',
        }}
      >
        <CardBody alignItems="center">
          <CardTitle tag="h2"> About Me </CardTitle>
          <CardText> </CardText>
        </CardBody>
      </div>

      <div
        class="card"
        style={{
          width: '50%',
          alignItems: 'center',
          backgroundColor: '#05386B',
          color: '#EDF4E1',
          fontFamily: 'Tajawal, sans-serif',
          marginTop: '5%',
        }}
      >
        <CardBody alignItems="center">
          <CardTitle tag="h2"> Favorites </CardTitle>
          <CardText> </CardText>
        </CardBody>
      </div>
    </div>
  )
}
export default UserProfile