function solve() {

    let dropdownButton = document.getElementById('dropdown');
    let ulElement = document.getElementById('dropdown-ul');
    let boxElement = document.getElementById('box');

    dropdownButton.addEventListener('click', function () {
        if (ulElement.style.display == 'none') {
            ulElement.style.display = 'block'
        } else {
            ulElement.style.display = 'none';
        }
    });

    ulElement.addEventListener('click', function (e) {
        boxElement.style.backgroundColor = e.target.textContent;
        boxElement.style.color='black'
    })

}