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
                            <div class="text text-h6" v-if="avgPreDepress && avgPreDepress > 9 && avgPreDepress <= 13">
                                เล็กน้อย
                            </div>
                            <div class="text text-h6" v-if="avgPreDepress && avgPreDepress > 13 && avgPreDepress <= 20">
                                ปานกลาง
                            </div>
                            <div class="text text-h6" v-if="avgPreDepress && avgPreDepress > 21 && avgPreDepress <= 27">
                                รุนแรง
                            </div>
                            <div class="text text-h6" v-if="avgPreDepress && avgPreDepress > 27">
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
                            <div class="text text-h6" v-if="avgPostDepress && avgPostDepress > 9 && avgPostDepress <= 13">
                                เล็กน้อย
                            </div>
                            <div class="text text-h6" v-if="avgPostDepress && avgPostDepress > 14 && avgPostDepress <= 20">
                                ปานกลาง
                            </div>
                            <div class="text text-h6" v-if="avgPostDepress && avgPostDepress > 20 && avgPostDepress <= 27">
                                รุนแรง
                            </div>
                            <div class="text text-h6" v-if="avgPostDepress && avgPostDepress > 27">
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
                            <div class="text text-h6" v-if="avgPreAnxiety && avgPreAnxiety > 9 && avgPreAnxiety <= 13">
                                เล็กน้อย
                            </div>
                            <div class="text text-h6" v-if="avgPreAnxiety && avgPreAnxiety > 13 && avgPreAnxiety <= 20">
                                ปานกลาง
                            </div>
                            <div class="text text-h6" v-if="avgPreAnxiety && avgPreAnxiety > 21 && avgPreAnxiety <= 27">
                                รุนแรง
                            </div>
                            <div class="text text-h6" v-if="avgPreAnxiety && avgPreAnxiety > 28">
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
                            <div class="text text-h6" v-if="avgPostAnxiety && avgPostAnxiety > 9 && avgPostAnxiety <= 13">
                                เล็กน้อย
                            </div>
                            <div class="text text-h6" v-if="avgPostAnxiety && avgPostAnxiety > 13 && avgPostAnxiety <= 20">
                                ปานกลาง
                            </div>
                            <div class="text text-h6" v-if="avgPostAnxiety && avgPostAnxiety > 20 && avgPostAnxiety <= 27">
                                รุนแรง
                            </div>
                            <div class="text text-h6" v-if="avgPostAnxiety && avgPostAnxiety > 27">
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
                            <div class="text text-h6" v-if="avgPreStress && avgPreStress > 9 && avgPreStress <= 13">
                                เล็กน้อย
                            </div>
                            <div class="text text-h6" v-if="avgPreStress && avgPreStress > 13 && avgPreStress <= 20">
                                ปานกลาง
                            </div>
                            <div class="text text-h6" v-if="avgPreStress && avgPreStress > 20 && avgPreStress <= 27">
                                รุนแรง
                            </div>
                            <div class="text text-h6" v-if="avgPreStress && avgPreStress > 27">
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
                            <div class="text text-h6" v-if="avgPostStress && avgPostStress > 9 && avgPostStress <= 13">
                                เล็กน้อย
                            </div>
                            <div class="text text-h6" v-if="avgPostStress && avgPostStress > 13 && avgPostStress <= 20">
                                ปานกลาง
                            </div>
                            <div class="text text-h6" v-if="avgPostStress && avgPostStress > 20 && avgPostStress <= 27">
                                รุนแรง
                            </div>
                            <div class="text text-h6" v-if="avgPostStress && avgPostStress > 27">
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
                
                if(indexData.AnxietyScore)
                {
                    avgPreAnxietyt += indexData.AnxietyScore
                }
                else
                {
                    avgPreAnxietyt += 0;
                }

                if(indexData.DepressionScore)
                {
                    avgPreDepresst += indexData.DepressionScore
                }
                else
                {
                    avgPreDepresst += 0;
                }

                if(indexData.StressScore)
                {
                    avgPreStresst += indexData.StressScore
                }
                else
                {
                    avgPreStresst += 0;
                }
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