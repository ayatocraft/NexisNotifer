self.addEventListener("install", event => {
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("notificationclick", event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow("https://ayatocraft.github.io/nexis-chat/")
    );
});
self.addEventListener("notificationclick", event=>{

    event.notification.close();

    const url = event.notification.data?.url ||
                "https://ayatocraft.github.io/NexisChat/";

    event.waitUntil(
        clients.matchAll({type:"window"}).then(clientList=>{
            for(const client of clientList){
                if(client.url.includes("NexisChat")){
                    return client.focus();
                }
            }
            return clients.openWindow(url);
        })
    );

});
