
/**
 * Created by mariustanawatsamo on 02/06/2017.
 */

module.exports = () => {
  var faker = require('faker')
  var _ = require('lodash')
  return {
    articles: _.times(10, (n) => {
      return {
        id: n,
        title: faker.name.title(),
        image: faker.image.image(),
        details: faker.lorem.paragraphs()
      }
    }),
    comments: _.times(10, (n) => {
      return {
        id: n,
        title: faker.name.title(),
        details: faker.lorem.paragraph(),
        articleId: faker.random.number({min: 0, max: 10})
      }
    }),
    articlesWithcomments: _.times(10, (n) => {
      return {
        id: n,
        articleId: faker.random.number({min: 0, max: 10}),
        commentId: faker.random.number({min: 0, max: 10})
      }
    })
  }
}

