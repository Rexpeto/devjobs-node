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
    }
}