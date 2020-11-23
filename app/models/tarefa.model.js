const entityName = require('path').basename(__filename.replace('.model', ''), '.js')

module.exports = (sequelize, Sequelize) => {
	const Entiy = sequelize.define(entityName, {
		enuncidado: {
			type: Sequelize.STRING,
		}
	}, {
		tableName: entityName
	});

	Entiy.associate = {
		with: ['aluno'],
		callback: (aluno, grupo) => {
            Entiy.belongsTo(aluno, {
                foreignKey: {
                    name: 'id_aluno',
                },
                as: 'aluno'
            })
		}
	}
	return Entiy;
}