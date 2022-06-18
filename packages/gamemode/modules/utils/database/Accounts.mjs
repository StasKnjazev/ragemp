
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
    },

    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    username: {
        type: DataTypes.STRING(25),
        allowNull: false
    },

    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    regSocialClubName: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    regSocialClubID: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },

    hwSerial: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    regIP: {
        type: DataTypes.STRING(55),
        allowNull: false
    },

    lastIP: {
        type: DataTypes.STRING(55),
        allowNull: false
    },

    regDate: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },

    lastDate: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

Accounts.sync({ alter: true });

export default { name: "Accounts", handle: Accounts };