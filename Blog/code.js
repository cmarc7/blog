Notification.requestPermission(()=>{
    if(Notification.permission == "granted") {
        new Notification("Ahora vas a poder recibir notificaciones de MarcBlogs")
    }
})