'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 'afcf7b87-44b2-4f6e-a802-14bc63ba1db3',
          firstName: 'Fred',
          lastName: 'Mucyo',
          email: 'mucyomiller@gmail.com',
          password: 'Otobox100',
          profileImage: 'string',
          roleId: 1,
          about: 'something about the user',
          phoneNumber: '+250780000000',
          phoneNumberTwo: '25078200000000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'e7391faa-698a-4298-8d24-fce2bb1773e3',
          firstName: 'Didas',
          lastName: 'Mbalanya',
          email: 'didasmbalanya@gmail.com',
          password: 'Otobox100',
          profileImage: 'string',
          roleId: 1,
          about: 'something about the user',
          phoneNumber: '+250780000001',
          phoneNumberTwo: '25078200000001',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
