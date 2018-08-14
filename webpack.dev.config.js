//Archivo de configuracion con las reglas para hacer el bundle, este es para desarrollo 
//hay otro para producción

const path = require('path');

module.exports = {
    entry: {
        "app": path.resolve(__dirname, 'src/app.js') 
    },
    // se encarga de cargar todos los archivos necesarios para comenzar a utilizar el webpack 
    //ej. app .js de el salen todas las dependencias
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js'
    },
    devServer:{
        port: 9000
    },
    mode: "development",
    devtool:"eval-source-map",
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/, //Expresiòn regular para identificar archivos js y jsx
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets:['es2015','react','stage-2']  //para styled components requieres otro presets
                    }
                }
            },
            {
                test: /\.css$/,
                use:['css-loader','style-loader']
            },
            {
                test: /\.(jpg|png|bmp|gif|svg)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        limit: 1000000,
                        fallback:'file-loader', //Expulsar los archivos comprimidos
                        name:'images/[name].[hash].[ext]'
                    }
                }
            }
        ]
    }
    //conjunto de reglas para traspilar el bundle
}
