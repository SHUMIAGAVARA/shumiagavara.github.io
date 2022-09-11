function SendMessage() {
        const inputName = document.getElementById("name");
        const inputEmail = document.getElementById("email");
        const inputCheckbox = document.getElementById("checkbox");
        if (inputName.value == "" || inputEmail.value == "" || inputCheckbox.checked) {
          inputName.style.borderColor = "red";
          inputEmail.style.borderColor = "red";
          inputCheckbox.style.borderColor = "red";