import { Sequelize } from "sequelize";

//const Conexao = new Sequelize("sqlite::memory:");
const Conexao = new Sequelize('null', 'null', 'null', {//passa null para usuario, senha e ip
 dialect: 'sqlite',
 //storage: 'C:\\data\\bd.sqlite'
 storage: 'bd.sqlite'
});

export default Conexao;
