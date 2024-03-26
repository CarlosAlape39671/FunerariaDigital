import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/planes", "PlanesController.find");
    Route.get("/planes/:id", "PlanesController.find");
    Route.post("/planes", "PlanesController.create");
    Route.put("/planes/:id", "PlanesController.update");
    Route.delete("/planes/:id", "PlanesController.delete");
})