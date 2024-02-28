import { createRouter, createWebHistory } from 'vue-router'
import { auth } from "../firebase/config"
import { onAuthStateChanged} from "firebase/auth"

import Home from '../views/Home.vue'
import AdditionalData from '../views/AdditionalData.vue'
import EmotionalAssess from '../views/EmotionalAssess.vue'
import EmotionalResult from '../views/EmotionalResult.vue'
import LowAnxiety from '../views/Anxiety/LowAnxiety.vue'
import MediumAnxiety from '../views/Anxiety/MediumAnxiety.vue'
import HighAnxiety from '../views/Anxiety/HighAnxiety.vue'

import LowStress from '../views/Stress/LowStress.vue'
import MediumStress from '../views/Stress/MediumStress.vue'
import HighStress from '../views/Stress/HighStress.vue'

import LowDepression from '../views/Depress/LowDepression.vue'
import MediumDepression from '../views/Depress/MediumDepression.vue'
import HighDepression from '../views/Depress/HighDepression.vue'

import Agreement from '../views/Agreement.vue'
import Starting from '../views/Starting.vue'
import Consulting from '../views/Unity/Consulting.vue'
import End from '../views/End.vue'
import EmotionalAssessPost from '../views/EmotionalAssessPost.vue'
import Code from '../views/Code.vue'
import Comment from '../views/Comment.vue'
import Recommend from '../views/Recommend.vue'
import BeforePostAssess from '../views/BeforePostAssess.vue'
import EmotionCompare from '../views/EmotionCompare.vue'

import NonBeforePostAssess from '../views/NonBeforePostAssess.vue'
import NonEmotionalAssess from '../views/NonEmotionalAssess.vue'

import TeacherEmoResult from '../views/TeacherEmoResult.vue'
import TeacherStdAmount from '../views/TeacherStdAmount.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/additionData',
    name: 'AdditionalData',
    component: AdditionalData
  },
  {
    path: '/emotionalAssess',
    name: 'EmotionalAssess',
    component: EmotionalAssess
  },
  {
    path: '/emotionalAssessPost',
    name: 'EmotionalAssessPost',
    component: EmotionalAssessPost
  },
  {
    path: '/emotionalResult',
    name: 'EmotionalResult',
    component: EmotionalResult
  },
  {
    path: '/lowanxiety',
    name: 'LowAnxiety',
    component: LowAnxiety
  },
  {
    path: '/medanxiety',
    name: 'MediumAnxiety',
    component: MediumAnxiety
  },
  {
    path: '/highanxiety',
    name: 'HighAnxiety',
    component: HighAnxiety
  },
  {
    path: '/lowstress',
    name: 'LowStress',
    component: LowStress
  },
  {
    path: '/mediumstress',
    name: 'MediumStress',
    component: MediumStress
  },
  {
    path: '/highstress',
    name: 'HighStress',
    component: HighStress
  },
  {
    path: '/lowdepression',
    name: 'LowDepression',
    component: LowDepression
  },
  {
    path: '/mediumdepression',
    name: 'MediumDepression',
    component: MediumDepression
  },
  {
    path: '/highdepression',
    name: 'HighDepression',
    component: HighDepression
  },
  {
    path: '/agreement',
    name: 'Agreement',
    component: Agreement
  },
  {
    path: '/starting',
    name: 'Starting',
    component: Starting
  },
  {
    path: '/consulting',
    name: 'Consulting',
    component: Consulting
  },
  {
    path: '/end',
    name: 'End',
    component: End
  },
  {
    path: '/code',
    name: 'Code',
    component: Code
  },
  {
    path: '/Comment',
    name: 'Comment',
    component: Comment
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/beforePost',
    name: 'BeforePostAssess',
    component: BeforePostAssess
  },
  {
    path: '/emotioncompare',
    name: 'EmotionCompare',
    component: EmotionCompare
  },
  {
    path: '/nonBeforePost',
    name: 'NonBeforePostAssess',
    component: NonBeforePostAssess
  },
  {
    path: '/nonEmotionalAssess',
    name: 'NonEmotionalAssess',
    component: NonEmotionalAssess
  },
  {
    path: '/teacherEmoResult',
    name: 'TeacherEmoResult',
    component: TeacherEmoResult
  },
  {
    path: '/teacherStdAmount',
    name: 'TeacherStdAmount',
    component: TeacherStdAmount
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

router.beforeEach((to, from, next) => {
  onAuthStateChanged(auth, (_user) => {
    const preventPages = ['home']
    if(_user)
    {
      if(preventPages.includes(to.name)) next()
      else next()
    }
    else
    {
      if(!preventPages.includes(to.name)) next('/')
      else next()
    }
  })
})

export default router
