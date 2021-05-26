import React from 'react'
import { CardBody, CardTitle, CardText, CardImg } from 'reactstrap'
import { getUserData } from '../../../state/actions/index.js'
import { connect } from 'react-redux'
import UserPreferencesList from './UserPreferencesList'
import FavoritesList from './FavoritesList'

//state being passed down through props from RenderProfileListPage
function UserProfile(props) {
  const { user } = props
  if (user == null) {
    return null
  }
  return (
    <div
      class="body"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        paddingBottom: "10%"
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
          borderRadius: "1rem"

        }}
      >
        <CardImg
          src="https://images.unsplash.com/photo-1605116793941-efb2999824e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
          width="100%"
          alt="Username"
        />

        <CardBody>
          
          <CardTitle 
          tag="h3" 
          style={{
          color: '#EDF4E1', 
          padding: "5%",
          paddingLeft: '25%',
          paddingTop: '10%'}}> 
          {user.username} 
          </CardTitle>
          
        </CardBody>
      </div>
      <div
        class="card"
        style={{
          width: '50%',
          alignItems: 'center',
          backgroundColor: '#05386B',
          borderColor: '#05386B',
          color: '#05386B',
          fontFamily: 'Tajawal, sans-serif',
          marginTop: '5%',
          marginLeft: '5%',
          borderRadius: "1rem"
        }}
      >
        {/* using inline CSS to style components*/}
        <CardBody alignItems="center">

          <CardTitle 
          tag="h2" 
          style={{ 
          paddingTop: "3%",
          paddingBottom: "5%",
          paddingRight: "5%", 
          paddingLeft: "5%",
          
          }}> 

          User Preferences 

          </CardTitle>

          <CardText 

          style={{ 
          paddingTop: "3%",
          paddingBottom: "5%", 
          paddingRight: "5%", 
          paddingLeft: "5%"}}>
            {' '}
        
          <UserPreferencesList />

          </CardText>

        </CardBody>

      </div>

      
      <div
        class="card"
        style={{
          width: '90%',
          alignItems: 'center',
          backgroundColor: '#5BDB95',
          color: '#EDF4E1',
          fontFamily: 'Tajawal, sans-serif',
          marginTop: '5%',
          borderRadius: "1rem",
          borderColor: '#05386B'
        }}
      >
        <CardBody 
        alignItems="center" 
        style={{paddingBottom: "5%"}}>
          <CardTitle 
          tag="h2"
          style={{
            paddingTop: "5%",
            paddingBottom: "5%", 
            paddingRight: "5%", 
            paddingLeft: "40%", }}>
            Favorites Cities 
          </CardTitle>
          <CardText>
            {' '}
          <FavoritesList />{' '}
          </CardText>
        </CardBody>
      </div>
    </div>
  )
}

//To tell connect which pieces of our state we want to bring into this component
//It takes in sstate as a parameter, returns object where properties can be passed to props
//We have access to all our state via the state argument but the component onlt receives 
//the pieces of state that we turn out of mapStateToProps
const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.user,
  }
}


//function currying and export the component
//when we use action creators in our connected components, we first import the action creator
//Then we pass the action creator into the connect function
export default connect(mapStateToProps, { getUserData })(UserProfile)
