<template>
  <div class="blog">
    <h1 class="text-xs-center">Blog Page</h1>
      <v-container>
       <v-layout row>
        <v-flex xs12 >
        <v-card>
          <v-list two-line>
          <template
           v-for="i in index" 
             >
                   <v-list-tile
              :key="i.path"
              avatar
              ripple
              @click="move(i.path)"
            >
              <v-list-tile-content>
                <v-list-tile-title pa2>{{ i.title }}</v-list-tile-title>
              <!--  <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>-->
                <v-list-tile-sub-title class="text-xs-right">{{ i.date.year }} / {{ i.date.month }} / {{ i.date.day }}</v-list-tile-sub-title>
              </v-list-tile-content>

            </v-list-tile>
            <v-divider
              
              v-if="i.relativeId + 1 < index.length"
            ></v-divider>
            </template>
          </v-list>
        </v-card>
        </v-flex>
      </v-layout>
      </v-container>
    </div>
</template>



<script>
export default {
  name: 'Blog',
  data() {
    return {
      // INJECT_POSITION DO NOT MODIFY THIS LINE!
      // The first json array after this line is
      // the position of injecting index json. index MUST have an array.
      index :  [{"relativeId":0,"title":"aAblogvuejs-3-npm-vue-cli.html","path":"/blog/2018/11/30/aAblogvuejs-3-npm-vue-cli/","date":{"year":"2018","month":"11","monthEng":"November","day":"30","dayEng":"30th"}},{"relativeId":1,"title":"[Blog/VueJS] 2. 개발환경 세팅","path":"/blog/2018/11/29/[TEST] 공백/","date":{"year":"2018","month":"11","monthEng":"November","day":"29","dayEng":"29th"}}],
    } 
  },
  methods: {
  move: function(target) {
    this.$router.push(target)
    },
  },
}
</script>

<style scoped>
</style>