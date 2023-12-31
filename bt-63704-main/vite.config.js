import { resolve } from 'node:path'

// console.log(resolve('views')) // quiero saber, cual es la ruta completa (absoluta) donde esta la carpeta views

export default {
    server: {
        port: "2222"
    },
    css: {
        devSourcemap: true,
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                alta: resolve('views/alta.html'),
                carrito: resolve('views/carrito.html'),
                contacto: resolve('views/contacto.html'),
                nosotros: resolve('views/nosotros.html'),
                inicio: resolve('index.html'), /* D:\_courses\63704.bootcamp.fullstack\clase-34\bt-63704\index.html */
            }
        }
    }
}