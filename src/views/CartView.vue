<template>
    <div>
        <ul>
            <li v-for="(i, idx) in state.items" :key="idx">
                <span>{{ i.prodName }}</span>
                <button @click="remove(i.id)">지우기</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    setup () {
        const state = reactive({
            items : []
        })

        const load = () => {
            axios.get("/api/cart/items").then(({data})=> {
                console.log(data);
                state.items = data;
            })
        }

        const remove = (itemId) => {
            axios.delete(`/api/cart/items/${itemId}`).then(()=> {
                load();
            })

        }

        onMounted (()=> {
            load();
        })

        return {
            state,
            remove
        }
    }
}
</script>

<style lang="scss" scoped>

</style>