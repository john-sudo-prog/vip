<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <SimpleNavbar />
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">武汉柏锐科技有限公司 | 游戏平台</h1>

      <div class="space-y-10 text-gray-800 leading-7">
        <h2 class="text-2xl font-semibold text-gray-900">1. 项目背景</h2>
        <p>武汉柏锐科技有限公司是一家中小型创新型企业，现有员工约50人，年营业额约200万美元。自成立以来，公司专注于技术研发与产品创新，业务涵盖多个方向，其中游戏平台是公司重点发展的板块之一。</p>
        <p>该游戏平台致力于构建一个公平、透明、安全且高效的虚拟社区。平台融合社交与娱乐元素，具备高并发处理能力，能够支持海量用户的实时匹配请求，并通过顶级安全防护保障用户数据安全无虞。同时，平台已实现国际化服务，能够为全球用户提供无缝体验，逐步在全球市场中树立知名度。</p>
        <p>随着业务扩展，公司计划推广至新加坡市场。但测试发现新加坡用户访问国内服务器时存在明显延迟，赛事与活动时网络波动更突出。海外用户增长同时也带来更频繁的网络与 DDoS 攻击，影响系统稳定与玩家体验。为此建议采用 AWS 云技术构建弹性、稳定且安全的平台，兼顾便捷运维与持续优化。</p>

        <h2 class="text-2xl font-semibold text-gray-900">2. 项目目标</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li><b>降低访问延迟：</b>在 AWS 新加坡区域部署 EC2，提升区域访问速度，业务高峰也能保持流畅。</li>
          <li><b>增强安全性：</b>引入 AWS Shield 与 WAF，抵御网络与 DDoS 攻击，保障数据与对战过程安全。</li>
          <li><b>提升业务可用性：</b>借助 ELB 与多可用区 EC2 部署，避免单点故障，确保核心服务稳定运行。</li>
          <li><b>优化性能与成本：</b>使用 Auto Scaling 按需伸缩 EC2 数量，并通过 Reserved Instances 等方式优化TCO。</li>
          <li><b>持续技术支持：</b>在 AWS 与点一云支持下，建立持续评估与改进机制，快速响应新需求。</li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-900">3. 项目架构图</h2>
        <figure>
          <img :src="archImg" alt="游戏平台 AWS 参考架构" class="w-full h-auto rounded-lg">
          <figcaption class="mt-3 text-gray-500 text-sm">架构要点：多可用区 VPC、公私子网、Auto Scaling 的 EC2 应用层，Redis 集群/MySQL 主从，前置 WAF + CloudFront + Route53，监控审计与KMS密钥管理等</figcaption>
        </figure>

        <h2 class="text-2xl font-semibold text-gray-900">4. 项目成果</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li><b>显著降低延迟：</b>新加坡区域就近部署，访问与匹配延迟明显下降，玩家留存率提升。</li>
          <li><b>安全性增强：</b>WAF+Shield 自动化清洗与拦截，约 95% 常见攻击被阻断，平台声誉提升。</li>
          <li><b>高可用保障：</b>ELB + 多可用区 EC2 提升服务可用性至 99.9% 级别，高峰期依旧稳定。</li>
          <li><b>性能与成本优化：</b>Auto Scaling 高峰稳定、低谷节省成本；Reserved Instances 等手段降低支出。</li>
          <li><b>持续改进能力：</b>建立性能评估与安全审计机制，持续优化以适配业务扩张。</li>
        </ul>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 right-0 py-4 text-center text-gray-400 text-sm bg-gradient-to-b from-gray-900 to-gray-800 z-40">
      © 2024 香港點一雲科技有限公司. All rights reserved.
    </div>
  </div>
</template>

<script setup>
import SimpleNavbar from '../../components/SimpleNavbar.vue'
import archImg from '../../assets/img/cases/case2-architecture.png'
</script>

<style scoped>
</style>


