import { users, items } from './data.js';

const tablaBody = document.getElementById('tabla_body');
const input = document.getElementById('input');
const btnUsuarios = document.getElementById('btn-usuarios');
const modal = document.getElementById('modal');
const UlUsers = document.getElementById('users');
const btn = document.getElementById('btn');
let term = '';

document.addEventListener('DOMContentLoaded', () => {
  for (const user of users) {
    const li = document.createElement('li');
    li.classList.add('usuario');
    li.dataset.name = user.nombre;
    li.innerHTML = user.nombre;
    UlUsers.appendChild(li);
  }
});

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
    ñ: 'n',
  };

  return cadena
    .toLowerCase()
    .replace(/[áéíóúüñ]/g, (letra) => mapaAcentos[letra] || letra);
}

const searchByTerm = () => {
  const userId = users.find((user) =>
    quitarAcentos(user.nombre).includes(term.toLowerCase())
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

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    handleClick();
  } else {
    term = e.target.value;
  }
});

btn.addEventListener('click', handleClick);

btnUsuarios.addEventListener('click', () => {
  modal.classList.add('modal--active');
});

modal.addEventListener('click', (e) => {
  if (e.target.dataset['name']) {
    term = quitarAcentos(e.target.dataset['name']);
    console.log(term);
    handleClick();
  }

  modal.classList.remove('modal--active');
});
