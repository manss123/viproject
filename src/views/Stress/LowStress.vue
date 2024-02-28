<template>
    <div class="row text-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row q-my-lg">
                <div class="col-12">
                    <div class="text text-h4 text-bold">
                        ถ้าคุณยังไม่เกิดความเครียด จะดูแลป้องกันตนเองให้ห่างไกลได้อย่างไร
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
                                style="background-color: #FDF3DF"
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
                        <!-- <div class="row flex flex-center q-mt-xl">
                            <div class="col-12 q-gutter-xl">
                                <q-btn class="text-white" to="/nonBeforePost" style="background-color: #D76249;" size="xl" label="ออกจากระบบ" 
                                 />
                                <q-btn class="text-white" @click="handleNext" style="background-color: #63A568;" size="xl" label="ฮีลใจด้านอื่นต่อ" 
                                 />
                            </div>
                        </div> -->
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
        require('@/assets/LowStress/1.png'),
        require('@/assets/LowStress/2.png'),
        require('@/assets/LowStress/3.png'),
        require('@/assets/LowStress/4.png'),
        require('@/assets/LowStress/5.png'),
        require('@/assets/LowStress/6.png'),
        require('@/assets/LowStress/7.png'),
        // Add more image paths here
      ])

      const contentData = ref([
        {
            topic: '1.ออกกำลังกาย',
            desciption: 'ออกกําลังกายสม่ําเสมอ วันละ 30 นาที สัปดาห์ละ 3 ครั้ง เพื่อให้มีการหลั่งฮอร์โมนแห่งความสุขและเอาตัวเองออกจากเรื่องราวต่างๆ ในชีวิตชั่วครู่'
        },
        {
            topic: '2. นั่งสมาธิ',
            desciption: 'นั่งสมาธิ กําหนดลมหายใจ หรือสวดมนต์ ฝึกจิตให้นิ่งเป็นประจําทุกวันเพื่อให้ลืมเรื่องเครียดๆ ในแต่ละวันชั่วขณะ'
        },
        {
            topic: '3.ทำกิจกรรมที่ชอบ',
            desciption: 'ผ่อนคลายอารมณ์ด้วยการทํากิจกรรมที่ชอบ อย่างน้อย วันละ 30 นาที - 1 ชั่วโมง เช่น ดูหนัง ฟังเพลง ทําสวน หรือ ท่องเที่ยว การทํากิจกรรมที่ชอบจะช่วยให้สมอง พักจากเรื่องเครียด/เรื่องราวในชีวิตชั่วคราว อาจทําให้มีพลังกลับมามองปัญหา หรือเหตุการณ์ในชีวิตได้ดีขึ้น'
        },
        {
            topic: '4. ตื่นนอนเป็นเวลา',
            desciption: 'เข้านอนและตื่นให้เป็นเวลา โดยควรนอนก่อน 23.00 น. และตื่นนอนในช่วง ตี 5 - 6 โมงเช้า เพื่อให้ฮอร์โมนที่เกี่ยวข้องกับการนอนหลับและฮอร์โมนที่ช่วยชะลอความเสื่อมและซ่อมแซมความสึกหรอของร่างกายทํางานได้อย่างเต็มที่'
        },
        {
            topic: '5. จัดเวลาชีวิต',
            desciption: 'จัดสรรเวลาในชีวิตให้ลงตัวด้วยสูตร 8-8-8 คือ ทำงาน 8 ชั่วโมงทำกิจกรรมอื่น 8 ชั่วโมง และนอนหลับ 8 ชั่วโมง และระหว่างการทำงานควรมีการพักเบรกร่างกายและสมองชั่วโมงละ 10 - 15 นาที'
        },
        {
            topic: '6. ทานอาหารมีประโยชน์',
            desciption: 'รับประทานอาหารที่เป็นประโยชน์ให้ครบ 5 หมู่ โดยเฉพาะอาหารที่ช่วยลดความเครียด เช่น กลุ่มวิตามินบี วิตามินเอ และ แมกนีเซียม  และงดอาหารที่เพิ่มความเครียด เช่น คาเฟอีน อาหารที่มีโซเดียมและไขมันสูง'
        },
        {
            topic: '7. มองโลกเชิงบวก',
            desciption: 'หัดมองเรื่องต่างๆ ในเชิงบวก หรือมีมุมมองต่อสถานการณ์ให้หลากหลายเพราะการมองเพียงด้านเดียวหรือมีความคิดในเชิงลบ อาจทำเกิดความเครียดได้ง่าย'
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