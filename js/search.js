
// window.addEventListener('DOMContentLoaded', function() {
//   var data = JSON.parse(sessionStorage.getItem('sharedData'));
//   if (data) {
//     // 使用数据更新页面元素
//     console.log(data);
//     var aaaa = document.getElementsByClassName('dataBox'); // 根据实际属性修改


//     var html = '';
//     for(var i = 0 ;i <data.length; i++){
//       var result = data[i];

//       html+="<p>"
//       html+=result.tools;
//       html+="</p>"
//     } 
//     aaaa.innerHTML = html;
//   }
  
// });


// window.addEventListener('DOMContentLoaded', function() {
//   var data = JSON.parse(sessionStorage.getItem('sharedData'));
//   if (data) {
//     // 使用数据更新页面元素
//     console.log(data);
//     var aaaa = document.getElementsByClassName('dataBox'); // 获取第一个dataContainer元素
//     var html = '';

    
         
//               for(var i = 0 ; i < data.length; i++){
//                 var result = data[i];

//                 // 动态生成包含父子结构的HTML结构
//                 html += '<div class="dataContainer">' +
//                         '  <div class="toolname">'+result.tools+'</div>' +
//                         '  <hr>' +
//                         '  <div class="yellow">' +
//                         '    <span class="yellow1">'+result.yellow+'</span>' +
//                         '  </div>' +
//                         '  <div class="blue">' +
//                         '    <span class="blue1">'+result.blue+'</span>' +
//                         '  </div>' +
//                         '  <div class="deepblue">' +
//                         '    <span class="deepblue1">'+result.deepblue+'</span>' +
//                         '  </div>' +
//                         '</div>'; 

//                        console.log(i) 
//               }
                 
    
   

    
//     aaaa.innerHTML = html;
//   }
// });  


window.addEventListener('DOMContentLoaded', function() {
  var data = JSON.parse(sessionStorage.getItem('sharedData'));
  if (data) {
    console.log(data);
    var dataBox = document.getElementById('search111'); 

    for(var i = 0; i < data.length; i++){
      var result = data[i];

      // 创建dataContainer div
      var dataContainer = document.createElement('div');
      dataContainer.className = 'dataContainer';

      // 创建toolname div并添加内容
      var toolname = document.createElement('div');
      toolname.className = 'toolname';
      toolname.textContent = data.tools;
      var toollink = this.document.createElement('a');
      // toollink.href = result.http;
      toollink.textContent =result.tools;
      toollink.value = i;
      toollink.addEventListener('click', handleButtonClick);

      toolname.appendChild(toollink);
      dataContainer.appendChild(toolname);  



      var hr = document.createElement('hr');
      dataContainer.appendChild(hr);



      // 创建黄色区域div并添加内容
      if(result.yellow){
          var yellowValue = result.yellow;
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



      if(result.blue){
        var blueValue = result.blue;
        var blueItems = blueValue.split(',').map(function(item) {
          return item.trim();
        });
        var blue = document.createElement('div');
        blue.className = 'blue';
        
        if(blueItems.length == 1 ){
          var bluebox = document.createElement('div');
          bluebox.className = 'bluebox';
          var blue1 = document.createElement('span');
          blue1.className = 'blue1';
          blue1.textContent = result.blue;
          bluebox.appendChild(blue1);
          blue.appendChild(bluebox);

        }else{
          blueItems.forEach(function(blueItem) {
              var bluebox = document.createElement('div');
              bluebox.className = 'bluebox';

              var blue1 = document.createElement('span');
              blue1.className = 'blue1';
              blue1.textContent = blueItem;
              bluebox.appendChild(blue1);
              blue.appendChild(bluebox);
              
          });
        }
      
        dataContainer.appendChild(blue);

      }

      
      if(result.deepblue){
        var deepblueValue = result.deepblue;
        var deepblueItems = deepblueValue.split(',').map(function(item) {
          return item.trim();
        });
        var deepblue = document.createElement('div');
        deepblue.className = 'deepblue';
        
        if(deepblueItems.length == 1 ){
          var deepbluebox = document.createElement('div');
          deepbluebox.className = 'deepbluebox';
          var deepblue1 = document.createElement('span');
          deepblue1.className = 'deepblue1';
          deepblue1.textContent = result.deepblue;
          deepbluebox.appendChild(deepblue1);
          deepblue.appendChild(deepbluebox);

        }else{
          deepblueItems.forEach(function(deepblueItem) {
              var deepbluebox = document.createElement('div');
              deepbluebox.className = 'deepbluebox';

              var deepblue1 = document.createElement('span');
              deepblue1.className = 'deepblue1';
              deepblue1.textContent = deepblueItem;
              deepbluebox.appendChild(deepblue1);
              deepblue.appendChild(deepbluebox);
              
          });
        }
      
        dataContainer.appendChild(deepblue);

        // var num = this.document.createElement('span');
        // num.className = 'numId';
        // num.textContent = i;
        // num.hidden = true;
        // dataContainer.appendChild(num);

        
      }

      

      // 将创建的dataContainer添加到dataBox中
      if (dataBox) {
        dataBox.appendChild(dataContainer);
      } else {
        console.error('元素未找到');
      }

      console.log(i);
    }
  }






function handleButtonClick(event) {  
  // alert('你点击了按钮！');  
  var clicki = event.target.value; 
  sessionStorage.setItem('toolData', JSON.stringify(data[clicki]));
  window.location.href = 'tools.html';




}  




});

