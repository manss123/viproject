<template>
    <div class="row text-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row q-my-lg">
                <div class="col-12">
                    <div class="text text-h4 text-bold">
                        ความเศร้าที่เราป้องกันได้ หากคุณลอง…
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
                                style="background-color: #9CCFE0"
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
                            <div class="col-12 q-gutter-xl">
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
import { onMounted, ref, watchEffect, watch } from 'vue'
import { useRouter } from 'vue-router'
import FirestoreHandle from '../../composables/FirestoreHandle'
import AuthenComposable from '../../composables/AuthenComposable'

export default {
    setup () {
        const slide = ref('0')
        const imagePaths = ref([
        require('@/assets/LowDepression/1.png'),
        require('@/assets/LowDepression/2.png'),
        require('@/assets/LowDepression/3.png'),
        require('@/assets/LowDepression/4.png'),
        require('@/assets/LowDepression/5.png'),
        require('@/assets/LowDepression/6.png'),
        require('@/assets/LowDepression/7.png'),
        // Add more image paths here
      ])

      const contentData = ref([
        {
            topic: '1.ออกกำลังกาย',
            desciption: 'หากคุณได้ลองออกกำลังกายสม่ำเสมอ วันละ 30 นาที สัปดาห์ละ 3 ครั้งจะทำให้ร่างกายมีการหลั่งฮอร์โมนแห่งความสุข ช่วยป้องกันความเศร้าได้'
        },
        {
            topic: '2. ทำกิจกรรมที่ชอบ',
            desciption: 'ผ่อนคลายอารมณ์ด้วยการทำกิจกรรมที่ชอบ อย่างน้อยวันละ 30-60 นาที เช่น ดูหนัง ฟังเพลง ทำสวน เป็นต้น จะช่วยให้สมองพักจากเรื่องราวต่างๆในชีวิตชั่วคราว อาจทำให้มีพลังกลับมาพิจารณาเหตุการณ์ในชีวิตใหม่อีกครั้ง'
        },
        {
            topic: '3. ฝึกจิตให้นิ่ง',
            desciption: 'ฝึกจิตใจให้นิ่ง ผ่านการนั่งสมาธิ กำหนดลมหายใจ หรือเล่นโยคะ เป็นต้น เป็นประจำทุกวัน เพื่อให้ใจของเราอยู่กับปัจจุบัน ไม่จมอยู่กับความทุกข์ใจ ทั้งในอดีตและปัจจุบัน ลืมเรื่องราวที่ไม่สบายใจไปชั่วขณะหนึ่ง'
        },
        {
            topic: '4. เลี้ยงสัตว์',
            desciption: 'การมีสัตว์เลี้ยงอยู่รอบๆตัว ก็ทำให้รู้สึกผ่อนคลาย เกิดความรักความผูกพันนำมาซึ่งสารแห่งความสุข ช่วยป้องกันเราจากความเศร้าได้เป็นอย่างดี'
        },
        {
            topic: '5. ตื่นนอนเป็นเวลา',
            desciption: 'เข้านอนและตื่นให้เป็นเวลา โดยควรนอนก่อน 23.00 น. ตื่นนอนช่วง ตี 5 - 6 โมงเช้า เพื่อให้ฮอร์โมในที่เกี่ยวข้องกับการนอนหลับ และฮอร์โมนที่ช่วยชะลอความเสื่อมและซ่อมแซมส่วนที่สึกหรอของร่างกายได้อย่างเต็มที่'
        },
        {
            topic: '6. ทานอาหารต้านเศร้า',
            desciption: 'รับประทานอาหารที่ช่วยต้านความเศร้า เช่น กลุ่มเหล็ก, กรดไขมัน, โอเมก้า 3, แมกนีเซียม, สังกะสี, โพแทสเซียม,ซิลิเนียม, วิตามินบี 6,12 , วิตามินเอ, วิตามินซี, โอเมก้า 3, อาหารคาร์โบไฮเดตเชิงซ้อนที่จะช่วยเพิ่มสารเซโรโทนีน'
        },
        {
            topic: '7. ปรับเปลี่ยนความคิด ',
            desciption: 'ปรับเปลี่ยนมุมมองความคิด จากการคิดแต่เรื่องทุกข์ใจให้ลองมองเรื่องเดียวกันในอีกแง่มุม ว่ามีเรื่องราวดีๆ อะไรซ่อนอยู่บ้าง การฝึกคิดและปรับเปลี่ยนมุมมองในแง่ดีๆ บ่อยครั้งจะทำให้สารแห่งความสุขหลั่ง ช่วยทำให้เราห่างไกลจากความเศร้าได้'
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