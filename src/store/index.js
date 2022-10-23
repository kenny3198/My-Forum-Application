import { createStore } from 'vuex'

import sourceData from '@/data.json'

import { findById, upsert } from '@/helpers'

export default createStore({
  state:{
    ...sourceData,
   authId: 'jVa6Go6Nl1Urkag1R2p9CHTf4ny1'
  },
  
  getters: {
      authUser: (state, getters) => {
        return getters.user(state.authId)
    },
    user: state => {
      return (id) => {
        const user = findById(state.users, id)
        if (!user) return null 
        return {
          ...user,
        
          get posts() {
            return state.posts.filter(post => post.userId === user.id)
        },
        //auth user.postCount
        get postsCount() {
            return this.posts.length
        },
        get threads() {
            return state.threads.filter(thread => thread.userId === user.id)
        },
        get threadsCount() {
            return this.threads.length
        }
     
      }
    }
    },

    thread: state => {
      return (id) => {
        const thread = findById(state.threads, id)
        return {
          ...thread,
         get author() {
          return findById(state.users, thread.userId)
         },
           get repliesCount() {
            return thread.posts.length -1
           },
          get contributorsCount() {
            return thread.contributors.length
          }
        }
      
    
      }
    }
  },
  mutations: {
     setPost(state, { post }) {
      upsert(state.posts, post)
    
    },
    setThread(state, { thread }) {
      upsert(state.threads, thread)
    },
   
    appendPostToThread: makeAppendChildToParentMutation({parent: 'threads', child: 'posts'}),
    setUser(state, { user, userId }) {
      const userIndex = state.users.findIndex(user => user.id === userId)
      state.users[userIndex] = user
    },
  appendThreadToForum: makeAppendChildToParentMutation({parent: 'forums', child: 'threads'}),
  appendThreadToUser: makeAppendChildToParentMutation({parent: 'users', child: 'threads'}),
  appendContributorToThread: makeAppendChildToParentMutation({parent: 'threads', child: 'contributors'})

  },
  actions: {
    createPost({commit, state}, post) {
      commit('setPost', { post });  //set the post//
      commit('appendPostToThread', { childId: post.id, parentId: post.threadId }) //append the post /
      commit('appendContributorToThread', { childId: state.authId, parentId: post.threadId })
    },
    updateUser({ commit }, user ) {
      commit('setUser', { user, userId: user.id})
    },
     async createThread({commit, state,  dispatch }, { text, title, forumId }) {
     const id = 'qqq' + Math.random()
     const userId = state.authId
     const publishedAt = Math.floor(Date.now() / 1000) 
     const thread = { forumId, title, publishedAt, userId, id}
     commit('setThread', { thread })
     dispatch('createPost', {text, threadId: id }) 
     commit('appendThreadToUser', { parentId: userId, childId: id})
     commit('appendThreadToForum', { parentId: forumId, childId: id})
     dispatch('createPost', {text, threadId: id }) 
     return findById(state.threads, id)
      },
      async updateThread({ commit, state }, { title, text, id}){
        const thread = findById(state.threads, id)
        const post = findById(state.posts, thread.posts[0])
        const newThread = { ...thread, title } 
        const newPost = { ...post, text }
        commit('setThread', { thread: newThread})
        commit('setPost', { post: newPost})
        return newThread
      
      }
    
      },
  modules: {

  }
 })
 
function makeAppendChildToParentMutation  ({ parent, child})  {
  return (state, { childId, parentId }) => {
    const resource = findById(state[parent], parentId)
     resource[child] = resource[child] || []
     if(!resource[child].includes(childId)) {

      resource[child].push(childId)
     }
    
  }
}
  