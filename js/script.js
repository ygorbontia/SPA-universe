const routes = {
  '/': '/pages/home.html',
  '/universe': '/pages/universe.html',
  '/exploration': '/pages/exploration.html'
}

function route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
}

function handle() {
  const { pathname } = window.location
  const route = routes[pathname]

  fetch(route).then(data => data.text()).then(html => {
    document.querySelector('#app').innerHTML = html
  })

  addBodyClass(pathname)
}

function addBodyClass(pathname) {
  const body = document.querySelector('body')

  if (pathname == '/') {
    body.className = `body-home`
  } else {
    const newPathname = `${pathname}`.substring(1)
    body.className = `body-${newPathname}`
  }
}

handle()