  <template>
     <div class="post-list">    
     <div :key="post.id" 
       v-for="post in posts" class="post">  

                  <div class="user-info"> 
                    <!-- <a href="#" class="user-name">{{userById(post.userId).name}}</a> -->
                       

                      <a href="#"> 
                          <!-- <img class="avatar-large" :src="userById(post.userId).avatar" alt=""> -->
                      </a>
                            
                       <!-- <p class="desktop-only text-small">{{ userById(post.userId).postsCount }} posts</p> -->
                        <!-- <p class="desktop-only text-small">{{ userById(post.userId).threadsCount }} threads</p> -->
                </div>

                   <div class="post-content"> 
                       <div>
                       <p>{{post.text}}</p>
                     </div> 
                    
                  </div> 
                  <div class="post-date text-faded"> 
                    <AppDate :timestamp="post.publishedAt "/>
                  </div>
              </div>
              </div> 
            
       
</template>
<script>
import AppDate from '@/components/AppDate'
export default {
  props: {
        posts: {
            required: true,
            type: Array
        }
    },
    components:{
     AppDate
    },
    
    methods: {
    userById (userId) {

        return this.$store.getters.user(userId)        
    },
    
    
    },
    computed: {
        users() {
        return this.$store.state.users
          
        }
        
        
            },
            // created() {
            //   console.log(this.posts)
             // }
     
}
</script>
