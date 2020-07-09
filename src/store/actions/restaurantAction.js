const baseURL = "https://developers.zomato.com/api/v2.1";
const options = {
    headers: {
        "user-key": "4b45c9658ddc61b090b359c313db5f7f"
    }
}

export const getRestaurants = () => {
    return async (dispatch, getState) => {
        const fetchRestaurants = await fetch(`${baseURL}/search?entity_type=city&entity_id=74`,options);
        const { restaurants } = await fetchRestaurants.json();
        dispatch({
            type: "GET_RESTAURANTS",
            payload: {
                restaurants
            },
        });
    };
};

export const getRestaurant = (id) => {
    return async (dispatch) => {
        const fetchRestaurant = await fetch(`${baseURL}/restaurant?res_id=${id}`, options);
        const restaurant = await fetchRestaurant.json();
        dispatch({
            type: "GET_RESTAURANT",
            payload: {
                restaurant
            }
        });
    };
};
