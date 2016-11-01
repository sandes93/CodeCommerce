'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Order = db.define('order', {

    status: {
        type: Sequelize.ENUM('incomplete', 'complete'),
        defaultValue: 'incomplete'
    },
    items: {
        type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER)),
        allowNull: false
    },
    totalCost: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
    }

});

//order belongsto user
// order hasmany product??
module.exports = Order;