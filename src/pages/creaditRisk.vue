<template>
    <div class="px-5 pt-3 pb-1 mx-7 border-2 w-3/4 rounded-2xl overflow-y-scroll creaditRisk">

        <p class="mb-2 text-xl bg-emerald-50 w-full px-2"><b>Company Detail</b></p>

        <div v-for="(companyData, index) in companyDetails" :key="index" class="text-justify">

            <div v-for="(item, key, dataIndex) in companyData" :key="dataIndex" class="flex justify-between">

                <p class="pb-2">{{ key }}</p>

                <p class="pb-2">{{ item }}</p>

            </div>

        </div>

    </div>
</template>

<script>

export default {

    data() {

        return {

            companyDetails: [

                {

                    "Company Name": "Neotas Limited 1",

                    "Registration Number": 10502502,

                    "Registered Office": "3rd floor 85-90 Paul Street, London, ECA2A 4NE",

                    "Status": "Live",

                    "Business Description": "",

                    "Company Type": "Private Limited with Share Capital",

                    "Industry": "REX AND DAMAGE EVALUATION",

                    "ISO Country": "-",

                    "ISO Currency": "CBP",

                    "Accounts Type": "Total Exemption Full",

                    "Latest Annual Reports": "2023-05-22",

                    "Latest Period End Date": "2021-12-31",

                    "Next Annual Returns Date": "2023-09-30",

                    "Next Period End Data": "2024-06-05",

                    "Issued Capital": "1319577 08P",

                    "Court Judgement Satisfied": 0,

                    "Court Judgement Unatisfied": 0,

                    "Mortgages Outstanding": 0,

                    "Mortgages Satisfied": 0,

                    "Mortgages Partially Satisfied": 0,

                    "CREDIT LIMITS": "-"

                }

            ]

        }

    }

}

</script>

<style>
.creaditRisk{
    height: 100vh;
}
.creaditRisk::-webkit-scrollbar{
        display:none;
    }
</style>