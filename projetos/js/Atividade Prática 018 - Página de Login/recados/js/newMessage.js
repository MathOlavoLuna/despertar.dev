const formNewMessage = document.getElementById('form-new-message')
const titleInput = document.getElementById('title')
const descriptionInput = document.getElementById('description')

formNewMessage.addEventListener('submit', (event) => {
  event.preventDefault() // impede comportamento padrão submit

  const titleValue = titleInput.value
  const descriptionValue = descriptionInput.value

  const userId = localStorage.getItem('userId')

  if (!userId) {
    alert('Você precisa fazer login para cadastrar um recado.')
  }

  const newMessage = {
    title: titleValue,
    description: descriptionValue,
    userId
  }

  createNewMessage(newMessage)
})

async function createNewMessage(message) {
  try {
    const response = await api.post('/notes', message)

    if (response.status === 201) {
      if (titleInput.value && descriptionInput.value) {
        alert('Recado cadastrado com sucesso!')

        titleInput.value = ""
        descriptionInput.value = ""
        location.reload()
      }
    }
  } catch (error) {
    console.log('Erro ao cadastrar recado', error)
  }
}

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
