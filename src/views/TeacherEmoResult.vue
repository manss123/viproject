<template>
    <div class="row text-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row q-my-lg">
                <div class="col-12">
                    <div class="text text-h4 text-bold">
                        ผลการประเมินอารมณ์ของนักศึกษา
                    </div>
                </div>
                <div class="col-12 q-my-md">
                    <div class="text text-h6">
                        โดยภาพรวมของนักศึกษาทั้งหมด
                    </div>
                </div>
            </div>
            <div class="row q-my-lg flex flex-center text-center">
                <div class="col-4">

                </div>
                <div class="col-4 q-pa-lg">
                    <q-card class="bg-white" style="border-radius: 50px;">
                        <q-card-section>
                            <div class="text text-h5 text-bold">
                                ก่อนปรึกษากับระบบ
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-4 q-pa-lg">
                    <q-card class="bg-white" style="border-radius: 50px;">
                        <q-card-section>
                            <div class="text text-h5 text-bold">
                                หลังปรึกษากับระบบ
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <div class="row flex flex-center text-center">
                <div class="col-4">

                </div>
                <div class="col-2">
                    <div class="text text-h6">
                        คะแนนเฉลี่ย
                    </div>
                </div>
                <div class="col-2">
                    <div class="text text-h6">
                        ผลลัพธ์
                    </div>
                </div>
                <div class="col-2">
                    <div class="text text-h6">
                        คะแนนเฉลี่ย
                    </div>
                </div>
                <div class="col-2">
                    <div class="text text-h6">
                        ผลลัพธ์
                    </div>
                </div>
            </div>

            <div class="row flex flex-center text-center text-h6 text">
                <div class="col-4">
                    คนที่มีภาวะความเศร้า
                </div>
                <div class="col-2 q-my-md q-px-lg">
                    <q-card class="bg-mainlight">
                        <q-card-section>
                            <div class="text text-h6">
                                {{ avgPreDepress }}
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-2 q-my-md q-px-lg">
                    <q-card class="bg-mainred">
                        <q-card-section>
                            <div class="text text-h6" v-if="avgPreDepress && avgPreDepress >= 0 && avgPreDepress <= 9">
                                ปกติ
                            </div>
                            <div class="text text-h6" v-if="avgPreDepress && avgPreDepress >= 10 && avgPreDepress <= 13">
                                เล็กน้อย
                            </div>
                            <div class="text text-h6" v-if="avgPreDepress && avgPreDepress >= 14 && avgPreDepress <= 20">
                                ปานกลาง
                            </div>
                            <div class="text text-h6" v-if="avgPreDepress && avgPreDepress >= 21 && avgPreDepress <= 27">
                                รุนแรง
                            </div>
                            <div class="text text-h6" v-if="avgPreDepress && avgPreDepress >= 28">
                                รุนแรงมาก
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-2 q-my-md q-px-lg">
                    <q-card class="bg-mainlight">
                        <q-card-section>
                            <div class="text text-h6">
                                {{ avgPostDepress }}
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-2 q-my-md q-px-lg">
                    <q-card class="bg-mainred">
                        <q-card-section>
                            <div class="text text-h6" v-if="avgPostDepress && avgPostDepress >= 0 && avgPostDepress <= 9">
                                ปกติ
                            </div>
                            <div class="text text-h6" v-if="avgPostDepress && avgPostDepress >= 10 && avgPostDepress <= 13">
                                เล็กน้อย
                            </div>
                            <div class="text text-h6" v-if="avgPostDepress && avgPostDepress >= 14 && avgPostDepress <= 20">
                                ปานกลาง
                            </div>
                            <div class="text text-h6" v-if="avgPostDepress && avgPostDepress >= 21 && avgPostDepress <= 27">
                                รุนแรง
                            </div>
                            <div class="text text-h6" v-if="avgPostDepress && avgPostDepress >= 28">
                                รุนแรงมาก
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <q-separator size="3px" color="black" />

            <div class="row flex flex-center text-center text-h6 text">
                <div class="col-4">
                    คนที่มีภาวะความวิตกกังวล
                </div>
                <div class="col-2 q-my-md q-px-lg">
                    <q-card class="bg-mainlight">
                        <q-card-section>
                            <div class="text text-h6">
                                {{ avgPreAnxiety }}
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-2 q-my-md q-px-lg">
                    <q-card class="bg-mainred">
                        <q-card-section>
                            <div class="text text-h6" v-if="avgPreAnxiety && avgPreAnxiety >= 0 && avgPreAnxiety <= 9">
                                ปกติ
                            </div>
                            <div class="text text-h6" v-if="avgPreAnxiety && avgPreAnxiety >= 10 && avgPreAnxiety <= 13">
                                เล็กน้อย
                            </div>
                            <div class="text text-h6" v-if="avgPreAnxiety && avgPreAnxiety >= 14 && avgPreAnxiety <= 20">
                                ปานกลาง
                            </div>
                            <div class="text text-h6" v-if="avgPreAnxiety && avgPreAnxiety >= 21 && avgPreAnxiety <= 27">
                                รุนแรง
                            </div>
                            <div class="text text-h6" v-if="avgPreAnxiety && avgPreAnxiety >= 28">
                                รุนแรงมาก
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-2 q-my-md q-px-lg">
                    <q-card class="bg-mainlight">
                        <q-card-section>
                            <div class="text text-h6">
                                {{ avgPostAnxiety }}
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-2 q-my-md q-px-lg">
                    <q-card class="bg-mainred">
                        <q-card-section>
                            <div class="text text-h6" v-if="avgPostAnxiety && avgPostAnxiety >= 0 && avgPostAnxiety <= 9">
                                ปกติ
                            </div>
                            <div class="text text-h6" v-if="avgPostAnxiety && avgPostAnxiety >= 10 && avgPostAnxiety <= 13">
                                เล็กน้อย
                            </div>
                            <div class="text text-h6" v-if="avgPostAnxiety && avgPostAnxiety >= 14 && avgPostAnxiety <= 20">
                                ปานกลาง
                            </div>
                            <div class="text text-h6" v-if="avgPostAnxiety && avgPostAnxiety >= 21 && avgPostAnxiety <= 27">
                                รุนแรง
                            </div>
                            <div class="text text-h6" v-if="avgPostAnxiety && avgPostAnxiety >= 28">
                                รุนแรงมาก
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <q-separator size="3px" color="black" />

            <div class="row flex flex-center text-center text-h6 text">
                <div class="col-4">
                    คนที่มีภาวะความเครียด
                </div>
                <div class="col-2 q-my-md q-px-lg">
                    <q-card class="bg-mainlight">
                        <q-card-section>
                            <div class="text text-h6">
                                {{ avgPreStress }}
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-2 q-my-md q-px-lg">
                    <q-card class="bg-mainred">
                        <q-card-section>
                            <div class="text text-h6" v-if="avgPreStress && avgPreStress >= 0 && avgPreStress <= 9">
                                ปกติ
                            </div>
                            <div class="text text-h6" v-if="avgPreStress && avgPreStress >= 10 && avgPreStress <= 13">
                                เล็กน้อย
                            </div>
                            <div class="text text-h6" v-if="avgPreStress && avgPreStress >= 14 && avgPreStress <= 20">
                                ปานกลาง
                            </div>
                            <div class="text text-h6" v-if="avgPreStress && avgPreStress >= 21 && avgPreStress <= 27">
                                รุนแรง
                            </div>
                            <div class="text text-h6" v-if="avgPreStress && avgPreStress >= 28">
                                รุนแรงมาก
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-2 q-my-md q-px-lg">
                    <q-card class="bg-mainlight">
                        <q-card-section>
                            <div class="text text-h6">
                                {{ avgPostStress }}
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-2 q-my-md q-px-lg">
                    <q-card class="bg-mainred">
                        <q-card-section>
                            <div class="text text-h6" v-if="avgPostStress && avgPostStress >= 0 && avgPostStress <= 9">
                                ปกติ
                            </div>
                            <div class="text text-h6" v-if="avgPostStress && avgPostStress >= 10 && avgPostStress <= 13">
                                เล็กน้อย
                            </div>
                            <div class="text text-h6" v-if="avgPostStress && avgPostStress >= 14 && avgPostStress <= 20">
                                ปานกลาง
                            </div>
                            <div class="text text-h6" v-if="avgPostStress && avgPostStress >= 21 && avgPostStress <= 27">
                                รุนแรง
                            </div>
                            <div class="text text-h6" v-if="avgPostStress && avgPostStress >= 28">
                                รุนแรงมาก
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <q-separator size="3px" color="black" />

        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import FirestoreHandle from '@/composables/FirestoreHandle';

export default {
    setup () {
        const avgPreDepress = ref(null)
        const avgPostDepress = ref(null)

        const avgPreAnxiety = ref(null)
        const avgPostAnxiety = ref(null)

        const avgPreStress = ref(null)
        const avgPostStress = ref(null)

        const { getDocData, getRoundData, currentUser, getEmotionalData } = FirestoreHandle()

        watch(currentUser, (newValue, oldValue) => {
           if(newValue)
           {
            getStudentData()
            getStudentPostData()
           }
        })

        const getStudentData = async () => {
            const emotionalData = await getEmotionalData("OverallScore")
            
            let avgPreAnxietyt = 0, avgPreDepresst = 0, avgPreStresst = 0
            emotionalData.forEach(indexData => {
                avgPreAnxietyt += indexData.AnxietyScore
                avgPreDepresst += indexData.DepressionScore
                avgPreStresst += indexData.StressScore
            })
            avgPreAnxietyt /= emotionalData.length
            avgPreDepresst /= emotionalData.length
            avgPreStresst /= emotionalData.length

            avgPreAnxiety.value = avgPreAnxietyt.toFixed(2)
            avgPreDepress.value = avgPreDepresst.toFixed(2)
            avgPreStress.value = avgPreStresst.toFixed(2)
        }

        const getStudentPostData = async () => {
            const postEmotionalData = await getEmotionalData("PostOverallScore")
            let avgPostAnxietyt = 0, avgPostDepresst = 0, avgPostStresst = 0
            postEmotionalData.forEach(indexData => {
                avgPostAnxietyt += indexData.AnxietyScore
                avgPostDepresst += indexData.DepressionScore
                avgPostStresst += indexData.StressScore
            })
            avgPostAnxietyt /= postEmotionalData.length
            avgPostDepresst /= postEmotionalData.length
            avgPostStresst /= postEmotionalData.length

            avgPostAnxiety.value = avgPostAnxietyt.toFixed(2)
            avgPostDepress.value = avgPostDepresst.toFixed(2)
            avgPostStress.value = avgPostStresst.toFixed(2)
        }
        

        return { avgPreAnxiety, avgPreDepress, avgPreStress, avgPostAnxiety, avgPostDepress, avgPostStress }
    }
}
</script>

<style lang="scss" scoped>

</style>