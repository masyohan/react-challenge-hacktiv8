import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div className="mx-2 my-5 max-w-sm w-full lg:w-1/4 rounded overflow-hidden shadow-lg">
        <Link to={`/restaurant/${props.restaurant.id}`}>
          <img className="w-full" src={props.restaurant.thumb} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.restaurant.name}</div>
            <p className="text-gray-700 text-base">
              {props.restaurant.location.address}
            </p>
          </div>
        </Link>
        </div>
    )
}