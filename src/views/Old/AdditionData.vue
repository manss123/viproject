<template>
    <div>
        <q-page class="column justify-evenly items-center">
            <div class="row q-ma-xl text-center">
                    <p class="text-h2 text-weight-medium">
                        กรอกข้อมูลเพิ่มเติม
                    </p>
            </div>
            <div class="column">
                <div class="row q-ma-xl">
                        <div class="column justify-center">
                            <p class="text-h4"> เพศ: </p>
                        </div>
                        <div class="column justify-center">
                            <q-select class="text-h4" :popup-content-style="{fontSize: '25px'}" style="min-width: 250px; max-width: 300px" standout="bg-primary" v-model="GenderModel" :options="GenderOptions" />
                        </div>
                </div>
            <div class="row q-ma-xl">
                    <div class="column justify-center">
                        <p class="text-h4"> อายุ: </p>
                    </div>
                    <div class="column justify-center">
                        <q-select class="text-h4" :popup-content-style="{fontSize: '25px'}" style="min-width: 250px; max-width: 300px" standout="bg-primary" v-model="AgeModel" :options="AgeOptions" />
                    </div>
            </div>
            <div class="row q-ma-xl">
                    <div class="column justify-center">
                        <p class="text-h4"> ชั้นปี: </p>
                    </div>
                    <div class="column justify-center">
                        <q-select class="text-h4" :popup-content-style="{fontSize: '25px'}" style="min-width: 250px; max-width: 300px" standout="bg-primary" v-model="YearModel" :options="YearOptions" />
                    </div>
            </div>
            <div class="row q-ma-xl">
                    <div class="column justify-center">
                        <p class="text-h4"> สำนักวิชา: </p>
                    </div>
                    <div class="column justify-center">
                        <q-select class="text-h4" :popup-content-style="{fontSize: '25px'}" style="min-width: 200px; max-width: 250px" standout="bg-primary" v-model="FacultyModel" :options="FacultyOptions" />
                    </div>
            </div>
            <div class="row justify-center items-center">
                    <div v-if="Error==true" class="column justify-center">
                        <p class="text-h4 text-weight-bolder" style="color: red;"> กรุณากรอกข้อมูลให้ครบถ้วน </p>
                    </div>
                    <div class="column justify-center">
                        <q-btn class="items-center" @click="UpdateData()" color="primary" size="lg" label="submit" />
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
                GenderOptions: ["ชาย", "หญิง", "ไม่ระบุเพศ"],
                GenderModel: null,
                AgeOptions: [18, 19, 20, 21, 22, 23, 24, 25],
                AgeModel: null,
                YearOptions: ["1", "2", "3", "4"],
                YearModel: null,
                FacultyOptions: ['สำนักวิชาศิลปศาสตร์', 'สำนักวิชาวิทยาศาสตร์', 'สำนักวิชาการจัดการ', 
                                'สำนักวิชาเทคโนโลยีสารสนเทศ', 'สำนักวิชาอุตสาหกรรมเกษตร', 'สำนักวิชานิติศาสตร์', 
                                'สำนักวิชาวิทยาศาสตร์เครื่องสำอาง', 'สำนักวิชาวิทยาศาสตร์สุขภาพ', 'สำนักวิชาพยาบาลศาสตร์', 
                                'สำนักวิชาแพทยศาสตร์', 'สำนักวิชาทันตแพทยศาสตร์', 'สำนักวิชานวัตกรรมสังคม', 
                                'สำนักวิชาจีนวิทยา', 'สำนักวิชาการแพทย์บูรณาการ'],
                FacultyModel: null,
                Error: false,
            }
        },
        methods: {
            UpdateData(){
                const userRef = doc(db, "users", this.user.email);
                if(this.GenderModel!=null && this.AgeModel != null && this.YearModel != null && this.FacultyModel != null)
                {
                    updateDoc(userRef, {
                        AdditionalData: true,
                        Gender: this.GenderModel,
                        Age:this.AgeModel,
                        StudyYear: this.YearModel,
                        Faculty: this.FacultyModel,
                    })
                }
                else
                {
                    this.Error = true;
                }
                this.$router.push({name: "EmotionalAssessment"})
            },

        },
    }
</script>

<style lang="scss" scoped>
@media screen and (max-width: 425px) {
//   .text-h1
//   {
//     font-size: 60px;
//   }
//   .text-h2
//   {
//     font-size: 40px;
//   }
//   .text-h3
//   {
//     font-size: 35px;
//   }
  .text-h4
  {
    font-size: 20px;
  }
}
</style>