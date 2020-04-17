export function date(value, obj = { locale: 'sv-SE', timestamped: false, timeOnly: false }) {
  let returnValue

  if (Object.prototype.toString.call(value) === '[object Date]') {
    returnValue = value
  } else if (typeof value === 'string' && !Number.isNaN(Date.parse(value))) {
    returnValue = new Date(value)
  } else {
    return value
  }

  return obj.timestamped
    ? returnValue.toLocaleString(obj.locale)
    : obj.timeOnly ? returnValue.toLocaleTimeString(obj.locale, { hour: '2-digit', minute: '2-digit' }) : returnValue.toLocaleDateString(obj.locale)
}

export const camelize = str => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => (index !== 0 ? letter.toLowerCase() : letter.toUpperCase())).replace(/\s+/g, '')
