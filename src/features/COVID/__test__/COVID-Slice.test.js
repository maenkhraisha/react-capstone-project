import { fetchContinentsAsync } from '../COVID-Slice';

import store from '../../../App/store';

/**
 * Testing the reducer thunk
 */

describe('Fetch continents list', () => {
  it('Should be able to fetch a continents list', async () => {
    const result = await store.dispatch(fetchContinentsAsync('asia'));

    const countries = result.payload.totalCases;
    const state = store.getState().COVID.continents[1].totalCases;

    expect(countries).toEqual(state);
  });
});
