const body = document.querySelector('body')

const routes = {
  "/": "/pages/home.html",
  "/exploration": "./pages/exploration.html",
  "/universe": "./pages/universe.html"
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

  console.log(routes[pathname])

  
  if (route == '/pages/home.html') {
    body.style.backgroundImage = "url('./assets/mountains-universe-1.png')"
  } else if (route == './pages/universe.html') {
    body.style.backgroundImage = "url('./assets/mountains-universe-2.png')"
  } else if (route == './pages/exploration.html') {
    body.style.backgroundImage = "url('./assets/mountains-universe-3.png')"
  } 

  fetch(route).then(data => data.text()).then((html) => {
    document.querySelector('#app').innerHTML = html
  })
}

handle()

// window.onpopstate = () => handle()
