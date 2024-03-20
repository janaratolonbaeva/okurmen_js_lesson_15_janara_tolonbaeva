document.addEventListener('DOMContentLoaded', () => {
  function f(b) {
    const a = 12;

    console.log('f 1');
    return a + b + 35; // 12 + 84 + 35
  }

  function g(x) {
    const m = 4;

    console.log('g 2');
    return f(m * x); // 84
  }

  console.log('g(21)', g(21));
  console.log('f outside', f(1)); // 48

  const btn1 = document.getElementById('show_message');
  const btn2 = document.getElementById('do_heavy_task');

  btn1.addEventListener('click', () => {
    console.log('Show me message');
  });

  btn2.addEventListener('click', () => {
    let i = 0;

    while (i < 10000000000) {
      i++;
    }

    console.log(i);
  });
});
