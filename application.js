const WebSocket = require('ws');
const socket = new WebSocket("wss://stream.aisstream.io/v0/stream")

socket.onopen = function (_) {
    let subscriptionMessage = {
        Apikey: "f5460bebc86fe331f75aec66327badaab1ea272f",
        BoundingBoxes: [[[-90, -180], [90, 180]]],
        FiltersShipMMSI: ["211627650"], // Optional!
        FilterMessageTypes: ["PositionReport"] // Optional!
    }
    socket.send(JSON.stringify(subscriptionMessage));
};

socket.onmessage = function (event) {
    let aisMessage = JSON.parse(event.data)
    console.log(aisMessage)
};