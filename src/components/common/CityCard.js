import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { cityToCompare, removeCityFromCompare } from '../../state/actions'
import { formatLongNum, formatCurrency } from '../../helper/formatNumbers'
import { addFavorite, removeFavorite } from '../../state/actions/userActions'

import {
  HeartOutlined,
  HeartFilled,
  PlusOutlined,
  CloseOutlined,
} from '@ant-design/icons'

const CityCard = props => {
  const [isFavorite, setFavorite] = useState(false)
  const [comparisons, setComparisons] = useState([])

  const toggleFavorite = e => {
    e.stopPropagation()
    if (props.fave === true) {
      setFavorite(false)
      props.removeFavorite(props.city.cityId)
    } else {
      setFavorite(true)
      props.addFavorite(props.city.cityId)
    }
  }

  useEffect(() => {
    var compareIds = []
    props.comparingCities.forEach(city => {
      compareIds.push(city.cityId)
    })
    setComparisons(compareIds)
  }, [props.comparingCities])

  if (props.compare === false) {
    return (
      <div
        style={{
          backgroundImage: `url("${props.city.imageUrl}")`,
        }}
        className="city-card"
      >
        {comparisons.includes(props.city.cityId) ? null : (
          <PlusOutlined
            className="card-button add"
            onClick={e => {
              e.preventDefault()
              props.cityToCompare(props.city.cityId)
            }}
          />
        )}
        <div className="city-card-header">
          <h3 className="city-name">
            {props.city.cityName}, {props.city.stateCode}
          </h3>
          {props.fave === true || isFavorite === true ? (
            <HeartFilled className="toggleFavorite" onClick={toggleFavorite} />
          ) : (
            <HeartOutlined
              className="toggleFavorite"
              onClick={toggleFavorite}
            />
          )}
        </div>
        <div className="city-attributes">
          <div className="attribute">
            <p className="attribute-title">Population: </p>{' '}
            <p className="attribute-stat">
              {formatLongNum(props.city.population)}
            </p>
          </div>
          <div className="attribute">
            <p className="attribute-title">Rent: </p>
            <p className="attribute-stat">{formatCurrency(props.city.rent)}</p>
          </div>
          <div className="attribute">
            <p className="attribute-title">House Cost: </p>{' '}
            <p className="attribute-stat">
              {formatCurrency(props.city.averageHomeCost)}
            </p>
          </div>
          <div className="attribute">
            <p className="attribute-title">Cost of Living Index: </p>{' '}
            <p className="attribute-stat">{props.city.costOfLivingIndex}</p>
          </div>
        </div>
      </div>
    )
  } else if (props.favorite === true) {
    return (
      <div
        style={{
          backgroundImage: `url("${props.city.imageUrl}")`,
        }}
        className="city-card"
      >
        {comparisons.includes(props.city.cityId) ? null : (
          <PlusOutlined
            className="card-button add"
            onClick={e => {
              e.preventDefault()
              props.cityToCompare(props.city.cityId)
            }}
          />
        )}
        <div className="city-card-header">
          <h3 className="city-name">
            {props.city.cityName}, {props.city.stateCode}
          </h3>
          <HeartFilled
            className="toggleFavorite"
            onClick={evt => {
              evt.preventDefault()
              props.removeFavorite(props.city.cityId)
            }}
          />
        </div>
        <div className="city-attributes">
          <div className="attribute">
            <p className="attribute-title">Population: </p>{' '}
            <p className="attribute-stat">
              {formatLongNum(props.city.population)}
            </p>
          </div>
          <div className="attribute">
            <p className="attribute-title">Rent: </p>
            <p className="attribute-stat">{formatCurrency(props.city.rent)}</p>
          </div>
          <div className="attribute">
            <p className="attribute-title">House Cost: </p>{' '}
            <p className="attribute-stat">
              {formatCurrency(props.city.averageHomeCost)}
            </p>
          </div>
          <div className="attribute">
            <p className="attribute-title">Cost of Living Index: </p>{' '}
            <p className="attribute-stat">{props.city.costOfLivingIndex}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div
        style={{
          backgroundImage: `url("${props.city.imageUrl}")`,
        }}
        className="city-card"
      >
        <CloseOutlined
          className="card-button remove"
          onClick={e => {
            e.preventDefault()
            props.removeCityFromCompare(props.city.cityId)
          }}
        />

        <div className="city-card-header">
          <h3 className="city-name">
            {props.city.cityName}, {props.city.stateCode}
          </h3>
          {props.fave === true || isFavorite === true ? (
            <HeartFilled className="toggleFavorite" onClick={toggleFavorite} />
          ) : (
            <HeartOutlined
              className="toggleFavorite"
              onClick={toggleFavorite}
            />
          )}
        </div>
        <div className="city-attributes">
          <div className="attribute">
            <p className="attribute-title">Population: </p>{' '}
            <p className="attribute-stat">
              {formatLongNum(props.city.population)}
            </p>
          </div>
          <div className="attribute">
            <p className="attribute-title">Rent: </p>
            <p className="attribute-stat">{formatCurrency(props.city.rent)}</p>
          </div>
          <div className="attribute">
            <p className="attribute-title">House Cost: </p>{' '}
            <p className="attribute-stat">
              {formatCurrency(props.city.averageHomeCost)}
            </p>
          </div>
          <div className="attribute">
            <p className="attribute-title">Cost of Living Index: </p>{' '}
            <p className="attribute-stat">{props.city.costOfLivingIndex}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    comparingCities: state.comparingCities,
    user: state.user,
  }
}

export default connect(mapStateToProps, {
  cityToCompare,
  removeCityFromCompare,
  removeFavorite,
  addFavorite,
})(CityCard)
