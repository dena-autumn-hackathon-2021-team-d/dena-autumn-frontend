<template>
  <v-card>
    <v-card-title class="headline">
      <v-avatar size="28">
        <img
          alt="user"
          src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
        />
      </v-avatar>
      <h5 class="ml-2">@hogijgrio</h5>
    </v-card-title>
    <v-card-text>
      <h2 class="mb-2">たこ焼き！</h2>
      <p>質問: 好きな食べ物は?</p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" nuxt to="/inspire"> コメントを見る </v-btn>
    </v-card-actions>
  </v-card>
</template>
