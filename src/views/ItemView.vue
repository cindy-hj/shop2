<template>
    <div>
        <span>제품명 : {{ state.item.prodName }}</span>
        <span>제품가격 : {{ state.item.prodPrice }}</span>
        <span>제조사 : {{ state.item.prodComp }}</span>
        <span>할인율 : {{ state.item.prodDiscountPer }}</span>
        <span>제품종류 : {{ state.item.prodKind }}</span>
    </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },

    setup () {
        const state = reactive({
            item:{}
        })
        axios.get(`/api/items/${this.id}`).then(({data})=> {
            state.item = data;
        })        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>