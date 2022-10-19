 <template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save="addPost"/>
  </div>
</template>
<script>
// import sourceData from "@/data.json";
import PostList from "@/components/PostList";
import PostEditor from '@/components/PostEditor';
export default {
  name: "ThreadShow",
  components: {
    PostList,
    PostEditor
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
      return this.threads.find((thread) => thread.id === this.$route.params.id);
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
 