<template>
    <div class="row text-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row q-my-lg">
                <div class="col-12">
                    <div class="text text-h4 text-bold">
                        เมื่อเริ่มวิตกกังวล ควรดูแลตนเองอย่างไร?
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
                                style="background-color: #B0DDD0;"
                            >
                                <q-carousel-slide v-for="(content, index) in contentData" :key="index" :name="index.toString()">
                                    <div class="row text-center flex flex-center q-my-md">
                                        <div class="col-12 col-md-6">
                                            <q-img
                                            :src="imagePaths[index]"
                                            spinner-color="white"
                                            style="height: 50vh; max-width: 25vw"
                                            />
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <q-card class="bg-mainlight2 q-py-lg q-my-sm">
                                                <div class="text text-h5 text-bold">
                                                    {{content.topic}}
                                                </div>
                                            </q-card>
                                            <div class="text text-h6 text-left q-my-sm">
                                                {{content.desciption}}
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
                            <div class="col-12 q-gutter-lg">
                                <q-btn class="text-black" @click="handleNext" style="background-color: #FFB1A5;" size="xl" label="ฮีลใจด้านอื่นต่อ"/>
                                <q-btn class="text-white" @click="handleAgreement" style="background-color: #63A568;" size="xl" label="คุยปรึกษากับยูอิ"/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, ref, watchEffect, watch } from 'vue'
import FirestoreHandle from '../../composables/FirestoreHandle'
import AuthenComposable from '../../composables/AuthenComposable'

export default {
    setup () {
        const slide = ref('0')
        const imagePaths = ref([
        require('@/assets/MediumAnxiety/1.png'),
        require('@/assets/MediumAnxiety/2.png'),
        require('@/assets/MediumAnxiety/3.png'),
        require('@/assets/MediumAnxiety/4.png'),
        require('@/assets/MediumAnxiety/5.png'),
        require('@/assets/MediumAnxiety/6.png'),
        require('@/assets/MediumAnxiety/7.png'),
        require('@/assets/MediumAnxiety/8.png'),
        require('@/assets/MediumAnxiety/9.png'),
        // Add more image paths here
      ])

      const contentData = ref([
        {
            topic: '1. เป็นเรื่องปกติ ',
            desciption: 'ระลึกไว้ว่าความวิตกกังวลเป็นสิ่งปกติ และอาจมีประโยชน์ ช่วยให้ตื่นตัว'
        },
        {
            topic: '2. ฝึกการหายใจ',
            desciption: 'ฝึกการหายใจ ผ่อนคลายความเครียด โดยใช้สูตร 4-4-8 : หายใจเข้านับ 1-4 กลั้นไว้นับ 1-4 หายใจออกนับ 1-8'
        },
        {
            topic: '3. ฝึกผ่อนคลาย ',
            desciption: 'ฝึกการผ่อนคลาย ทำจิตใจให้สงบ โดยการหากิจกรรมที่ชอบทำ เช่น อ่านหนังสือ ฟังเพลง หรือสวดมนต์'
        },
        {
            topic: '4. หาสิ่งแวดล้อมสงบ',
            desciption: 'หาสิ่งแวดล้อมที่สงบและช่วยลดความไวต่อสิ่งกระตุ้นเพื่อพักใจจากเรื่องวุ่นวาย'
        },
        {
            topic: '5. หากิจกรรมคลายกังวล',
            desciption: 'หากิจกรรมที่สร้างสรรค์ระบายความวิตกกังวล เช่น ออกกำลังกาย เดิน โยคะ ทำงานบ้าน ทำสวน'
        },
        {
            topic: '6. หาเพื่อนคุย',
            desciption: 'พูดคุยและระบายความกังวลใจกับผู้อื่นบ้าง'
        },
        {
            topic: '7. ฝึกพูดกับตัวเอง',
            desciption: `ฝึกการพูดกับตนเองทางบวก เช่น "ฉันทำได้" "ฉันเคยทำได้ดี" "ไม่ยากสำหรับฉัน"`
        },
        {
            topic: '8. พิจารณาความเป็นไปได้ของการเกิดความวิตกกังวล',
            desciption: `ลองพิจารณาว่าความวิตกกังวลที่มีนั้น มีโอกาสเกิดขึ้นจริงกี่% และมีโอกาสไม่เกิดขึ้นกี่ %`
        },
        {
            topic: '9. ปรับความคิด ',
            desciption: `การปรับเปลี่ยนความคิดและการรับรู้ที่มี ต่อปัญหาให้เป็นเชิงบวก โดยมองว่าความวิตกกังวลยังมีโอกาสที่จะไม่เกิดขึ้นได้ ควรหยุดความคิดของตนเองแล้วมองในทางบวก`
        },
    ])

    const enableBtn = ref(true)
    
    watch(slide, (newValue, oldValue) => {
        if(newValue == '8')
        {
            enableBtn.value = false
        }
    })

    const router = useRouter()

    const handleNext = () => {
        router.push('/emotionalResult')
    }

    const handleAgreement = () => {
        router.push('/agreement')
    }
    
    return { slide, imagePaths, contentData, enableBtn, handleNext, handleAgreement }

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