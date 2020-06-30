module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('VehicleCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      icon: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface) => queryInterface.dropTable('VehicleCategories'),
};
