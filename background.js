chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.local.set({ connectionDetails: getConnectionDetails() });
  });
  
  function getConnectionDetails() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      return `
        Type: ${connection.type || 'Unknown'}
        Downlink: ${connection.downlink || 'Unknown'} Mbps
        Effective Type: ${connection.effectiveType || 'Unknown'}
      `;
    } else {
      return 'Connection details not available.';
    }
  }
  