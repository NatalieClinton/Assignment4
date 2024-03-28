// Dark Mode Toggle Switch
const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);