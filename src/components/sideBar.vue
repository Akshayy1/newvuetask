<template>

        <div class="content overflow-y-scroll w-1/3">

            <div class="  flex">
                <div class=" w-full flex flex-col" v-for="(userData, userIndex) in userDetail" :key="userIndex">
                    <p class="py-2 text-center borderr bg-red-800 text-white">Entity Menu</p>
                    <div v-for="(data, dataIndex) in userData" :key="dataIndex"
                        class="text-start borderr p-3 hover:bg-red-800">
                        <button type="button" @click="getCompanyData(data)">
                            {{ data }}
                        </button>
                    </div>
                </div>
                
            </div>

        </div>

</template>

<script>

export default {
    data() {
        return {
            userDetail: [

                {
                    onwership: "Ownership",
                    credit: "Credit Risk",
                    company: "Company Information",
                    political: "Political Exposure",
                    sanctions: "Sanctions References",
                    offshore: "Offshore Records",
                    watchlist: "Watchlist",
                    adverse: "Adverse Media",
                    stateOwned: "State Owned Entities",
                    specialInterest: "Special Interest Person",
                    news: "News",
                    adverseInternet: "Adverse Internet",
                }
            ]
        }
    },
    methods: {
        getCompanyData(data) {
            if(data === 'Adverse Internet')
                this.$router.push({name:"Adverse Internet"})
            else if(data === 'Credit Risk')
                this.$router.push({name:"Credit Risk"})    
            else{
                this.$router.push({name:"Home"})
            }    
        }
    }
}
</script>

<style  scoped>
.content{
    height: 100vh;
}
.content::-webkit-scrollbar{
        display:none;
    }
.borderr{
    border: groove;
}
</style>