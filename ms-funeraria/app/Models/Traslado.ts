import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Traslado extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ubicacion: string

  @column()
  public fecha: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
