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
		with: ['aluno'],
		callback: (aluno) => {
            Entiy.belongsToMany(aluno, {
				through: 'aluno_grupo',
				timestamps: false,
				foreignKey: {
					name: 'id_grupo'
				},
				as: 'alunos'
			})
		}
    }

	return Entiy;
}