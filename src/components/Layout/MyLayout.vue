<template>
    <hearderCompo/>
    <div class="border-2 mainContiner ">
        <titlePage/>
    <div class="flex "> 
        <sideBar/>
        <router-view></router-view>
    </div>
    </div>
</template>

<script>
import sideBar from '../sideBar.vue';
import hearderCompo from '../hearderCompo.vue';
import titlePage from '../titlePage.vue';

export default {
    components: {
        sideBar,
        hearderCompo,
        titlePage
    }
}
</script>

<style scoped>
.mainContiner{
  width: 95.81%;
  margin-left: 30px;
}
</style>