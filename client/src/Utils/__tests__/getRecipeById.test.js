/* eslint-disable no-undef */
// import getRecipeById from '../getRecipeById';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';


// const server = setupServer(
//   rest.get(`https://api.spoonacular.com/recipes/id/information`, 
//   (req, res, ctx) => {
//     return res(
//       ctx.json({
//         analyzedInstructions: [{}, {}],
//       }),
      
//     )
//   })
// )
// beforeAll(() => server.listen())
// afterAll(() => server.close())

// it('analyzedInstructions is not empty', async() => {
//   const data = await getRecipeById(635001);
//   expect(data).toBeGreaterThan(0)
// })