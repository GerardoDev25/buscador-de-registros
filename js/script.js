import { users as usersData, items as itemsData } from './data.js';

let term = '';
let users =
  JSON.parse(localStorage.getItem('users')) || structuredClone(usersData);
let items =
  JSON.parse(localStorage.getItem('items')) || structuredClone(itemsData);

const body = document.querySelector('body');
const input = document.getElementById('input');
const UlUsers = document.getElementById('users');
const tablaBody = document.getElementById('tabla_body');

// ** buttons
const btnShowUsuarios = document.getElementById('btn-usuarios');
const btnSearch = document.getElementById('btn-search');
const btnNewUser = document.getElementById('btn-add-user');
const btnNewItem = document.getElementById('btn-add-item');

// ** modals
const modalShowUsers = document.getElementById('modal-show-users');
const modalAddUser = document.getElementById('modal-add-user');
const modalAddItem = document.getElementById('modal-add-item');

// ** form users
const formAddUser = document.getElementById('form-user');
const formNameUser = document.getElementById('name-user');

// ** form users
const formAddItem = document.getElementById('form-item');
const formprecioItem = document.getElementById('precio-item');
const formacuentaItem = document.getElementById('acuenta-item');
const formDetalleItem = document.getElementById('detalle');
const formSelectUserItem = document.getElementById('select-user');

const loadUserSelected = () => {
  formSelectUserItem.innerHTML = '';
  for (const user of users) {
    const option = document.createElement('option');
    option.value = user.id;
    option.textContent = user.nombre;
    formSelectUserItem.appendChild(option);
  }
};

const loadDatatoLocalStorage = () => {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(usersData));
  }
  if (!localStorage.getItem('items')) {
    localStorage.setItem('items', JSON.stringify(itemsData));
  }
};

const loadUsers = () => {
  UlUsers.innerHTML = '<div></div>';
  for (const user of users) {
    const li = document.createElement('li');
    li.classList.add('usuario');
    li.dataset.name = user.nombre;
    li.innerHTML = user.nombre;
    UlUsers.firstChild.appendChild(li);
  }
};

const printTable = (itemsFiltered) => {
  for (const item of itemsFiltered) {
    const tr = document.createElement('tr');
    tr.classList.add('tabla__tr');

    const user = users.find((user) => user.id === item.idu);

    tr.innerHTML = `
        <td class="tabla__td">${item.fecha}</td>
        <td class="tabla__td">${user.nombre}</td>
        <td class="tabla__td">${item.detalle}</td>
        <td class="tabla__td">${item.precio}</td>
        <td class="tabla__td">${item.acuenta}</td>
        <td class="tabla__td">${item.saldo}</td>
    `;
    tablaBody.appendChild(tr);
  }
};

function quitarAcentos(cadena) {
  const mapaAcentos = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    ü: 'u',
  };

  return cadena
    .toLowerCase()
    .replace(/[áéíóúü]/g, (letra) => mapaAcentos[letra] || letra);
}

const searchByTerm = () => {
  const userId = users.find((user) =>
    quitarAcentos(user.nombre).includes(quitarAcentos(term))
  )?.id;

  if (!userId) {
    alert('No se encontró ningún usuario con ese nombre');

    return [];
  }

  const itemsFiltered = items.filter((item) => item.idu === userId);
  return itemsFiltered;
};

const handleClick = () => {
  if (!term) {
    return;
  }
  const itemsFiltered = searchByTerm();
  input.value = '';
  term = '';
  tablaBody.innerHTML = '';
  printTable(itemsFiltered);
};

// ** listeners

document.addEventListener('DOMContentLoaded', () => {
  loadUsers();
  loadDatatoLocalStorage();
  loadUserSelected();
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    handleClick();
  } else {
    term = e.target.value;
  }
});

btnSearch.addEventListener('click', handleClick);

btnNewUser.addEventListener('click', () => {
  modalAddUser.classList.add('modal--active');
  body.classList.add('overflow--hidden');
});

btnNewItem.addEventListener('click', () => {
  modalAddItem.classList.add('modal--active');
  body.classList.add('overflow--hidden');
});

btnShowUsuarios.addEventListener('click', () => {
  modalShowUsers.classList.add('modal--active');
  body.classList.add('overflow--hidden');
});

modalAddUser.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    modalAddUser.classList.remove('modal--active');
    body.classList.remove('overflow--hidden');
  }
});

modalAddItem.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    modalAddItem.classList.remove('modal--active');
    body.classList.remove('overflow--hidden');
  }
});

modalShowUsers.addEventListener('click', (e) => {
  if (e.target.dataset['name']) {
    term = quitarAcentos(e.target.dataset['name']);
    handleClick();
  }

  modalShowUsers.classList.remove('modal--active');
  body.classList.remove('overflow--hidden');
});

formAddItem.addEventListener('submit', (e) => {
  e.preventDefault();
  const idu = Number(formSelectUserItem.value);
  const fecha = new Date().toLocaleDateString().split('/');
  const fechaFormateada = `${fecha[2]}-${fecha[0]}-${fecha[1]}`;
  const precio = Number(formprecioItem.value);
  const acuenta = Number(formacuentaItem.value);
  const detalle = formDetalleItem.value;
  const saldo = precio - acuenta;
  const newItem = {
    id: items.length + 1,
    idu,
    fecha: fechaFormateada,
    saldo: precio - acuenta,
    precio,
    acuenta,
    detalle,
    saldo,
  };

  localStorage.setItem('items', JSON.stringify([...items, newItem]));
  items = JSON.parse(localStorage.getItem('items'));

  formprecioItem.value = '';
  formacuentaItem.value = '';
  formDetalleItem.value = '';
  modalAddItem.classList.remove('modal--active');
  body.classList.remove('overflow--hidden');
});

formAddUser.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = formNameUser.value;
  const id = users.length + 1;
  const newUser = { id, nombre: name };

  localStorage.setItem('users', JSON.stringify([...users, newUser]));
  users = JSON.parse(localStorage.getItem('users'));
  loadUsers();
  loadUserSelected();
  formNameUser.value = '';
  modalAddUser.classList.remove('modal--active');
  body.classList.remove('overflow--hidden');
});
