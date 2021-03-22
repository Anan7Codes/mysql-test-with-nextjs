const mysql = require('mysql')

const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB
});

con.connect(function(err) {
  if (err) throw err
  console.log('Connected')
 });

export default (req, res) => {
  if(req.method === 'GET') {
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) return res.json({err})
      return res.json({ result })
    });
  }
}
