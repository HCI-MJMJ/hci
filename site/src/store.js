import Vue from 'vue'
import Vuex from 'vuex'
var $ = require("jquery");

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },
  getters: {
    articles(state) {
      return state.articles;
    },
    article: state => id => {
      return state.articles.find(article => article.id == id);
    }
  },
  mutations: {
    addArticles(state, {articles}) {
      state.articles = articles;
    }
  },
  actions: {
    fetchArticles(context) {
      $.ajax({
        url: "https://hci-proj.herokuapp.com/articles",
        type: "GET",
        success: data => {
          context.commit("addArticles", {articles: data});
        }
      })
    }
  }
})
