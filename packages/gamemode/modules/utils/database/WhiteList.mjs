
// IMPORTS

import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.mjs";

// CODE

const WhiteList = sequelize.define('whitelist', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    socialClubID: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

WhiteList.sync({ alter: true });

export default { name: "WhiteList", handle: WhiteList };