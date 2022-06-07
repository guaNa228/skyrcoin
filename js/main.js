function getCurrentBlock() {
  let ans;
  url = 'http://cors-anywhere.herokuapp.com/http://185.177.219.170:3001/api/getblockcount'
  return fetch(url).then(function(response) {
      response.text().then(function(text) {
        let rows = document.querySelectorAll('.table .row.default');
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