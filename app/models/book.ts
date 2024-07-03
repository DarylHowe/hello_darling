import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Review from "#models/review";

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare title: string

  @column()
  declare author: string

  static get columns() {
    return [
      'id',
      'title',
      'author',
      'created_at',
      'updated_at'
    ]
  }

  // @ts-ignore
  @hasMany(() => Review, { foreignKey: 'book_id' })
  public reviews: ReturnType<typeof hasMany> | undefined

}
