  <template>
     <div class="post-list">    
     <div :key="post.id" 
       v-for="post in posts" class="post">  

                  <div class="user-info"> 
                    <!-- <a href="#" class="user-name">{{ userById(post.userId).name}}</a>gi -->
                       

                      <a href="#"> 
                          <!-- <img class="avatar-large" :src="userById(post.userId).avatar" alt=""> -->
                      </a>
                            
      

                       <p class="desktop-only text-small">107 posts</p>
                </div>

                   <div class="post-content"> 
                       <div>
                       <p>{{post.text}}</p>
                     </div> 
                    
                  </div> 
                  <div class="post-date text-faded" > 
                    <AppDate :timestamp="post.publishedAt"/>
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
    props: {
        posts: {
            required: true,
            type: Array
        }
    },
    methods: {
    userById(userId) {
     return this.users.find(p => p.id === userId)
        
    }
    
    },
    computed: {
        users(){
        return this.$store.state.users
        
        },  
        
            },
     
}
</script>
