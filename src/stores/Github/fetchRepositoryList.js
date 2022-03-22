import { selectRandomUnique } from "utils/unique"
import Cool from "images/svg/cool.svg"
import Doh from "images/svg/doh.svg"
import Mouth from "images/svg/mouth.svg"
import Nerdy from "images/svg/nerdy.svg"
import Wave from "images/svg/wave.svg"
import Tree from "images/svg/tree.svg"

const colors = {
  arr: ["rgb(255,200,240)", "rgb(205,235,255)", "rgb(210,255,230)", "rgb(245,255,195)", "rgb(255,220,220)"],
  picked: []
}
const images = {
  arr: [Cool, Doh, Mouth, Nerdy, Wave, Tree],
  picked: []
}

export function fetchRepositoryList() {
  this.repoList.state = "pending"
  this.instance
    .get("/users/Fralleee/repos")
    .then(res => {
      this.repoList.data = res.data.filter(x => !x.fork).map(i => ({
        url: i.html_url,
        name: i.name,
        description: i.description,
        category: "github",
        language: i.language,
        image: selectRandomUnique(images),
        bgColor: selectRandomUnique(colors)
      }))
      this.repoList.state = "done"
    })
    .catch(error => {
      this.repoList.data = []
      this.repoList.state = "error"
      this.repoList.essage = error.message
    })
}
