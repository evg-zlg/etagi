const csvjson = require('csvjson');
const db = require('../db');
const fs = require('fs');

const data = fs.readFileSync('./data/flats_data.csv', 'utf8');

const options = {
  delimiter: ',',
  quote: '"',
};
const jsonData = csvjson.toObject(data, options);

function changeSeparator(source) {
  const result = source.map((item) => {
    const area_total = item.area_total.split(',').join('.');
    const area_kitchen = item.area_kitchen.split(',').join('.');
    const area_live = item.area_live.split(',').join('.');
    return {...item, area_total, area_kitchen, area_live};
  });

  return result;
}

const jsonDataForLoad = changeSeparator(jsonData);

async function createFlat(req) {
  const {
    floor,
    pos_on_floor,
    price,
    rooms,
    area_total,
    area_kitchen,
    area_live,
    layout_image,
  } = req;
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
}

function loadData() {
  for (flat of jsonDataForLoad) {
    createFlat(flat);
  }
};


module.exports = loadData;
