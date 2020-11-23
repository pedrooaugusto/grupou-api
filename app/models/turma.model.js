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
		with: ['professor', 'aluno', 'hardskill'],
		callback: (professor, aluno, hardskill) => {

            Entiy.belongsToMany(aluno, {
				through: 'aluno_turma',
				timestamps: false,
				foreignKey: {
					name: 'id_turma'
				},
				as: 'alunos'
			})

		}
	}

	return Entiy;
}