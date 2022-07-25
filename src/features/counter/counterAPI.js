// A mock function to mimic making an async request for data
export function fetchCount() {
  console.log('fetching data');
  let url = 'https://newsdata.io/api/1/news?apikey=pub_95677350f565275afd7e8baa3ba52ce1533e';
  let req = new Request(url);
  fetch(req)
  .then(function(response) {
      return response.json();
  })
  .then(data => console.log(data));
}
