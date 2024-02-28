<template>
    <div class="row flex flex-center q-mt-md q-mx-md">
        <div class="col-12">

            <div class="row q-my-md">
                <div class="col-12">
                    <div class="text text-h4 text-bold text-center">
                        คำแนะนำในการใช้งานโปรแกรม
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="row flex flex-center">
                        <div class="col-12 col-md-5 q-ma-md">
                            <q-card style="background-color: #ECF4DB;">
                                <q-card-section>
                                    <div class="row text-center flex flex-center">
                                        <div class="col-12 col-md-6 q-px-lg">
                                            <q-img
                                            :src="require('@/assets/Recommend/1.png')"
                                            spinner-color="white"
                                            :fit="'contain'"
                                            :ratio="1/1"
                                            />
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="text text-h6">
                                                โปรแกรมนี้เหมาะกับการใช้งานบนคอมพิวเตอร์ <br> (ด้วยเบราเซอร์ Microsoft Edge) เพื่อให้เกิดประสิทธิภาพมากที่สุด
                                            </div>
                                        </div>
                                    </div>
                                </q-card-section>
                            </q-card>
                        </div>
                        <div class="col-12 col-md-5 q-ma-md">
                            <q-card style="background-color: #B4ECAC;">
                                <q-card-section>
                                    <div class="row text-center flex flex-center">
                                        <div class="col-12 col-md-6 q-px-lg">
                                            <q-img
                                            :src="require('@/assets/Recommend/3.png')"
                                            spinner-color="white"
                                            :fit="'contain'"
                                            :ratio="1/1"
                                            />
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="text text-h6">
                                                เมื่อเข้าถึงหน้าคำแนะนำในการดูแลสุขภาพจิต ให้ท่านเลื่อนอ่านข้อความที่อยู่ใต้หรือข้างภาพที่ปรากฎอยู่
                                            </div>
                                        </div>
                                    </div>
                                </q-card-section>
                            </q-card>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12">
                    <div class="row flex flex-center">
                        <div class="col-12 col-md-5 q-ma-md">
                            <q-card style="background-color: #B4ECAC;">
                                <q-card-section>
                                    <div class="row text-center flex flex-center">
                                        <div class="col-12 col-md-6 q-px-lg">
                                            <q-img
                                            :src="require('@/assets/Recommend/2.png')"
                                            spinner-color="white"
                                            :fit="'contain'"
                                            :ratio="1/1"
                                            />
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="text text-h6">
                                                ในกรณีที่ท่านใช้งานโปรแกรมนี้บนโทรศัพท์มือถือหรือแท็ปเล็ต ควรใช้ระบบในรูปแบบแนวนอน เพื่อให้สามารถเห็นภาพได้ชัดเต็มจอ
                                            </div>
                                        </div>
                                    </div>
                                </q-card-section>
                            </q-card>
                        </div>
                        <div class="col-12 col-md-5 q-ma-md">
                            <q-card style="background-color: #ECF4DB;">
                                <q-card-section>
                                    <div class="row text-center flex flex-center">
                                        <div class="col-12 col-md-6 q-px-lg">
                                            <q-img
                                            :src="require('@/assets/Recommend/4.png')"
                                            spinner-color="white"
                                            :fit="'contain'"
                                            :ratio="1/1"
                                            />
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="text text-h6">
                                                ในการอ่านคำแนะนำในการดูแลสุขภาพจิตแต่ละเรื่อง ท่านสามารถเลือกอ่านทีละเรื่องจนครบ โดยเลื่อนอ่านข้อความไปทางด้านขวามือไปจนครบ หรือ กดเลือก "ฮีลใจด้านอื่นต่อ" เมื่อต้องการเปลี่ยนเรื่อง 
                                            </div>
                                        </div>
                                    </div>
                                </q-card-section>
                            </q-card>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row text-center">
                <div class="col-12 col-md-12 q-my-md">
                    <q-btn @click="handleNext" class="text text-h6 text-white" style="background-color: #63A568;">
                        ไปต่อ
                    </q-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup () {
        const router = useRouter()

        const handleNext = () => {
            router.push('/additionData')
        }

        return { handleNext }
    }
}
</script>

<style lang="scss" scoped>

</style>