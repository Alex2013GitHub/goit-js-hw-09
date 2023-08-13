import Notiflix from 'notiflix';

const formRefs = document.querySelector('.form');

formRefs.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;

  let delay_count = Number(delay.value);

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, delay_count)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay_count += Number(step.value);
  }
}

function createPromise(position, delay) {
  return new Promise((resoltve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resoltve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
