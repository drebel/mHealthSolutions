document.addEventListener('DOMContentLoaded', async () => {
    const navbarResponse = await fetch('./fragments/navbar.html')
    const navbarData = await navbarResponse.text()
    document.getElementById('navbar-container').innerHTML = navbarData

    const footerResponse = await fetch('./fragments/footer.html')
    const footerData = await footerResponse.text()
    document.getElementById('footer-containter').innerHTML = footerData

})