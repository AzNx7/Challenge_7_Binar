'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Room.hasMany(models.RoomPlayer, {
        foreignKey: 'roomId',
      })
    }
  }
  Room.init(
    {
    scores: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM(['PLAYING','OPEN', 'ENDING']),
      allowNull: false,
      defaultValue: "OPEN",
    }
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};