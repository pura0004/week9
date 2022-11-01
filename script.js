const $button = document.getElementById('button')
const $alert = document.getElementById('alert')

$button.addEventListener('click', function () {
    // console.log('alert.textContent')
    $alert.classList.toogle('invisible')
    $alert.classList.toogle('opacity-0')
})



