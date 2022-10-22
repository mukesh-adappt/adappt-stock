import React, { useEffect } from "react";
import { getColumnsData } from "./utils";
import {AgGridReact} from 'ag-grid-react';
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setStockData } from "../../redux/actions";

const StockGrid = () => {
    const socket = io.connect("http://localhost:3001");
    const {
        stocks = []
    } = useSelector((state) => state);
    
    const dispatch = useDispatch();
    useEffect(() => {
        socket.on("api_data", (data) => {
            dispatch(setStockData(data));
        });
    }, [socket]);
    return (
        <div className="App">
            <h3 style={{
            textAlign: 'center'
            }}>Stock Prices Demo</h3>
            <div
            className="ag-theme-alpine-dark"
            style={{
                height: '500px',
                width: '100%'
            }}>
                <AgGridReact
                columnDefs={getColumnsData()}
                rowData={stocks.stocks}
                suppressAggFuncInHeader= {true}
                animateRows = {true}
                pivotPanelShow = 'always'
                defaultColDef= {{
                    width: 120,
                    sortable: true,
                    resizable: true,
                }}
                autoGroupColumnDef={ {
                    width: 250,
                }}
                />
            </div>
        </div>
    );
};

export default StockGrid;