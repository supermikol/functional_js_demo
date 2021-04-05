const { Task } = require('./types')
const _ = require('rambda')
const { compose } = _

const makeSpoonUrl = ({apiKey, query}) =>
  `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${apiKey}&query=${query}`

const fetchResponse = url =>
  Task((rej, res) =>
    fetch(url)
    .then(response => response.json())
    .then(res)
    .catch(rej)
  )
  

const Spoontacular = {
  fetch: compose(fetchResponse, makeSpoonUrl)
}
export {Spoontacular}