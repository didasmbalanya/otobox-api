module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fromId: {
        type: Sequelize.DataTypes.UUID,
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      toId: {
        type: Sequelize.DataTypes.UUID,
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'Users',
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
  down: (queryInterface) => queryInterface.dropTable('Messages'),
};
