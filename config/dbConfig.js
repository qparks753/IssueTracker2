/* eslint-disable no-undef */
require("dotenv").config();

module.exports = {
    HOST: REACT_APP_HOST,
    USER: REACT_APP_USER,
    PASSWORD: REACT_APP_PASSWORD,
    DB: REACT_APP_DBNAME,
    dialect: REACT_APP_dialect,

    
    

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };