exports.up = (pgm) => {
    pgm.createTable('users', {
        id: {
            type: 'serial',
            primaryKey: true
        },
        name: {
            type: 'varchar(255)',
            notNull: true
        },
        phone: {
            type: 'varchar(10)',
            notNull: true,
            unique: true
        }
    });
};

exports.down = (pgm) => {
    pgm.dropTable('users');
};