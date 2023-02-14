const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    if (!(modalWrapper.classList.contains('invisible'))) {
        const isEscKey = event.key === 'Escape'
        if (isEscKey) {
            modalWrapper.classList.add('invisible')
        }
    }
    
})