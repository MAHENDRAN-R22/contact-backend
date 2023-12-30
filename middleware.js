const constants = require("../routes/constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation failed",
        message: err.message,
        stackTrace: err.stack,
      });
     
    case constants.UNAUTHORZIED:
      res.json({
        title: "Unathorsized",
        message: err.message,
        stackTrace: err.stack,
      });
    
    case constants.FORBIDDEN:
      res.json({
        title: "forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.NOT_FOUND:
      res.json({
        title: "not found",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERR:
      res.json({
        title: "server error",
        message: err.message,
        stackTrace: err.stack,
      });
      default:
        console.log("no error found")
      break;
  }
};

module.exports = errorHandler;
