const entityName = require('path').basename(__filename.replace('.model', ''), '.js')

module.exports = (sequelize, Sequelize) => {
	const Entiy = sequelize.define(entityName, {
		pergunta: {
			type: Sequelize.STRING,
		}
	}, {
		tableName: entityName
	});

	Entiy.associate = {
		with: ['usuario', 'hardskill', 'questao_dia'],
		callback: (usuario, hardskill, questao_dia) => {
			Entiy.belongsTo(usuario, {
                foreignKey: {
                    name: 'id_usuario',
                },
                as: 'usuario'
			})

			Entiy.belongsTo(hardskill, {
                foreignKey: {
                    name: 'id_hardskill',
                },
                as: 'hardskill'
			})

			Entiy.hasMany(questao_dia, {
                foreignKey: {
                    name: 'id_questao',
                },
                as: 'questoes_dia'
            })
		}
	}

	return Entiy;
}