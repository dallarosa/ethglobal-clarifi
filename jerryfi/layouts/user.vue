<template>
    <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
        theme="dark"
      >
        <v-list nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Inbox" value="inbox"></v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors" value="supervisors"></v-list-item>
          <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
</template>