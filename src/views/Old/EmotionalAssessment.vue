<template>
    <div>
        <q-page class="column justify-start items-center" :style="{ backgroundImage: 'url(' + require('@/assets/home-bg.png') + ')', width: '100%', height: '100%', 
        backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}">
            <div class="row q-ma-xl text-center">
                    <p class="text-h2 text-weight-medium">
                        มาประเมินอารมณ์ตนเองกันหน่อย
                    </p>
            </div>
            <div class="row q-ma-md text-center">
                <div class="column col-12">
                    <q-card class="my-card" style="background-color: rgba(255, 255, 255, 0.6);">
                        <q-card-section>
                            <div class="row justify-evenly items-center">
                                <div class="column col-12">
                                    
                                    <div class="col-12 col-md-6">
                                        <q-img
                                    :src="require('../assets/Boy.png')"
                                    spinner-color="white"
                                    style="height: 400px; max-width: 400px" />
                                                    </div>
                                    <p class="text-h5 text-weight-bolder"> มาสำรวจอารมณ์ของตัวเองกันหน่อยนะ </p>
                                    <p class="text-h5 text-weight-bolder"> ว่าเป็นอย่างไรกันบ้าง  </p>
                                </div>
                                <div class="column col-12 q-my-lg">
                                    <p class="text-h5"> โปรดอ่านข้อความแต่ละข้อ และกดเลือก หมายเลข 0, 1, 2 หรือ 3 </p>
                                    <p class="text-h5 text-weight-bold"> ที่ระบุข้อความได้ตรงกับท่านมากสุดในช่วงสัปดาห์ที่ผ่านมา  </p>
                                    <p class="text-h5"> ทั้งนี้ ไม่มีคําตอบที่ถูกหรือคําตอบที่ผิด ท่านไม่ควรใช้เวลามากนักในแต่ละข้อความ  </p>
                                </div>
                                <div class="column col-12 col-md-6 q-my-lg text-left">
                                    <p class="text-h4 text-weight-bolder text-center"> เกณฑ์การประเมินมีดังนี้: </p>
                                    <p class="text-h5"> 0 : ไม่ตรงกับฉันเลย </p>
                                    <p class="text-h5"> 1 : ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง </p>
                                    <p class="text-h5"> 2 : ตรงกับฉัน หรือเกิดขึ้นบ่อย </p>
                                    <p class="text-h5"> 3 : ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด </p>
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <div class="row q-ma-md text-left">
                <div class="column col-12">
                    <q-card class="my-card q-pa-lg" style="background-color: rgba(255, 255, 255, 0.6);">
                        <q-card-section>
                            <div class="row justify-evenly">
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 1. ฉันรู้สึกว่ายากที่จะผ่อนคลายอารมณ์ </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model1" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 2. ฉันทราบว่าฉันมีอาการปากแห้ง </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model2" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 3. ฉันรู้สึกไม่ดีขึ้นเลย </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model3" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 4. ฉันมีอาการหายใจลําบาก (เช่น มีอาการหายใจเร็วขึ้นผิดปกติ มีอาการหายใจไม่ออกแม้ว่าจะไม่ได้ออกแรง) </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model4" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 5.  ฉันรู้สึกทำกิจกรรมด้วยตนเองได้ค่อนข้างลำบาก </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model5" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 6.   ฉันเริ่มมีปฏิกิริยาตอบสนองต่อสิ่งต่างๆ มากเกินไป </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model6" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 7. ฉันมีอาการสั่น (เช่น ที่มือทั้งสองข้าง) </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model7" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 8. ฉันรู้สึกว่าฉันวิตกกังวลมาก </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model8" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 9. ฉันรู้สึกกังวลกับเหตุการณ์ที่อาจทำให้ฉันรู้สึกตื่นกลัวและกระทำสิ่งใดโดยมิได้คิด </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model9" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 10. ฉันรู้สึกว่าฉันไม่มีเป้าหมาย </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model10" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 11.ฉันเริ่มรู้สึกว่าฉันมีอาการกระวนกระวายใจ </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model11" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 12. ฉันรู้สึกไม่ผ่อนคลาย </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model12" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 13. ฉันรู้สึกจิตใจเหงาหงอยและเศร้าซึม </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model13" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 14. ฉันทนไม่ได้กับภาวะใดก็ตามที่ทำให้ฉันไม่สามารถทำอะไรต่อจากที่ฉันกําลังกระทำอยู่ </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model14" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 15. ฉันรู้สึกว่าฉันมีอาการคล้ายกับอาการหวั่นวิตก </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model15" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 16. ฉันไม่รู้สึกกระตือรือร้นต่อสิ่งใด </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model16" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 17. ฉันรู้สึกเป็นคนไม่มีคุณค่า </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model17" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 18. ฉันรู้สึกว่าฉันค่อนข้างมีอารมณ์ฉุนเฉียวง่าย </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model18" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 19. ฉันรับรู้ถึงการทำงานของหัวใจของฉันในตอนที่ฉันไม่ได้ออกแรง (เช่น รู้สึกถึงการเต้นของหัวใจเพิ่มขึ้น การหยุดเต้นของหัวใจ) </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model19" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 20. ฉันรู้สึกกลัวโดยไม่มีเหตุผลใด ๆ </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model20" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column col-12">
                                    <p class="text-h5 font-weight-bolder"> 21. ฉันรู้สึกว่าชีวิตไม่มีความหมาย </p>
                                    <q-item>
                                        <q-item-section side>
                                            <q-icon name="sentiment_dissatisfied" color="secondary" />
                                        </q-item-section>

                                        <q-item-section>
                                            <q-slider v-model="model21" marker-labels :min="min" :max="max"/>
                                        </q-item-section>

                                        

                                        <q-item-section side>
                                            <q-icon name="sentiment_very_satisfied" color="secondary" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator class="q-my-md" size="3px" color="black" inset />
                                </div>
                                <div class="column justify-center">
                                    <div v-if="buttonDiabled==true" class="column justify-center">
                                        <p class="text-h4 text-weight-bolder" style="color: red;"> กรุณากรอกข้อมูลให้ครบถ้วน </p>
                                    </div>
                                    <q-btn class="items-center" @click="SubmitAssessmentData()" :disable="buttonDiabled" color="secondary" size="lg" label="submit" />
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
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
                model1: null, model2: null, model3: null, model4: null, model5: null, model6: null, model7:null, model8: null, model9: null, model10: null,
                model11: null, model12: null, model13: null, model14: null, model15: null, model16: null, model17:null, model18: null, model19: null, model20: null, 
                model21: null,

                min: 0,
                max: 3,

                buttonDiabled: true,
            }
        },
        watch: {
            changeData: {
                handler: function(val) {
                    if(val.model1 != null && val.model2 != null && val.model3 != null && val.model4 != null && val.model5 != null && val.model6 != null &&
                    val.model7 != null && val.model8 != null && val.model9 != null && val.model10 != null && val.model11 != null && val.model12 != null &&
                    val.model13 != null && val.model14 != null && val.model15 != null && val.model16 != null && val.model17 != null && val.model18 != null &&
                    val.model19 != null && val.model20 != null && val.model21 != null){
                        this.buttonDiabled = false;
                    }
                },
                deep: true
            }
        },
        computed: {
            changeData()
            {
                const { model1, model2, model3, model4, model5, model6, model7, model8, model9, model10
                    , model11, model12, model13, model14, model15, model16, model17, model18, model19, model20
                    , model21} = this
                return {
                    model1, model2, model3, model4, model5, model6, model7, model8, model9, model10
                    , model11, model12, model13, model14, model15, model16, model17, model18, model19, model20
                    , model21
                }
            }
        },
        methods: {
            SubmitAssessmentData(){
                const userDepressionRef = doc(db, "users", this.user.email, "EmotionalData", "Depression");
                const userAnxietyRef = doc(db, "users", this.user.email, "EmotionalData", "Anxiety");
                const userStressRef = doc(db, "users", this.user.email, "EmotionalData", "Stress");
                const userRef = doc(db, "users", this.user.email);

                const DepressionScore = this.model3 + this.model5 + this.model10 + this.model13 + this.model16 + this.model17 + this.model21;
                const AnxietyScore = this.model2 + this.model4 + this.model7 + this.model9 + this.model15 + this.model19 + this.model20;
                const StressScore = this.model1 + this.model6 + this.model8 + this.model11 + this.model12 + this.model14 + this.model18;

                    updateDoc(userRef, {
                        EmotionalAssessment: true,
                        DepressionScore: DepressionScore,
                        AnxietyScore: AnxietyScore,
                        StressScore: StressScore,
                    })

                    setDoc(userDepressionRef, {
                        Depression1: this.model3,
                        Depression2: this.model5,
                        Depression3: this.model10,
                        Depression4: this.model13,
                        Depression5: this.model16,
                        Depression6: this.model17,
                        Depression7: this.model21,

                    })

                    setDoc(userAnxietyRef, {
                        Anxiety1: this.model2,
                        Anxiety2: this.model4,
                        Anxiety3: this.model7,
                        Anxiety4: this.model9,
                        Anxiety5: this.model15,
                        Anxiety6: this.model19,
                        Anxiety7: this.model20,

                    })

                    setDoc(userStressRef, {
                        Stress1: this.model1,
                        Stress2: this.model6,
                        Stress3: this.model8,
                        Stress4: this.model11,
                        Stress5: this.model12,
                        Stress6: this.model14,
                        Stress7: this.model18,

                    })

                    this.$router.push({name: "EmotionalConclusion"})
            }
        }
    }
</script>

<style lang="scss" scoped>
.my-card
{
    width: 100%;
    max-width: 1200px;
}
@media screen and (max-width: 425px) {
  .text-h5
  {
    font-size: 25px;
  }
}
</style>