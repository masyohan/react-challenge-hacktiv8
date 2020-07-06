import React, { Component } from 'react';

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
            <div key={restaurant.id} className="mx-2 my-5 max-w-sm w-1/3 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={restaurant.thumb} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{restaurant.name}</div>
              <p className="text-gray-700 text-base">
                {restaurant.location.address}
              </p>
            </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
