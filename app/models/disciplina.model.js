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
		with: ['professor', 'turma', 'hardskill'],
		callback: (professor, turma, hardskill) => {

            Entiy.belongsToMany(hardskill, {
				through: 'disciplina_hardskill',
				timestamps: false,
				foreignKey: {
					name: 'id_disciplina'
				},
				as: 'hardskills'
			})

			Entiy.belongsToMany(professor, {
				through: 'disciplina_professor',
				timestamps: false,
				foreignKey: {
					name: 'id_disciplina'
				},
				as: 'professores'
			})

			Entiy.hasMany(turma, {
                foreignKey: {
                    name: 'id_disciplina',
                },
                as: 'turmas'
            })

		}
	}

	return Entiy;
}