//? Muestra formulario de crear vacantes
export const formVacantes = (req, res) => {
    res.render('nueva-vacante', {
        pagina: 'Nueva vacante',
        tagLine: 'Llena el formulario para agregar una vacante',
        barra: true,
        trix: true
    })
}