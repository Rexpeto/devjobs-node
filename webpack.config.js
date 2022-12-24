import path from 'path';

export default {
    mode: 'development',
    entry: {
        conocimiento: './src/js/conocimiento.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('public/js')
    }
}