const _ = require('rambda')
const { Spoontacular } = require('./spoontacular')
const apiKey = require('./apikey.js')
const { result } = require('lodash')

const toLi = items => items.map(x => `<li><a target="_blank" href=${x.sourceUrl}><div>${x.title}</div><img src=${x.image}></img></a></li>`)

const getRecipes = query =>
  Spoontacular.fetch({apiKey, query})
  .map(response => response.results)
  .map(recipes => toLi(recipes))

const app = () => {
  const queryField = document.getElementById('query')
  const results = document.getElementById('results')
  const goButton = document.getElementById('go')
  
  goButton.addEventListener('click', () => {
    let queryText = queryField.value
    getRecipes(queryText).fork(console.error, res => {
      results.innerHTML = res
    })
  })
}

app()
