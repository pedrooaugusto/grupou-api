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
		with: ['aluno', 'softskill', 'grupo', 'atividade_avaliativa'],
		callback: (aluno, softskill, grupo, atividade_avaliativa) => {
            Entiy.belongsTo(aluno, {
                foreignKey: {
                    name: 'id_aluno',
                },
                as: 'aluno'
            })

            Entiy.belongsTo(atividade_avaliativa, {
                foreignKey: {
                    name: 'id_atividade_avaliativa',
                },
                as: 'atividade_avaliativa'
            })

            Entiy.belongsTo(grupo, {
                foreignKey: {
                    name: 'id_grupo',
                },
                as: 'grupo'
            })

            Entiy.belongsToMany(softskill, {
				through: 'av360_softskill',
				timestamps: false,
				foreignKey: {
					name: 'id_av360'
				},
				as: 'softskills'
			})
		}
	}

	return Entiy;
}