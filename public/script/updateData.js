function calculateRemainingFees() {
  const rows = document.querySelectorAll('tbody tr');
  rows.forEach(row => {
    const totalFeesCell = row.querySelector('[data-field="totalFees"]');
    const feesPaidCell = row.querySelector('[data-field="feespaid"]');
    const remainingFeesCell = row.querySelector('[data-field="remainingFees"]');
    
    const totalFees = parseInt(totalFeesCell.textContent.trim());
    const feesPaid = parseInt(feesPaidCell.textContent.trim());
    const remainingFees = totalFees - feesPaid;

    remainingFeesCell.textContent = remainingFees;
  });
}

function updateData(id) {
  const editableCells = document.querySelectorAll('.editable[data-id="' + id + '"]');
  const newData = {};

  editableCells.forEach(cell => {
    const field = cell.dataset.field;
    const value = cell.textContent.trim();
    newData[field] = value;
  });

  fetch('/admin/updateData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: id, newData: newData })
  })
    .then(response => {
      if (response.ok) {
        console.log('Data updated successfully.');
        // Reload the page after successful update
      alert ("INSIGHTS UPDATED")
      } else {
        console.log('Error updating data.');
      }
    })
    .catch(error => {
      console.log('Error updating data:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  calculateRemainingFees();

  const editableCells = document.querySelectorAll('.editable');
  editableCells.forEach(cell => {
    cell.addEventListener('input', () => {
      calculateRemainingFees();
    });
  });
});