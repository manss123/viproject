<template>
    <div class="row text-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row q-my-lg">
                <div class="col-12">
                    <div class="text text-h4 text-bold">
                        เป็นเรื่องธรรมดานะที่คุณจะรู้สึก “เศร้า” แต่คงจะดีไม่น้อย ถ้าคุณจัดการมันให้ลดลงได้
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
                                style="background-color: #DDDBDB;"
                            >
                                <q-carousel-slide v-for="(content, index) in contentData" :key="index" :name="index.toString()">
                                    <div class="row text-center flex flex-center q-my-sm">
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
                                            <div class="text text-h6 text-left q-my-md">
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
        require('@/assets/MediumDepression/1.png'),
        require('@/assets/MediumDepression/2.png'),
        require('@/assets/MediumDepression/3.png'),
        require('@/assets/MediumDepression/4.png'),
        require('@/assets/MediumDepression/5.png'),
        require('@/assets/MediumDepression/6.png'),
        require('@/assets/MediumDepression/7.png'),
        // Add more image paths here
      ])

      const contentData = ref([
        {
            topic: '1. สังเกตตนเอง',
            desciption: 'สังเกตการเปลี่ยนแปลงของร่างกายและจิตใจของคุณเองว่ากำลังมีอาการเหล่านี้หรือไม่ รู้สึกหดหู่ เศร้า หรือท้อแท้สิ้นหวังหรือรู้สึกเบื่อ สิ่งใดที่เคยทำแล้ว รู้สึกเพลิดเพลินกลับกลายเป็นตรงกันข้ามอย่างสิ้นเชิง'
        },
        {
            topic: '2. ผ่อนคลาย',
            desciption: 'หากคุณพบว่ามีการเปลี่ยนแปลงเกิดขึ้น ลองหาทางผ่อนคลายความรู้สึกนั้นลง อย่างเช่น การอาบน้ำอุ่น ออกกำลังกาย เดินเล่น นวดผ่อนคลาย หรือทำกิจกรรมอื่นๆที่คุณชื่นชอบ เป็นการดึงตัวเองออกจากความเศร้า '
        },
        {
            topic: '3. ระบายออกมา',
            desciption: 'หากคุณเริ่มรู้สึกเศร้า พยายามอย่าอยู่คนเดียว ลองมองหาใครสักคนที่คุณไว้ใจบอกเล่าปัญหาระบายความไม่สบายใจออกมาบ้าง หรืออาจใช้การเขียนเล่าเรื่องในไดอารี่/พื้นที่ส่วนตัวอื่นๆของคุณ หรือแม้แต่การพูดคุยกับสัตว์เลี้ยง ก็จะช่วยลดความรู้สึกทุกข์ใจ เศร้าใจของคุณลงได้'
        },
        {
            topic: '4. หาสาเหตุ',
            desciption: 'เมื่อรู้สึกดีขึ้นบ้างแล้ว ลองกลับมาคิดดูดีๆ ว่าความรู้สึกเศร้าที่เกิดขึ้นนั้นเกิดจากสาเหตุอะไร เพราะจะช่วยให้คุณสามารถจัดการที่สาเหตุที่แท้จริงของความเศร้านั้นได้โดยตรง'
        },
        {
            topic: '5. จัดความสำคัญ',
            desciption: 'ก่อนจะไปจัดการกับปัญหาต่างๆที่ทำให้คุณรู้สึกเศร้า คุณควรจัดลำดับความสำคัญก่อนว่า เรื่องใดควรจัดการก่อนหรือหลัง จะดีมาก…ถ้าคุณเลือกเรื่องที่จัดการได้ง่ายก่อน จะได้รู้สึกมั่นใจมากขึ้นในการจัดการเรื่องอื่นๆต่อไป'
        },
        {
            topic: '6. เปลี่ยนมุมมอง',
            desciption: 'ถ้าสาเหตุ/ปัญหาที่ทำให้คุณเครียด คุณไม่สามารถแก้ไขมันได้ ให้คุณลองเปลี่ยนมุมมองต่อเรื่องนั้นใหม่ในทางที่ดีขึ้น'
        },
        {
            topic: '7. หาใครสักคน',
            desciption: `หากว่ายังไม่สามารถแก้ไขปัญหานั้นได้ด้วยตัวเอง ลองหาใครสักคนที่จะมาช่วยคุณคิดหาทางแก้ไขปัญหานั้นไปด้วยกัน เช่น ครอบครัว เพื่อน ครู หรือผู้เชี่ยวชาญด้านสุขภาพจิต`
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