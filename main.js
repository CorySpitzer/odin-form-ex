// Turns out main.js isn't needed, but i'm leaving it here anyway

function colorBoxBlue() {
    console.log('called')
}

function addEventListeners() {
    let idList = ['first-name', 'last-name', 'email', 'phone', 'password', 'confirm-password'];
    for (const id of idList) {
        // set an event listener using id
        let element = document.getElementById(id);
        element.addEventListener('click', () => colorBoxBlue());
    }
    // let inputBoxes = document.getElementsByClassName("input-button");
    // inputBoxes.forEach(inputBox => {
    //     console.log(inputBox);
    // });
}


addEventListeners();