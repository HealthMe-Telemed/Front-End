function

show_hide_password(target){
    
var input = document.getElementById('password-input'); 

if (input.getAttribute('type') == 'password') {
} 

else {
    target.classList.add('view'); input.setAttribute('type', 'text');
    target.classList.remove('view'); input.setAttribute('type', 'password');
}
return false;
}

