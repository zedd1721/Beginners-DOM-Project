const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='tables'>
    <table>
    <tr>
      <th>Key</th>
      <th>Key code</th>
      <th>Code</th>
    </tr>

    <tr>
      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    
    </table>
    </div>
    `;
});