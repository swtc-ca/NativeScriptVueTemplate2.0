import * as  applicationSettings from 'application-settings'
import Login from './../components/auth/Login'

const state = {
  IS_LOGGED: false,
  AUTH_TOKEN: false,
};

const mutations = {
  login(state, payload) {
    console.log('make login');
    state.IS_LOGGED = true;
    state.AUTH_TOKEN = payload.token;

    if (payload.keepLogin) {
      applicationSettings.setString('login',JSON.stringify(payload));
    } else {
      applicationSettings.setString('login', '');
    }
  },
  logout() {
    console.log('Logout')
    state.IS_LOGGED = false;
    state.AUTH_TOKEN = false;
    applicationSettings.setString('login', '');
  },
};

const getters = {
  isLogged: () => state.IS_LOGGED,
  authToken: () => state.AUTH_TOKEN,
};

export default {
  state,
  getters,
  mutations,
};