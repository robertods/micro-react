import { defaultView } from '../framework.config.js'

function getCallerInfo() {
  const error = new Error()
  const stackLines = error.stack.split('\n')
  const index = stackLines.findIndex(element => element.includes('/pages/'))
  const callerStackLine = stackLines[index]
  const { origin } = window.location
  const match = callerStackLine.match(/at\s+(.*)\s+\((.*):(\d+):(\d+)\)/) || callerStackLine.match(/at\s+(.*):(\d+):(\d+)/)
  let file = 'unknown'
  let line = 'unknown'
  let column = 'unknown'
  if (match) {
    file = match[2]
    line = match[3]
    column = match[4]
  }
  //console.log(stackLines, {origin, file, line, column})
  return {origin, file, line, column}
}

export function getKey() {
  const {origin, file, line, column} = getCallerInfo()
  return (file + '___' + line + '_'+ column).replace(origin + '/', '')

}

export function getPathname() {
  const { pathname } = window.location
  return pathname === '/' ? defaultView : pathname
}