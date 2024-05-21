const connection = require('./database');

function getAllUsers(callback) {
    connection.query('SELECT * FROM Usuarios', (error, results, fields) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results);
      }
    });
  }
  // Carrega todos os usuarios na tabela do banco 
  // arrow function => 
  
  function getUserById(id, callback) {
    connection.query('SELECT * FROM Usuarios WHERE id = ?', [id], (error, results, fields) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results[0]);
      }
    });
  }
  // 
  
  function addUser(user, callback) {
    connection.query('INSERT INTO Usuarios SET ?', user, (error, results, fields) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results.insertId);
      }
    });
  }
  
  function updateUser(id, user, callback) {
    connection.query('UPDATE Usuarios SET ? WHERE id = ?', [user, id], (error, results, fields) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results.affectedRows);
      }
    });
  }
  
  function deleteUser(id, callback) {
    connection.query('DELETE FROM Usuarios WHERE id = ?', [id], (error, results, fields) => {
      if (error) {
        callback(null);
      } else {
        callback(results.affectedRows);
      }
    });
  }

  function getUserByLogin(login, callback){
        connection.query('SELECT * FROM Usuarios WHERE email = ?', login, (error, results, fields) => {
          if (error) {
            callback(error, null);
          } else {
            callback(results[0]);
          }
        });

  }
  
  module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    getUserByLogin
  };