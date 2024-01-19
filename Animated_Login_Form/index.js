const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () => {
      //change password to text

      if(input.type === 'password'){
        //switch to text
        input.type = 'text'

        // icon change

        iconEye.classList.add('ri-eye-line');
        iconEye.classList.remove('ri-eye-off-line');
      } else {
        //change password

        input.type = 'password'
        iconEye.classList.remove('ri-eye-line');
        iconEye.classList.add('ri-eye-off-line');
      }
    })
}



showHiddenPass('login-pass','login-eye')