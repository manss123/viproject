<template>
    <div class="row text-center flex flex-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row flex flex-center">
                <div class="col-12 col-md-6 q-pa-md">
                    <q-card class="bg-mainlight2 q-px-xl">
                        <div class="text text-h5 text-center q-pa-lg">
                            ภาพไหนแทนตัวคุณนะ ?
                        </div>
                        <q-card-section class="q-pa-lg">
                            <q-carousel
                            swipeable
                            animated
                            v-model="slide"
                            height="60vh"
                            arrows
                            thumbnails
                            infinite
                            >
                            <q-carousel-slide :name="'Boy-01'" :img-src="require('@/assets/Characters/Boy-01.png')" />
                            <q-carousel-slide :name="'Boy-02'" :img-src="require('@/assets/Characters/Boy-02.png')" />
                            <q-carousel-slide :name="'Boy-03'" :img-src="require('@/assets/Characters/Boy-03.png')" />
                            <q-carousel-slide :name="'Boy-04'" :img-src="require('@/assets/Characters/Boy-04.png')" />
                            <q-carousel-slide :name="'Boy-05'" :img-src="require('@/assets/Characters/Boy-05.png')" />
                            <q-carousel-slide :name="'Boy-06'" :img-src="require('@/assets/Characters/Boy-06.png')" />
                            <q-carousel-slide :name="'Girl-01'" :img-src="require('@/assets/Characters/Girl-01.png')" />
                            <q-carousel-slide :name="'Girl-02'" :img-src="require('@/assets/Characters/Girl-02.png')" />
                            <q-carousel-slide :name="'Girl-03'" :img-src="require('@/assets/Characters/Girl-03.png')" />
                            <q-carousel-slide :name="'Girl-04'" :img-src="require('@/assets/Characters/Girl-04.png')" />
                            <q-carousel-slide :name="'Girl-05'" :img-src="require('@/assets/Characters/Girl-05.png')" />
                            <q-carousel-slide :name="'Girl-06'" :img-src="require('@/assets/Characters/Girl-06.png')" />
                            </q-carousel>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-12 col-md-6 q-pa-md q-px-xl">
                        <div class="text text-h4 text-center text-bold q-pa-lg">
                            สวัสดี! <br>
                            เรามาทำความรู้จักกันเถอะ
                        </div>
                        <q-card class="bg-mainlight q-pa-md q-my-md">
                            <div class="row flex flex-center">
                                <div class="col-12 col-md-8">
                                    <div class="text text-h6 text-center q-pa-sm">
                                        ให้เราเรียกชื่อคุณว่าอะไรดี?
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <q-input class="bg-mainlight2 q-px-md text text-h6" v-model="userAddtionalData.Nickname" :dense="false" :rules="[val => !!val || 'กรอกชื่อภาษาไทยก่อนจ้า', validateThaiLanguage]"/>
                                </div>
                            </div>
                        </q-card>

                        <q-card class="bg-mainlight q-pa-md q-my-md">
                            <div class="row flex flex-center">
                                <div class="col-12 col-md-8">
                                    <div class="text text-h6 text-center q-pa-sm">
                                        คุณเป็นผู้หญิงหรือผู้ชาย?
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <!-- <q-input class="bg-mainlight2 q-px-md text text-h6" v-model="userAddtionalData.Nickname" :dense="false" /> -->
                                    <q-select class="bg-mainlight2 text text-h6" filled v-model="userAddtionalData.Gender" :options="selectOption.Gender" label="" stack-label :dense="false" />
                                </div>
                            </div>
                        </q-card>

                        <q-card class="bg-mainlight q-pa-md q-my-md">
                            <div class="row flex flex-center">
                                <div class="col-12 col-md-8">
                                    <div class="text text-h6 text-center q-pa-sm">
                                        ปีนี้คุณอายุเท่าไหร่?
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <!-- <q-input class="bg-mainlight2 q-px-md text text-h6" v-model="userAddtionalData.Nickname" :dense="false" /> -->
                                    <q-select class="bg-mainlight2 text text-h6" filled v-model="userAddtionalData.Age" :options="selectOption.Age" label="" stack-label :dense="false" />
                                </div>
                            </div>
                        </q-card>

                        <q-card class="bg-mainlight q-pa-md q-my-md">
                            <div class="row flex flex-center">
                                <div class="col-12 col-md-8">
                                    <div class="text text-h6 text-center q-pa-sm">
                                        คุณอยู่ชั้นปีไหน?
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <!-- <q-input class="bg-mainlight2 q-px-md text text-h6" v-model="userAddtionalData.Nickname" :dense="false" /> -->
                                    <q-select class="bg-mainlight2 text text-h6" filled v-model="userAddtionalData.StudyYear" :options="selectOption.StudyYear" label="" stack-label :dense="false" />
                                </div>
                            </div>
                        </q-card>

                        <q-card class="bg-mainlight q-pa-md q-my-md">
                            <div class="row flex flex-center">
                                <div class="col-12 col-md-8">
                                    <div class="text text-h6 text-center q-pa-sm">
                                        สำนักวิชาที่คุณเรียนคือ?
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <!-- <q-input class="bg-mainlight2 q-px-md text text-h6" v-model="userAddtionalData.Nickname" :dense="false" /> -->
                                    <q-select class="bg-mainlight2 text text-h6" filled v-model="userAddtionalData.Faculty" :options="selectOption.Faculty" label="" stack-label :dense="false" />
                                </div>
                            </div>
                        </q-card>

                        <div class="row">
                            <div class="col-12 q-gutter-md">
                                <q-btn size="xl" class="text-white"
                                @click="handleBackButton" style="background-color: #FFB1A5;"
                                >
                                    กลับ
                                </q-btn>
                                <q-btn size="xl" class="bg-maindark text-white" :disable="
                                !userAddtionalData.Nickname 
                                || !userAddtionalData.Gender
                                || !userAddtionalData.Age
                                || !userAddtionalData.StudyYear
                                || !userAddtionalData.Faculty
                                "
                                @click="handleSubmitData"
                                >
                                    เรียบร้อย
                                </q-btn>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import FirestoreHandle from '../composables/FirestoreHandle'
import AuthenComposable from '../composables/AuthenComposable'
export default {
    setup () {
        const slide = ref('Boy-01')
        const selectOption = ref({
            Gender: ['ผู้ชาย', 'ผู้หญิง'],
            Age: [18, 19, 20, 21, 22, 23, 24, 25],
            StudyYear: ['1', '2', '3', '4'],
            Faculty: ['สำนักวิชาศิลปศาสตร์', 'สำนักวิชาวิทยาศาสตร์', 'สำนักวิชาการจัดการ', 
                                'สำนักวิชาเทคโนโลยีสารสนเทศ', 'สำนักวิชาอุตสาหกรรมเกษตร', 'สำนักวิชานิติศาสตร์', 
                                'สำนักวิชาวิทยาศาสตร์เครื่องสำอาง', 'สำนักวิชาวิทยาศาสตร์สุขภาพ', 'สำนักวิชาพยาบาลศาสตร์', 
                                'สำนักวิชาแพทยศาสตร์', 'สำนักวิชาทันตแพทยศาสตร์', 'สำนักวิชานวัตกรรมสังคม', 
                                'สำนักวิชาจีนวิทยา', 'สำนักวิชาการแพทย์บูรณาการ'],
        })
        const userAddtionalData = ref({})

        const { updateDocData, currentUser } = FirestoreHandle()
        const router = useRouter()

        watchEffect(() => {
            // console.log(userAddtionalData.value.Nickname)
        })

        const handleBackButton = () => {
            router.push('/recommend')
        }

        const handleSubmitData = () => {
            userAddtionalData.value.AdditionalData = true
            userAddtionalData.value.AvartarID = slide.value
            updateDocData(`users/${currentUser.value}`, userAddtionalData.value).then(() => {
                router.push('/emotionalAssess')
            })
        }
        
        const validateThaiLanguage = (value) => {
            const thaiPattern = /^[\u0E00-\u0E7F]+$/;

            if(!value) {
                return true
            }

            if(!thaiPattern.test(value))
            {
                return 'เขียนชื่อเป็นภาษาไทยให้หน่อยนะะ <3'
            }

            return true
        }

        return { slide, selectOption, validateThaiLanguage, handleSubmitData, userAddtionalData, handleBackButton }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>

</style>