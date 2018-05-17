const inputs = document.querySelectorAll('input');

function updateCSS() {
  // console.log(this.value);
  // console.log(this.dataset);
  let suffix = this.dataset.sizing || '';
  console.log(this.name)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', updateCSS));
inputs.forEach(input => input.addEventListener('mousemove', updateCSS));