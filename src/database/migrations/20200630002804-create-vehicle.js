module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
      },
      model: {
        type: Sequelize.STRING,
      },
      icon: {
        type: Sequelize.STRING,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      mileage: {
        type: Sequelize.INTEGER,
      },
      sellingPrice: {
        type: Sequelize.INTEGER,
      },
      rentingPrice: {
        type: Sequelize.INTEGER,
      },
      ownerId: {
        type: Sequelize.DataTypes.UUID,
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      makeId: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'VehicleMakes',
          key: 'id',
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'VehicleCategories',
          key: 'id',
        },
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
  down: (queryInterface) => queryInterface.dropTable('Vehicles'),
};
