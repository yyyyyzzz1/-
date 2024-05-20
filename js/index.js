// formSubmit.js  
document.addEventListener('DOMContentLoaded', function() {  
    var form = document.getElementById('myForm');  
    if (form) {  
        form.addEventListener('submit', function(event) {  
            event.preventDefault(); // 阻止表单的默认提交行为  
            var inputValue = document.getElementById('myInput').value;  
            var encodedValue = encodeURIComponent(inputValue); 
            var newUrl = 'http://ivbib4.natappfree.cc/get_es/' + encodedValue; 
           

            if (inputValue) {  
                // 假设我们想要重定向到 /<inputValue> 的URL  
                window.location.href = newUrl;  
            } else {  
                // 输入为空时的处理，比如显示错误消息  
                alert('请输入一个值！');  
            }  
        });  
    }
    document.getElementById('myFormInput').value = '';   
});







