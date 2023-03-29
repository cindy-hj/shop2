<template>
    <div>
        <div>
            <ul>
                <li v-for="(item, idx) in state.item1" :key="idx">
                    <span>{{ item.prodName }}</span>
                    <span>{{ item.prodPrice }}</span>
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li v-for="(item, idx) in state.item2" :key="idx">
                    <span>{{ item.prodName }}</span>
                    <span>{{ item.prodPrice }}</span>
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li v-for="(item, idx) in state.item3" :key="idx">
                    <span>{{ item.prodName }}</span>
                    <span>{{ item.prodPrice }}</span>
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li v-for="(item, idx) in state.item4" :key="idx">
                    <span>{{ item.prodName }}</span>
                    <span>{{ item.prodPrice }}</span>
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li v-for="(item, idx) in state.item5" :key="idx">
                    <span>{{ item.prodName }}</span>
                    <span>{{ item.prodPrice }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";

export default {
    setup () {
        const state = reactive({
            item1 : [],
            item2 : [],
            item3 : [],
            item4 : [],
            item5 : [],
        })

        const load1 = () => {
            axios.get("/api/items/gettop")
                .then(({data})=> {
                    console.log(data);
                    state.item1 = data;
                })
        }

        const load2 = () => {
            axios.get("/api/items/getsecond")
                .then(({data})=> {
                    console.log(data);
                    state.item2 = data;
                })            
        }

        const load3 = () => {
            axios.get("/api/items/getitem3")
                .then(({data})=> {
                    console.log(data);
                    state.item3 = data;
                })            
        }

        const load4 = () => {
            axios.get("/api/items/getitem4")
                .then(({data})=> {
                    console.log(data);
                    state.item4 = data;
                })            
        }

        const load5 = () => {
            axios.get("/api/items/getitem5")
                .then(({data})=> {
                    console.log(data);
                    state.item5 = data;
                })            
        }

        onMounted(()=>{
            load1();
            load2();
            load3();
            load4();
            load5();
        });
        

        return {
            state,
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>