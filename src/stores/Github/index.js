import { action, observable } from "mobx"
import { fetchRepositoryList } from "stores/Github/fetchRepositoryList"
import axios from "axios"

class GithubStore {
  instance = axios.create({
    baseURL: "https://api.github.com/",
    headers: { Accept: "application/vnd.github.v3+json" }
  })
  @observable repoList = { data: [], state: "idle", message: "" }
  @action fetchRepositoryList = fetchRepositoryList.bind(this)
}

const githubStore = (window.githubStore = new GithubStore())

export default githubStore
