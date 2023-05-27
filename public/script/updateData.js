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
        //   location.reload();
        } else {
          console.log('Error updating data.');
        }
      })
      .catch(error => {
        console.log('Error updating data:', error);
      });
  }
  