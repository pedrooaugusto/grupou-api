const entityName = require('path').basename(__filename.replace('.model', ''), '.js')

module.exports = (sequelize, Sequelize) => {
	const Entiy = sequelize.define(entityName, {
		nome_completo: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING(50),
		},
		ativo: {
			type: Sequelize.BOOLEAN,
		},
	}, {
		tableName: entityName
	});

	Entiy.associate = {
		with: ['aluno', 'questao', 'professor'],
		callback: (aluno, questao, professor) => {
			Entiy.hasOne(aluno, {
                foreignKey: {
                    name: 'id_usuario',
                },
                as: 'aluno'
			})

			Entiy.hasOne(professor, {
                foreignKey: {
                    name: 'id_usuario',
                },
                as: 'professor'
			})

			Entiy.hasMany(questao, {
                foreignKey: {
                    name: 'id_usuario',
                },
                as: 'questoes'
            })
		}
	}
	return Entiy;
}