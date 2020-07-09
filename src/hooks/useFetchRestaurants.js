import { useState, useEffect } from 'react';
const url = 'https://developers.zomato.com/api/v2.1/search?count=18&entity_type=city&entity_id=';

export default function useFetchRestaurants() {
    const [restaurants, setRestaurants] = useState([]);
    const [city, setCity] = useState('74');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchRestaurants = async (curCity) => {
        const endpoint = url + curCity;
        const options = {
            method: 'GET',
            headers: {
                'user-key': '4b45c9658ddc61b090b359c313db5f7f'
            },
        }
        setLoading(true);
        try{
            const fetchResto = await fetch(endpoint, options);
            const { restaurants } = await fetchResto.json();
            setRestaurants(restaurants);
        }catch(err){
            setError(err);
        }finally{
            setLoading(false);
        }
    }
    
    useEffect(() => {
        fetchRestaurants(city);
    }, [city])

    return [
        {
            restaurants, city, loading, error
        },
        {
            setCity
        }
    ]

}