import { defaultView } from '../u-react.config.js'

function getCallerInfo() {
  const error = new Error()
  const stackLines = error.stack.split('\n')
  let index = stackLines.findIndex(element => element.includes('/pages/'))
  index === -1 ? (index = stackLines.findIndex(element => element.includes('/context/'))) : index
  const callerStackLine = stackLines[index]
  const { origin } = window.location
  const match = callerStackLine.match(/at\s+(.*)\s+\((.*):(\d+):(\d+)\)/) || callerStackLine.match(/at\s+(.*):(\d+):(\d+)/)
  let file = 'unknown'
  let line = 'unknown'
  let column = 'unknown'
  const len = match.length
  if (match) {
    file = match[len - 3]
    line = match[len - 2]
    column = match[len - 1]
  }
  //console.log(stackLines, {origin, file, line, column})
  return {origin, file, line, column}
}

export function getKey() {
  const {origin, file, line, column} = getCallerInfo()
  return (file + '___' + line + '_'+ column).replace(origin + '/', '')

}

/*export function getCaller() {
  const error = new Error()
  const stackLines = error.stack.split('\n')
  let index = stackLines.findIndex(element => element.includes('/components/'))
  index === -1 ? (index = stackLines.findIndex(element => element.includes('/pages/'))) : index
  index === -1 ? (index = stackLines.findIndex(element => element.includes('/context/'))) : index
  const callerStackLine = stackLines[index]
  const { origin } = window.location
  const match = callerStackLine.match(/at\s+(.*)\s+\((.*):(\d+):(\d+)\)/) || callerStackLine.match(/at\s+(.*):(\d+):(\d+)/)
  let file = 'unknown'
  const len = match.length
  if (match) {
    file = match[len - 3]
  }
  return file.replace(origin + '/', '')
}*/

export function getPathname() {
  const { pathname } = window.location
  return pathname === '/' ? defaultView : pathname
}