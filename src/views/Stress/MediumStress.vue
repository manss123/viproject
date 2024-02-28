<template>
    <div class="row text-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row q-my-lg">
                <div class="col-12">
                    <div class="text text-h4 text-bold">
                        จะทําอย่างไรดี เมื่อเริ่มมีความเครียด 
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
                                style="background-color: #9FDDEB;"
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
        require('@/assets/MediumStress/1.png'),
        require('@/assets/MediumStress/2.png'),
        require('@/assets/MediumStress/3.png'),
        require('@/assets/MediumStress/4.png'),
        require('@/assets/MediumStress/5.png'),
        require('@/assets/MediumStress/6.png'),
        require('@/assets/MediumStress/7.png'),
        // Add more image paths here
      ])

      const contentData = ref([
        {
            topic: '1. สังเกตตนเอง',
            desciption: 'สังเกตการณ์เปลี่ยนแปลงของตนเองทั้งร่างกายและจิตใจ มีอาการเหล่านี้หรือไม่?(ปวดศีรษะ ปวดตึงร่างกาย นอนไม่หลับ อ่อนเพลีย กิน มาก/น้อยกว่าปกติหงุดหงิดโมโหง่าย เศร้า ไม่อยากทํากิจกรรมที่เคยชอบ เป็นต้น)'
        },
        {
            topic: '2. ทำกิจกรรมที่ตนชอบ',
            desciption: 'ถ้าพบว่ามีการเปลี่ยนแปลง รีบจัดการผ่อนคลาย ทั้งร่างกายและอารมณ์โดยออกกําลังกาย อาบน้ําอุ่น นวดผ่อนคลายกล้ามเนื้อ หากิจกรรมที่ตนเองชื่นชอบเพื่อเบี่ยงเบนความสนใจจากเรื่องเครียดๆ ได้ชั่วคราว เช่น ดูหนัง ฟังเพลง ทําสมาธิ กําหนดลมหายใจ เล่นกีฬา ดนตรี ท่องเที่ยว ทํางานบ้าน'
        },
        {
            topic: '3. ระบายให้ฟัง',
            desciption: 'หาใครสักคนที่ไว้ใจ รับฟังความทุกข์ใจ หรือ ปัญหาที่เราเผชิญหากไม่อยากเล่า/ระบายให้ใครฟัง สามารถเขียนเล่าเรื่อง หรืออัดเทประบายความในใจ การเล่าหรือระบายออกมาช่วยลดเรื่องราวที่กําลังไม่สบายใจอยู่ได้'
        },
        {
            topic: '4. หาสาเหตุ',
            desciption: 'เมื่ออารมณ์ดีแล้วกลับมามองสถานการณ์/เหตุการณ์ ใหม่ ถามตนเอง “อะไรทําให้เราเครียด”การหาสาเหตุที่ทําให้เครียดและเกิดการเปลี่ยนแปลงทางร่างกายและจิตใจช่วยให้สามารถลงมือจัดการที่สาเหตุได้ตรงประเด็น'
        },
        {
            topic: '5. จัดลำดับความสำคัญของปัญหา ',
            desciption: 'ก่อนลงมือแก้ไขปัญหา ควรจัดลําดับ ความสําคัญของปัญหาก่อนว่า เรื่องใดควรจัดการก่อน-หลัง อาจเลือกเรื่องที่แก้ไขได้ง่ายๆ ก่อนเพื่อเป็นกําลังใจตนเอง'
        },
        {
            topic: '6. แก้ไขปัญหาด้วยการปรับความคิดและพฤติกรรมใหม่',
            desciption: 'ถ้าสาเหตุปัญหา/ความเครียดอยู่ที่คนอื่น หรือสถานการณ์อื่นที่ไม่สามารถแก้ไขที่สาเหตุได้ ให้ปรับเปลี่ยนที่ตนเอง เช่น ปรับความคิดเชิงบวก ปรับเปลี่ยนความคิดในมุมใหม่ หรือปรับพฤติกรรมของตนเองเพื่อลดปัญหา เช่น “มีอะไรที่ดีๆ เกิดขึ้นจากสถานการณ์นั้นบ้าง”'
        },
        {
            topic: '7. หาคนช่วย',
            desciption: `หาคนช่วย หากแก้ไขด้วยตนเองไม่ได้ เช่น พ่อแม่ ครู เพื่อน พยาบาลจิตเวช นักจิตวิทยา`
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