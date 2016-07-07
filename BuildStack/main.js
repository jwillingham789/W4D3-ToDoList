'use strict';

var inputText = document.getElementById('todoItem');
var itemText = document.querySelector('.item');

var addItem = function addItem() {
  var li = document.createElement('li');
  li.classList.add('item');

  var input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.classList.add('check_box');

  var span = document.createElement('span');
  span.innerHTML = inputText.value;

  li.appendChild(input);
  li.appendChild(span);

  if (inputText.value == '') {} else {
    document.querySelector('#todos').appendChild(li);
    inputText.value = '';
  }
};

document.querySelector('.add_button').addEventListener('click', addItem);
document.getElementById('todoItem').addEventListener('keypress', function (e) {
  if (e.charCode === 13) {
    addItem();
  }
});

document.querySelector('.delete_button').addEventListener('click', function () {
  var remove = document.querySelectorAll('.item');
  remove.forEach(function (item) {
    if (item.lastChild.classList.contains('done')) {
      item.parentElement.removeChild(item);
    }
  });
});

document.body.addEventListener('change', function (e) {
  if (e.target.classList.contains('check_box')) {
    e.target.nextSibling.classList.toggle('done');
  }
});