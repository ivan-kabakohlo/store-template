module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.sequelize.transaction((transaction) =>
            Promise.all([
                queryInterface.addColumn(
                    'products',
                    'userId',
                    {
                        type: Sequelize.UUID,
                        references: {
                            model: 'users',
                            key: 'id',
                        },
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    },
                    { transaction },
                ),
                queryInterface.addColumn(
                    'comments',
                    'userId',
                    {
                        type: Sequelize.UUID,
                        references: {
                            model: 'users',
                            key: 'id',
                        },
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    },
                    { transaction },
                ),
                queryInterface.addColumn(
                    'comments',
                    'productId',
                    {
                        type: Sequelize.INTEGER,
                        references: {
                            model: 'products',
                            key: 'id',
                        },
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    },
                    { transaction },
                ),
            ]),
        ),
    down: (queryInterface) =>
        queryInterface.sequelize.transaction((transaction) =>
            Promise.all([
                queryInterface.removeColumn('comments', 'productId', { transaction }),
                queryInterface.removeColumn('comments', 'userId', { transaction }),
                queryInterface.removeColumn('products', 'userId', { transaction }),
            ]),
        ),
}
