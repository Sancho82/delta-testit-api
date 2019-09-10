'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        role: 'STUDENT',
        firstName: 'Rencso',
        lastName: 'Wilson',
        email: 'rencso@gmail.com',
        encryptedPassword: '$2b$10$YGTVVGv4nXw5a8G8aKY7BuVRPTKx4A8jBazvD1stlCu7CgbSRqG52',
        groupId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'MENTOR',
        firstName: 'Peti',
        lastName: 'Stuart',
        email: 'peti@gmail.com',
        encryptedPassword: '$2b$10$xlqlNkxWV0q3aoMW6qQ3i.7tZ355hBZrcW51jZ/.jzok2nFLfsu4.',
        groupId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'ADMIN',
        firstName: 'Brigi',
        lastName: 'Pattinson',
        email: 'brigi@gmail.com',
        encryptedPassword: '$2b$10$31Qos56feOenf9wb.sCL7OjK14cFh3bDQ930TKtWVrUrqLpY1IoP2',
        groupId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'STUDENT',
        firstName: 'Gábor',
        lastName: 'Szaniszló',
        email: 'szani@szani.com',
        encryptedPassword: '$2y$10$W5XOuv/1CJD15ZJ/hzV3Lujda1cwqXGyvjDC0KcjDQfZv105Iju7q',
        groupId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'STUDENT',
        firstName: 'Renátó',
        lastName: 'Rabi',
        email: 'rencso@rencso.com',
        encryptedPassword: '$2y$10$//wT3fPzPq1WRlotDdmdNekiTRsGqvnGYpXjxgCd/ac1MP7Vu8PF6',
        groupId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'STUDENT',
        firstName: 'Péter',
        lastName: 'Szabadi',
        email: 'peti@peti.com',
        encryptedPassword: '$2y$10$CpB.Vy9rrzIwIxpDvsFCl.X8TdRHRRVEqd3LWsSbBUpwVAaEwiVWO',
        groupId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'STUDENT',
        firstName: 'Brigitta',
        lastName: 'Varga',
        email: 'brigi@brigi.com',
        encryptedPassword: '$2y$10$EL01p9iabMHH0GQw0AahGOi6yQ8avevFLcwSFyyIpyX1fyfqXhafi',
        groupId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'STUDENT',
        firstName: 'Anetta',
        lastName: 'Nagy',
        email: 'netti@netti.com',
        encryptedPassword: '$2y$10$UrHpNE/5IWsgcGrot2LSquZwIaPGEhbgwQb9idfebspUGXXLO36BC',
        groupId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'STUDENT',
        firstName: 'Brigitta',
        lastName: 'Savanya',
        email: 'brigi2@brigi2.com',
        encryptedPassword: '$2y$10$nxlqpiM26syC3UyQd0vdXeYSPTZI4JFS7hf/UzpXyaQ1B2xAavNFG',
        groupId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'STUDENT',
        firstName: 'Dániel',
        lastName: 'Adányi',
        email: 'dani@dani.com',
        encryptedPassword: '$2y$10$NVr2HtKDzixtPbiW.TcikuqwWLIdvG4xQ8nVcnAbvGWsQOsRNvKj.',
        groupId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'STUDENT',
        firstName: 'Gergely',
        lastName: 'Papp',
        email: 'geri@geri.com',
        encryptedPassword: '$2y$10$P.1CzcXR5i12nj4KWtOyBOlZms.fh.WBzNk28nEPqdiNq9dwfC12C',
        groupId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
  }
};
