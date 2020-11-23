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
		with: ['turma', 'aluno'],
		callback: (turma, aluno) => {
            Entiy.hasMany(aluno, {
                foreignKey: {
                    name: 'id_curso',
                },
                as: 'alunos'
            })
		}
	}

	return Entiy;
}