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
		with: ['grupo', 'turma', 'hardskill', 'av360'],
		callback: (grupo, turma, hardskill, av360) => {

            Entiy.belongsToMany(hardskill, {
				through: 'atividade_avaliativa_hardskill',
				timestamps: false,
				foreignKey: {
					name: 'id_atividade_avaliativa'
				},
				as: 'hardskills'
			})

			Entiy.belongsTo(turma, {
                foreignKey: {
                    name: 'id_turma',
                },
                as: 'turma'
			})

			Entiy.hasMany(av360, {
                foreignKey: {
                    name: 'id_atividade_avaliativa',
                },
                as: 'av360s'
			})

			Entiy.hasMany(grupo, {
                foreignKey: {
                    name: 'id_atividade_avaliativa',
                },
                as: 'grupos'
			})

		}
	}

	return Entiy;
}