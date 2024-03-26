import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sepultura from 'App/Models/Sepultura';

export default class SepulturasController {

    public async find({request,params}:HttpContextContract){
        if(params.id){
            return Sepultura.findOrFail(params.id);
        }else{
            const data = request.all()
            if("page" in data && "per_page" in data){
                const page = request.input('page', 1);
                const perPage = request.input("per_page",20);
                return await Sepultura.query().paginate(page, perPage)
            }else{
                return await Sepultura.query()
            }            
        }
    }

    public async create({request}:HttpContextContract){
        const body = request.body();
        const theSepultura:Sepultura = await Sepultura.create(body);
        return theSepultura;
    }

    public async update({params,request}:HttpContextContract) {
        const theSepultura:Sepultura = await Sepultura.findOrFail(params.id);
        const body = request.body();
        theSepultura.fecha = body.fecha;
        return theSepultura.save();
    }

    public async delete({params,response}:HttpContextContract) {
        const theSepultura:Sepultura = await Sepultura.findOrFail(params.id);
            response.status(204);
            return theSepultura.delete();
    }

}
