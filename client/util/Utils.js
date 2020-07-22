const getInitials = (name) => {
  if (name) {
    return name
      .split(' ')
      .map((x)=>x.charAt(0).toUpperCase())
      .join('');
  }
  return ''
}

export { getInitials }
