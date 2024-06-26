const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
 result.innerText = dividend / divider;

//Error handling: check if input are empty
if(!dividend || !divider ) {
  result.classList.add("error-message")
  result.innerText = "Division not performed. Both are required in inputs. Try again.";
  return;
}

//Error handling: check if inputs contain invalid characters
const validInputRegex = /^[0-9]+$/;
if (!validInputRegex.test(dividend) || !validInputRegex.test(divider)) {
  result.classList.add("critical-error");
  result.innerText = "Something critical went wrong, Please reload the page.";
  return;
}
try {
  //Force Number conversion
  const dividendNumber = Number(dividend);
  const divisorNumber = Number(divider);

  //Check for other numeric errors
  if (isNaN(dividendNumber) || isNaN(divisorNumber) || divisorNumber === 0) {
    throw new error("Invalid input: Division by zero or non-numeric value procvided.");
  }
  const resultValue = Math.floor(dividendNumber / divisorNumber);
  result.innerText = resultValue.toString();

} catch (error) {
  console.error("An error occured:", error);
  console.error("call stack:", error.stack);

  // Critical Error Handling
  result.innerText = "Something critical went wrong. Please reload the page.";
}

});



