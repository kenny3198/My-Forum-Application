import { createStore } from 'vuex'
import sourceData from '@/data.json'

export default createStore({
  state:{
    ...sourceData,
   authId: 'jVa6Go6Nl1Urkag1R2p9CHTf4ny1'
  },
  
  getters: {
      authUser: state => {
      const user = state.users.find(user => user.id === state.authId)
      if (!user) return null 
      return {
        ...user,
        //auth user.post
        //auth user.getPost()
        get Posts() {
          return state.posts.filter(post => post.userId === user.id)
      },
      //auth user.postCount
      get PostCount() {
          return this.Posts.length
      },
      get Threads() {
          return state.threads.filter(thread => thread.userId === user.id)
      },
      get ThreadCount() {
          return this.Threads.length
      }
   
    }
    }
  },
  mutations: {
     setPost(state, { post }) {
      state.posts.push(post)
    },
    appendPostToThread (state, { postId, threadId }) {
        const thread = state.threads.find(thread => thread.id === threadId)
         thread.posts = thread.posts || []
        thread.posts.push(postId)
      
    },
    setUser(state, { user, userId }) {
      const userIndex = state.users.findIndex(user => user.id === userId)
      state.users[userIndex] = user
    },
    setThread(state, { thread }) {
      state.threads.push(thread)
    },
    appendThreadToForum (state, { forumId, threadId }) {
      const forum = state.forums.find(forum => forum.id === forumId)
      forum.threads = forum.threads || []
      forum.threads.push(threadId) 
    // console.log(state)
  },
  appendThreadToUser (state, { userId, threadId }) {
    const user = state.users.find(user => user.id === userId)
     user.threads = user.threads || []
    user.threads.push(threadId)
  
},
  },
  actions: {
    createPost({commit}, post) {
      commit('setPost', { post });  //set the post//
      commit('appendPostToThread', { postId: post.id, threadId: post.threadId }) //append the post /
    },
    updateUser({ commit }, user ) {
      commit('setUser', { user, userId: user.id})
    },
     async createThread({commit, state,  dispatch }, {title, text, forumId}) {
     const id = 'qqq' + Math.random()
     const userId = state.authId
     const publishedAt = Math.floor(Date.now() / 1000) 
     const thread = {forumId, title,   publishedAt, userId, id}
     commit('setThread', { thread })
     dispatch('createPost', {text, threadId: id }) 
     commit('appendThreadToUser', { userId, threadId: id})
     commit('appendThreadToForum', { forumId, threadId: id})
     return state.threads.find(thread => thread.id === id)
      },
    
      },
  modules: {

  }
 })
 