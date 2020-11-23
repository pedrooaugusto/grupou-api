const entityName = require('path').basename(__filename.replace('.model', ''), '.js')

module.exports = (sequelize, Sequelize) => {
	const Entiy = sequelize.define(entityName, {
		numero: {
			type: Sequelize.STRING,
		}
	}, {
		tableName: entityName
	});

	Entiy.associate = {
		with: ['usuario'],
		callback: (usuario, disciplina, turma) => {
            Entiy.belongsTo(usuario, {
                foreignKey: {
                    name: 'id_usuario',
                },
                as: 'usuario'
            })
		}
	}
	return Entiy;
}