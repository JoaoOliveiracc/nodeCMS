const Sequelize = require("sequelize");

const connection = new Sequelize("node_cms", "root" ,"", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;