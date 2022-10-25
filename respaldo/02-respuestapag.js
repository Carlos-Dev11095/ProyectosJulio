/////////////////////// sw.js///////////////////////
self.addEventListener('fetch', e=>{

    const respOffline= fetch('');

    
    const resp = fetch(e.request)
        .catch(()=>{
            return respOffline
        });

    e.respondWith(resp)

});
/////////////////////// app.js ///////////////////////

if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
}