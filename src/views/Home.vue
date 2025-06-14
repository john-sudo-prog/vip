<template>
  <div class="min-h-screen">
    <Navbar />
    <HeroBanner />
    <Services />
    <Solutions />
    <Cases />
    <Partners />
    <News />
    <Contact />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import HeroBanner from '../components/HeroBanner.vue'
import Services from '../components/Services.vue'
import Solutions from '../components/Solutions.vue'
import Cases from '../components/Cases.vue'
import Partners from '../components/Partners.vue'
import News from '../components/News.vue'
import Contact from '../components/Contact.vue'
</script>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delay {
  animation: float 6s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out;
  animation-delay: 0.3s;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 1s ease-out;
  animation-delay: 0.6s;
}

.animate-slide-down {
  animation: slideDown 1s ease-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-delay-3 {
  animation: fadeIn 1s ease-out;
  animation-delay: 0.9s;
}

.section-title {
  @apply text-3xl md:text-4xl font-bold mb-4 text-gray-900;
}

.section-subtitle {
  @apply text-lg text-gray-600 max-w-2xl mx-auto;
}

.bg-grid {
  background-size: 30px 30px;
  background-image: 
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
}

.animate-gradient {
  background-size: 200%;
  animation: gradient 8s linear infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

.animate-spin-reverse-slow {
  animation: spin 15s linear infinite reverse;
}

.animate-float-1 {
  animation: float1 6s ease-in-out infinite;
}

.animate-float-2 {
  animation: float2 7s ease-in-out infinite;
}

.animate-float-3 {
  animation: float3 8s ease-in-out infinite;
}

.animate-float-4 {
  animation: float4 7s ease-in-out infinite;
}

.animate-float-5 {
  animation: float5 9s ease-in-out infinite;
}

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0) rotate(4deg); }
  50% { transform: translate(-30px, 30px) rotate(8deg); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0) rotate(-6deg); }
  50% { transform: translate(30px, -30px) rotate(-12deg); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0) rotate(3deg); }
  50% { transform: translate(-25px, -25px) rotate(6deg); }
}

@keyframes float4 {
  0%, 100% { transform: translate(0, 0) rotate(-3deg); }
  50% { transform: translate(25px, 25px) rotate(-6deg); }
}

@keyframes float5 {
  0%, 100% { transform: translate(0, 0) rotate(12deg); }
  50% { transform: translate(-35px, 35px) rotate(24deg); }
}

/* 优化主要内容的过渡动画 */
.prose p {
  @apply transition-all duration-500;
}

.prose p:hover {
  @apply transform -translate-y-1 text-blue-100;
}

button {
  @apply transition-all duration-500;
}

.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-purple-200;
  background-size: 200% 100%;
  animation: gradient 8s linear infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-fast {
  background-size: 200%;
  animation: gradient 4s linear infinite;
}

.animate-pulse-slow {
  animation: pulseSlow 4s ease-in-out infinite;
}

@keyframes pulseSlow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.border-gradient-to-r {
  border-image: linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to)) 1;
}

.animate-particle {
  animation: particle 4s ease-in-out infinite;
}

@keyframes particle {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}

/* 优化主要内容的过渡动画 */
.prose p {
  @apply transition-all duration-500;
}

.prose p:hover {
  @apply transform -translate-y-1 text-blue-100;
}

button {
  @apply transition-all duration-500;
}

.animate-gradient-fast {
  background-size: 200%;
  animation: gradient 4s linear infinite;
}

.animate-pulse-slow {
  animation: pulseSlow 4s ease-in-out infinite;
}

@keyframes pulseSlow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.border-gradient-to-r {
  border-image: linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to)) 1;
}

.animate-float-4 {
  animation: float4 7s ease-in-out infinite;
}

.animate-float-5 {
  animation: float5 9s ease-in-out infinite;
}

.services-carousel {
  --carousel-slide-width: 33.333%;
  --carousel-slide-height: 300px;
}

.services-carousel .carousel__slide {
  opacity: 0.5;
  transform: scale(0.8);
  transition: all 0.3s ease;
}

.services-carousel .carousel__slide--active {
  opacity: 1;
  transform: scale(1);
}

.services-carousel .carousel__slide--prev,
.services-carousel .carousel__slide--next {
  opacity: 0.7;
  transform: scale(0.9);
}

/* 修改导航按钮样式 */
.services-carousel .carousel__navigation-button {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  margin: 0;
}

.services-carousel .carousel__navigation-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.services-carousel .carousel__navigation-button svg {
  width: 16px;
  height: 16px;
  stroke: currentColor;
  stroke-width: 2.5;
}

/* 调整导航按钮位置 */
.services-carousel .carousel__navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;
  pointer-events: none;
  z-index: 10;
}

.services-carousel .carousel__navigation-button {
  pointer-events: auto;
  position: absolute;
}

.services-carousel .carousel__navigation-button--prev {
  left: -48px;
}

.services-carousel .carousel__navigation-button--next {
  right: -48px;
}

/* 调整轮播容器样式 */
.services-carousel .carousel__viewport {
  padding: 20px 0;
  margin: 0 48px;
}

/* 调整卡片样式 */
.services-carousel .carousel__slide > div {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.services-carousel .carousel__slide > div > div {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* 确保图标正确显示 */
.services-carousel .carousel__slide svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}
</style> 