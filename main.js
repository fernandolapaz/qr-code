const btn = document.querySelector('.theme-switcher')
const root = document.querySelector(':root')
const icons = document.querySelectorAll(".icon")

btn.addEventListener('click', function () {
    root.classList.toggle('dark-mode')

    for (i of icons) {
        if (i.classList.contains('hidden')) {
            i.classList.remove('hidden')
        } else {
            i.classList.add('hidden')
        }
    }
})