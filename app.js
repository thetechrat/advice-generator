const display = document.getElementById("display");
const displayId = document.getElementById("id");

async function getAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let advice = await response.json();
  return advice;
}
getAdvice().then((advice) =>
  (display.textContent = `"${advice.slip.advice}"`)(
    (displayId.textContent = `#${advice.slip.id}`)
  )
);
function advice() {
  getAdvice().then((advice) =>
    (display.textContent = `"${advice.slip.advice}"`)(
      (displayId.textContent = `#${advice.slip.id}`)
    )
  );
}
