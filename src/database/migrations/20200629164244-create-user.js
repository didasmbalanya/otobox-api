module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      profileImage: {
        type: Sequelize.STRING,
      },
      about: {
        type: Sequelize.DataTypes.TEXT,
      },
      tokenVersion: {
        type: Sequelize.INTEGER,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        unique: true,
      },
      phoneNumberTwo: {
        type: Sequelize.STRING,
        unique: true,
      },
      roleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2,
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'Roles',
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
  down: (queryInterface) => queryInterface.dropTable('Users'),
};


