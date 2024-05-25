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
//     const params = new URLSearchParams(formData).toString();
  
//     var inputValue = document.getElementById('myInput').value;
//     var encodedValue = encodeURIComponent(inputValue);
//     const Url = 'http://qdhm7b.natappfree.cc/get_es/'+encodedValue;
    



//     fetch(' https://jsonplaceholder.typicode.com/posts/1',{ method: 'GET'})
//     // fetch('http://qdhm7b.natappfree.cc/get_es/', {
//     //     method: 'GET',
//     //     body: encodedValue,
//     //   })
//     .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
       
//         return response.json();
//       })


//     .then(data => {
        
//    console.log(data);
//       // 保存数据到全局变量或LocalStorage
//       window.myData = data;
//       // 跳转到第二个HTML页面
//       window.location.href = 'search.html';
//     })
//     .catch(error => console.error('Error:', error));

//   });



document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    var inputValue = document.getElementById('myInput').value;
    var encodedValue = encodeURIComponent(inputValue);
    const Url = 'http://ye96nz.natappfree.cc/get_es/'+encodedValue;
    var xhr = new XMLHttpRequest();
    xhr.open('GET',Url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
            var data = xhr.responseText;
            data = JSON.parse(data);
            console.log(data);
            sessionStorage.setItem('sharedData', JSON.stringify(data));
      // 重新加载第二个页面或导航到第二个页面
            window.location.href = 'search.html'; // 替换为你的第二个页面的UR
        }
    }
    xhr.send();
});
