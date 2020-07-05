const getInitials = (name) => {
  return name
    .split(' ')
    .map((x)=>x.charAt(0).toUpperCase())
    .join('')
}

export { getInitials }
