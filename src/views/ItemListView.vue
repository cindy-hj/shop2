<template>
    <div>
        <div v-for="(item, idx) in state.items" :key="idx">
            <span>제품명 : {{ item.prodName }}</span>
            <span>제품가격 : {{ item.prodPrice }}</span>
            <button @click="addToCart(item.id)">담기</button>
            <span><router-link :to="{name: 'itemview', params: {id: item.id}}">상세보기</router-link></span>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";

export default {
    setup () {
        const state = reactive({
            items : []
        })

        axios.get("/api/items/list").then(({data}) => {
            state.items = data;
        })

        const addToCart = (itemId) => {
            axios.post(`/api/cart/items/${itemId}`)
                .then(()=> {
                    console.log("성공");
                })
        }

        return {
            state,
            addToCart
        }
    }
}
</script>

<style lang="scss" scoped>

</style>