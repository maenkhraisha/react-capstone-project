// A mock function to mimic making an async request for data

export default async function fetchContinents(continent) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6b6d26b8abmshd75ee9e689ae54fp11752cjsn71cc62d6a729',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
    },
  };

  return fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${continent}`, options)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => err);
}
