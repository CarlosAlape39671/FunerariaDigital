import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Traslado from 'App/Models/Traslado';

export default class TrasladosController {

    public async find({request,params}:HttpContextContract){
        if(params.id){
            return Traslado.findOrFail(params.id);
        }else{
            const data = request.all()
            if("page" in data && "per_page" in data){
                const page = request.input('page', 1);
                const perPage = request.input("per_page",20);
                return await Traslado.query().paginate(page, perPage)
            }else{
                return await Traslado.query()
            }            
        }
    }

    public async create({request}:HttpContextContract){
        const body = request.body();
        const theTraslado:Traslado = await Traslado.create(body);
        return theTraslado;
    }

    public async update({params,request}:HttpContextContract) {
        const theTraslado:Traslado = await Traslado.findOrFail(params.id);
        const body = request.body();
        theTraslado.ubicacion = body.ubicacion;
        theTraslado.fecha = body.fecha;
        return theTraslado.save();
    }

    public async delete({params,response}:HttpContextContract) {
        const theTraslado:Traslado = await Traslado.findOrFail(params.id);
            response.status(204);
            return theTraslado.delete();
    }

}
