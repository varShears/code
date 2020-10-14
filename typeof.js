function myTypeof(data) {
  const typeStr = Object.prototype.toString.call(data)
  return typeStr
    .slice(typeStr.indexOf(' ') + 1, typeStr.length - 1)
    .toLowerCase()
}
