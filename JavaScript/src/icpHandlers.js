const { ipcMain } = require('electron');
const { dbConnect, sqlCreate, sqlSearch, sqlUpdate, sqlDelete } = require('./sqlite3');

ipcMain.on('db-connect', (event) => {
  dbConnect();
  console.log('Connected to the database.');
});

ipcMain.on('sql-create', async (event) => {
  try {
    const result = await sqlCreate();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

ipcMain.on('sql-search', async (tag = '', text = '') => {
  try {
    const result = await sqlSearch(tag, text);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
})

ipcMain.on('sql-update', async (id, tag = '', text = '') => {
  try {
    const result = await sqlUpdate(id, tag, text);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
})

ipcMain.on('sql-delete', async (id) => {
  try {
    const result = await sqlDelete(id);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
})

// 필요한 다른 IPC 이벤트 핸들러들을 여기에 추가할 수 있습니다.