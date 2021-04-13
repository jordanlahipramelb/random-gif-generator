console.log("Let's get this party started!");

const $searchInput = $('#search');
const removeButton = $('#remove');
const $gifResults = $('#gif-results');

function addGif(res) {
  let resResults = res.data.length;
  let ranNum = Math.floor(Math.random() * resResults);
  let $newDiv = $('<div>', { class: 'col-6 col-md-4 col-lg-4' });
  let $newGif = $('<img>', {
    src: res.data[ranNum].images.original.url,
    class: 'w-100',
  });
  $newDiv.append($newGif);
  $gifResults.append($newDiv);
}

$('form').on('submit', async function (e) {
  e.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val('');

  const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
    params: { q: searchTerm, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' },
  });
  addGif(res.data);
});

removeButton.on('click', function () {
  $gifResults.empty();
});
