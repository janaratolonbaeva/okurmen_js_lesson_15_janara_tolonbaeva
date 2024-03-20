document.addEventListener('DOMContentLoaded', () => {
  // function f(b) {
  //   const a = 12;

  //   console.log('f 1');
  //   return a + b + 35; // 12 + 84 + 35
  // }

  // function g(x) {
  //   const m = 4;

  //   console.log('g 2');
  //   return f(m * x); // 84
  // }

  // console.log('g(21)', g(21));
  // console.log('f outside', f(1)); // 48

  // const btn1 = document.getElementById('show_message');
  // const btn2 = document.getElementById('do_heavy_task');

  // btn1.addEventListener('click', () => {
  //   console.log('Show me message');
  // });

  // btn2.addEventListener('click', () => {
  //   let i = 0;

  //   while (i < 10000000000) {
  //     i++;
  //   }

  //   console.log(i);
  // });

  // console.log('Start');

  // setTimeout(function cb1() {
  //   console.log('This is a message of call back 1');
  // }, 1);

  // console.log('Middle');

  // setTimeout(function cb2() {
  //   console.log('This is a message of call back 2');
  // }, 0);

  // console.log('End');

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function () {
    console.log(this.responseText);
    renderData(JSON.parse(this.responseText));
  });

  xhr.open('GET', 'https://restcountries.com/v3.1/all');
  xhr.send();

  const content = document.querySelector('.content');

  function renderData(data) {
    data.map((item) => {
      const name = document.createElement('p');
      const flag = document.createElement('img');

      name.innerHTML = item.name.common;
      flag.setAttribute('src', item.flags.svg);
      flag.style.width = '100px';
      flag.style.height = 'auto';

      content.appendChild(name);
      content.appendChild(flag);
    });
  }
});
