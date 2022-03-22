import { observable } from "mobx"
import tempData from "stores/Project/tempData"

class ProjectStore {
  @observable projectList = tempData
}

const projectStore = (window.projectStore = new ProjectStore())

export default projectStore
