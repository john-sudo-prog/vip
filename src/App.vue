<template>
  <div class="app">
    <!-- 导航栏 -->
    <header class="header" :class="{ 'header--scrolled': scrolled }">
      <div class="container">
        <div class="header__content">
          <div class="logo">
            <h1>LOGO</h1>
          </div>
          
          <!-- 移动端菜单按钮 -->
          <div class="menu-toggle">
            <button @click="toggleMenu" class="menu-button" aria-label="菜单">
              <menu-icon v-if="!isMenuOpen" class="icon" />
              <x-icon v-else class="icon" />
            </button>
          </div>
          
          <!-- 桌面端导航 -->
          <nav class="nav-desktop">
            <a v-for="(item, index) in navItems" 
               :key="index" 
               :href="item.href" 
               class="nav-link"
               @click="scrollToSection($event, item.href)">
              {{ item.name }}
            </a>
          </nav>
        </div>
        
        <!-- 移动端导航菜单 -->
        <transition name="fade">
          <div v-if="isMenuOpen" class="nav-mobile">
            <div class="nav-mobile__content">
              <a v-for="(item, index) in navItems" 
                 :key="index" 
                 :href="item.href" 
                 class="nav-link"
                 @click="scrollToSection($event, item.href)">
                {{ item.name }}
              </a>
            </div>
          </div>
        </transition>
      </div>
    </header>

    <!-- 首页横幅 -->
    <section id="home" class="hero">
      <div class="hero__background">
        <div class="hero__overlay"></div>
      </div>
      <div class="container">
        <div class="hero__content">
          <div class="hero__text" data-aos="fade-right">
            <h2 class="hero__title">创新科技<br><span>引领未来</span></h2>
            <p class="hero__subtitle">我们致力于为客户提供最优质的产品和服务，帮助企业实现数字化转型</p>
            <div class="hero__buttons">
              <button class="btn btn--primary btn--animated">了解更多</button>
              <button class="btn btn--outline">联系我们</button>
            </div>
          </div>
          <div class="hero__image" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="企业形象" />
          </div>
        </div>
      </div>
      <div class="hero__wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>

    <!-- 关于我们 -->
    <section id="about" class="section">
      <div class="container">
        <div class="section__header" data-aos="fade-up">
          <span class="section__badge">关于我们</span>
          <h2 class="section__title">我们的价值观</h2>
          <div class="section__divider"></div>
        </div>
        <div class="values">
          <div v-for="(value, index) in companyValues" 
               :key="index" 
               class="value-card"
               data-aos="fade-up"
               :data-aos-delay="index * 100">
            <div class="value-card__icon">
              <component :is="value.icon" class="icon" />
            </div>
            <h3 class="value-card__title">{{ value.title }}</h3>
            <p class="value-card__description">{{ value.description }}</p>
          </div>
        </div>
        <div class="about-content" data-aos="fade-up">
          <div class="about-content__image">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="关于我们" />
            <div class="about-content__experience">
              <span class="about-content__number">10+</span>
              <span class="about-content__text">年行业经验</span>
            </div>
          </div>
          <div class="about-content__text">
            <h3>我们的故事</h3>
            <p>LOGO成立于2013年，是一家专注于数字化转型的科技公司。我们的团队由一群充满激情的技术专家组成，他们在各自领域拥有丰富的经验和专业知识。</p>
            <p>多年来，我们已经帮助数百家企业实现了数字化转型，提高了运营效率，增强了市场竞争力。我们相信，技术的力量可以改变世界，而我们的使命就是帮助企业释放这种力量。</p>
            <div class="about-content__stats">
              <div class="stat">
                <span class="stat__number">500+</span>
                <span class="stat__label">客户</span>
              </div>
              <div class="stat">
                <span class="stat__number">1000+</span>
                <span class="stat__label">项目</span>
              </div>
              <div class="stat">
                <span class="stat__number">50+</span>
                <span class="stat__label">专家</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 我们的服务 -->
    <section id="services" class="section section--gray">
      <div class="container">
        <div class="section__header" data-aos="fade-up">
          <span class="section__badge">我们的服务</span>
          <h2 class="section__title">我们能做什么</h2>
          <div class="section__divider"></div>
        </div>
        <div class="services">
          <div v-for="(service, index) in services" 
               :key="index" 
               class="service-card"
               data-aos="fade-up"
               :data-aos-delay="index * 100">
            <div class="service-card__image-container">
              <img :src="service.image" :alt="service.title" class="service-card__image" />
              <div class="service-card__overlay">
                <a href="#" class="service-card__link-overlay">
                  <arrow-right-icon class="icon" />
                </a>
              </div>
            </div>
            <div class="service-card__content">
              <h3 class="service-card__title">{{ service.title }}</h3>
              <p class="service-card__description">{{ service.description }}</p>
              <a href="#" class="service-card__link">
                了解更多
                <arrow-right-icon class="icon icon--small" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="cta-banner">
        <div class="container">
          <div class="cta-banner__content">
            <div class="cta-banner__text" data-aos="fade-right">
              <h3>准备好开始您的项目了吗？</h3>
              <p>联系我们的团队，获取专业咨询和解决方案</p>
            </div>
            <div class="cta-banner__action" data-aos="fade-left">
              <button class="btn btn--light btn--animated">立即咨询</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队成员 -->
    <section id="team" class="section">
      <div class="container">
        <div class="section__header" data-aos="fade-up">
          <span class="section__badge">专业团队</span>
          <h2 class="section__title">我们的专家</h2>
          <div class="section__divider"></div>
        </div>
        <div class="team">
          <div v-for="(member, index) in teamMembers" 
               :key="index" 
               class="team-card"
               data-aos="fade-up"
               :data-aos-delay="index * 100">
            <div class="team-card__image-container">
              <img :src="member.photo" :alt="member.name" class="team-card__image" />
              <div class="team-card__overlay">
                <div class="team-card__social">
                  <a href="#" class="team-card__social-link">
                    <linkedin-icon class="icon icon--small" />
                  </a>
                  <a href="#" class="team-card__social-link">
                    <twitter-icon class="icon icon--small" />
                  </a>
                  <a href="#" class="team-card__social-link">
                    <mail-icon class="icon icon--small" />
                  </a>
                </div>
              </div>
            </div>
            <div class="team-card__content">
              <h3 class="team-card__name">{{ member.name }}</h3>
              <p class="team-card__position">{{ member.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户评价 -->
    <section id="testimonials" class="section section--gradient">
      <div class="container">
        <div class="section__header section__header--light" data-aos="fade-up">
          <span class="section__badge section__badge--light">客户评价</span>
          <h2 class="section__title section__title--light">他们怎么说</h2>
          <div class="section__divider section__divider--light"></div>
        </div>
        <div class="testimonial-slider" data-aos="fade-up">
          <div class="testimonial-slider__container" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
              <div class="testimonial-card__quote">
                <quote-icon class="icon icon--quote" />
              </div>
              <p class="testimonial-card__comment">{{ testimonial.comment }}</p>
              <div class="testimonial-card__rating">
                <star-icon v-for="i in 5" :key="i" class="icon icon--star" />
              </div>
              <div class="testimonial-card__author">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="testimonial-card__avatar" />
                <div class="testimonial-card__info">
                  <h3 class="testimonial-card__name">{{ testimonial.name }}</h3>
                  <p class="testimonial-card__company">{{ testimonial.company }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial-slider__controls">
            <button @click="prevSlide" class="testimonial-slider__arrow testimonial-slider__arrow--prev" aria-label="上一个">
              <chevron-left-icon class="icon" />
            </button>
            <div class="testimonial-slider__dots">
              <button v-for="(_, index) in testimonials" 
                      :key="index" 
                      @click="goToSlide(index)" 
                      class="testimonial-slider__dot" 
                      :class="{ 'testimonial-slider__dot--active': currentSlide === index }"
                      :aria-label="`第${index + 1}个评价`">
              </button>
            </div>
            <button @click="nextSlide" class="testimonial-slider__arrow testimonial-slider__arrow--next" aria-label="下一个">
              <chevron-right-icon class="icon" />
            </button>
          </div>
        </div>
        <div class="clients" data-aos="fade-up">
          <div class="clients__title">我们的客户</div>
          <div class="clients__logos">
            <div class="client-logo">
              <img src="https://via.placeholder.com/150x50/ffffff/333333?text=Client+1" alt="客户1" />
            </div>
            <div class="client-logo">
              <img src="https://via.placeholder.com/150x50/ffffff/333333?text=Client+2" alt="客户2" />
            </div>
            <div class="client-logo">
              <img src="https://via.placeholder.com/150x50/ffffff/333333?text=Client+3" alt="客户3" />
            </div>
            <div class="client-logo">
              <img src="https://via.placeholder.com/150x50/ffffff/333333?text=Client+4" alt="客户4" />
            </div>
            <div class="client-logo">
              <img src="https://via.placeholder.com/150x50/ffffff/333333?text=Client+5" alt="客户5" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section id="contact" class="section">
      <div class="container">
        <div class="section__header" data-aos="fade-up">
          <span class="section__badge">联系我们</span>
          <h2 class="section__title">与我们取得联系</h2>
          <div class="section__divider"></div>
        </div>
        <div class="contact">
          <div class="contact__info" data-aos="fade-right">
            <h3 class="contact__subtitle">联系信息</h3>
            <div class="contact-item">
              <div class="contact-item__icon-container">
                <map-pin-icon class="icon contact-item__icon" />
              </div>
              <div class="contact-item__content">
                <h4 class="contact-item__title">地址</h4>
                <p class="contact-item__text">上海市浦东新区张江高科技园区博云路2号</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-item__icon-container">
                <phone-icon class="icon contact-item__icon" />
              </div>
              <div class="contact-item__content">
                <h4 class="contact-item__title">电话</h4>
                <p class="contact-item__text">+86 21 5888 8888</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-item__icon-container">
                <mail-icon class="icon contact-item__icon" />
              </div>
              <div class="contact-item__content">
                <h4 class="contact-item__title">邮箱</h4>
                <p class="contact-item__text">contact@LOGO.com</p>
              </div>
            </div>
            <div class="contact__social">
              <a href="#" class="contact__social-link">
                <facebook-icon class="icon" />
              </a>
              <a href="#" class="contact__social-link">
                <twitter-icon class="icon" />
              </a>
              <a href="#" class="contact__social-link">
                <linkedin-icon class="icon" />
              </a>
              <a href="#" class="contact__social-link">
                <instagram-icon class="icon" />
              </a>
            </div>
          </div>
          <div class="contact__form" data-aos="fade-left">
            <h3 class="contact__subtitle">发送消息</h3>
            <form @submit.prevent="submitForm" class="form">
              <div class="form__row">
                <div class="form__group">
                  <label for="name" class="form__label">姓名</label>
                  <div class="form__input-container">
                    <input type="text" id="name" v-model="contactForm.name" class="form__input" placeholder="您的姓名" />
                    <user-icon class="icon form__icon" />
                  </div>
                </div>
                <div class="form__group">
                  <label for="email" class="form__label">邮箱</label>
                  <div class="form__input-container">
                    <input type="email" id="email" v-model="contactForm.email" class="form__input" placeholder="您的邮箱" />
                    <mail-icon class="icon form__icon" />
                  </div>
                </div>
              </div>
              <div class="form__group">
                <label for="subject" class="form__label">主题</label>
                <div class="form__input-container">
                  <input type="text" id="subject" v-model="contactForm.subject" class="form__input" placeholder="消息主题" />
                  <message-square-icon class="icon form__icon" />
                </div>
              </div>
              <div class="form__group">
                <label for="message" class="form__label">消息</label>
                <div class="form__input-container">
                  <textarea id="message" v-model="contactForm.message" rows="5" class="form__input form__textarea" placeholder="请输入您的消息"></textarea>
                  <message-circle-icon class="icon form__icon form__icon--textarea" />
                </div>
              </div>
              <button type="submit" class="btn btn--primary btn--animated btn--full">
                发送消息
                <send-icon class="icon icon--small icon--right" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer__top">
        <div class="container">
          <div class="footer__content">
            <div class="footer__company">
              <h3 class="footer__title">LOGO</h3>
              <p class="footer__description">我们致力于为客户提供最优质的产品和服务，帮助企业实现数字化转型</p>
              <div class="footer__social">
                <a href="#" class="footer__social-link">
                  <facebook-icon class="icon" />
                </a>
                <a href="#" class="footer__social-link">
                  <twitter-icon class="icon" />
                </a>
                <a href="#" class="footer__social-link">
                  <linkedin-icon class="icon" />
                </a>
                <a href="#" class="footer__social-link">
                  <instagram-icon class="icon" />
                </a>
              </div>
            </div>
            <div class="footer__links">
              <h3 class="footer__title">快速链接</h3>
              <ul class="footer__menu">
                <li><a href="#home" class="footer__link">首页</a></li>
                <li><a href="#about" class="footer__link">关于我们</a></li>
                <li><a href="#services" class="footer__link">服务</a></li>
                <li><a href="#team" class="footer__link">团队</a></li>
                <li><a href="#contact" class="footer__link">联系我们</a></li>
              </ul>
            </div>
            <div class="footer__links">
              <h3 class="footer__title">服务</h3>
              <ul class="footer__menu">
                <li><a href="#" class="footer__link">Web开发</a></li>
                <li><a href="#" class="footer__link">移动应用</a></li>
                <li><a href="#" class="footer__link">云服务</a></li>
                <li><a href="#" class="footer__link">UI/UX设计</a></li>
                <li><a href="#" class="footer__link">咨询服务</a></li>
              </ul>
            </div>
            <div class="footer__newsletter">
              <h3 class="footer__title">订阅</h3>
              <p class="footer__description">订阅我们的新闻，获取最新资讯</p>
              <form @submit.prevent="subscribe" class="newsletter-form">
                <div class="newsletter-form__container">
                  <input type="email" v-model="subscribeEmail" class="newsletter-form__input" placeholder="您的邮箱" />
                  <button type="submit" class="newsletter-form__button">
                    <send-icon class="icon" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container">
          <p class="footer__copyright">© {{ new Date().getFullYear() }} LOGO. 保留所有权利.</p>
        </div>
      </div>
      <div class="back-to-top" @click="scrollToTop" :class="{ 'back-to-top--visible': showBackToTop }">
        <arrow-up-icon class="icon" />
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { 
  Menu as MenuIcon, 
  X as XIcon, 
  ArrowRight as ArrowRightIcon,
  Star as StarIcon,
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Linkedin as LinkedinIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Award as AwardIcon,
  Users as UsersIcon,
  Zap as ZapIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Quote as QuoteIcon,
  User as UserIcon,
  MessageSquare as MessageSquareIcon,
  MessageCircle as MessageCircleIcon,
  Send as SendIcon,
  ArrowUp as ArrowUpIcon
} from 'lucide-vue-next';

// 导航菜单状态
const isMenuOpen = ref(false);
const scrolled = ref(false);
const showBackToTop = ref(false);

// 轮播图状态
const currentSlide = ref(0);
const testimonialInterval = ref(null);

// 导航项目
const navItems = [
  { name: '首页', href: '#home' },
  { name: '关于我们', href: '#about' },
  { name: '服务', href: '#services' },
  { name: '团队', href: '#team' },
  { name: '客户评价', href: '#testimonials' },
  { name: '联系我们', href: '#contact' }
];

// 公司价值观
const companyValues = [
  {
    icon: AwardIcon,
    title: '卓越品质',
    description: '我们坚持最高标准，确保每一个项目都能达到卓越的品质，为客户创造最大价值。'
  },
  {
    icon: UsersIcon,
    title: '团队协作',
    description: '我们相信团队的力量，通过紧密协作，集思广益，共同解决复杂问题。'
  },
  {
    icon: ZapIcon,
    title: '创新精神',
    description: '我们不断探索新技术、新方法，保持创新思维，引领行业发展。'
  }
];

// 服务项目
const services = [
  {
    title: 'Web开发',
    description: '我们提供专业的网站开发服务，包括企业官网、电子商务平台、内容管理系统等。',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '移动应用',
    description: '专业的移动应用开发团队，为iOS和Android平台打造高性能、用户友好的应用。',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '云服务',
    description: '提供安全、可靠、高效的云服务解决方案，帮助企业实现数字化转型。',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

// 团队成员
const teamMembers = [
  {
    name: '张伟',
    position: '首席执行官',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '李娜',
    position: '技术总监',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '王强',
    position: '产品经理',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '刘芳',
    position: '设计总监',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

// 客户评价
const testimonials = [
  {
    name: '陈明',
    company: 'ABC科技有限公司',
    comment: '与LOGO合作是一次非常愉快的经历。他们的团队专业、高效，交付的产品质量超出了我们的预期。我们的网站流量在重新设计后增长了200%，转化率提高了35%。',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: '赵丽',
    company: 'XYZ传媒集团',
    comment: '他们对细节的关注和对客户需求的理解令人印象深刻。我们将继续与他们合作未来的项目。LOGO团队不仅仅是一个供应商，更像是我们业务的合作伙伴。',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: '吴刚',
    company: '未来科技有限公司',
    comment: '从项目启动到完成，整个过程非常顺利。他们的团队反应迅速，解决问题的能力很强。我们的移动应用在上线后的第一个月就获得了超过10万次的下载量。',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
];

// 联系表单
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// 订阅邮箱
const subscribeEmail = ref('');

// 切换菜单
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// 滚动到指定部分
const scrollToSection = (event, href) => {
  event.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    isMenuOpen.value = false;
  }
};

// 轮播图控制
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + testimonials.length) % testimonials.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

// 自动轮播
const startAutoSlide = () => {
  testimonialInterval.value = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoSlide = () => {
  if (testimonialInterval.value) {
    clearInterval(testimonialInterval.value);
  }
};

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// 监听滚动事件
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  scrolled.value = scrollPosition > 50;
  showBackToTop.value = scrollPosition > 500;
};

// 提交联系表单
const submitForm = () => {
  alert('表单已提交！');
  // 在实际应用中，这里应该发送API请求
  contactForm.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
};

// 订阅
const subscribe = () => {
  alert('订阅成功！');
  // 在实际应用中，这里应该发送API请求
  subscribeEmail.value = '';
};

// 生命周期钩子
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  startAutoSlide();
  
  // 模拟AOS动画库
  const animateElements = () => {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;
      if (isVisible) {
        el.classList.add('aos-animate');
      }
    });
  };
  
  window.addEventListener('scroll', animateElements);
  setTimeout(animateElements, 100);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  stopAutoSlide();
});
</script>

<style>
/* 基础样式 */
:root {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --primary-light: #3b82f6;
  --secondary-color: #64748b;
  --dark-color: #0f172a;
  --light-color: #f8fafc;
  --gray-color: #f1f5f9;
  --text-color: #334155;
  --text-light: #64748b;
  --border-color: #e2e8f0;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
  --gradient: linear-gradient(135deg, #2563eb, #4f46e5);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.icon {
  width: 24px;
  height: 24px;
}

.icon--small {
  width: 16px;
  height: 16px;
}

.icon--right {
  margin-left: 8px;
}

.icon--star {
  color: #f59e0b;
}

.icon--quote {
  color: rgba(59, 130, 246, 0.2);
  width: 40px;
  height: 40px;
}

/* 动画 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

/* AOS动画 */
[data-aos] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.aos-animate {
  opacity: 1;
  transform: translateY(0);
}

/* 按钮样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  border: none;
  font-size: 16px;
  letter-spacing: 0.5px;
}

.btn--primary {
  background: var(--gradient);
  color: white;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

.btn--primary:hover {
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
  transform: translateY(-2px);
}

.btn--outline {
  background-color: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-color);
}

.btn--outline:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-2px);
}

.btn--light {
  background-color: white;
  color: var(--primary-color);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.btn--light:hover {
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.btn--animated {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn--animated::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: width 0.3s ease;
  z-index: -1;
}

.btn--animated:hover::before {
  width: 100%;
}

.btn--full {
  width: 100%;
}

/* 头部样式 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0);
  z-index: 100;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.header--scrolled {
  box-shadow: var(--shadow);
  background-color: rgba(255, 255, 255, 0.98);
}

.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo h1 {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-color);
  letter-spacing: 1px;
}

.menu-toggle {
  display: block;
}

.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-color);
}

.nav-desktop {
  display: none;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  position: relative;
  padding: 5px 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-mobile {
  padding: 20px 0;
  border-top: 1px solid var(--border-color);
}

.nav-mobile__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 英雄区域 */
.hero {
  position: relative;
  padding: 160px 0 100px;
  overflow: hidden;
}

.hero__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient);
  z-index: -2;
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: -1;
}

.hero__content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  z-index: 1;
}

.hero__text {
  max-width: 600px;
}

.hero__title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 20px;
  color: white;
  line-height: 1.2;
}

.hero__title span {
  color: rgba(255, 255, 255, 0.8);
}

.hero__subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}

.hero__buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero__image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.hero__wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  line-height: 0;
}

/* 部分样式 */
.section {
  padding: 100px 0;
  position: relative;
}

.section--gray {
  background-color: var(--gray-color);
}

.section--gradient {
  background: var(--gradient);
  color: white;
}

.section__header {
  text-align: center;
  margin-bottom: 60px;
}

.section__badge {
  display: inline-block;
  padding: 6px 16px;
  background-color: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: 1px;
}

.section__badge--light {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

.section__title {
  font-size: 36px;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 16px;
}

.section__title--light {
  color: white;
}

.section__divider {
  width: 80px;
  height: 4px;
  background-color: var(--primary-color);
  margin: 0 auto;
  border-radius: 2px;
}

.section__divider--light {
  background-color: white;
}

/* 价值观卡片 */
.values {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 60px;
}

.value-card {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.value-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(79, 70, 229, 0.1));
  border-radius: 50%;
  margin-bottom: 24px;
}

.value-card__icon .icon {
  color: var(--primary-color);
}

.value-card__title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--dark-color);
}

.value-card__description {
  color: var(--text-light);
}

/* 关于内容 */
.about-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.about-content__image {
  position: relative;
}

.about-content__image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.about-content__experience {
  position: absolute;
  bottom: -20px;
  right: 20px;
  background: var(--gradient);
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow);
}

.about-content__number {
  font-size: 36px;
  font-weight: 700;
  display: block;
  line-height: 1;
}

.about-content__text {
  padding: 20px;
}

.about-content__text h3 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--dark-color);
}

.about-content__text p {
  color: var(--text-light);
  margin-bottom: 20px;
}

.about-content__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.stat {
  text-align: center;
}

.stat__number {
  font-size: 30px;
  font-weight: 700;
  color: var(--primary-color);
  display: block;
}

.stat__label {
  color: var(--text-light);
  font-weight: 500;
}

/* 服务卡片 */
.services {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 60px;
}

.service-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.service-card__image-container {
  position: relative;
  overflow: hidden;
}

.service-card__image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-card:hover .service-card__image {
  transform: scale(1.05);
}

.service-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(37, 99, 235, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.service-card:hover .service-card__overlay {
  opacity: 1;
}

.service-card__link-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  color: var(--primary-color);
  transform: translateY(20px);
  transition: var(--transition);
}

.service-card:hover .service-card__link-overlay {
  transform: translateY(0);
}

.service-card__content {
  padding: 25px;
}

.service-card__title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--dark-color);
}

.service-card__description {
  color: var(--text-light);
  margin-bottom: 20px;
}

.service-card__link {
  display: flex;
  align-items: center;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
}

.service-card__link:hover {
  color: var(--primary-dark);
}

.service-card__link .icon {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.service-card__link:hover .icon {
  transform: translateX(5px);
}

/* CTA Banner */
.cta-banner {
  background: var(--gradient);
  padding: 60px 0;
  margin-top: 60px;
}

.cta-banner__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.cta-banner__text {
  text-align: center;
}

.cta-banner__text h3 {
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
}

.cta-banner__text p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
}

/* 团队卡片 */
.team {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.team-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.team-card__image-container {
  position: relative;
  overflow: hidden;
}

.team-card__image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-card:hover .team-card__image {
  transform: scale(1.05);
}

.team-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(37, 99, 235, 0.8), transparent);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
  opacity: 0;
  transition: var(--transition);
}

.team-card:hover .team-card__overlay {
  opacity: 1;
}

.team-card__social {
  display: flex;
  gap: 15px;
  transform: translateY(20px);
  transition: var(--transition);
}

.team-card:hover .team-card__social {
  transform: translateY(0);
}

.team-card__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  color: var(--primary-color);
  transition: var(--transition);
}

.team-card__social-link:hover {
  background-color: var(--primary-color);
  color: white;
}

.team-card__content {
  padding: 20px;
  text-align: center;
}

.team-card__name {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--dark-color);
}

.team-card__position {
  color: var(--primary-color);
  font-weight: 500;
}

/* 评价轮播 */
.testimonial-slider {
  position: relative;
  overflow: hidden;
  margin-bottom: 60px;
}

.testimonial-slider__container {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-card {
  flex: 0 0 100%;
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: var(--shadow);
  margin: 0 10px;
}

.testimonial-card__quote {
  margin-bottom: 20px;
}

.testimonial-card__comment {
  color: var(--text-color);
  margin-bottom: 20px;
  font-style: italic;
}

.testimonial-card__rating {
  display: flex;
  margin-bottom: 20px;
}

.testimonial-card__author {
  display: flex;
  align-items: center;
}

.testimonial-card__avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 3px solid var(--primary-light);
}

.testimonial-card__name {
  font-size: 18px;
  font-weight: 600;
  color: var(--dark-color);
}

.testimonial-card__company {
  color: var(--text-light);
  font-size: 14px;
}

.testimonial-slider__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.testimonial-slider__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: var(--primary-color);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.testimonial-slider__arrow:hover {
  background-color: var(--primary-color);
  color: white;
}

.testimonial-slider__dots {
  display: flex;
  gap: 10px;
  margin: 0 20px;
}

.testimonial-slider__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  transition: var(--transition);
}

.testimonial-slider__dot--active {
  background-color: white;
  transform: scale(1.2);
}

/* 客户 */
.clients {
  text-align: center;
}

.clients__title {
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}

.clients__logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.client-logo {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  transition: var(--transition);
}

.client-logo:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
}

.client-logo img {
  height: 40px;
  filter: brightness(0) invert(1);
  opacity: 0.8;
}

/* 联系部分 */
.contact {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.contact__subtitle {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--dark-color);
}

.contact-item {
  display: flex;
  margin-bottom: 30px;
}

.contact-item__icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(79, 70, 229, 0.1));
  border-radius: 50%;
  margin-right: 20px;
}

.contact-item__icon {
  color: var(--primary-color);
}

.contact-item__title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--dark-color);
}

.contact-item__text {
  color: var(--text-light);
}

.contact__social {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.contact__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(79, 70, 229, 0.1));
  border-radius: 50%;
  color: var(--primary-color);
  transition: var(--transition);
}

.contact__social-link:hover {
  background: var(--gradient);
  color: white;
  transform: translateY(-3px);
}

/* 表单样式 */
.form__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form__group {
  margin-bottom: 20px;
}

.form__label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--dark-color);
}

.form__input-container {
  position: relative;
}

.form__input {
  width: 100%;
  padding: 14px 16px 14px 45px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 16px;
  transition: var(--transition);
  background-color: #f8fafc;
}

.form__input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  background-color: white;
}

.form__icon {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: var(--text-light);
}

.form__icon--textarea {
  top: 20px;
  transform: none;
}

.form__textarea {
  resize: vertical;
  min-height: 150px;
}

/* 页脚 */
.footer {
  position: relative;
}

.footer__top {
  background-color: var(--dark-color);
  color: white;
  padding: 80px 0 40px;
}

.footer__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.footer__title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
}

.footer__description {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  line-height: 1.6;
}

.footer__social {
  display: flex;
  gap: 15px;
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  transition: var(--transition);
}

.footer__social-link:hover {
  background-color: var(--primary-color);
}

.footer__menu {
  list-style: none;
}

.footer__menu li {
  margin-bottom: 12px;
}

.footer__link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: var(--transition);
}

.footer__link:hover {
  color: white;
}

.newsletter-form__container {
  position: relative;
}

.newsletter-form__input {
  width: 100%;
  padding: 14px 60px 14px 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
}

.newsletter-form__input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.newsletter-form__button {
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--gradient);
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: var(--transition);
}

.newsletter-form__button:hover {
  opacity: 0.9;
}

.footer__bottom {
  background-color: #0a0f1c;
  padding: 20px 0;
}

.footer__copyright {
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

/* 回到顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 99;
}

.back-to-top--visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
  transform: translateY(-5px);
}

/* 响应式样式 */
@media (min-width: 768px) {
  .hero__title {
    font-size: 52px;
  }
  
  .hero__buttons {
    flex-direction: row;
  }
  
  .values, 
  .services {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .team {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .form__row {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer__content {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .menu-toggle {
    display: none;
  }
  
  .nav-desktop {
    display: flex;
    gap: 30px;
  }
  
  .cta-banner__content {
    flex-direction: row;
    text-align: left;
  }
  
  .testimonial-card {
    flex: 0 0 calc(100% - 20px);
  }
}

@media (min-width: 1024px) {
  .hero__content {
    flex-direction: row;
    align-items: center;
  }
  
  .hero__text,
  .hero__image {
    flex: 1;
  }
  
  .about-content {
    grid-template-columns: 1fr 1fr;
  }
  
  .team {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .contact {
    grid-template-columns: 1fr 1fr;
  }
  
  .footer__content {
    grid-template-columns: 2fr 1fr 1fr 2fr;
  }
  
  .testimonial-card {
    flex: 0 0 calc(100% - 20px);
  }
}
</style>