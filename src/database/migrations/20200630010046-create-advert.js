module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Adverts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
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
      vehicleId: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'Vehicles',
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
  down: (queryInterface) => queryInterface.dropTable('Adverts'),
};
