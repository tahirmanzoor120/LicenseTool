window.onload = function() {
    document.getElementById('all-licenses-btn')
    .addEventListener('click', () => {
        let addLicenseDiv = document.getElementById('add-license-div');
        addLicenseDiv.style = 'display: none'

        let table = document.createElement('table');
        let headerRow = document.createElement('tr');

        let serialNoHeader = document.createElement('th');
        serialNoHeader.innerText = '#';
        let mobileNoHeader = document.createElement('th');
        mobileNoHeader.innerText = 'Mobile';
        let deviceIdHeader = document.createElement('th');
        deviceIdHeader.innerText = 'Device ID';
        let expiryHeader = document.createElement('th');
        expiryHeader.innerText = 'Expiry Date';
        let actionHeader = document.createElement('th');
        actionHeader.innerText = 'Action';

        headerRow.appendChild(serialNoHeader);
        headerRow.appendChild(mobileNoHeader);
        headerRow.appendChild(deviceIdHeader);
        headerRow.appendChild(expiryHeader);
        headerRow.appendChild(actionHeader);

        table.appendChild(headerRow)

        for(let i=1; i<10; i++) {
            let row = document.createElement('tr');

            let serialNo = document.createElement('td');
            serialNo.innerText = i;
            let mobileNo = document.createElement('td');
            mobileNo.innerText = '03017910120';
            let deviceId = document.createElement('td');
            deviceId.innerText = 'ABNJHSDKFIH';
            let expiry = document.createElement('td');
            expiry.innerText = '01-05-2025';
            let action = document.createElement('td');
            action.innerHTML = '<a href="www.google.com"><i class="material-icons">delete</i></a>';

            row.appendChild(serialNo);
            row.appendChild(mobileNo);
            row.appendChild(deviceId);
            row.appendChild(expiry);
            row.appendChild(action);

            table.appendChild(row)
        }

        let allLicensesDiv = document.getElementById('all-licenses-div');
        allLicensesDiv.innerHTML = '';
        allLicensesDiv.appendChild(table)
        allLicensesDiv.style = 'display: inline';
    });

    document.getElementById('add-license-btn')
    .addEventListener('click', () => {
        let allLicensesDiv = document.getElementById('all-licenses-div');
        allLicensesDiv.style = 'display: none';

        let addLicenseDiv = document.getElementById('add-license-div');
        addLicenseDiv.style = 'display: inline'
    });
}