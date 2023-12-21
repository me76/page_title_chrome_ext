document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(
    'fontStyle',
    (items) => {
      document.getElementById('fontStyle').value = items.fontStyle;
    }
  );

  document.getElementById('applyBtn').addEventListener('click', () => {
    chrome.storage.sync.set(
      { fontStyle: document.getElementById('fontStyle').value },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.innerHTML= '[ Saved ]';
        setTimeout(() => {
          status.innerHTML= '';
        }, 750);
      }
    );
  });
});