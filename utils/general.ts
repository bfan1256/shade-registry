export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export function capitalize(str: string, splitStr: string) {
  if (str) {
    return str.split(splitStr).map((val) => {
      return val.charAt(0).toUpperCase() + val.slice(1)
    }).join(' ') 
  }
  return '-'
}

export function isEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export function isPhone(phone: string) {
  const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
  return re.test(String(phone).toLowerCase()) || (phone.length == 10 && /^-?\d+$/.test(phone))
}
