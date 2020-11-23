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
		with: ['aluno', 'questao'],
		callback: (aluno, questao) => {
            Entiy.belongsTo(questao, {
                foreignKey: {
                    name: 'id_questao',
                },
                as: 'questao'
            })

            Entiy.belongsTo(aluno, {
                foreignKey: {
                    name: 'id_aluno',
                },
                as: 'aluno'
            })
		}
	}
	return Entiy;
}