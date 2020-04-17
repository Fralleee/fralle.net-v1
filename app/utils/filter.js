const filterMapping = (val, el) => (val.project && el.category === 'project') || (val.github && el.category === 'github')
const filterText = (item, filterVal, propNames) =>
  propNames.reduce((acc, curr) => {
    if (item[curr] && item[curr].toLowerCase().includes(filterVal.toLowerCase())) acc = true
    return acc
  }, false)

export const doFilter = (filter, search, matchProps) => item => filterMapping(filter, item) && filterText(item, search, matchProps)
