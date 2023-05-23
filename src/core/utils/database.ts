const sql = require("mssql");

const sqlConfig = {
  user: "admin",
  password: "dYd6fqEu4BMmavFt;port=3306;database=squadwarestage",
  server: "squadwarestage.ckhrdaljtlh9.us-east-2.rds.amazonaws.com",
  database: "squadwarestage", // name of database
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

exports.DB = class DB {
  async connectDb(query) {
    try {
      await sql.connect(sqlConfig);
      await sql.query(query);
    } catch (err) {
      console.log(err);
    }
  }
};
