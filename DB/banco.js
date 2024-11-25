const mysql = require("mysql2");

// * configurar a conexão com o banco de dados

const connection = mysql.createConnection({
  host: "localhost",
  port: "3302",
  user: "aluno",
  password: "123456",
  database: "BibliotecaDraconica",
});

// * conectar com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados", err);
    return;
  } else {
    console.log("Conectado com sucesso");
  }
});

// * Função para inserir cliente usando o procedimento
// * ???? marcadores das posições dos atributos da tabela cliente no banco

const AdicionarUsusario = (
  IdUsuario,
  NomeUsuario,
  SenhaUsuario,
  TelUsuario,
  EmailUsuario,
  AssinaturaUsuario
) => {
  const sql = "CALL AdicionarUsusario(?,?, ?, ?, ?, ?)";
  connection.query(
    sql,
    [
      IdUsuario,
      NomeUsuario,
      SenhaUsuario,
      TelUsuario,
      EmailUsuario,
      AssinaturaUsuario,
    ],
    (err, results) => {
      if (err) {
        console.error("Erro ao inserir o cliente", err);
        return;
      } else {
        console.log("Cliente inserido com sucesso");
      }
    }
  );
}; 
const AdcionarPersonagem = (NomePersonagem, IdUsuario, IdSistema) => {
  const sql = "CALL AdcionarPersonagem(?,?, ?)";
  connection.query(
    sql,
    [NomePersonagem, IdUsuario, IdSistema],
    (err, results) => {
      if (err) {
        console.error("Erro ao inserir o cliente", err);
        return;
      } else {
        console.log("Cliente inserido com sucesso");
      }
    }
  );
};


// * chamar a função inserção com dados de exemplo uwu

AdicionarUsusario(
  "6",
  NomeUsuario,
  "23y98",
  "123456675",
  "parapa@yahoo.com",
  "Padrão"
); 


// * fechar a conexão

connection.end((err) => {
  if (err) {
    console.error("Erro ao fechar o banco", err);
    return;
  } else {
    console.log("Banco fechado com sucesso");
  }
})

