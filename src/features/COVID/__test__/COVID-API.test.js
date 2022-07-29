import fetchContinents from '../COVID-API';

it('The country list first item to be India ', async() => {
  const countryList = await fetchContinents('asia');  
  expect(countryList[0].Country).toBe('India');
});

