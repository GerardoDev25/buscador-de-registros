const users = [
  {
    id: 1,
    nombre: 'Juan Pérez',
  },
  {
    id: 2,
    nombre: 'María Rodríguez',
  },
  {
    id: 3,
    nombre: 'Carlos Martínez',
  },
  {
    id: 4,
    nombre: 'Laura Gómez',
  },
  {
    id: 5,
    nombre: 'Miguel López',
  },
];

const items = [
  {
    id: 1,
    idu: 1,
    fecha: '2023-10-15',
    detalle: 'Cama dos plazas modelo Winter',
    precio: 350.0,
    acuenta: 200.0,
    saldo: 150.0,
  },
  {
    id: 2,
    idu: 2,
    fecha: '2023-10-14',
    detalle: 'TV de 47 pulgadas modelo Sony',
    precio: 550.0,
    acuenta: 150.0,
    saldo: 400.0,
  },
  {
    id: 3,
    idu: 3,
    fecha: '2023-10-13',
    detalle: 'Mesa de comedor estilo moderno',
    precio: 200.0,
    acuenta: 100.0,
    saldo: 100.0,
  },
  {
    id: 4,
    idu: 4,
    fecha: '2023-10-12',
    detalle: 'Sillón reclinable color beige',
    precio: 180.0,
    acuenta: 100.0,
    saldo: 80.0,
  },
  {
    id: 5,
    idu: 4,
    fecha: '2023-10-11',
    detalle: 'Refrigerador de acero inoxidable',
    precio: 700.0,
    acuenta: 400.0,
    saldo: 300.0,
  },
  {
    id: 6,
    idu: 1,
    fecha: '2023-10-10',
    detalle: 'Lavadora de carga frontal marca LG',
    precio: 450.0,
    acuenta: 300.0,
    saldo: 150.0,
  },
  {
    id: 7,
    idu: 2,
    fecha: '2023-10-09',
    detalle: 'Estufa a gas de acero inoxidable',
    precio: 350.0,
    acuenta: 200.0,
    saldo: 150.0,
  },
  {
    id: 8,
    idu: 3,
    fecha: '2023-10-08',
    detalle: 'Escritorio de madera de roble',
    precio: 250.0,
    acuenta: 100.0,
    saldo: 150.0,
  },
  {
    id: 9,
    idu: 4,
    fecha: '2023-10-07',
    detalle: 'Juego de platos de porcelana para 12 personas',
    precio: 120.0,
    acuenta: 80.0,
    saldo: 40.0,
  },
  {
    id: 10,
    idu: 2,
    fecha: '2023-10-06',
    detalle: 'Set de ollas y sartenes antiadherentes',
    precio: 100.0,
    acuenta: 70.0,
    saldo: 30.0,
  },
  {
    id: 11,
    idu: 1,
    fecha: '2023-10-05',
    detalle: 'Mesa de centro de cristal templado',
    precio: 150.0,
    acuenta: 70.0,
    saldo: 80.0,
  },
  {
    id: 12,
    idu: 2,
    fecha: '2023-10-04',
    detalle: 'Silla ergonómica ajustable para oficina',
    precio: 120.0,
    acuenta: 60.0,
    saldo: 60.0,
  },
  {
    id: 13,
    idu: 3,
    fecha: '2023-10-03',
    detalle: 'Aparador de madera maciza estilo vintage',
    precio: 300.0,
    acuenta: 150.0,
    saldo: 150.0,
  },
  {
    id: 14,
    idu: 4,
    fecha: '2023-10-02',
    detalle: 'Lámpara de pie con pantalla de tela',
    precio: 80.0,
    acuenta: 40.0,
    saldo: 40.0,
  },
  {
    id: 15,
    idu: 1,
    fecha: '2023-10-01',
    detalle: 'Juego de toallas de algodón egipcio',
    precio: 60.0,
    acuenta: 40.0,
    saldo: 20.0,
  },
  {
    id: 16,
    idu: 1,
    fecha: '2023-09-30',
    detalle: 'Mueble de TV con espacio para consolas',
    precio: 180.0,
    acuenta: 100.0,
    saldo: 80.0,
  },
  {
    id: 17,
    idu: 2,
    fecha: '2023-09-29',
    detalle: 'Lavaplatos de acero inoxidable',
    precio: 300.0,
    acuenta: 150.0,
    saldo: 150.0,
  },
  {
    id: 18,
    idu: 3,
    fecha: '2023-09-28',
    detalle: 'Colchón ortopédico tamaño king',
    precio: 400.0,
    acuenta: 200.0,
    saldo: 200.0,
  },
  {
    id: 19,
    idu: 4,
    fecha: '2023-09-27',
    detalle: 'Set de cubiertos de acero inoxidable',
    precio: 50.0,
    acuenta: 30.0,
    saldo: 20.0,
  },
  {
    id: 20,
    idu: 2,
    fecha: '2023-09-26',
    detalle: 'Juego de sábanas de algodón egipcio',
    precio: 70.0,
    acuenta: 40.0,
    saldo: 30.0,
  },
  {
    id: 21,
    idu: 1,
    fecha: '2023-09-25',
    detalle: 'Batidora de mano de alta potencia',
    precio: 60.0,
    acuenta: 30.0,
    saldo: 30.0,
  },
  {
    id: 22,
    idu: 2,
    fecha: '2023-09-24',
    detalle: 'Aspiradora sin bolsa de última generación',
    precio: 120.0,
    acuenta: 70.0,
    saldo: 50.0,
  },
  {
    id: 23,
    idu: 3,
    fecha: '2023-09-23',
    detalle: 'Horno de convección de acero inoxidable',
    precio: 250.0,
    acuenta: 150.0,
    saldo: 100.0,
  },
  {
    id: 24,
    idu: 4,
    fecha: '2023-09-22',
    detalle: 'Cafetera de cápsulas compatible',
    precio: 90.0,
    acuenta: 60.0,
    saldo: 30.0,
  },
  {
    id: 25,
    idu: 3,
    fecha: '2023-09-21',
    detalle: 'Ventilador de torre con control remoto',
    precio: 70.0,
    acuenta: 40.0,
    saldo: 30.0,
  },
  {
    id: 26,
    idu: 5,
    fecha: '2023-09-20',
    detalle: 'Sofá seccional de cuero genuino',
    precio: 800.0,
    acuenta: 500.0,
    saldo: 300.0,
  },
];

export { users, items };
