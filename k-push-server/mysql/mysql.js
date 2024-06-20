var mysql = require('mysql');

var mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'kpush',
};


exports.query = function(sql) {
    return new Promise(function(resolve, reject) {
        var pool = mysql.createPool(mysqlConfig);
        // var sql = 'select * from push_article'
        pool.getConnection(function(err, connection) {
            // 建立连接 增加一个用户信息 
            connection.query(sql, function(err, result) {
                if (result) {
                    resolve(result);
                } else {
                    reject("err");
                }

                // 以json形式，把操作结果返回给前台页面     
                // responseJSON(res, result);

                // 释放连接  
                connection.release();

            });
        });
    })
}

// exports.selectDetailById = function(id) {
//     return new Promise(function(resolve, reject) {
//         var pool = mysql.createPool(mysqlConfig);
//         var sql = 'select * from push_article where id = ' + id
//         pool.getConnection(function(err, connection) {
//             // 建立连接 增加一个用户信息 
//             connection.query(sql, function(err, result) {
//                 if (result) {
//                     resolve(result);
//                 } else {
//                     reject("err");
//                 }

//                 // 以json形式，把操作结果返回给前台页面     
//                 // responseJSON(res, result);

//                 // 释放连接  
//                 connection.release();

//             });
//         });
//     })
// }
