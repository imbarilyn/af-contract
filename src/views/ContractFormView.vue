<script>
import { useField } from 'vee-validate';
import { reactive, ref, watch} from "vue"

const contractDetails = reactive({
    vendorName:"",
    country:"",
    start_date: "",
    end_dtate: ""
})

const vendorNameValidator = (value)=>{
    if(!value){
        return "Vendor Name is required"
    }
    if(value.lenngth < 3){
        return "vendor name should be at least 3 characters"
    }
    if(value.length > 10){
        return "vendor name is too long"
    }
    else {
        return true
    }
}

const {
    value:vendorName,
    errorMessage:vendorNameError,
    meta : metaVendorName
} = useField("vendorName", vendorNameValidator)

watch(()=> contractDetails.vendorName, (newVendorName)=>{
    contractDetails.vendorName = newVendorName
})

</script>



<template>
    <div class="container">
        <form @submit="handleSubmit">
            <div class="form-row">
                <div class="col col-12">
                    <input type="text" class="form-control" placeholder="Vendor name">
                </div>
                <div class="col col-12 mb-2rem">
                    <input type="text" class="form-control" placeholder="Counrty">
                </div>
                <div class="col col-12">
                    <input type="text" class="form-control" placeholder="Start date">
                </div>
                <div class="col col-12">
                    <input type="text" class="form-control" placeholder="End date">
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
        </form> 
        
    </div>       
</template>