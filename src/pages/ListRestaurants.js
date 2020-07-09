import React, { useEffect } from 'react';
import RestoCard from '../components/RestoCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import { connect } from "react-redux";
import { getRestaurants } from "../store/actions/restaurantAction";

function ListRestaurants(props) {
    // const [dataResto, restoFunction] = useFetchRestaurants();
    // const { restaurants, city, loading, error } = dataResto;
    // const { setCity } = restoFunction;
    useEffect(() => {
        props.getRestaurants()
    }, [])
    return (
        <div className="flex flex-col">
            <div className="flex justify-center">
                <form>
                    <div className="relative">
                        <select  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option value="74">Jakarta</option>
                            <option value="170">Bali</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex justify-center flex-wrap py-5">
                {props.restaurants.map(({restaurant}) => {
                return (
                    <RestoCard restaurant={restaurant} key={restaurant.id}/>
                )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ restaurants: state.restaurantReducer.restaurants });
const mapDispatchToProps = { getRestaurants };

export default connect(mapStateToProps, mapDispatchToProps)(ListRestaurants);
