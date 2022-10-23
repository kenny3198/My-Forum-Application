<template>
    <div class="col-full">

          <div class="thread-list">

              <h2 class="list-title">Threads</h2>
            <!-- <h1>test</h1> -->
            <div v-if="threads.length > 0">
                
              <div v-for="thread in threads" :key="thread.id" class="thread">
                  <div>
                      <p>
                          <router-link :to="{name: 'ThreadShow', params: {id: thread.id} }"> {{thread.title}}</router-link>
                      </p>
                      <p class="text-faded text-xsmall">
                          By <a href ="#">{{userById(thread.userId).name}}</a>, <AppDate :timestamp="thread.publishedAt"/>.
                      </p>
                  </div>

                  <div class="activity">
                      <p class="replies-count">
                          {{thread.posts.length}} reply
                      </p>

                      <img class="avatar-medium"
                           :src="userById(thread.userId).avatar"
                           alt="">

                      <div>
                          <p class="text-xsmall">
                              <a href="#">{{userById(thread.userId).name}}</a>
                          </p>
                          <p class="text-xsmall text-faded"> </p> <AppDate :timestamp="thread.publishedAt"/>
                      </div>
                  </div>
              </div>
            </div>
          </div> 
      </div>
</template>
<script>
import AppDate from '@/components/AppDate'
export default {
    components:{
        AppDate
    },
    data() {
        return {
            threads: [],
        }
    },
   methods: {
    postById(postId) {
        return this.posts.find(post => post.id === postId)
    }, 
    userById(userId) {
        return this.users.find(p => p.id === userId)
     }
    },
    created(){
        this.threads = this.$store.state.threads 
        
    },
    computed:{
        posts() {
      return this.$store.state.posts
        },
        users() {
         return this.$store.state.users
        }
    }
}
</script>
<style scoped>

</style>
