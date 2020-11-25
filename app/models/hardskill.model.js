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
		with: ['aluno', 'questao', 'turma', 'disciplina', 'atividade_avaliativa'],
		callback: (aluno, questao, turma, disciplina, atividade_avaliativa) => {
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

			Entiy.belongsToMany(turma, {
				through: 'turma_hardskill',
				timestamps: false,
				foreignKey: {
					name: 'id_hardskill'
				},
				as: 'turmas'
			})

			Entiy.belongsToMany(disciplina, {
				through: 'disciplina_hardskill',
				timestamps: false,
				foreignKey: {
					name: 'id_hardskill'
				},
				as: 'disciplinas'
			})

			Entiy.belongsToMany(atividade_avaliativa, {
				through: 'atividade_avaliativa_hardskill',
				timestamps: false,
				foreignKey: {
					name: 'id_hardskill'
				},
				as: 'atividades_avaliativas'
			})

		}
	}

	return Entiy;
}