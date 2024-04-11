const sqlite3 = require('sqlite3').verbose();

// 데이터베이스 파일 경로 설정
const dbPath = './test/sql.db'

// 데이터베이스 객체 생성
let db;

// 데이터베이스 파일 경로 설정 및 SQLite3 데이터베이스에 연결
const dbConnect = () => {
  db = new sqlite3.Database(dbPath);
}

// 데이터베이스 연결 종료
const dbClose = () => {
  if(db) {
    db.close();
    console.log('database close success!')
  }
  else {
    console.log('database not close!');
  }
}

/**
 * 데이터 생성
 * @returns resolve(queryRow), reject(err.message)
 */
const sqlCreate = () => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO memo (date) VALUES (strftime('%Y-%m-%d %H:%M:%S', 'now', 'localtime'))`;
    db.run(sql, function(err) {
      if (err) {
        reject(err.message);
        return;
      }

      const sqlSelect = `SELECT id, date FROM memo WHERE id = ?`;
      db.get(sqlSelect, [this.lastID], (err, row) => {
        if (err) {
          reject(err.message);
          return;
        }
        
        resolve(row);
      });
    });
  });
};

/** 
 * 데이터 검색. 날짜순으로 검색됨.
 * @returns resolve(queryRows), reject(err.message)
 */
const sqlSearch = (tag = '', text = '') => {
  return new Promise((resolve, reject) => {
    let sqlSelect = `SELECT * FROM memo WHERE 1=1`;
    let params = [];

    if (tag) {
      sqlSelect += ` AND tag = ?`;
      params.push(tag);
    }

    if (text) {
      sqlSelect += ` AND text LIKE ?`;
      params.push(`%${text}%`);
    }

    sqlSelect += ` ORDER BY date DESC`;
  
    db.all(sqlSelect, params, (err, rows) => {
      if (err) {
        reject(err.message);
        return;
      }
      resolve(rows);
    });
  })
}

/** 
 * 데이터 수정
 * @param {Number} id 
 * @param {String} tag 
 * @param {String} date 
 * @param {String} text 
 */
const sqlUpdate = (id, tag = '', text = '') => {
  return new Promise((resolve, reject) => {
    let sqlParams = [];
    let sqlUpdate = `UPDATE memo SET`;
    if (tag) {
      sqlUpdate += ` tag = ?,`;
      sqlParams.push(tag);
    }
    sqlUpdate += ` date = strftime('%Y-%m-%d %H:%M:%S', 'now', 'localtime'),`;
    sqlParams.push();
    if (text) {
      sqlUpdate += ` text = ?,`;
      sqlParams.push(text);
    }
    // 쉼표(,)가 추가되었을 경우 제거
    sqlUpdate = sqlUpdate.replace(/,$/, '');

    sqlUpdate += ` WHERE id = ?`;
    sqlParams.push(id);

    db.run(sqlUpdate, sqlParams, function(err) {
      if (err) {
        reject(err.message);
        return;
      }
      resolve(`Row(s) updated: ${this.changes}`);
    });
  });
};

/**
 * 데이터 삭제
 * @param {Number} id 
 */
const sqlDelete = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM memo WHERE id = ?`;
    db.run(sql, id, function(err) {
      if (err) {
        reject(err.message);
        return;
      }
      resolve(`Row(s) deleted: ${this.changes}`);
    })
  })
}

module.exports = {
  dbConnect, dbClose, 
  sqlCreate, sqlSearch, sqlUpdate, sqlDelete
}