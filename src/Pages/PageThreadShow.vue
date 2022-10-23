 <template>
  <div class="col-large push-top">
    <h1> 

      {{ thread.title }}
      <router-link :to="{name: 'ThreadEdit', id: this.id}"
                class="btn-green btn-small" 
                tags="button">
                Edit a thread </router-link>
      </h1>
      <p>
        <a href="#" class="linked-unstyled">{{thread.author.name}}</a>, <AppDate :timestamp="thread.publishedAt"/>
        <span style="float: Right; margin-top: 2px;"
         class="hide-mobile text-faded text-small">{{thread.repliesCount}} 
          replies by {{thread.contributors.length}} contributors</span>
      </p>

    <PostList :posts="threadPosts"/>
    <PostEditor @save="addPost"/>
  </div>
</template>
<script>
// import sourceData from "@/data.json";
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'
import AppDate from '@/components/AppDate'
export default {
  name: "ThreadShow",
  components: {
    PostList,
    PostEditor,
    AppDate
  },
  props:{
    id:{
      required: true,
      type: String
    }
  },
  // data() {
  //   return {
  //     threads: sourceData.threads,
  //     posts: sourceData.posts,
  //   }
  // },
  computed: {
    thread() {
      return this.$store.getters.thread(this.id)
    },
    threadPosts() {
      return this.posts.filter(
        (post) => post.threadId === this.$route.params.id
      );
    },
    threads() {
      return this.$store.state.threads
    },
    posts() {
      return this.$store.state.posts
    },
    
 
  },
  methods: {
    addPost(eventData) {

      const post = {
        ...eventData.post,
         threadId: this.$route.params.id
      }
      this.$store.dispatch('createPost', post)

    },
  },
  
};
</script>
 