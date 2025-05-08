/* Menu bars icon toggle to close X when menu is open */
function toggleMenu() {
    document.querySelector('label').classList.toggle('open');
}
const btn = document.querySelector('label');
btn.addEventListener('click', toggleMenu);

/* Current date in footer */
const d = new Date();
document.querySelector('#date').textContent = d.getFullYear();


















/* Image hover changes */
const toggleElements = document.querySelectorAll('.icon');
toggleElements.forEach(el => {
    el.addEventListener('mouseover', (e) => {
        const image = e.currentTarget.getAttribute("src");
        if (image == 'img/amazon.png') {
            e.currentTarget.setAttribute('src', 'img/amazon_hover.png');
        } else if (image == 'img/pinterest.png') {
            e.currentTarget.setAttribute('src', 'img/pinterest_hover.png');
        } else if (image == 'img/instagram.png') {
            e.currentTarget.setAttribute('src', 'img/instagram_hover.png');
        }
    })
    el.addEventListener('mouseout', (e) => {
        const image_org = e.currentTarget.getAttribute("src");
        if (image_org == 'img/amazon_hover.png') {
            e.currentTarget.setAttribute('src', 'img/amazon.png');
        } else if (image_org == 'img/pinterest_hover.png') {
            e.currentTarget.setAttribute('src', 'img/pinterest.png');
        } else if (image_org == 'img/instagram_hover.png') {
            e.currentTarget.setAttribute('src', 'img/instagram.png');
        }
    })   
  });

  // Responsive Menu

