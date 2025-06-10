<script setup lang="ts">
import { ref } from 'vue'

const partners = ref([
  { name: 'Partner 1', logo: '../assets/img/partner/1.jpg' },
  { name: 'Partner 2', logo: '../assets/img/partner/2.jpg' },
  { name: 'Partner 3', logo: '../assets/img/partner/3.jpg' },
  { name: 'Partner 4', logo: '../assets/img/partner/4.jpg' },
  { name: 'Partner 5', logo: '../assets/img/partner/5.jpg' },
  { name: 'Partner 6', logo: '../assets/img/partner/6.jpg' }
])

const suppliers = ref([
  { name: 'Supplier 1', logo: '../assets/partner/supplier1.png' },
  { name: 'Supplier 2', logo: '../assets/partner/supplier2.png' },
  { name: 'Supplier 3', logo: '../assets/partner/supplier3.png' },
  { name: 'Supplier 4', logo: '../assets/partner/supplier4.png' }
])
</script>

<template>
  <div class="partners-container my-16">
    <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-down">合作伙伴</h2>
    
    <!-- 合作伙伴展示 -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      <div v-for="(partner, index) in partners" :key="index"
           class="partner-card"
           :data-aos="'zoom-in'"
           :data-aos-delay="index * 100">
        <img :src="partner.logo" :alt="partner.name" 
             class="w-full h-auto filter hover:brightness-110 transition-all duration-300 rounded-lg">
      </div>
    </div>

    <!-- 供应商展示 -->
    <div class="mt-16">
      <h3 class="text-2xl font-bold text-center mb-8" data-aos="fade-down">代理供应商</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(supplier, index) in suppliers" :key="index"
             class="supplier-card partner-animation"
             :style="{ animationDelay: index * 0.5 + 's' }"
             :data-aos="'fade-up'"
             :data-aos-delay="index * 150">
          <img :src="supplier.logo" :alt="supplier.name" class="w-full h-auto filter hover:brightness-110 transition-all duration-300">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.partner-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.partner-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.partner-card img {
  filter: grayscale(100%) brightness(1.2);
  transition: all 0.3s ease;
}

.partner-card:hover img {
  filter: grayscale(0%) brightness(1);
}

.supplier-card {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style> 