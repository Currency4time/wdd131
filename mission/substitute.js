let selectElem = document.querySelector('#brightness');

let logo = document.querySelector('img');

function changeTheme(){
    let current = selectElem.ariaValueMax;

    if (current == 'dark'){
        //give body the dark class
        //add different image by changing src
    } else{
        //take off class
        //change the image back to the original
    }
}

selectElem.addEventListener('change', changeTheme;)