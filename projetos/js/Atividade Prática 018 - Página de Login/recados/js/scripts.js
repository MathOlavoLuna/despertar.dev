const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}


const messagesContainer = document.querySelector('.messages-list')

const prevPage = document.getElementById('prevPage')
const nextPage = document.getElementById('nextPage')

// Variáveis globais
let currentPage = 1
let totalPages = 1

async function fetchMessages(page) {
  try {
    const userId = localStorage.getItem('userId')

    if (!userId) {
      alert("Você precisa fazer login para visualizar os recados.")

      return
    }

    const params = {
      page,
      perPage: 3
    }

    const response = await api.get(`/notes/${userId}`, { params })
    const messages = response.data.userMessages

    console.log(messages)

    totalPages = response.data.totalPages

    messagesContainer.innerHTML = ''

    messages.forEach(message => {
      const messageCard = document.createElement('div')
      messageCard.classList.add('card')

      messageCard.innerHTML = `
        <h2 class="card-title">${message.title}</h2>
        <p class="card-description">${message.description}</p>
        <div class="card-icons">
          <i class="fas fa-solid fa-trash" data-id=${message.id}></i>
          <i class="fas fa-regular fa-edit" data-bs-toggle="modal" data-bs-target="#edit-mess" data-id=${message.id}></i>
        </div>
      `
      messagesContainer.appendChild(messageCard)

      const deleteIcon = messageCard.querySelector('.fa-trash')

      deleteIcon.addEventListener('click', () => {
        const messageId = deleteIcon.getAttribute('data-id')

        deleteMessage(messageId)
      })

      const editIcon = messageCard.querySelector('.fa-edit')

      editIcon.addEventListener('click', () => {
        const messageId = editIcon.getAttribute('data-id')
        const formEditMessage = document.getElementById('form-edit-message')
        const titleInputEdit = document.getElementById('title-edit')
        const descriptionInputEdit = document.getElementById('description-edit')

        formEditMessage.addEventListener('submit', (event) => {
          event.preventDefault()
        
          const titleValue = titleInputEdit.value
          const descriptionValue = descriptionInputEdit.value
        
          const editMessage = {
            title: titleValue,
            description: descriptionValue
          }
        
          updateMessage(messageId, editMessage)
        })

      })
    });
  } catch (error) {
    console.log(error);
  }

}
fetchMessages(currentPage)

prevPage.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--
    fetchMessages(currentPage)
  }
})

nextPage.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchMessages(currentPage)
  }
})


async function updateMessage(messageId, editMessage) {
  try {
    const response = await api.put(`/notes/${messageId}`, editMessage)

    if (response.status === 200) {
      alert('Recado atualizado com sucesso!')
    }

    location.href = "listar-recados.html"
  } catch (error) {
    console.log('Erro ao atualizar recado.')
  }
}

