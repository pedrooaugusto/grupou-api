const entityName = require('path').basename(__filename.replace('.model', ''), '.js')

module.exports = (sequelize, Sequelize) => {
	const Entiy = sequelize.define(entityName, {
		descricao: {
			type: Sequelize.STRING,
		},
	}, {
        tableName: entityName
    });

	Entiy.associate = {
		with: ['aluno', 'av360'],
		callback: (aluno, av360) => {
            Entiy.belongsToMany(aluno, {
				through: 'aluno_softskill',
				timestamps: false,
				foreignKey: {
					name: 'id_softskill'
				},
				as: 'alunos'
			})

			Entiy.belongsToMany(av360, {
				through: 'av360_softskill',
				timestamps: false,
				foreignKey: {
					name: 'id_softskill'
				},
				as: 'av360s'
			})
		}
    }

	return Entiy;
}