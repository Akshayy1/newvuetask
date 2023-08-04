<template>
    <div>
        <div class="flex mt-2 mb-3">
            <div class="border-2 flex w-11/12 ms-8 items-center p-1 rounded-lg">
                <div class="flex names p-1">
                    <fa icon="user" class="mt-1 bg-red-300 p-1 rounded-xl"></fa>
                    <p class="ps-1 mt-1">Vipul Mishra</p>
                    <input type="checkbox" class="mt-1 ms-2">
                </div>
                <div class="flex names ms-5 p-1">
                    <fa icon="user" class="mt-1  bg-red-300 p-1 rounded-xl"></fa>
                    <p class="ps- mt-1">Kunal Agarwal</p>
                    <input type="checkbox" class="mt-1 ms-2">
                </div>
                <div class="flex names ms-5 p-1"> 
                    <fa icon="user" class="mt-1  bg-red-300 p-1 rounded-xl"></fa>
                    <p class="ps-1 mt-1 ">Virendra Bansai</p>
                    <input type="checkbox" class="mt-1 ms-2">
                </div>
                <div class="flex names ms-5 p-1">
                    <fa icon="user" class="mt-1  bg-red-300 p-1 rounded-xl"></fa>
                    <p class="ps-1 mt-1">Neotas</p>
                    <input type="checkbox" class="mt-1 ms-2">
                </div>
            </div>
            <div class="ms-3  p-1 px-2 network rounded-md">
                <fa icon="network-wired" style="color: ffffff;"></fa>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.network{
   background-color:  #991b1b;
}
.names:hover{
    background-color: #fecaca;
}
</style>