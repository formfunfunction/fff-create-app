export default function ({ store }) {
  let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

  store.commit('client/setWindowWidth', vw)
  store.commit('client/setWindowHeight', vh)

  window.addEventListener('resize', (e) => {
    vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    store.commit('client/setWindowWidth', vw)
    store.commit('client/setWindowHeight', vh)
  })

  document.addEventListener('mousemove', (e) => {
    store.commit('client/setCursorPositionX', e.clientX)
    store.commit('client/setCursorPositionY', e.clientY)
  })
}