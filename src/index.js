//libs
import * as $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/modal';

//assets
import assignmentIcon from './assets/icons/assignment.svg';
import monitorIcon from './assets/icons/monitor.svg';
import chevronDownIcon from './assets/icons/chevron-down.svg';

//data
import {createSubtable} from "@/tableData";

//styles
import './styles/style.scss';

const $tableImgs = document.querySelectorAll('.sideBar__list_item a img');
$tableImgs.forEach((elem, idx) => {
  if (idx % 2 === 0) {
    elem.src = monitorIcon;
  } else {
    elem.src = assignmentIcon;
  }
});

const $tableChevrons = document.querySelectorAll('.table__headings td img');
$tableChevrons.forEach((elem) => {
  elem.src = chevronDownIcon;
});


const $subtable = createSubtable();

let currentTableBtn = null;
const $tableControlBtns = document.querySelectorAll('.table__details_srcntrl span');
$tableControlBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    currentTableBtn = this;
    const currentTable = this.parentElement.parentElement;
    currentTable.classList.toggle('active');
    if (currentTable.classList.contains('active')) {
      if (currentTable.nextElementSibling !== $subtable) {
        $($subtable).insertAfter(currentTable);
      }
      btn.innerHTML = '-';
    } else {
      $subtable.remove();
      btn.innerHTML = '+';
    }


    $tableControlBtns.forEach(btn => {
      const table = btn.parentElement.parentElement;
      if (table.nextElementSibling !== $subtable) {
        table.classList.remove('active');
        btn.innerHTML = '+';
      }
    });
  });
});

const $modalTableChevrons = document.querySelectorAll('.modal-table__headings td img');
$modalTableChevrons.forEach(elem => {
  elem.src = chevronDownIcon;
})

const $sideBar = document.querySelector('.sideBar');
const $sideBarToggleBtn = document.querySelector('.aside__toggle');
$sideBarToggleBtn.addEventListener('click', () => {
  $sideBar.classList.toggle('isHidden');
  $sideBarToggleBtn.classList.toggle('isHidden');
});