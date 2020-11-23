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
		with: ['aluno'],
		callback: (aluno) => {
            Entiy.belongsToMany(aluno, {
				through: 'aluno_softskill',
				timestamps: false,
				foreignKey: {
					name: 'id_softskill'
				},
				as: 'alunos'
			})
		}
    }

	return Entiy;
}