<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link :to="`/groups/${this.$route.params['groupId']}/answers`">
        <v-toolbar-title class="title" v-text="title" />
      </nuxt-link>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer fixed app>
      <v-row justify="center" no-gutters>
        <h3>最近あった面白いことは？</h3>
        <v-btn
          elevation="2"
          color="primary"
          class="ml-2"
          @click="dialogStatus.question = !dialogStatus.question"
          >回答する</v-btn
        >
        <v-btn class="ml-2" elevation="2" @click="nextQuestion"
          >別の質問へ</v-btn
        >
      </v-row>
    </v-footer>
    <!-- userNameDialog -->
    <v-dialog v-model="dialogStatus.userName" width="500">
      <v-card>
        <v-card-title class="text-h5 lighten-2">
          名前を入力してください
        </v-card-title>

        <v-card-text>
          <v-text-field v-model="name" label="名前"></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="resistName"> 登録 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- questionDialog -->
    <v-dialog v-model="dialogStatus.question" width="500">
      <v-card>
        <v-card-title class="text-h5 lighten-2">
          最近あった面白いことは？
        </v-card-title>

        <v-card-text>
          <v-textarea name="Anser" label="回答"></v-textarea>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="send"> 回答 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      name: '',
      dialogStatus: {
        question: false,
        userName: false,
      },
    }
  },
  mounted() {
    if (!localStorage.getItem(this.$route.params.groupId)) {
      this.dialogStatus.userName = true
    }
  },
  methods: {
    send() {
      this.dialogStatus.question = !this.dialogStatus.question
    },
    resistName() {
      localStorage.setItem(this.$route.params.groupId, this.name)
      this.dialogStatus.userName = !this.dialogStatus.userName
    },
    nextQuestion() {
      console.log('nextQuestion')
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
