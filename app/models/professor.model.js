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
		with: ['usuario', 'disciplina', 'turma'],
		callback: (usuario, disciplina, turma) => {
            Entiy.belongsTo(usuario, {
                foreignKey: {
                    name: 'id_usuario',
                },
                as: 'usuario'
			})

			Entiy.belongsToMany(disciplina, {
				through: 'disciplina_professor',
				timestamps: false,
				foreignKey: {
					name: 'id_professor'
				},
				as: 'disciplinas'
			})

			Entiy.belongsToMany(turma, {
				through: 'turma_professor',
				timestamps: false,
				foreignKey: {
					name: 'id_professor'
				},
				as: 'turmas'
			})
		}
	}
	return Entiy;
}