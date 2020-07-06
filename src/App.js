import React, { Component } from 'react';
import RestoCard from './components/RestoCard'

class App extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: []
    }
  }

  fetchRestaurants = async () => {
    const url = "https://developers.zomato.com/api/v2.1/search?entity_type=city&entity_id=74"
    const fetchResto = await fetch(url, {
      method: 'GET',
      headers: {
        'user-key': '4b45c9658ddc61b090b359c313db5f7f'
      },
    })
    const { restaurants } = await fetchResto.json()
    this.setState({
      restaurants
    })
  }

  componentDidMount() {
    this.fetchRestaurants()
  }

  render() {
    return (
      <div className="flex justify-center flex-wrap py-5">
        {this.state.restaurants.map(({restaurant}) => {
          return (
            <RestoCard restaurant={restaurant} key={restaurant.id}/>
          )
        })}
      </div>
    )
  }
}

export default App;
