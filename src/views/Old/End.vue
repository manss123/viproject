<template>
    <div>
        <q-page>
            <div class="column justify-center items-center">
                <div class="col-12">

                    <div class="row justify-center q-my-xl text-center">
                        <div class="column col-10 q-my-xl">
                                    <div class="row justify-evenly items-center q-py-lg">
                                        <div class="column col-12">
                                            <p class="text-h3 text-weight-medium"> ...ขอบคุณที่ให้ความร่วมมือ <br/>
                                            ทำแบบประเมินอารมณ์ตนเองในครั้งนี้.. </p>
                                        </div>
                                        <div class="column justify-center items-center col-12">
                                            <q-img
                                            :src="require('@/assets/thanks.png')"
                                            spinner-color="white"
                                            style="height: 300px; max-width: 300px"
                                            />
                                        </div>
                                        <div class="column col-12">
                                            <p class="text-h4 text-weight-medium"> ท่านสามารถกดออกจากระบบได้ </p>
                                        </div>
                                    </div>
                        </div>
                    </div>

                    <div class="row justify-evenly text-center">
                        <div class="row justify-center">
                            <q-btn class="items-center" @click="Logout()" color="primary" size="xl" label="logout" />
                        </div>
                    </div>

                </div>
            </div>
        </q-page>
    </div>
</template>

<script>
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { ref } from 'vue'
import { doc, getDoc } from '@firebase/firestore'
import { db } from '../firebase/config'
import getUser from "@/composables/getUser"

    export default {
        data() {
            return {
                
            }
        },
        methods: {
            Logout(){
                const auth = getAuth();
                signOut(auth).then(() => {
                // Sign-out successful.
                this.ToHomePage();
                })
            },

            ToHomePage(){
                this.$router.push({name:"home"})
            },
        },
    }
</script>

<style lang="stylus" scoped>

</style>