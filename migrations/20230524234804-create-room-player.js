'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoomPlayers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      roomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: "Rooms",
          keys: "id",
        },
      },
      playerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: "Users",
          keys: "id",
        },
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RoomPlayers');
  }
};