import { SET_STOCK_DATA } from "./constants";

export const setStockData = (stockData) => {
    return {
        type: SET_STOCK_DATA,
        payload: stockData
    }
};