export const state = () => {
  return {
    window: {
      width: 0,
      height: 0
    },
    cursor: {
      x: 0,
      y: 0
    },
    breakpoints: {
      // Keep consistent with @/assets/styles/_settings.scss
      mobilePortrait: 240,
      mobileLandscape: 480,
      tablet: 768,
      desktop: 992
    }
  }
}

export const mutations = {
  setWindowWidth (state, width) {
    state.window.width = width
  },
  setWindowHeight (state, height) {
    state.window.height = height
  },
  setCursorPositionX (state, position) {
    state.cursor.x = position
  },
  setCursorPositionY (state, position) {
    state.cursor.y = position
  }
}

export const getters = {
  isMobile: (state) => {
    return state.window.width < state.breakpoints.tablet
  }
}
