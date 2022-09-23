import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    country: countryAndCapitalsList[0].country,
  }

  onChange = event => {
    const cap = event.target.value
    const item = countryAndCapitalsList.find(eachItem => eachItem.id === cap)
    this.setState({country: item.country})
  }

  render() {
    const {country} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <select className="select" onChange={this.onChange}>
            {countryAndCapitalsList.map(eachItem => (
              <CapitalList key={eachItem.id} capital={eachItem} />
            ))}
          </select>
          <span>is capital of which country?</span>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

const CapitalList = props => {
  const {capital} = props
  const {capitalDisplayText, id} = capital

  return <option value={id}>{capitalDisplayText}</option>
}

export default Capitals
