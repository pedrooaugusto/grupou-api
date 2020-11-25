module.exports = (app) => {
  const disciplina = require("../controllers/disciplina.controller.js");

  var router = require("express").Router();

  router.post("/", disciplina.create);
  router.get("/", disciplina.index);
  router.get("/:disciplina", disciplina.show);
  router.put("/", disciplina.update);
  router.delete("/:disciplina", disciplina.destroy);

  //----

  //----
  app.use('/api/disciplina', router);
}