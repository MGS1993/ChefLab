/* eslint-disable no-undef */
import getRandomRecipes from '../getRandomRecipes';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(`https://api.spoonacular.com/recipes/complexSearch`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        number: 10,
        offset: 0,
        results: [{},{},{},{},{},{},{},{},{},{}],
        totalResults: 5423
      })
    )
  })
)
beforeAll(() => server.listen())
afterAll(() => server.close())

it('returns information', async() => {
  const data = await getRandomRecipes();
  expect(data.results.length).toEqual(10)
})
