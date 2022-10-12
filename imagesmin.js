import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'
import imageminGifsicle from 'imagemin-gifsicle'
import imageminSvgo from 'imagemin-svgo'

imagemin(['src/assets/images/**/*.{jpg,png,gif,svg}'], {
    plugins: [
        imageminMozjpeg({ quality: 80 }),
        imageminPngquant({ quality: [0.6, 0.8]}),
        imageminGifsicle(),
        imageminSvgo()
    ],
    destination: 'dist/images'
}).then(() => {
    console.log('Images optimized');
});
