//Highlight current block
function getCurrentBlock() {
  let ans;
  url = 'http://185.177.219.170:3001/api/getblockcount'
  return fetch(url).then(function(response) {
      response.text().then(function(text) {
        let blockCounter = document.querySelector('.reward .wrapper .description p b')
        let rows = document.querySelectorAll('.table .row.default');
        blockCounter.textContent = text;
        for (let row = 0; row < rows.length; row++) {
          if (parseInt(rows[row].firstElementChild.firstElementChild.textContent) > text) {
            rows[row - 1].classList.add('current');
            break;
          }
        }
      });
  }).catch(error => {
    ans = 150000;
  });
}

document.onload = getCurrentBlock();


//Open specification table
let limiter = document.querySelector('.limiter')
function OpenSpecificationTable() {
  this.parentElement.parentElement.parentElement.classList.remove('disabled');
}

limiter.addEventListener('click', OpenSpecificationTable);