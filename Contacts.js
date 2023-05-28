const ContactsSection = document.querySelector('.Contacts__section') 

function validation(form) {
    let result = true
    const allInputs = form.querySelectorAll('input')

    function addError(input, text) {
      const parent = input.parentNode;
      const FormItem = parent.parentNode;
      const errorLabel = document.createElement('p')
      errorLabel.textContent = text
      errorLabel.classList.add("error__label")
      parent.appendChild(errorLabel)
      FormItem.classList.add("Error")
      parent.classList.add("error")
    
    }

    function removeError(input) {
      const parent = input.parentNode;
      const FormItem = parent.parentNode;
      if (parent.classList.contains('error')) {
        parent.classList.remove("error")
        parent.querySelector('.error__label').remove()
        FormItem.classList.remove("Error")
      }
    }

    
    for (const input of allInputs) {
      if (input.dataset.required == 'true') {
        removeError(input)
        if (input.value == "") {
          addError(input, "Пожайлуста, заполните поле")
          result = false
          body.addEventListener('click', function (elem) {
            if(!elem.target.closest('input')) {
              removeError(input)
            } 
          
        })
        }
  
      }
    }  
    return result
}
  
async function formSend(form) {
    let formData = new FormData(form)
    let response = await fetch('sendMail.php', {
        method: 'POST',
        body: formData
    });
    if (response.ok) {
        ContactsSection.classList.add('respond')
        const container = ContactsSection.querySelector('.container')
        const tittle = document.createElement('h1')
        tittle.textContent = 'Ваша заявка успешна принята!';
        container.appendChild(tittle)
    } else {
        ContactsSection.classList.add('respond')
        const container = ContactsSection.querySelector('.container')
        const tittle = document.createElement('h1')
        tittle.textContent = 'Ошибка побпробуйте еще раз';
        container.appendChild(tittle)
    }

}
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault()
    if (validation(this) == true) {
        formSend(this)
        this.reset()
    }
})
  
  
