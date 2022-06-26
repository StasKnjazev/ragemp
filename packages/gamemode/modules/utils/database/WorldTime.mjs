
// IMPORTS

import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.mjs";

// CODE

const WorldTime = sequelize.define('world_time', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    year: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },

    month: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },

    day: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },

    hour: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },

    minute: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

WorldTime.sync({ alter: true });

async function getTime() {
    let found = await WorldTime.findAll();

    for(let i = 0; i < parseInt(found.length + 15); i++) {
        if(found[i] != undefined) {
            if(found[i].id != 1) {
                await WorldTime.destroy({ where: { id: found[i].id } });
            }
        }
    }

    found = await WorldTime.findAll();
    if(found.length == 0) {
        await WorldTime.create({
            id: 1,
            year: 2010,
            month: 1,
            day: 1,
            hour: 12,
            minute: 0
        });
    }
}

getTime();

export default { name: "WorldTime", handle: WorldTime };