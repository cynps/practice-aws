"use strict";
const moment = require("moment");

exports.handler = (event, context, callback) => {
    console.log("Hello world from lambda");
    callback(null, moment().utcOffset(9).format("YYYY-MM-DD HH:mm:ss"));
}
