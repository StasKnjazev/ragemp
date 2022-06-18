
// IMPORTS

import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.mjs";

// CODE

const Accounts = sequelize.define('accounts', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});

Accounts.sync({ alter: true });

export default { name: "Accounts", handle: Accounts };