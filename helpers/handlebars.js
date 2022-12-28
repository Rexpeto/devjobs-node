export const skills = {
    seleccionarSkills: (seleccinadas = [], opciones) => {
        const conocimientos = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'first mobile', 'Javascript', 'JQuery', 'Node.js', 'Angular', 'VueJs', 'ReactJs', 'React Hooks', 'Redux', 'Apollo', 'GraphQL', 'TypeScript', 'PHP', 'Laravel', 'Symfony', 'Python', 'Django', 'ORM', 'Sequelize', 'Mongoose', 'SQL', 'Sass', 'MVC', 'Deno', 'Go', 'WordPress']

        let html = '';

        conocimientos.forEach(skill => {
            html += `
                <li ${seleccinadas.includes(skill) ? 'class="activo"' : ''}>${skill}</li>
            `;
        });

        return html;
    },

    tipoContrato: (seleccionado, opciones) => {
        return opciones.fn(this).replace(
            new RegExp(`value="${seleccionado}"`), '$& selected'
        )
    },

    mostrarAlertas: (errores = {}, alertas) => {
        const categoria = Object.keys(errores);

        let html = '';

        if(categoria.length) {
            errores[categoria].forEach(mensaje => {
                html += `
                    <div class="alerta ${categoria}">
                        ${mensaje}
                    </div>
                `
            })
        }

        return html;
    }
}