const Database = use('Database')
module.exports = async (data, field, message, args, get) => {
  try {
    const value = get(data, field)
    if (!value) return
    const [table, column] = args
    const row = await Database.table(table).where(column, value).first()
    if (!row) throw message
  } catch (error) {
    throw message
  }
}
