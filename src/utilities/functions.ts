export function toMMSS(seconds: number) {
  const date = new Date(0)
  date.setSeconds(seconds)
  return date.toISOString().substring(14, 19)
}
export const hitslop = {
  top: 10,
  bottom: 10,
  right: 10,
  left: 10,
}
