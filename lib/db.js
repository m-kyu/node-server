var mysql      = require('mysql');

const db_info = {
    host     : 'svc.sel5.cloudtype.app',
    user     : 'root',
    password : '1234',
    database : 'test',
    port:'31766'
  }

module.exports = {
    queryExecute : async (query,values)=>{
        const connection = mysql.createConnection(db_info);
              connection.connect();
        
        return await new Promise((resolve,reject)=>{
            connection.query(query, values, function (error, results, fields) {
                console.log(error,'--------------')
                resolve(results);
                connection.end();
            });
        })
    }
};
