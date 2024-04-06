import { defineStore } from "pinia";

const contractStore = defineStore("contract", {
    state: ()=>{
        contracts:[
            {
                id: 1,
                title: "UTCL",
                country: "Uganda",
                start_date: "2021-01-01 00:00:00",
                end_date: "2023-01-01 00:00:00",
                expired: true               
            },
            {
                id: 2,
                title: "Aquamist",
                country: "Kenya",
                start_date: "2021-01-01 00:00:00",
                end_date: "2030-01-01 00:00:00",
                expired:false  
            }            
        ]
    },
    getters:{
        getExpired(){
            return this.contracts.filter(cnts => cnts.expired === true)
        }

    }
})