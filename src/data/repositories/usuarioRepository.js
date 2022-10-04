import { Op } from "sequelize";
import Conexao from "@/data/conexao";
import Usuario from "../models/usuario";

//https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
class UsuarioRepository {
  salvar = (dados, cbSucesso, cbErro) => {
    Conexao.transaction(function (t) {
      return Usuario.create(dados, t).then(cbSucesso).catch(cbErro);
    });
  };

  atualizar = (dados, cbSucesso, cbErro) => {
    Conexao.transaction(function () {
      Usuario.findByPk(dados.id).then((u)=>{
        u.set({
          nome: dados.nome,
          idade: dados.idade
        });
        u.save().then(cbSucesso).catch(cbErro);
      });
    });
  };

  todos = (cbSucesso) => {
    Conexao.sync().then(() => {
      Usuario.findAll().then(cbSucesso);
    });
  };

  //https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
  buscaPorNomeInicia = (inicia, cbSucesso) => {
    Conexao.sync().then(() => {
      Usuario.findAll({
        attributes: ["id", "nome"],
        where: { nome: { [Op.like]: `${inicia}%` } },
      }).then(cbSucesso);
    });
  };

  excluiPorId = (id, cbSucesso) => {
    Conexao.sync().then(() => {
      Usuario.destroy({
        where: { id: { [Op.eq]: id } },
      }).then(cbSucesso);
    });
  };

  selecionaPorId = (id, cbSucesso) => {
    Conexao.sync().then(() => {
      Usuario.findByPk(id).then(cbSucesso);
    });
  };
}

export default UsuarioRepository;
