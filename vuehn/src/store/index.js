import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from "./actions.js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        topStories: [],
        newStories: []
      },
      mutations,
      actions
});