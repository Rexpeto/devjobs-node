//? Muestra los trabajos en el home
export const mostrarTrabajos = (req, res) => {
    res.render('home', {
        pagina: 'DevJobs',
        tagLine: 'Encuentra y pública trabajos para Developers',
        barra: true,
        boton: true
    });
}