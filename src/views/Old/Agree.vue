<template>
    <div>
        <q-page>
            <div>
                <div>
                    <div>
                        <div>
                                    <div class="row justify-evenly items-center q-py-lg text-center">
                                        <div class="column col-12">
                                            <p class="text-h3 text-weight-medium"> ขอบคุณที่ท่านสนใจเข้าร่วมโครงการและยินดีให้ใช้ข้อมูลจากการสนทนา <br/>
                                            ขอให้ท่านลงทะเบียน เพื่อให้ทีมวิจัยติดต่อกลับเพื่อทําการนัดหมายการให้การปรึกษาต่อไป
                                            </p>
                                        </div>
                                        <div class="column col-12">
                                            <div class="row justify-center items-center ">
                                                    <div class="col-12 col-md-8 col-lg-8 q-my-lg">
                                                        <div class="row q-ma-xl">
                                                                <div class="column justify-center">
                                                                    <p class="text-h4"> ชื่อ-นามสกุล: </p>
                                                                </div>
                                                                <div class="column justify-center q-ma-md">
                                                                    <q-input class="text-h4" style="min-width: 250px; max-width: 300px" v-model="fullName" />
                                                                </div>
                                                        </div>
                                                        <div class="row q-ma-xl">
                                                                <div class="column justify-center">
                                                                    <p class="text-h4"> เบอร์โทรที่ติดต่อได้: </p>
                                                                </div>
                                                                <div class="column justify-center q-ma-md">
                                                                    <q-input input-class="text-h4" type="number" hint="เบอร์ติดต่อ" :rules="ageRules" style="min-width: 250px; max-width: 300px" v-model="tel">
                                                                        <template v-slot:error>
                                                                            Please use maximum 3 characters.
                                                                        </template>
                                                                        </q-input>
                                                                </div>
                                                        </div>
                                                        <div class="row q-ma-xl">
                                                                <div class="column justify-center">
                                                                    <p class="text-h4"> อีเมลที่ติดต่อได้: </p>
                                                                </div>
                                                                <div class="column justify-center q-ma-md">
                                                                    <q-input class="text-h5" disable style="min-width: 350px; max-width: 400px" v-model="email" />
                                                                </div>
                                                        </div>

                                                        <div class="row justify-evenly text-center">
                                                            <div v-if="Error==true" class="column justify-center">
                                                                <p class="text-h4 text-weight-bolder" style="color: red;"> กรุณากรอกข้อมูลให้ครบถ้วน </p>
                                                            </div>
                                                            <div class="row justify-center">
                                                                <q-btn class="items-center" @click="UpdateData()" color="primary" size="xl" label="submit" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-4 col-lg-4">
                                                        <q-img
                                                        :src="require('@/assets/Girl.png')"
                                                        spinner-color="white"
                                                        style="height: 450px; max-width: 450px"
                                                        />
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
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
import { doc, getDoc, updateDoc } from '@firebase/firestore'
import { db } from '../firebase/config'
import getUser from "@/composables/getUser"
import { computed } from 'vue'

    export default {
        setup() {
            const { user } = getUser()
            return { user }
        },
        data() {
            return {
                user: null,
                fullName: null,
                tel: null,
                email: null,
                Error: false,
                ageRules: [
                    val => (val !== null && val !== '') || 'Please type your age',
                    val => val.length == 10 || 'กรุณากรอกเบอร์มือถือ 10 หลัก',
                    // val => (val.le.length == 10 ) || 'กรุณากรอกเบอร์มือถือ 10 หลัก'
                ],
                
            }
        },
        mounted() {
            this.GetEmail();
        },
        computed: {
            
        },
        methods: {
            GetEmail(){
                this.email = this.user.email;
            },
            UpdateData(){
                const userRef = doc(db, "users", this.user.email);
                if(this.fullName!=null && this.tel != null && this.tel.length == 10 && this.email != null)
                {
                    updateDoc(userRef, {
                        FullName: this.fullName,
                        Telephone: this.tel,
                    })
                    this.ToEndPage();
                }
                else
                {
                    this.Error = true;
                }
                
            },

            ToEndPage(){
                this.$router.push({name:"End"})
            },
        },
    }
</script>

<style lang="scss" scoped>
@media screen and (max-width: 425px) {
//   .text-h1
//   {
//     font-size: 60px;
//   }
//   .text-h2
//   {
//     font-size: 40px;
//   }
//   .text-h3
//   {
//     font-size: 35px;
//   }
  .text-h3
  {
    font-size: 40px;
  }
}
</style>