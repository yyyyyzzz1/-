document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    
    fetch('server.php', {
      method: 'POST',
      body: new FormData(this) // 发送表单数据
    })
    .then(response => response.json()) // 解析JSON响应
    .then(data => {
      // 假设返回的数据是一个数组，我们取第一个元素
      const result = data[0];
      const displayData = `
        <p>ID: ${result.id}</p>
        <p>Tools: ${result.tools}</p>
        <p>Yellow: ${result.yellow}</p>
        <p>Blue: ${result.blue}</p>
        <p>Deep Blue: ${result.deepblue}</p>
        <p>DOI: ${result.DOID}</p>
        <p>PMID: ${result.PMID}</p>
        <p>PMCID: ${result.PMCID}</p>
      `;
      document.getElementById('dataBox').innerHTML = displayData;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });