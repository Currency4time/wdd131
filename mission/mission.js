const themeSelector = document.querySelector("#brightness")
function changeTheme() {
    const logo = document.querySelector('#brightness')
}

if (themeSelector.value==="dark"){
    document.body.classList.add('dark')
    logo.src="byui-logo_white.png"
} else{
    body.classList.remove('dark')
    logo.src="byui-logo_blue.webp"
}

themseSelector.addEventListener('change',changeTheme)