// // formSubmit.js  
// document.addEventListener('DOMContentLoaded', function() {  
//     var form = document.getElementById('myForm');  
//     if (form) {  
//         form.addEventListener('submit', function(event) {  
//             event.preventDefault(); // 阻止表单的默认提交行为  
//             var inputValue = document.getElementById('myInput').value;  
//             var encodedValue = encodeURIComponent(inputValue); 
//             var newUrl = 'http://ivbib4.natappfree.cc/get_es/' + encodedValue; 
           

//             if (inputValue) {  
//                 // 假设我们想要重定向到 /<inputValue> 的URL  
//                 window.location.href = newUrl;  
//             } else {  
//                 // 输入为空时的处理，比如显示错误消息  
//                 alert('请输入一个值！');  
//             }  
//         });  
//     }
//     document.getElementById('myFormInput').value = '';   
    
// });




// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     var inputValue = document.getElementById('myInput').value;
//     var encodedValue = encodeURIComponent(inputValue);
//     const Url = 'http://ye96nz.natappfree.cc/get_es/'+encodedValue;
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET',Url,true);
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState == 4 && xhr.status == 200){
//             console.log(xhr.responseText);
//             var data = xhr.responseText;
//             data = JSON.parse(data);
//             console.log(data);
//             sessionStorage.setItem('sharedData', JSON.stringify(data));
//       // 重新加载第二个页面或导航到第二个页面
//             window.location.href = 'search.html'; // 替换为你的第二个页面的UR
//         }
//     }
//     xhr.send();
// });



document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    var inputValue = document.getElementById('myInput').value;
    var encodedValue = encodeURIComponent(inputValue);
    const Url = 'http://ybt9dm.natappfree.cc/get_es/' + encodedValue;
  
    // 使用fetch发送GET请求
    fetch(Url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // 假设服务器响应的是JSON格式数据
      })
      .then(data => {
        console.log(data);
        sessionStorage.setItem('sharedData', JSON.stringify(data));
        // 重新加载第二个页面或导航到第二个页面
        window.location.href = 'search.html'; // 替换为你的第二个页面的URL
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });