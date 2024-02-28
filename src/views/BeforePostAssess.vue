<template>
    <div class="row flex flex-center q-mt-md q-mx-md">
        <div class="col-12">

            <div class="row q-my-md">
                <div class="col-12">
                    <div class="text text-h4 text-bold text-center">
                        ก่อนทำการประเมินอารมณ์ <br>
                        มาทำความรู้จักโปรแกรมมนุษย์เสมือนมากขึ้นกัน ^__^ 
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="row flex flex-center">
                        <div class="col-10 q-ma-md">
                            <q-card style="background-color: #ECF4DB;" class="q-pa-lg">
                                <q-card-section>
                                    <div class="row text-center flex flex-center">
                                        <div class="col-12">
                                            <div class="text text-h6 text-left" style="text-indent: 40px;">
                                                โปรแกรมนี้เป็นส่วนหนึ่งของโครงการวิจัยเรื่อง การพัฒนาโปรแกรม "มนุษย์เสมือน" เพื่อให้การช่วยเหลือผู้ที่มีปัญหาสุขภาพจิต โดยได้รับทุนสนับสนุนจาก สกสว. 
                                                ประเภททุน Basic Research Fund ปีงบประมาณ 2566 และได้รับการสนุบสนุนจากมหาวิทยาลัยแม่ฟ้าหลวง <br>
                                                <br>
                                                ทีมวิจัย ประกอบด้วย: <br>
                                                
                                            </div>
                                            <div class="row text-center justify-around items-start q-gutter-md q-my-lg">
                                                <div class="col-12 col-md-3">
                                                    <q-img
                                                    :src="require('@/assets/Team/1.png')"
                                                    :ratio="1"
                                                    />
                                                    <div class="text text-h6 text-center q-my-md">
                                                        1. ผศ.ดร. อัศวินี ตันกุริมาน <br> หัวหน้าโครงการ หน่วยงาน: <br> สำนักวิชาพยาบาลศาสตร์ <br> มหาวิทยาลัยแม่ฟ้าหลวง <br>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-3">
                                                    <q-img
                                                    :src="require('@/assets/Team/4-2.png')"
                                                    :ratio="1"
                                                    />
                                                    <div class="text text-h6 text-center q-my-md">
                                                        2. ผู้ช่วยศาสตราจารย์ ว่าที่ร้อยตรีดร. เจริญชัย วงศ์วัฒน์กิจ <br> ผู้ร่วมวิจัย หน่วยงาน: <br> สำนักวิชาเทคโนโลยีสารสนเทศ <br> มหาวิทยาลัยแม่ฟ้าหลวง <br>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-3">
                                                    <q-img
                                                    :src="require('@/assets/Team/2.png')"
                                                    :ratio="1"
                                                    />
                                                    <div class="text text-h6 text-center q-my-md">
                                                        3. อาจารย์สุริย์ฉาย คิดหาทอง <br> ผู้ร่วมวิจัย หน่วยงาน: <br> สำนักวิชาพยาบาลศาสตร์ <br> มหาวิทยาลัยแม่ฟ้าหลวง <br>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-3">
                                                    <q-img
                                                    :src="require('@/assets/Team/3.png')"
                                                    :ratio="1"
                                                    />
                                                    <div class="text text-h6 text-center q-my-md">
                                                        4. อาจารย์อรัญญา อินสอน <br> ผู้ร่วมวิจัย หน่วยงาน: <br> สำนักวิชาพยาบาลศาสตร์ <br> มหาวิทยาลัยแม่ฟ้าหลวง
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-3">
                                                    <q-img
                                                    :src="require('@/assets/Team/5.jpg')"
                                                    :ratio="1"
                                                    />
                                                    <div class="text text-h6 text-center q-my-md">
                                                        5. ผู้ร่วมพัฒนาระบบ: <br> นาย ปองพล เสพรัมย์
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text text-h6 text-left">
                                                
                                               
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                </q-card-section>
                            </q-card>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row text-center">
                <div class="col-12 col-md-12 q-my-md">
                    <q-btn @click="handleNext" class="text text-h6 text-white" style="background-color: #63A568;">
                        ไปประเมินอารมณ์ต่อ
                    </q-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup () {
        const router = useRouter()

        const handleNext = () => {
            router.push('/emotionalAssessPost')
        }

        return { handleNext }
    }
}
</script>

<style lang="scss" scoped>

</style>