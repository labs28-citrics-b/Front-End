import React, { useState, useEffect } from 'react'
//import { useParams, useHistory } from "react-router-dom";
//import { Button, Form, Label, Input, Row, Col } from 'reactstrap';
import { CardBody, CardTitle, CardText, CardImg } from 'reactstrap'
import CityCard from '../../common/CityCard'

//state passed down from props from FavoritesList
export default function FavoriteDetails(props) {
  //destructuring object
  const { user } = props // same as const user = props.user
  const { city } = props // same as const city = props.city
  
  //this if statement is in place for edge case where user data doesn't exist
  if (!user) {
    return null
  }

  return (
    <div className="FavoriteDetails">
      <div className="details">
        {/* wrapping the city cards in unordered list tag*/ }
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
          className="favoriteCities"
        >
          {/*using map to create new array with cities and each city is wrapped in a city card */}
          {user.favoriteCities.map(city => (
            <li>
              {' '}
              <CardBody>
                <CityCard city={city.city} favorite={true} />
              </CardBody>
            </li>
          ))}
        </ul>

        
      </div>
    </div>
  )
}
