<template>
    <q-layout view="hHh lpR fFf" style="background-color: transparent;">
  
      <q-header :reveal="true" :elevated="true" class="text-black title" height-hint="98" style="background-color: transparent;">
        <q-toolbar>
          <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
          <q-avatar>
            <img :src="require('@/assets/mfu.png')">
          </q-avatar>
          <q-avatar>
            <img :src="require('@/assets/fund.png')">
          </q-avatar>

          <q-toolbar-title></q-toolbar-title>
          <q-btn 
          v-if="currentUser" 
          :outline="false" :unelevated="false" flat>
            <q-avatar >
                <!-- <img :src="user.photoURL"> -->
                <img v-if="imgID" :src="require(`@/assets/Characters/${imgID}.png`)">
                <img v-else :src="require(`@/assets/user.png`)">
                
                <q-menu>
                    <q-list>
                    <q-item tag="label" @click="handleSignOut">
                        <q-item-section>
                        <q-item-label>Logout</q-item-label>
                        </q-item-section>
                    </q-item>
                    </q-list>
                </q-menu>
                
            </q-avatar>
        </q-btn>
        </q-toolbar>
  
        <q-tabs align="center" class="text2"  v-if="currentUser">
          <!-- <q-route-tab to="/home" label="Announcement"> <q-badge color="red" rounded floating /> </q-route-tab> -->
          <!-- <q-route-tab to="/listing" label="Listing" v-if="role == 'Admin'" /> -->
          <!-- <q-route-tab to="/document" label="Document" /> -->
          <!-- <q-route-tab to="/mywork" label="My Work" v-if="role == 'Student'" /> -->
          <!-- <q-route-tab to="/evaluation" label="Evaluation" /> -->
          <q-route-tab to="/teacherEmoResult" label="ผลการประเมินอารมณ์" v-if="currentUser.email == 'asawi2516@gmail.com' 
          // || user.email == 'virtualinfluencer.mfu@gmail.com'
          " 
          />
          <q-route-tab to="/teacherStdAmount" label="จำนวนผู้เข้าเกณฑ์" v-if="currentUser.email == 'asawi2516@gmail.com' 
          // || user.email == 'virtualinfluencer.mfu@gmail.com'
          " 
          />
        </q-tabs>
      </q-header>
      
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <!-- <q-footer reveal class="text-black" style="background-color: transparent;">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            <div>Title</div>
          </q-toolbar-title>
        </q-toolbar>
        <q-tabs align="center" class="text-center bg-maindark text-white">
            <h1 class="text-body1 text"> ได้รับทุนสนับสนุนจากกองทุนส่งเสริม ววน. สำนักงานคณะกรรมการส่งเสร้มวิทยาศาสตร์ วิจัยและนวัตกรรม(สกสว.) ประเภททุน Basic Research Fund ปีงบประมาณ 2566  </h1>
        </q-tabs>
      </q-footer> -->
  
    </q-layout>
  </template>

<script>
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import FirestoreHandle from '../composables/FirestoreHandle'
import getUser from '../composables/getUser'

export default {
    setup () {
        const { setDocData, updateDocData, getDocData, getRoundData, DocResult } = FirestoreHandle()
        const { currentUser } = getUser()
        const imgID = ref()
        const router = useRouter()

        watch(currentUser, (newValue, oldValue) => {
          // console.log(newValue, oldValue)
          if(newValue)
          {
            getDocData('users/'+ newValue.email).then(()=>{
              imgID.value = DocResult.value.AvartarID
            })
          }
        })

        // watchEffect(() => {
        //   if(userData.value?.role)
        //   {
        //     if(userData.value.role == 'Admin')
        //     {
        //       role.value = 'Admin'
        //     }
        //     else if(userData.value.role == 'Student')
        //     {
        //        role.value = 'Student'
        //     }
        //     else if(userData.value.role == 'Teacher')
        //     {
        //        role.value = 'Teacher'
        //     }
        //     else if(userData.value.role == 'Coach')
        //     {
        //        role.value = 'Coach'
        //     }
        //   }
        // })

        const handleSignOut = () => {
          router.push('/end')
        }

        return { currentUser, handleSignOut, imgID }
    }
}
</script>

<style lang="scss" scoped>

</style>