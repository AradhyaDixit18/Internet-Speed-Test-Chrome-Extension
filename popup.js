function updateConnectionDetails() {
    chrome.storage.local.get('connectionDetails', function (data) {
      const details = data.connectionDetails || 'No connection details found.';
      document.getElementById('internetConnectionDetails').innerHTML = `<p>${details}</p>`;
    });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    updateConnectionDetails();
  });
  
  // Listen for changes in network information and update the details accordingly
  navigator.connection.addEventListener('change', updateConnectionDetails);
  