function togglePump() {
    var pumpButton = document.getElementById('pumpButton');
    var pumpStatus = document.getElementById('pumpStatus');
    pumpButton.classList.toggle('active');
    if (pumpButton.classList.contains('active')) {
        pumpStatus.textContent = 'Pump turned on';
        // Logic to turn the pump on
    } else {
        pumpStatus.textContent = 'Pump turned off';
        // Logic to turn the pump off
    }
    console.log(pumpStatus.textContent);
}

function getSoilStatus() {
    // Logic to get soil status
    console.log("Soil status requested");
}

function togglePump() {
    var pumpButton = document.getElementById('pumpButton');
    var pumpStatus = document.getElementById('pumpStatus');
    var tableBody = document.getElementById('pumpRecords').getElementsByTagName('tbody')[0];
    pumpButton.classList.toggle('active');

    var statusText = '';
    var currentTime = new Date().toLocaleString();

    if (pumpButton.classList.contains('active')) {
        statusText = 'Pump turned on';
        // Logic to turn the pump on
    } else {
        statusText = 'Pump turned off';
        // Logic to turn the pump off
    }
    pumpStatus.textContent = statusText;
    console.log(statusText);

    // Add a new record to the table
    var newRow = tableBody.insertRow();
    var timestampCell = newRow.insertCell(0);
    var statusCell = newRow.insertCell(1);
    timestampCell.textContent = currentTime;
    statusCell.textContent = statusText;
}


// Set the username dynamically
document.getElementById('username').textContent = 'Israel';
