"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableError = CreateTableError;
function CreateTableError(errorObject) {
  var errorMSG = "";
  for (var key in errorObject) {
    if (errorObject[key] != null && errorObject[key] !== "" && errorObject[key] !== 0) errorMSG += "".concat(errorObject[key], ". ");
  }
  return errorMSG;
}