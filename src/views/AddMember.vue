<template>
    <div>
        아이디 : <input type="text" v-model="state.form.idName" /><br>
        비밀번호 : <input type="password" v-model="state.form.password" /><br>
        전화번호 : <input type="text" v-model="state.form.tel" /><br>
        주소 : <input type="text" v-model="state.form.address1" /><br>
        상세주소 : <input type="text" v-model="state.form.address2" /><br>
        <button @click="submit()">회원가입</button>
    </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";

export default {
    setup () {
        const state = reactive({
            form : {
                idName : "",
                password : "",
                tel : "",
                address1 : "",
                address2 : "",
            }
        })        

        const submit = () => {
            const headers = {"Content-Type":"application.json"};
            axios.post("/api/member/add", state.form, headers)
                .then((res) => {
                    console.log(res);
                    alert("가입 성공");
                    location.href = "/login";
                })
                .catch(()=> {
                    alert("가입 실패");
                })
        }

        return {
            state,
            submit
        }
    }
}
</script>

<style lang="css" scoped>

</style>