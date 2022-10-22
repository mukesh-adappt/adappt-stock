const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

/*Making dummy array for client*/
var products = [
  'Palm Oil',
  'Rubber',
  'Wool',
  'Amber',
  'Copper',
  'Lead',
  'Zinc',
  'Tin',
  'Aluminium',
  'Aluminium Alloy',
  'Nickel',
  'Cobalt',
  'Molybdenum',
  'Recycled Steel',
  'Corn',
  'Oats',
  'Rough Rice',
  'Soybeans',
  'Rapeseed',
  'Soybean Meal',
  'Soybean Oil',
  'Wheat',
  'Milk',
  'Coca',
  'Coffee C',
  'Cotton No.2',
  'Sugar No.11',
  'Sugar No.14',
];
var globalRowData;
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createTradeRecord(product) {
  var current = Math.floor(Math.random() * 100000) + 100;
  var previous = current + Math.floor(Math.random() * 10000) - 2000;
  var trade = {
    product: product,
    submitterID: randomBetween(10, 1000),
    submitterDealID: randomBetween(10, 1000),
    dealType: Math.random() < 0.2 ? 'Physical' : 'Financial',
    bidFlag: Math.random() < 0.5 ? 'Buy' : 'Sell',
    current: current,
    previous: previous,
    pl1: randomBetween(100, 1000),
    pl2: randomBetween(100, 1000),
    gainDx: randomBetween(100, 1000),
    sxPx: randomBetween(100, 1000),
    _99Out: randomBetween(100, 1000),
  };
  return trade;
}
function createRowData() {
  globalRowData = [];
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var trade = createTradeRecord(product);
    globalRowData.push(trade);
  }
}
function copyObject(object) {
  // start with new object
  var newObject = {};

  // copy in the old values
  Object.keys(object).forEach(function (key) {
    newObject[key] = object[key];
  });

  return newObject;
}
/*Making dummy array for client*/

io.on("connection", (socket) => {
  globalRowData = [];
  createRowData();
  var a = setInterval(() => {
    var newItems = [];
    for (var i = 0; i < products.length; i++) {
      var itemToUpdate = globalRowData[i];
      var newItem = copyObject(itemToUpdate);
      newItem.previous = newItem.current;
      newItem.current = Math.floor(Math.random() * 100000) + 100;
      newItems.push(newItem);
    }
    socket.emit("api_data", newItems);
  }, 5000);
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
