const Excel = require('exceljs');

async function setValueToCell(filePath, sheetName, rowIndex, columnIndex, value) {
  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet(sheetName);
  const cell = worksheet.getCell(rowIndex, columnIndex);
  cell.value = value;
  await workbook.xlsx.writeFile(filePath);
}

module.exports = {
  setValueToCell,
};