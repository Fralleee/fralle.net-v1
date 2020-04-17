import { selectRandomUnique } from 'utils/unique'

const colors = {
  arr: ['rgb(255,200,240)', 'rgb(205,235,255)', 'rgb(210,255,230)', 'rgb(245,255,195)', 'rgb(255,220,220)'],
  picked: []
}
const images = {
  arr: ['/images/svg/cool.svg', '/images/svg/doh.svg', '/images/svg/mouth.svg', '/images/svg/nerdy.svg', '/images/svg/wave.svg', '/images/svg/tree.svg'],
  picked: []
}

export function fetchRepositoryList() {
  this.repoList.state = 'pending'
  this.instance
    .get('/users/Fralleee/repos')
    .then(res => {
      this.repoList.data = res.data.filter(x => !x.fork).map(i => ({
        url: i.html_url,
        name: i.name,
        description: i.description,
        category: 'github',
        language: i.language,
        image: selectRandomUnique(images),
        bgColor: selectRandomUnique(colors)
      }))
      this.repoList.state = 'done'
    })
    .catch(error => {
      this.repoList.data = []
      this.repoList.state = 'error'
      this.repoList.essage = error.message
    })
}
