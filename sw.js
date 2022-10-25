self.addEventListener('fetch', e=>{

    const respOffline=  new Response(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
         </head>
    <body>
    
              <div  class="container-body">
                <h2>MODO OFFLINE<>
              </div>
    
    </body>
    </html>
    `,{
        headers:{
            'Content-Type':'text/html'
        }
    })
    const resp = fetch(e.request)
        .catch(()=>{
            return respOffline
        });

    e.respondWith(resp)

});