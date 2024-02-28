<template>
    <div>
        <q-page>
           <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-12 text-center q-my-xl">
                        <p class="text-h2 text-weight-medium">
                            ผลการประเมินอารมณ์ตนเอง
                        </p>
                    </div>

                    <div class="col-12">
                        <div class="row justify-center q-py-xl">
                            <div class="q-pa-md q-my-xl col-12 col-md-4">
                            <q-card class="my-card text-center" style="background-color: #C59FB8;">
                                <q-card-section>
                                        <p class="text-h5">ท่านมี</p>
                                        <p class="text-h3 text-weight-bold">ภาวะเศร้า</p>
                                        <p class="text-h5">ในระดับ...</p>
                                        <q-card class="my-card bg-light">
                                            <q-card-section>
                                                    <p class="text-h2">{{DepressionText}}</p>
                                            </q-card-section>
                                        </q-card>
                                </q-card-section>
                            </q-card>
                        </div>

                        <div class=" q-pa-md q-my-xl col-12 col-md-4">
                            <q-card class="my-card text-center" style="background-color: #FECECA;">
                                <q-card-section>
                                        <p class="text-h5">ท่านมี</p>
                                        <p class="text-h3 text-weight-bold">ความวิตกกังวล</p>
                                        <p class="text-h5">ในระดับ...</p>
                                        <q-card class="my-card  bg-light">
                                            <q-card-section>
                                                    <p class="text-h2">{{AnxietyText}}</p>
                                            </q-card-section>
                                        </q-card>
                                </q-card-section>
                            </q-card>
                        </div>

                        <div class="q-pa-md q-my-xl col-12 col-md-4">
                            <q-card class="my-card text-center" style="background-color: #E5C486">
                                <q-card-section>
                                        <p class="text-h5">ท่านมี</p>
                                        <p class="text-h3 text-weight-bold">ความเครียด</p>
                                        <p class="text-h5">ในระดับ...</p>
                                        <q-card class="my-card  bg-light">
                                            <q-card-section>
                                                    <p class="text-h2">{{StressText}}</p>
                                            </q-card-section>
                                        </q-card>
                                </q-card-section>
                            </q-card>
                        </div>
                        
                        </div>
                        <div class="row justify-center">
                            <q-btn class="items-center" to="/agreement" color="primary" size="xl" label="Next" />
                        </div>
                    </div>
                </div>

                </div>
           </div>
            
        </q-page>
    </div>
</template>

<script>
import { db, auth } from '../firebase/config'
import { doc,  getDoc, setDoc, updateDoc } from "firebase/firestore";
import getUser from "@/composables/getUser"
    export default {
        setup() {
            const { user } = getUser()
            return { user }
        },
        data(){
            return{
                user: null,
                DepressionScore: null,
                DepressionText: null,
                AnxietyScore: null,
                AnxietyText: null,
                StressScore: null,
                StressText: null,
            }
        },
        mounted() {
            this.GetEmotionalData();
        },
        methods: {
            GetEmotionalData(){
                const userRef = doc(db, "users", this.user.email);
                getDoc(userRef).then((docSnap)=>{
                    this.DepressionScore = docSnap.data().DepressionScore;
                    this.AnxietyScore = docSnap.data().AnxietyScore;
                    this.StressScore = docSnap.data().StressScore;
                    
                    // Depression
                    if(this.DepressionScore >= 0 && this.DepressionScore <= 9)
                    {
                        this.DepressionText = 'ปกติ'
                    }
                    else if(this.DepressionScore >= 10 && this.DepressionScore <= 13)
                    {
                        this.DepressionText = 'เล็กน้อย'
                    }
                    else if(this.DepressionScore >= 14 && this.DepressionScore <= 20)
                    {
                        this.DepressionText = 'ปานกลาง'
                    }
                    else if(this.DepressionScore >= 21 && this.DepressionScore <= 27)
                    {
                        this.DepressionText = 'รุนแรง'
                    }
                    else if(this.DepressionScore >= 28)
                    {
                        this.DepressionText = 'รุนแรงมาก'
                    }

                    // Anxiety
                    if(this.AnxietyScore >= 0 && this.AnxietyScore <= 7)
                    {
                        this.AnxietyText = 'ปกติ'
                    }
                    else if(this.AnxietyScore >= 8 && this.AnxietyScore <= 9)
                    {
                        this.AnxietyText = 'เล็กน้อย'
                    }
                    else if(this.AnxietyScore >= 10 && this.AnxietyScore <= 14)
                    {
                        this.AnxietyText = 'ปานกลาง'
                    }
                    else if(this.AnxietyScore >= 15 && this.AnxietyScore <= 19)
                    {
                        this.AnxietyText = 'รุนแรง'
                    }
                    else if(this.AnxietyScore >= 20)
                    {
                        this.AnxietyText = 'รุนแรงมาก'
                    }

                    // Stress
                    if(this.StressScore >= 0 && this.StressScore <= 14)
                    {
                        this.StressText = 'ปกติ'
                    }
                    else if(this.StressScore >= 15 && this.StressScore <= 18)
                    {
                        this.StressText = 'เล็กน้อย'
                    }
                    else if(this.StressScore >= 19 && this.StressScore <= 25)
                    {
                        this.StressText = 'ปานกลาง'
                    }
                    else if(this.StressScore >= 26 && this.StressScore <= 33)
                    {
                        this.StressText = 'รุนแรง'
                    }
                    else if(this.StressScore >= 34)
                    {
                        this.StressText = 'รุนแรงมาก'
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
.my-card
{
    width: 100%;
    max-width: 1000px;
}
</style>