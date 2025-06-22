const Head = document.getElementById('judul')
Head.style.display = "Flex"
Head.style.justifyContent = "Center"
Head.style.color = "#a0a0a0"
Head.innerHTML = "Hallo Qqilaw"

const Phi = document.getElementsByTagName('p')

for ( let i = 0; i < Phi.length; i++ ) {
    Phi[i].style.backgroundColor = "#80b5ff"
}