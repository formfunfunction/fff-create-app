import { GetterTree, MutationTree } from 'vuex'
import { RootState } from '~/store'

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

export type ClientState = ReturnType<typeof state>

export const mutations: MutationTree<ClientState> = {
  setWindowWidth(state, width) {
    state.window.width = width
  },
  setWindowHeight(state, height) {
    state.window.height = height
  },
  setCursorPositionX(state, position) {
    state.cursor.x = position
  },
  setCursorPositionY(state, position) {
    state.cursor.y = position
  }
}

export const getters: GetterTree<ClientState, RootState> = {
  isMobile: (state) => {
    return state.window.width < state.breakpoints.tablet
  }
}
