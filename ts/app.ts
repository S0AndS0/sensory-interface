// The following, according to current research, must be set at time of script load
const this_script_url = new URL(document.currentScript['src']);
const this_script_dir = this_script_url.pathname.split('/').slice(0, -1).join('/');


function setFocusToInputField() {
  document.getElementById('dataInput').focus();
}

function updateURL() {
  const input: string = <string> encodeURIComponent(document.getElementById('dataInput')['value']);
  // input = encodeURIComponent(input);
  const minValue = document.getElementById('minValue')['value'];
  const maxValue = document.getElementById('maxValue')['value'];
  const instrumentType = document.getElementById('instrumentType')['value'];
  const currentUrl = new URL(window.location.href);
  let newUrl;
  // Check if we are running on a localhost
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname === '') {
    newUrl = window.location.pathname;
    newUrl = newUrl.substring(0, newUrl.lastIndexOf('/'));
  } else {
    newUrl = currentUrl.origin;
  }
  newUrl += `${this_script_dir}/view/index.html?`;
  newUrl += `data=${input}`;
  newUrl += `&minValue=${minValue}`;
  newUrl += `&maxValue=${maxValue}`;
  newUrl += `&instrumentType=${instrumentType}`;
  window.location.href = newUrl;
}

function onRadioChange(radio) {
  const minValuePicker = document.getElementById('minValue');
  const maxValuePicker = document.getElementById('maxValue');
  if (radio.value == 'auto') {
    minValuePicker['disabled'] = true;
    maxValuePicker['disabled'] = true;
  } else {
    minValuePicker['disabled'] = false;
    maxValuePicker['disabled'] = false;
    document.getElementById('updateButton')['disabled'] = false;
  }
}

function findMinAndMaxValues() {
  if (document.getElementById('autoOption')['checked'] === false) {
    return;
  }
  const input = <string> document.getElementById('dataInput')['value'];
  let maxValue = -Infinity;
  let minValue = Infinity;
  // TODO: Add a method to parse the input data to a array of arrays for example, so it can be used here and in processData().
  const lines = input.split('\n');
  let line;
  for (line of lines) {
    const values = line.split('\t');
    let value;
    for (value of values) {
      value = parseFloat(value);
      if (value > maxValue) {
        maxValue = value;
      }
      if (value < minValue) {
        minValue = value;
      }
    }
  }
  document.getElementById('maxValue')['value'] = maxValue;
  document.getElementById('minValue')['value'] = minValue;
}
