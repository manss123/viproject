<template>
    <div class="row text-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row q-my-lg">
                <div class="col-12">
                    <div class="text text-h4 text-bold">
                        เราจะช่วยเหลือตัวเองอย่างไร เมื่อเกิดความวิตกกังวลในระดับรุนแรง?
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                        <div class="row flex flex-center">
                            <div class="col-12 q-px-xl">
                                <q-carousel
                                v-model="slide"
                                transition-prev="scale"
                                transition-next="scale"
                                swipeable
                                animated
                                control-color="white"
                                navigation
                                padding
                                arrows
                                height="60vh"
                                class="text shadow-1 rounded-borders"
                                style="background-color: #E0EBC8;"
                            >
                                <q-carousel-slide v-for="(content, index) in contentData" :key="index" :name="index.toString()">
                                    <div v-if="index!=6" class="row text-center flex flex-center q-my-md">
                                        <div class="col-12 col-md-6">
                                            <q-img
                                            :src="imagePaths[index]"
                                            spinner-color="white"
                                            style="height: 50vh; max-width: 25vw"
                                            />
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <q-card class="bg-mainlight2 q-py-lg q-my-md">
                                                <div class="text text-h5 text-bold">
                                                    {{content.topic}}
                                                </div>
                                            </q-card>
                                            <div class="text text-h6 text-left q-my-sm">
                                                {{content.desciption}}
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else class="row text-center flex flex-center q-my-sm">
                                        <div class="col-12 col-md-12">
                                            <q-img
                                            :src="imagePaths[index]"
                                            spinner-color="white"
                                            style="height: 30vh; max-width: 25vw"
                                            />
                                        </div>
                                        <div class="col-12 col-md-12">
                                            <!-- <q-card class="bg-mainlight2 q-py-lg q-my-xl">
                                                <div class="text text-h3 text-bold">
                                                    {{content.topic}}
                                                </div>
                                            </q-card> -->
                                            <div class="text text-h6 text-center q-my-sm">
                                                หากต้องการปรึกษาหน่วยงานสุขภาพจิต (ฟรี) สามารถติดต่อ <br>
                                                1323 บริการสายด่วนสุขภาพจิตตลอด 24 ชั่วโมง Inbox 17.00-22.00 น. <br>
                                                02-248-8999 สถาบันสุขภาพจิตเด็กและวัยรุ่นราชนครินทร์ทุกวัน เวลา 8.30-16.30 น. <br>
                                                081-932-0000 Depress we care โรงพยาบาลตำรวจ <br>
                                                สมาคมสมาริตันประเทศไทย 02-713-6793 กรงุเทพฯ ทุกวัน เวลา 12.00-22.00 น. <br>
                                                053-225-977-78 เชียงใหม่ ทุกวัน เวลา 19.00-22.00 น. <br>
                                                053-914-118 แผนกจิตเวช โรงพยาบาลศูนย์การแพทย์มหาวิทยาลัยแม่ฟ้าหลวง <br>
                                            </div>
                                        </div>
                                    </div>
                                </q-carousel-slide>

                                <template v-slot:navigation-icon="{ active, btnProps, onClick }">
                                    <q-btn v-if="active" size="lg" icon="face" color="teal-10" flat round dense @click="onClick" />
                                    <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
                                </template>
                            </q-carousel>
                            </div>
                        </div>
                        <div class="row flex flex-center q-mt-xl">
                            <div class="col-12 q-gutter-xl">
                                <q-btn class="text-white" to="/nonBeforePost" style="background-color: #D76249;" size="xl" label="ออกจากระบบ" 
                                 />
                                <q-btn class="text-white" @click="handleNext" style="background-color: #63A568;" size="xl" label="ฮีลใจด้านอื่นต่อ" 
                                 />
                                 <!-- :disable="enableBtn" -->
                                 
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, watchEffect, watch } from 'vue'
import { useRouter } from 'vue-router'
import FirestoreHandle from '../../composables/FirestoreHandle'
import AuthenComposable from '../../composables/AuthenComposable'

export default {
    setup () {
        const slide = ref('0')
        const imagePaths = ref([
        require('@/assets/HighAnxiety/1.png'),
        require('@/assets/HighAnxiety/2.png'),
        require('@/assets/HighAnxiety/3.png'),
        require('@/assets/HighAnxiety/4.png'),
        require('@/assets/HighAnxiety/5.png'),
        require('@/assets/HighAnxiety/6.png'),
        require('@/assets/HighAnxiety/7.png'),
        // Add more image paths here
        ])

        const contentData = ref([
            {
                topic: '1. อยู่ในที่สงบ',
                desciption: 'พาตัวเองไปอยู่ในสิ่งแวดล้อมที่สงบ ลดสิ่งที่กระตุ้นต่างๆ'
            },
            {
                topic: '2. คุมลมหายใจ',
                desciption: 'ลดความกังวลด้วยการควบคุมการหายใจโดยใช้สูตร 4-4-8 : หายใจเข้านับ 1-4 กลั้นไว้นับ 1-4 หายใจออกนับ 1-8'
            },
            {
                topic: '3. เข้าใจตนเอง',
                desciption: 'เรียนรู้วิธีเข้าใจอารมณ์ตนเอง หาเวลาแต่ละวัน ทบทวนความคิดตนเอง มุ่งเน้นจัดการความคิดในเชิงบวก'
            },
            {
                topic: '4. คุมความคิด',
                desciption: 'พยายามควบคุม /หยุดความคิด ของตนเอง บอกตนเองว่าเรื่องที่คิดยังไม่เกิดเรื่องที่คิดอาจไม่เป็นอย่างที่กังวล'
            },
            {
                topic: '5. หาคนคุยด้วย ',
                desciption: 'หาคนพูดคุยระบายปัญหาความกดดันทางจิตใจออกมา'
            },
            {
                topic: '6. ปรึกษาผู้เชี่ยวชาญ',
                desciption: 'ปรึกษาผู้เชี่ยวชาญเฉพาะทาง หากได้รับยาให้รับประทานยาตามแพทย์สั่ง'
            },
            {
                topic: '',
                desciption: ``
            },
        ])

        const enableBtn = ref(true)

        watch(slide, (newValue, oldValue) => {
            if(newValue == '6')
            {
                enableBtn.value = false
            }
        })

        const router = useRouter()

        const handleNext = () => {
            router.push('/emotionalResult')
        }
    
    return { slide, imagePaths, contentData, enableBtn, handleNext }
    }
}
</script>

<style lang="scss" scoped>
.fill-height{
    height: 80vh;
}
.card-height{
    height: 70vh;
}
</style>