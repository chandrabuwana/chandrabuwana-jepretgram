import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http =axios.create({
  baseURL:' http://localhost:3002'
})

Vue.use(Vuex)