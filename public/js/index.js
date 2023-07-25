// get sides from form
function classifyTriangle() {
  const A = document.getElementById('inputA').value;
  const B = document.getElementById('inputB').value;
  const C = document.getElementById('inputC').value;

  // post sides to server
  fetch('/clasificar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ A, B, C }),
  })
    .then((res) => res.json())
    .then((data) => {
      // show a bootstrap alert inside result div
      document.getElementById('result').innerHTML = `
        <div class="alert alert-info" role="alert">
          <strong>Resultado:</strong> ${data.X}
        </div>
      `;
    });
}

// reset inputs and result
function reset() {
  document.getElementById('inputA').value = '';
  document.getElementById('inputB').value = '';
  document.getElementById('inputC').value = '';
  document.getElementById('result').innerHTML = '';
}
