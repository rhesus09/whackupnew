export function manageBackground (page) {
  console.log(page)
  if (page === 'register' || page === 'login') {
    window.$('body').addClass('bg-info dker')
  } else {
    window.$('body').removeClass('bg-info dker')
  }
}
