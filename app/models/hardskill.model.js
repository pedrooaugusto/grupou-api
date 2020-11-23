const entityName = require('path').basename(__filename.replace('.model', ''), '.js')

module.exports = (sequelize, Sequelize) => {
	const Entiy = sequelize.define(entityName, {
		descricao: {
			type: Sequelize.STRING,
		}
	}, {
		tableName: entityName
	});

	Entiy.associate = {
		with: ['aluno', 'questao'],
		callback: (aluno, questao) => {
			Entiy.belongsToMany(aluno, {
				through: 'aluno_hardskill',
				timestamps: false,
				foreignKey: {
					name: 'id_hardskill'
				},
				as: 'alunos'
			})

			Entiy.hasMany(questao, {
                foreignKey: {
                    name: 'id_hardskill',
                },
                as: 'questoes'
			})

		}
	}

	return Entiy;
}