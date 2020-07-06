import React, { Component } from 'react';

class RestoCard extends Component {
    
    render() {
        return (
            <div key={this.props.restaurant.id} className="mx-2 my-5 max-w-sm w-1/4 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={this.props.restaurant.thumb} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{this.props.restaurant.name}</div>
              <p className="text-gray-700 text-base">
                {this.props.restaurant.location.address}
              </p>
            </div>
            </div>
        )
    }
}

export default RestoCard;