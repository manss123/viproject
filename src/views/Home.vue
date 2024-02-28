<template>
    <div class="row text-center flex flex-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row flex flex-center">
                <div class="col-12 col-md-6">
                    <q-card class="bg-transparent" style="box-shadow: 0 0px 0px rgba(0, 0, 0, 0), 0 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0)">
                        <q-img
                        :src="require('@/assets/TP AI material YUI.png')"
                        spinner-color="white"
                        :fit="'contain'"
                        :ratio="21/18"
                        />
                    </q-card>
                </div>
                <div class="col-12 col-md-6">
                    <q-card class="bg-mainlight">
                        <div class="title text-bold text-center text-h2 q-pa-lg">
                            Virtual Mental Health 
                            Problem Consultant
                        </div>
                        
                        <q-card-section class="bg-mainlight2 q-my-lg">
                            <div class="text text-center text-h4 q-pb-md ">
                                ยินดีต้อนรับสู่ <br>
                                โปรแกรม "มนุษย์เสมือน"
                            </div>
                        </q-card-section>
                        <div class="text text-center text-h5 q-pt-xl">
                            โปรแกรมสำหรับช่วยเหลือ <br>
                            ผู้ที่มีความทุกข์ใจ กังวลใจ หรือเศร้าใจ
                        </div>
                        <div class="text text-center text-h5 q-py-xl">
                            <q-btn color="red" icon="mail" size="xl" label="Google Login" @click="signInWithGoogle" />
                        </div>
                    </q-card>
                </div>
                <div class="col-12">
                    <q-footer reveal class="text-black" style="background-color: transparent;">
                        <!-- <q-toolbar>
                        <q-toolbar-title>
                            <q-avatar>
                            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                            </q-avatar>
                            <div>Title</div>
                        </q-toolbar-title>
                        </q-toolbar> -->
                        <q-tabs align="center" class="text-center bg-maindark text-white">
                            <div class="text-body1 text q-pa-xs"> โปรแกรมนี้เป็นส่วนหนึ่งของงานวิจัย ซึ่งได้รับทุนสนับสนุนจากกองทุนส่งเสริม ววน. สำนักงานคณะกรรมการส่งเสริมวิทยาศาสตร์ วิจัยและนวัตกรรม (สกสว.) <br> ประเภททุน Basic Research Fund ปีงบประมาณ 2566 และมหาวิทยาลัยแม่ฟ้าหลวง  </div>
                        </q-tabs>
                    </q-footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AuthenComposable from '../composables/AuthenComposable'
import { onMounted, watch, ref } from 'vue'
export default {
    setup () {
        const { signInWithGoogle } = AuthenComposable()
        // const user = ref(null)

        // watch(currentUser, (newVal, oldVal) => {
        //     console.log(newVal, oldVal)
        //     user.value = currentUser.value
        // })

        // onMounted(() => {
        //     checkUserAuthen()
        // })

        return { signInWithGoogle }
    }
}
</script>

<style lang="scss" scoped>

</style>