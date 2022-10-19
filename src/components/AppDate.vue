<template>
   <span :title="friendlyHumanDate()"> 
     {{ diffForHummans() }} 
     </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizeDate from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizeDate)
export default {
props:{
    timestamp: {
  required: true,
   type: Number
    }
},
methods: {
diffForHummans() {
 return dayjs.unix(this.timestamp).fromNow()
    } ,
    
    friendlyHumanDate() {
        return dayjs.unix(this.timestamp).format()
    }
}
}
</script>

<style>

</style>