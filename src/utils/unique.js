export const selectRandomUnique = objparam => {
  if (objparam.arr.length === 0) {
    objparam.arr = [...objparam.picked.reverse()]
    objparam.picked = []
  }
  const item = objparam.arr.pop()
  objparam.picked.push(item)
  return item
}
