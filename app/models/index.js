const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: false,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//-----models-----

db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.aluno = require("./aluno.model.js")(sequelize, Sequelize);
db.questao = require("./questao.model.js")(sequelize, Sequelize);
db.hardskill = require("./hardskill.model.js")(sequelize, Sequelize);
db.professor = require("./professor.model.js")(sequelize, Sequelize);
db.questao_dia = require("./questao_dia.model.js")(sequelize, Sequelize);
db.turma = require("./turma.model.js")(sequelize, Sequelize);
db.curso = require("./curso.model.js")(sequelize, Sequelize);
db.tarefa = require("./tarefa.model.js")(sequelize, Sequelize);
db.softskill = require("./softskill.model.js")(sequelize, Sequelize);
db.grupo = require("./grupo.model.js")(sequelize, Sequelize);

for (const key of Object.keys(db)) {
	if (key.toLowerCase() === "sequelize") continue;

	if (db[key].associate && db[key].associate.with) {
		const entities = [];
		
		for (const who of db[key].associate.with) {
			if (!db[who]) throw new Error("Table " + who + " does not exist");
			entities.push(db[who]);
		}

		db[key].associate.callback(...entities);
	}
}

//----------------

module.exports = db;
