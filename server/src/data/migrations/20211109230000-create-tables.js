module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS pgcrypto;').then(() =>
            queryInterface.sequelize.transaction((transaction) =>
                Promise.all([
                    queryInterface.createTable(
                        'users',
                        {
                            id: {
                                allowNull: false,
                                autoIncrement: false,
                                primaryKey: true,
                                type: Sequelize.UUID,
                                defaultValue: Sequelize.literal('gen_random_uuid()'),
                            },
                            email: {
                                allowNull: false,
                                type: Sequelize.STRING,
                                unique: true,
                            },
                            password: {
                                allowNull: false,
                                type: Sequelize.STRING,
                            },
                            username: {
                                allowNull: false,
                                type: Sequelize.STRING,
                            },
                            about: Sequelize.STRING,
                            avatarUrl: Sequelize.STRING,
                            createdAt: Sequelize.DATE,
                            updatedAt: Sequelize.DATE,
                        },
                        { transaction },
                    ),
                    queryInterface.createTable(
                        'products',
                        {
                            id: {
                                allowNull: false,
                                autoIncrement: true,
                                primaryKey: true,
                                type: Sequelize.INTEGER,
                            },
                            name: {
                                allowNull: false,
                                type: Sequelize.STRING,
                            },
                            description: Sequelize.STRING,
                            price: {
                                allowNull: false,
                                type: Sequelize.DECIMAL(12, 2),
                            },
                            imageUrl: Sequelize.STRING,
                            createdAt: Sequelize.DATE,
                            updatedAt: Sequelize.DATE,
                        },
                        { transaction },
                    ),
                    queryInterface.createTable(
                        'comments',
                        {
                            id: {
                                allowNull: false,
                                autoIncrement: true,
                                primaryKey: true,
                                type: Sequelize.INTEGER,
                            },
                            text: {
                                allowNull: false,
                                type: Sequelize.STRING,
                            },
                            createdAt: Sequelize.DATE,
                            updatedAt: Sequelize.DATE,
                        },
                        { transaction },
                    ),
                ]),
            ),
        ),
    down: (queryInterface) =>
        queryInterface.sequelize.transaction((transaction) =>
            Promise.all([
                queryInterface.dropTable('users', { transaction }),
                queryInterface.dropTable('products', { transaction }),
                queryInterface.dropTable('comments', { transaction }),
            ]),
        ),
}
