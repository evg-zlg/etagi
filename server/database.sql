create TABLE flat(
  id SERIAL PRIMARY KEY,
  floor INTEGER,
  pos_on_floor INTEGER,
  price INTEGER,
  rooms INTEGER,
  area_total REAL,
  area_kitchen REAL,
  area_live REAL,
  layout_image VARCHAR (255)
);