<template>
  <Menubar :model="items" class="border-orange-200 bg-orange-200">
    <template #start>
      <div class="flex" @click="this.sidebar=!this.sidebar;">
        <img class="flex-initial flex align-items-center mr-2" alt="logo" src="https://www.primefaces.org/primevue/img/logo.d32bce0e.svg" height="40">
        <span class="flex-initial flex align-items-center text-lg font-semibold px-2"> JulG </span>
      </div>
    </template>
  </Menubar>
  <div class="grid">
    <template v-if="sidebar">
    <MegaMenu :model="items" orientation="vertical" class="h-screen col-4 border-orange-400 bg-orange-400" >
      <template #start>
        <div class="text-center">
          <Avatar image="https://i.pravatar.cc/150?img=69" size="xlarge" shape="circle"/>
          <p>Hi, my name is Simon Doe and I'm a senior software engineer. Welcome to my personal website!</p>
          <span>
          <Avatar icon="pi pi-twitter" shape="circle" class="mx-1" />
          <Avatar icon="pi pi-facebook" shape="circle" class="mx-1" />
          <Avatar icon="pi pi-linkedin" shape="circle" class="mx-1" />
          <Avatar icon="pi pi-github" shape="circle" class="mx-1" />
        </span>
        </div>
        <Divider />
      </template>
      <!--<template #item="{item}">
        <a :href="item.url">{{item.label}}</a>
      </template>-->
      <template #end>
        <Divider />
        <p>Top</p>
      </template>
    </MegaMenu>
    </template>
    <div class="h-screen col-8">
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      input: '',
      sidebar: false,
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Blog',
          icon: 'pi pi-fw pi-book',
          to: '/blog'
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-user',
          to: '/about'
        }
      ]
    };
  },
  methods: {
    change(){
    }
  }
};
</script>
<style lang="scss" scoped>
  .p-menubar, .p-megamenu  {
    border-radius: initial;
  }
  .grid {
    margin: 0;
  }
  .p-megamenu.col-4{
    padding: 0.5rem;
  }
</style>
