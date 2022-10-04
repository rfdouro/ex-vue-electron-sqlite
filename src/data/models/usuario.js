import { DataTypes } from "sequelize";
import Conexao from "../conexao";

//https://sequelize.org/docs/v6/core-concepts/model-basics/
const Usuario = Conexao.define("Usuario", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

(async () => {
  await Conexao.sync({ alter: true }); // atualiza o esquema de dados
})();

export default Usuario;
