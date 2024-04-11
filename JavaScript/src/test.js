const sqlite3 = require('sqlite3').verbose();

const dbPath = './sql.db'

let db;
function dbConnect() {
  db = new sqlite3.Database(dbPath)
}

function dbClose() {
  db.close();
}

function createMemo() {
  console.log('create: ', 1);
}

function searchMemo(id, { tag = undefined, text = undefined, date = undefined, isOpen = undefined }) {
  console.log('search: ', id)
  if(tag) console.log('SELECT * FROM memo WHERE tag = ? ORDER BY date desc')
  if(text) console.log('SELECT * FROM memo WHERE text = ? ORDER BY date desc')
  if(date) console.log('SELECT * FROM memo ORDER BY date desc')
  if(isOpen) console.log('SELECT * FROM memo WHERE isOpen = 1 ORDER BY date desc')
}

function updateMemo(id, { tag = undefined, text = undefined, date = undefined, isOpen = undefined }) {
  console.log('update: ', id)
  if(tag) console.log('UPDATE tag')
  if(text) console.log('UPDATE text')
  if(date) console.log('UPDATE date')
  if(isOpen) console.log('UPDATE isOpen')
}

function deleteMemo(id) {
  console.log('delete: ', id)
}

module.exports = { 
  dbConnect, dbClose, 
  createMemo,  searchMemo, updateMemo, deleteMemo,
}

const { contextBridge } = require("electron")
const personDB = require("./Database/PersonManager")

contextBridge.exposeInMainWorld("sqlite", {
  personDB,
})