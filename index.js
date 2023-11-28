function buscar() {
    let albumes = document.querySelectorAll('.album');
    let titulos = [];
    albumes.forEach(function(album) {
        titulos.push(album.textContent);
    });
    
    let buscar = document.getElementById('txtBuscar').value;
    if (titulos.includes(buscar)) {
        alert(`El album "${buscar}" existe`);
    } else {
        alert(`El album "${buscar}" no existe`);
    }
}