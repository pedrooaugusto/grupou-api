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
		with: ['professor', 'aluno', 'hardskill', 'curso', 'disciplina', 'grupo', 'atividade_avaliativa'],
		callback: (professor, aluno, hardskill, curso, disciplina, grupo, atividade_avaliativa) => {

            Entiy.belongsToMany(aluno, {
				through: 'aluno_turma',
				timestamps: false,
				foreignKey: {
					name: 'id_turma'
				},
				as: 'alunos'
			})

            Entiy.belongsToMany(hardskill, {
				through: 'turma_hardskill',
				timestamps: false,
				foreignKey: {
					name: 'id_turma'
				},
				as: 'hardskills'
			})

			Entiy.belongsToMany(professor, {
				through: 'turma_professor',
				timestamps: false,
				foreignKey: {
					name: 'id_turma'
				},
				as: 'professores'
			})

			Entiy.belongsToMany(curso, {
				through: 'turma_curso',
				timestamps: false,
				foreignKey: {
					name: 'id_turma'
				},
				as: 'cursos'
			})

			Entiy.belongsTo(disciplina, {
                foreignKey: {
                    name: 'id_disciplina',
                },
                as: 'disciplina'
			})

			Entiy.hasMany(grupo, {
                foreignKey: {
                    name: 'id_turma',
                },
                as: 'grupos'
			})
			
			Entiy.hasMany(atividade_avaliativa, {
                foreignKey: {
                    name: 'id_turma',
                },
                as: 'atividades_avaliativas'
            })
		}
	}

	return Entiy;
}