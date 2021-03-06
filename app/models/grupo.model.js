const entityName = require('path').basename(__filename.replace('.model', ''), '.js')

module.exports = (sequelize, Sequelize) => {
	const Entiy = sequelize.define(entityName, {
		nome: {
			type: Sequelize.STRING,
		},
	}, {
        tableName: entityName
    });

	Entiy.associate = {
		with: ['aluno', 'turma', 'av360', 'atividade_avaliativa', 'tarefa'],
		callback: (aluno, turma, av360, atividade_avaliativa, tarefa) => {
            Entiy.belongsToMany(aluno, {
				through: 'aluno_grupo',
				timestamps: false,
				foreignKey: {
					name: 'id_grupo'
				},
				as: 'alunos'
			})

			Entiy.belongsTo(turma, {
                foreignKey: {
                    name: 'id_turma',
                },
                as: 'turma'
			})

			Entiy.hasMany(av360, {
                foreignKey: {
                    name: 'id_grupo',
                },
                as: 'av360s'
			})

			Entiy.belongsTo(atividade_avaliativa, {
                foreignKey: {
                    name: 'id_atividade_avaliativa',
                },
                as: 'atividade_avaliativa'
			})

			Entiy.hasMany(tarefa, {
                foreignKey: {
                    name: 'id_grupo',
                },
                as: 'tarfeas'
            })
		}
    }

	return Entiy;
}