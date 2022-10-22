import { SET_STOCK_DATA } from "../constants";

const initialState = [];

const StockReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STOCK_DATA:
          return {
            stocks: action.payload
          };
        default:
          return state;
    }
};

export default StockReducer;