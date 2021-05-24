import React, { useState, useEffect } from 'react'
//import { useParams, useHistory } from "react-router-dom";
//import { Button, Form, Label, Input, Row, Col } from 'reactstrap';
import { CardBody, CardTitle, CardText, CardImg } from 'reactstrap'
import CityCard from '../../common/CityCard'

export default function FavoriteDetails(props) {
  const { user } = props
  const { city } = props
  
  if (!user) {
    return null
  }

  return (
    <div className="FavoriteDetails">
      <div className="details">
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
          className="favoriteCities"
        >
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
