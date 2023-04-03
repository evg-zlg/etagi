const db = require('../db');

class FlatController {
  async createFlat(req, res) {
    const {
      floor,
      pos_on_floor,
      price,
      rooms,
      area_total,
      area_kitchen,
      area_live,
      layout_image,
    } = req.body;
    const newFlat = await db.query(
      'INSERT INTO flat (floor, pos_on_floor, price, rooms, area_total, area_kitchen, area_live, layout_image) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [
        floor,
        pos_on_floor,
        price,
        rooms,
        area_total,
        area_kitchen,
        area_live,
        layout_image,
      ]
    );
    res.json(newFlat.rows[0]);
  }
  async getFlats(req, res) {
    const flat = await db.query('SELECT * FROM flat');
    res.json(flat.rows);
  }
  async getOneFlat(req, res) {
    const id = req.params.id;
    const flat = await db.query('SELECT * FROM flat WHERE id = $1', [id]);
    res.json(flat.rows[0])
  }
}

module.exports = new FlatController();
