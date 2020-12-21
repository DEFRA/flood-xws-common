module.exports = (pool) => {
  /**
   * Query the db through the pool instance
   *
   * @param {string} query - The query string
   * @param {[]} args - The query args
   */
  async function query (query, args) {
    const result = await pool.query(query, args)
    return result.rows
  }

  /**
   * Query the db for a single item through the pool instance
   *
   * @param {string} query - The query string
   * @param {[]} args - The query args
   */
  async function queryOne (query, args) {
    const result = await pool.query(query, args)
    return result.rowCount ? result.rows[0] : null
  }

  return {
    query,
    queryOne
  }
}
