'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        name: 'admin',
        description: 'Application administrator ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'user',
        description: 'clients',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
