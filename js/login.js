document.getElementById('btn-submit').addEventListener('click', function(){
    const user_email = document.getElementById('user-email');
    const email = user_email.value;

    const user_pass = document.getElementById('user-pass');
    const password = user_pass.value;

    if(email == 'omarjaforchy@gmail.com' && password == '105610'){
        console.log('Valid User');
    }else{
        console.log('Invalid User');
    }
})