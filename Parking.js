function saveData() {
  let name = document.getElementById("name").value;
  let vehicleName = document.getElementById("vehicleName").value;
  let vehicleNumber = document.getElementById("vehicleNumber").value;
  let entryDate = document.getElementById("entryDate").value;
  let exitDate = document.getElementById("exitDate").value;

  let table = document.getElementById("parkingTable");
  let newRow = table.insertRow(table.rows.length);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);

  cell1.innerHTML = name;
  cell2.innerHTML = vehicleName;
  cell3.innerHTML = vehicleNumber;
  cell4.innerHTML = entryDate;
  cell5.innerHTML = exitDate;
}