import { numberCellFormatter } from "../../lib/functions";
export const getColumnsData = () => {
    var columnDefs = [
        {
            headerName: 'Product',
            field: 'product',
            enableRowGroup: false,
            enablePivot: false,
            hide: false,
        },
        {
            headerName: 'Current',
            field: 'current',
            width: 200,
            aggFunc: 'sum',
            enableValue: true,
            cellClass: 'number',
            valueFormatter: numberCellFormatter,
            cellRenderer: (params) => {
            if(parseInt(params.data.previous) < parseInt(params.value)) {
                return <><span style={{color: 'green', fontWeight: 'bold'}}>&#8593;{parseInt(params.value) - parseInt(params.data.previous)}</span> {params.value}</>
            }
            else if(parseInt(params.data.previous) > parseInt(params.value)) {
                return <><span style={{color: 'red', fontWeight: 'bold'}}>&#8595;{parseInt(params.data.previous) - parseInt(params.value)}</span> {params.value}</>
            }
            else {
               return params.value;
            }
            }
        },
        {
            headerName: 'Previous',
            field: 'previous',
            width: 200,
            enableValue: true,
            valueFormatter: numberCellFormatter,
        },
        {
            headerName: 'Deal Type',
            field: 'dealType',
            enableRowGroup: true,
            enablePivot: true,
        },
        {
            headerName: 'Bid',
            field: 'bidFlag',
            enablePivot: true,
            width: 100,
        },
        {
            headerName: 'PL 1',
            field: 'pl1',
            width: 200,
            enableValue: true,
            cellClass: 'number',
            valueFormatter: numberCellFormatter
        },
        {
            headerName: 'PL 2',
            field: 'pl2',
            width: 200,
            aggFunc: 'sum',
            enableValue: true,
            cellClass: 'number',
            valueFormatter: numberCellFormatter
        },
        {
            headerName: 'Gain-DX',
            field: 'gainDx',
            width: 200,
            aggFunc: 'sum',
            enableValue: true,
            cellClass: 'number',
            valueFormatter: numberCellFormatter
        },
        {
            headerName: 'SX / PX',
            field: 'sxPx',
            width: 200,
            aggFunc: 'sum',
            enableValue: true,
            cellClass: 'number',
            valueFormatter: numberCellFormatter
        },
        {
            headerName: '99 Out',
            field: '_99Out',
            width: 200,
            aggFunc: 'sum',
            enableValue: true,
            cellClass: 'number',
            valueFormatter: numberCellFormatter
        },
        {
            headerName: 'Submitter ID',
            field: 'submitterID',
            width: 200,
            aggFunc: 'sum',
            enableValue: true,
            cellClass: 'number',
            valueFormatter: numberCellFormatter
        },
        {
            headerName: 'Submitted Deal ID',
            field: 'submitterDealID',
            width: 200,
            aggFunc: 'sum',
            enableValue: true,
            cellClass: 'number',
            valueFormatter: numberCellFormatter
        }
    ];
    return columnDefs;
};