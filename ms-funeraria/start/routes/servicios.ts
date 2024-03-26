import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/servicios", "ServiciosController.find");
    Route.get("/servicios/:id", "ServiciosController.find");
    Route.post("/servicios", "ServiciosController.create");
    Route.put("/servicios/:id", "ServiciosController.update");
    Route.delete("/servicios/:id", "ServiciosController.delete");
})