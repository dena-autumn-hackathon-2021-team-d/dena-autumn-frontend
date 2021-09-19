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
      <nuxt-link :to="`/groups/${$route.params['groupId']}/answers`">
        <v-toolbar-title class="title" v-text="title + 'の質問箱'" />
      </nuxt-link>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer v-if="question" fixed app color="rgba(0, 0, 0, 0)">
      <v-row justify="end" no-gutters>
        <v-card elevation="2" class="mb-4 question">
          <v-card-title>{{ question.contents }}</v-card-title>
          <v-card-text>
            <p>{{ question.username }}からの質問です</p>
            <v-textarea
              v-model="answer"
              auto-grow
              rows="2"
              name="input-7-4"
              label="回答"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-row justify="end" no-gutters>
              <v-btn class="ml-2" elevation="2" @click="nextQuestion"
                >別の質問へ</v-btn
              >
              <v-btn elevation="2" color="primary" class="ml-2" @click="send()"
                >回答する</v-btn
              >
            </v-row>
          </v-card-actions>
        </v-card>
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
  </v-app>
</template>

<script>
import {
  getQuestions,
  getRandomQuestion,
  postAnswer,
  getGroupName,
} from '~/lib/main'

export default {
  async middleware({ store, redirect, route }) {
    // Vuexからグループ名の取得
    if (!store.getters.getGroupName(route.params.groupId)) {
      try {
        // グループ名取得
        const res = await getGroupName(route.params.groupId)
        store.commit('setGroupName', {
          groupId: route.params.groupId,
          groupName: res.name,
        })
      } catch {
        // 存在しないグループID
        redirect('/')
      }
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: '回答一覧',
          to: '/groups/' + this.$route.params.groupId + '/answers',
        },
        {
          icon: 'mdi-message-question-outline',
          title: '質問を送る',
          to: '/groups/' + this.$route.params.groupId + '/questions/new',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: this.$store.getters.getGroupName(this.$route.params.groupId),
      name: '',
      dialogStatus: {
        userName: false,
      },
      question: null,
      questions: [],
      answer: '',
    }
  },
  mounted() {
    // ユーザーネームがセットされているか
    if (!localStorage.getItem(this.$route.params.groupId)) {
      this.dialogStatus.userName = true
    }
  },

  async created() {
    const res = await getRandomQuestion(this.$route.params.groupId)
    this.question = res
    const res2 = await getQuestions(this.$route.params.groupId)
    this.questions = res2
  },
  methods: {
    async send() {
      console.log('呼び出し')
      const user = localStorage.getItem(this.$route.params.groupId)
      if (this.answer) {
        const res = await postAnswer(
          this.answer,
          user,
          this.$route.params.groupId,
          this.question.id
        )

        if (res) {
          alert('正常にpostされました！！')
        }
      }
    },
    resistName() {
      localStorage.setItem(this.$route.params.groupId, this.name)
      this.dialogStatus.userName = !this.dialogStatus.userName
    },
    nextQuestion() {
      this.question = res[res.length - 1]
      console.log('nextQuestion')
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.question {
  width: 100%;
}
@media screen and (min-width: 600px) {
  /* 600pxからの幅の場合に適応される */
  .question {
    width: 600px;
  }
}
</style>
