self.addEventListener("notificationclick", event=>{

    event.notification.close();

    const url = event.notification.data?.url
        || "https://ayatocraft.github.io/NexisChat/";

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
