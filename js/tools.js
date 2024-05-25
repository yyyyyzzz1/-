window.addEventListener('DOMContentLoaded', function() {
    var data = JSON.parse(sessionStorage.getItem('toolData'));
    if (data) {
      renderData(data);
    }
  });
  
  function renderData(data) {
    // 根据data动态渲染内容
    console.log(data);
    // 例如，将数据添加到页面元素中
    var dataContainer = document.getElementById('toolsBox'); 



      // 创建toolname div并添加内容
      var toolname = document.createElement('div');
      toolname.className = 'toolname';
      var toolname1 = document.createElement('h2');
      toolname1.className = 'toolh2';
      toolname1.textContent = data.tools;
      var toollink = this.document.createElement('a');
      // toollink.href = result.http;

      toollink.textContent =data.tools+"http";
      toolname.appendChild(toolname1);
      toolname.appendChild(toollink);
      dataContainer.appendChild(toolname);  



      var hr = document.createElement('hr');
      dataContainer.appendChild(hr);



      // 创建黄色区域div并添加内容
      if(data.yellow){
          var yellowValue = data.yellow;
          var yellowItems = yellowValue.split(',').map(function(item) {
            return item.trim();
          });
          var yellow = document.createElement('div');
          yellow.className = 'yellow';
        
        if(yellowItems.length == 1 ){
          var yellowbox = document.createElement('div');
          yellowbox.className = 'yellowbox';
          var yellow1 = document.createElement('span');
          yellow1.className = 'yellow1';
          yellow1.textContent = result.yellow;
          yellowbox.appendChild(yellow1);
          yellow.appendChild(yellowbox);

        }else{
          yellowItems.forEach(function(yellowItem) {
              var yellowbox = document.createElement('div');
              yellowbox.className = 'yellowbox';
    
              var yellow1 = document.createElement('span');
              yellow1.className = 'yellow1';
              yellow1.textContent = yellowItem;
              yellowbox.appendChild(yellow1);
              yellow.appendChild(yellowbox);
              console.log(yellowItem);
            });
        }
      
        dataContainer.appendChild(yellow);
      }

      if(data.PMID){
        var PMIDbox = document.createElement('div');
        PMIDbox.className = 'PMIDbox';
        
        var PMID = document.createElement('a');
        PMID.className = 'PMID';
        // PMID.href = result.http;
        PMID.textContent = data.PMID;
        
        let match = data.PMID.match(/PMID: (\d+)/);  
        let number = 0;
        if (match && match.length > 1) {  
            number = match[1]; // 第一个括号内的匹配内容（索引为1，因为索引0是整个匹配的内容）  
            console.log(number); // 输出: 37042708  
        }
        PMID.href = 'https://pubmed.ncbi.nlm.nih.gov/'+number+'/';

        PMIDbox.appendChild(PMID);
        dataContainer.appendChild(PMIDbox);
      }



  }