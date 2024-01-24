const signIn = document.getElementById('sign-in')

const userInput = document.getElementById('username')
const passloginInput = document.getElementById('password')

signIn.addEventListener('click', (e) => {
  e.preventDefault() // impedir comportamento padrão do submit

  const data = {
    name: userInput.value,
    password: passloginInput.value,
  }

  login(data)
})

async function login(data) {
  try {
    const response = await api.post('/users/login', data)

    if (response.status === 200) {
      const userData = response.data

      localStorage.setItem('userId', userData.userId)
      location.href = "listar-recados.html"
    }
  } catch (error) {
    console.log('Erro ao fazer login', error)
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

