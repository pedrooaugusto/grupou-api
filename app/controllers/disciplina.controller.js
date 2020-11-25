const db = require("../models");
const Disciplina = db.disciplina;

exports.create = (req, res) => {
  const disciplina = {
    descricao: req.body.descricao,
  }

  Disciplina.create(disciplina).then((data) => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Erro ao Criar Disciplina"
    })
  })
}

exports.update = (req, res) => {
  const disciplina = {
    descricao: req.body.descricao,
  }

  Disciplina.update(disciplina, { where: { id: req.body.id } }).then((data) => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Erro ao Atualizar Disciplina"
    })
  })
}

exports.index = (req, res) => {
  Disciplina.findAll({}).then((data) => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Erro ao Listar Disciplina"
    })
  })
}

exports.show = (req, res) => {
  Disciplina.findOne({ where: { id: req.params.disciplina }}).then((data) => {
    if (data == null) return res.sendStatus(404);
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Erro ao Mostrar Disciplina"
    })
  })
}

exports.destroy = (req, res) => {
  Disciplina.destroy({ where: { id: req.params.disciplina }}).then((data) => {
    res.sendStatus(data == 1 ? 200 : 500);
  }).catch(err => {
    res.sendStatus(500).send({
      message: err.message || "Erro ao deletar Disciplina"
    })
  })
}

