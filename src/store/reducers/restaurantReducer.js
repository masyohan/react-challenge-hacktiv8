const initialState = {
    restaurants : [],
    restaurant: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_RESTAURANTS":
            return { ...state, restaurants: action.payload.restaurants };
        case "GET_RESTAURANT":
            return { ...state, restaurant: action.payload.restaurant };
        default:
            return state;
    }
};