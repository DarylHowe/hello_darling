import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Book from '#models/book'
import User from '#models/user'

export default class Review extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare book_id: number

  @column()
  declare user_id: number

  @column()
  declare rating: number

  @column()
  declare comment: string

  static get columns() {
    return ['id', 'book_id', 'user_id', 'rating', 'comment', 'created_at', 'updated_at']
  }

  // @ts-ignore
  @belongsTo(() => Book, { foreignKey: 'book_id' })
  public book: ReturnType<typeof belongsTo> | undefined

  // @ts-ignore
  @belongsTo(() => User, { foreignKey: 'user_id' })
  public user: ReturnType<typeof belongsTo> | undefined
}
