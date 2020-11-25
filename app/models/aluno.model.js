const entityName = require('path').basename(__filename.replace('.model', ''), '.js')

module.exports = (sequelize, Sequelize) => {
	const Entiy = sequelize.define(entityName, {
		matricula: {
			type: Sequelize.STRING,
		},
	}, {
        tableName: entityName
    });

	Entiy.associate = {
		with: ['usuario', 'hardskill', 'questao_dia', 'turma', 'curso', 'tarefa', 'softskill', 'grupo', 'av360'],
		callback: (usuario, hardskill, questao_dia, turma, curso, tarefa, softskills, grupo, av360) => {
            Entiy.belongsTo(usuario, {
                foreignKey: {
                    name: 'id_usuario',
                },
                as: 'usuario'
            })

            Entiy.belongsToMany(hardskill, {
				through: 'aluno_hardskill',
				timestamps: false,
				foreignKey: {
					name: 'id_aluno'
				},
				as: 'hardskills'
			})

			Entiy.hasMany(questao_dia, {
                foreignKey: {
                    name: 'id_aluno',
                },
                as: 'questoes_dia'
			})
			
			Entiy.belongsToMany(turma, {
				through: 'aluno_turma',
				timestamps: false,
				foreignKey: {
					name: 'id_aluno'
				},
				as: 'turmas'
			})

			Entiy.belongsTo(curso, {
                foreignKey: {
                    name: 'id_curso',
                },
                as: 'curso'
			})
			
			Entiy.hasMany(tarefa, {
                foreignKey: {
                    name: 'id_aluno',
                },
                as: 'tarefas'
			})

			Entiy.belongsToMany(softskills, {
				through: 'aluno_softskill',
				timestamps: false,
				foreignKey: {
					name: 'id_aluno'
				},
				as: 'softskills'
			})

			Entiy.belongsToMany(grupo, {
				through: 'aluno_grupo',
				timestamps: false,
				foreignKey: {
					name: 'id_aluno'
				},
				as: 'grupos'
			})

			Entiy.hasMany(av360, {
                foreignKey: {
                    name: 'id_aluno',
                },
                as: 'av360s'
			})
		}
    }

	return Entiy;
}