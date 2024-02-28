<template>
    <div id="main-container" class="fill-window">
      <div id="unity-container">
        <canvas id="unity-canvas"></canvas>
        <div id="toggle_fullscreen" class="button floatbottomLeft fullscreenON">
          <span class="imgbutton"></span>
        </div>
      </div>
      <div id="loader" class="loader">
        <div class="container">
          <div class="center">
            <img src="Template/logo.png" class="logo" />
          </div>
          <div class="center">
            <div class="progressbar">
              <div id="fill" class="fill" style="width: 0%;"></div>
            </div>
          </div>
        </div>
        <div class="footer-cont">
          <p>Virtual Influencer v. 0.1.0</p>
          <p>DefaultCompany</p>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import router from '@/router';
import { onMounted } from 'vue';
// import { app, auth, db, analytics } from '@/firebase/config';
// import { setDoc, getDoc, updateDoc, doc, collection } from 'firebase/firestore';
function changePage(){
  router.push('/beforePost')
}
var unityInstance
  onMounted(() => {
    // UNITY STUFF
    const buildUrl = 'Build';
    const loaderUrl = `${buildUrl}/Builds.loader.js`;
    var config = {
      dataUrl: `${buildUrl}/Builds.data`,
      frameworkUrl: `${buildUrl}/Builds.framework.js`,
      codeUrl: `${buildUrl}/Builds.wasm`,
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'DefaultCompany',
      productName: 'Virtual Influencer',
      productVersion: '0.1.0',
    };

    var mainContainer = document.querySelector('#main-container');
    var container = document.querySelector('#unity-container');
    var canvas = document.querySelector('#unity-canvas');
    var loader = document.querySelector('#loader');
    var loaderFill = document.querySelector('#fill');
    var toggleFullscreen = document.querySelector('#toggle_fullscreen');
    
  
    function iOS() {
      return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod',
      ].includes(navigator.platform) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
    }
  
    function isFullscreen() {
      return (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
    }
  
    
  
    function onProgress(progress) {
      loaderFill.style.width = progress * 100 + '%';
    }
    
  
    let resizeTimeout;
  
    function onWindowResize() {
      const width =
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const height =
        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
      canvas.height = height;
      canvas.width = width;
    }
  
    function onWindowResizeWithDelay() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(onWindowResize, 200);
    }
  
    const script = document.createElement('script');
    script.src = loaderUrl;
    script.onload = () => {
      createUnityInstance(canvas, config, onProgress)
        .then((instance) => {
          // Assign unityInstance to the global scope
          window.unityInstance = instance;
          unityInstance = instance
          console.log(unityInstance)
          // window.setDoc = setDoc;
          // window.getDoc = getDoc;
          // window.updateDoc = updateDoc;
          // window.db = db;
          // window.doc = doc;
          
        })
        .then(onComplete)
        .catch((message) => {
          alert(message);
        });
    };

    script.async = true;
  
    document.body.appendChild(script);
  
    window.addEventListener('resize', onWindowResizeWithDelay);
    onWindowResizeWithDelay();
  
    if (iOS()) {
      toggleFullscreen.style.display = 'none';
    } else {
      toggleFullscreen.addEventListener('click', function () {
        if (isFullscreen()) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          if (mainContainer.requestFullscreen) {
            mainContainer.requestFullscreen();
          } else if (mainContainer.mozRequestFullScreen) {
            mainContainer.mozRequestFullScreen();
          } else if (mainContainer.webkitRequestFullscreen) {
            mainContainer.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          } else if (container.msRequestFullscreen) {
            mainContainer.msRequestFullscreen();
          }
        }
      });
  
      document.onfullscreenchange = function (event) {
        if (isFullscreen()) {
          if (toggleFullscreen.classList.contains('fullscreenON')) {
            toggleFullscreen.classList.remove('fullscreenON');
          }
          toggleFullscreen.classList.add('fullscreenOFF');
        } else {
          if (toggleFullscreen.classList.contains('fullscreenOFF')) {
            toggleFullscreen.classList.remove('fullscreenOFF');
          }
          toggleFullscreen.classList.add('fullscreenON');
        }
        setTimeout(() => {
          canvas.width = 1000;
          onWindowResizeWithDelay();
        }, 400);
      };
    }
  });

  function onComplete() {
    const loader = document.querySelector('#loader');
    loader.remove();
  }

  </script>
<style scoped>
/* @import url('../../../public/Template/style.css'); */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&display=swap');

body{
   margin: 0;
   max-height: 100%;
   height: 100%;
   overflow: hidden;
   background-color: #231F20;
   background-color: #231F20;
   background-position: center top;
   /*background-size: cover;*/
   background-repeat: no-repeat;
   position: relative;
   width: 100%;
   -webkit-tap-highlight-color: transparent;
   font-family: 'Open Sans', sans-serif;
}

body.Dark{
   color:white;
}
body.Light{
   color:black;  
}
#main-container{
   display: block;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
}

#main-container.fill-window{
   width: 100%;
   height: 100%;
   margin: 0;
}
#app-container, #unity-canvas{
   width: 100%;
   height: 100%;
   margin: 0;
   position: relative;
}

.loader{
   width: 100%;
   height: 100%;
   margin: 0;
   position: absolute;
   display: block;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   text-align: center;
}
.container{
   width: 80%;
   max-width: 800px;
   margin:0 auto;
   text-align: center;
   padding-top: 20px;
}
.logo{
   width: auto;
   max-width: 80%;
   margin: 30px auto;
   max-height: 150px;
}

.progressbar{
   padding: 1px;
   left: 0;
   border: 1px solid #333;
   border-radius: 10px;
}
.Dark .progressbar{
   border: 1px solid white;
}
.fill{
   height:6px;
   background: #333;
   display: block;
   border-radius: 10px;
   transition-property: width;
   transition-duration: 1s;
}
.Dark .fill{
   background: white;
}
.center {
   overflow: hidden;
   margin: 20px auto 0;
   padding: 20px;
   
}
.footer-cont{
   position:fixed;
   bottom:0;
   left:0;
   right:0;
   text-align: center;
}
h1{
   padding-bottom: 10px;
   border-bottom: 1px solid #333;
}

.Dark h1{
   border-bottom: 1px solid white;
}

.logo-cont, .title-cont{
   float:left;
   display: block;
}
.logo-cont{
   width: 25%;
}
.title-cont{
   width: 70%;
   margin-left: 2%;
}
.button{
   width:50px;
   height: 50px;
   text-align: center;
   cursor: pointer;
}
.floattopRight {
   display: block;
   position: fixed;
   top: 0;
   right: 0;
}
.floatbottomLeft {
   display: block;
   position: fixed;
   left: 0;
   bottom: 0;
}
span.imgbutton{
   width: 100%;
   height: 100%;
   display: block;
   position: relative;
   background-position: center center;
   background-repeat: no-repeat;
   background-size: contain;
}
.fullscreenON .imgbutton{
   background-image: url("../../../public/Template/fullscreenON.png") ;
}
.fullscreenOFF .imgbutton{
   background-image: url("../../../public/Template/fullscreenOFF.png") ;
}

</style>  