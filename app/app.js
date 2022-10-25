if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
}

if(window.caches){
    //Agregar Cache

    caches.open('cache-prueba-1');
    caches.open('cache-prueba-2');

    //Preguntar por un cache

    caches.has('cache-prueba-1').then(resp=>{
        console.log('El cache-prueba-1'+ resp)
    })

    //Borrar cache
    caches.delete('cache-prueba-2').then(resp=>{
        console.log('El cache-prueba-2  borrado: ' + resp)
    })

    //Creando un cache y agregando contenido

    caches.open('cache-v1').then(cache=>{
        //cache.add('/index.html')// uno en uno
        cache.addAll([
            '/',
            '/index.html',
            'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSDt-QMS1Q5r5glYNwMgvroZU7COVbYWijWk3FnlPDySoMvzYL6%26s&sp=1666632146Tc70dbc2cc68870323bb6b835887f99ff29d8d0e5c0abb91a46f810bcbe2435be',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
            '/app/app.js'
        ]).then(()=>{
            //Borrar cache especifico
            cache.delete('https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSDt-QMS1Q5r5glYNwMgvroZU7COVbYWijWk3FnlPDySoMvzYL6%26s&sp=1666632146Tc70dbc2cc68870323bb6b835887f99ff29d8d0e5c0abb91a46f810bcbe2435be')
            .then(()=>{
                console.log('imagen borrada');
            })
            cache.put('index.html', new Response('Hola mundo'));
        });

    })

}