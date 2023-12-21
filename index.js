function buscar() {
    let tipo = document.getElementById('buscarSelect').value;

    let albumes = document.querySelectorAll('.album');
    let titulos = [];
    albumes.forEach(function(album) {
        titulos.push(album.textContent);
    });

    let años = document.querySelectorAll('.año');
    let anios = [];
    años.forEach(function(año) {
        anios.push(año.textContent);
    });

    let canciones = document.querySelectorAll('.cancion');
    let tituloCanciones = [];
    canciones.forEach(function(cancion) {
        tituloCanciones.push(cancion.textContent);
    });

    let buscar = document.getElementById('txtBuscar').value;
    
    switch (tipo) {
        case 'Album':
            if(titulos.some(titulo => {
                return titulo.toLowerCase() === buscar.toLowerCase();
            })) {
                alert(`Album ${buscar} existe`);
            } else {
                alert(`Album ${buscar} no existe`);
            }
            break;
        case 'Año':
            if (anios.includes(buscar)) {
                alert(`Año ${buscar} existe`);
            } else {
                alert(`Año ${buscar} no existe`);
            }
            break;
        case 'Cancion':
            if(tituloCanciones.some(tituloCancion => {
                return tituloCancion.toLowerCase() === buscar.toLowerCase();
            })) {
                alert(`Cancion ${buscar} existe`);
            } else {
                alert(`Cancion ${buscar} no existe`);
            }
            break;
        default:
            alert('No seleccionaste ninguna opción');
            break;
    }
}