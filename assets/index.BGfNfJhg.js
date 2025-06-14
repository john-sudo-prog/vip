import { c as createElementBlock, a as createTextVNode, b as createVNode, r as resolveComponent, o as openBlock, d as createBaseVNode, e as defineComponent, u as useI18n, f as ref, w as watch, g as createCommentVNode, F as Fragment, h as renderList, t as toDisplayString, n as normalizeClass, i as createBlock, j as unref, k as withModifiers, l as resolveDynamicComponent, m as withCtx, p as createStaticVNode, q as createRouter, s as createWebHistory, v as createI18n, x as createApp } from "./vendor.BEFd6Lva.js";
import { m as messages } from "./i18n.DeDtISgX.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$c = {
  name: "App"
};
const _hoisted_1$c = { class: "min-h-screen bg-gray-900 text-white" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", _hoisted_1$c, [
    _cache[0] || (_cache[0] = createTextVNode(" 5555 ")),
    createVNode(_component_router_view)
  ]);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$6]]);
const _imports_0$2 = "/vip/assets/logo.CX6W3yQJ.jpg";
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    })
  ]);
}
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
    })
  ]);
}
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
    })
  ]);
}
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
    })
  ]);
}
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    })
  ]);
}
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
    })
  ]);
}
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    })
  ]);
}
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    })
  ]);
}
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
    })
  ]);
}
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
const _hoisted_1$b = { class: "relative" };
const _hoisted_2$a = {
  key: 0,
  class: "absolute right-0 mt-2 w-32 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl py-2 z-50 border border-gray-700/50"
};
const _hoisted_3$a = ["onClick"];
const _hoisted_4$a = { class: "flex-1" };
const _hoisted_5$a = {
  key: 0,
  class: "w-4 h-4 text-blue-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitcher",
  setup(__props) {
    const i18n2 = useI18n();
    const isOpen = ref(false);
    const languages = [
      { code: "zh-CN", name: "简体中文" },
      { code: "zh-TW", name: "繁體中文" },
      { code: "en", name: "English" }
    ];
    const currentLanguage = ref(languages.find((l) => l.code === i18n2.locale.value) || languages[0]);
    const switchLanguage = (code) => {
      i18n2.locale.value = code;
      currentLanguage.value = languages.find((l) => l.code === code) || languages[0];
      isOpen.value = false;
    };
    watch(() => i18n2.locale.value, (newLocale) => {
      currentLanguage.value = languages.find((l) => l.code === newLocale) || languages[0];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => isOpen.value = !isOpen.value),
          class: "p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
        }, _cache[1] || (_cache[1] = [
          createBaseVNode("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            createBaseVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            })
          ], -1)
        ])),
        isOpen.value ? (openBlock(), createElementBlock("div", _hoisted_2$a, [
          (openBlock(), createElementBlock(Fragment, null, renderList(languages, (lang) => {
            return createBaseVNode("button", {
              key: lang.code,
              onClick: ($event) => switchLanguage(lang.code),
              class: normalizeClass(["flex items-center w-full px-3 py-2 text-sm text-gray-200 hover:bg-gray-700/50 transition-colors duration-200", { "bg-gray-700/50": currentLanguage.value.code === lang.code }])
            }, [
              createBaseVNode("span", _hoisted_4$a, toDisplayString(lang.name), 1),
              currentLanguage.value.code === lang.code ? (openBlock(), createElementBlock("svg", _hoisted_5$a, _cache[2] || (_cache[2] = [
                createBaseVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M5 13l4 4L19 7"
                }, null, -1)
              ]))) : createCommentVNode("", true)
            ], 10, _hoisted_3$a);
          }), 64))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$a = { class: "fixed w-full bg-white backdrop-blur-md z-50 shadow-sm border-b border-gray-100/50" };
const _hoisted_2$9 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3$9 = { class: "flex justify-between items-center h-16" };
const _hoisted_4$9 = { class: "flex items-center space-x-8" };
const _hoisted_5$9 = { class: "hidden md:flex space-x-8" };
const _hoisted_6$7 = ["href", "onClick"];
const _hoisted_7$7 = { class: "relative z-10" };
const _hoisted_8$7 = { class: "hidden md:flex items-center" };
const _hoisted_9$7 = { class: "md:hidden" };
const _hoisted_10$6 = {
  key: 0,
  class: "md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100/50 animate-slide-down"
};
const _hoisted_11$5 = { class: "px-2 pt-2 pb-3 space-y-1" };
const _hoisted_12$5 = ["href", "onClick"];
const _hoisted_13$5 = { class: "px-3 py-2" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  setup(__props) {
    const isMenuOpen = ref(false);
    const navItems = [
      { id: 1, title: "nav.home", href: "#home" },
      { id: 2, title: "nav.services", href: "#services" },
      { id: 3, title: "nav.solutions", href: "#solutions" },
      { id: 4, title: "nav.cases", href: "#cases" },
      { id: 5, title: "nav.partners", href: "#partners" },
      { id: 6, title: "nav.news", href: "#news" },
      { id: 7, title: "nav.contact", href: "#contact" }
    ];
    const scrollToSection = (href) => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      isMenuOpen.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", _hoisted_1$a, [
        createBaseVNode("div", _hoisted_2$9, [
          createBaseVNode("div", _hoisted_3$9, [
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "flex-shrink-0 group" }, [
              createBaseVNode("img", {
                src: _imports_0$2,
                alt: "点一云科技",
                class: "h-8 transition-transform duration-300 group-hover:scale-105"
              })
            ], -1)),
            createBaseVNode("div", _hoisted_4$9, [
              createBaseVNode("div", _hoisted_5$9, [
                (openBlock(), createElementBlock(Fragment, null, renderList(navItems, (item) => {
                  return createBaseVNode("a", {
                    key: item.id,
                    href: item.href,
                    onClick: withModifiers(($event) => scrollToSection(item.href), ["prevent"]),
                    class: "relative text-gray-600 hover:text-primary-600 transition-colors duration-300 py-2 group"
                  }, [
                    createBaseVNode("span", _hoisted_7$7, toDisplayString(_ctx.$t(item.title)), 1),
                    _cache[1] || (_cache[1] = createBaseVNode("span", { class: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" }, null, -1))
                  ], 8, _hoisted_6$7);
                }), 64))
              ]),
              createBaseVNode("div", _hoisted_8$7, [
                createVNode(_sfc_main$b)
              ]),
              createBaseVNode("div", _hoisted_9$7, [
                createBaseVNode("button", {
                  onClick: _cache[0] || (_cache[0] = ($event) => isMenuOpen.value = !isMenuOpen.value),
                  class: "p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-100/50 transition-colors duration-300"
                }, [
                  !isMenuOpen.value ? (openBlock(), createBlock(unref(render$9), {
                    key: 0,
                    class: "h-6 w-6"
                  })) : (openBlock(), createBlock(unref(render), {
                    key: 1,
                    class: "h-6 w-6"
                  }))
                ])
              ])
            ])
          ]),
          isMenuOpen.value ? (openBlock(), createElementBlock("div", _hoisted_10$6, [
            createBaseVNode("div", _hoisted_11$5, [
              (openBlock(), createElementBlock(Fragment, null, renderList(navItems, (item) => {
                return createBaseVNode("a", {
                  key: item.id,
                  href: item.href,
                  onClick: withModifiers(($event) => scrollToSection(item.href), ["prevent"]),
                  class: "block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50/50 rounded-lg transition-colors duration-300"
                }, toDisplayString(_ctx.$t(item.title)), 9, _hoisted_12$5);
              }), 64)),
              createBaseVNode("div", _hoisted_13$5, [
                createVNode(_sfc_main$b)
              ])
            ])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-27b615c8"]]);
const _imports_0$1 = "/vip/assets/1.BkiepcgT.jpg";
const _imports_1$1 = "/vip/assets/2.D2zvkKpT.jpg";
const _imports_2$1 = "/vip/assets/3.BF3sJ9Id.jpg";
const _imports_3$1 = "/vip/assets/4.Ca7N3nEU.jpg";
const _imports_4$1 = "/vip/assets/5.DtazJjHU.jpg";
const _hoisted_1$9 = {
  id: "home",
  class: "min-h-[90vh] pt-16 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 relative overflow-hidden"
};
const _hoisted_2$8 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" };
const _hoisted_3$8 = { class: "grid lg:grid-cols-2 gap-12 items-center min-h-[calc(90vh-4rem)]" };
const _hoisted_4$8 = { class: "text-white space-y-8" };
const _hoisted_5$8 = { class: "space-y-4" };
const _hoisted_6$6 = { class: "inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-1 border border-blue-400/30 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 transition-all duration-500" };
const _hoisted_7$6 = { class: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-medium" };
const _hoisted_8$6 = { class: "text-5xl lg:text-7xl font-bold tracking-tight" };
const _hoisted_9$6 = { class: "block text-transparent bg-clip-text animate-gradient-fast bg-gradient-to-r from-white via-blue-300 to-purple-300" };
const _hoisted_10$5 = { class: "text-white" };
const _hoisted_11$4 = { class: "flex flex-wrap gap-4" };
const _hoisted_12$4 = { class: "grid grid-cols-2 gap-4 pt-8 border-t border-gradient-to-r from-blue-500/20 to-purple-500/20" };
const _hoisted_13$4 = { class: "space-y-2 group" };
const _hoisted_14$4 = { class: "text-sm text-blue-200/70 group-hover:text-purple-200/70 transition-colors duration-500" };
const _hoisted_15$4 = { class: "space-y-2 group" };
const _hoisted_16$3 = { class: "text-sm text-purple-200/70 group-hover:text-blue-200/70 transition-colors duration-500" };
const _hoisted_17$2 = { class: "relative hidden lg:block" };
const _hoisted_18$2 = { class: "relative" };
const _hoisted_19$2 = { class: "relative w-full h-[500px]" };
const _hoisted_20$2 = { class: "absolute top-[10%] left-[15%] w-32 h-32 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg transform rotate-4 animate-float-1" };
const _hoisted_21$1 = ["alt"];
const _hoisted_22$1 = { class: "absolute top-[25%] right-[20%] w-28 h-28 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg transform -rotate-6 animate-float-2" };
const _hoisted_23$1 = ["alt"];
const _hoisted_24$1 = { class: "absolute bottom-[20%] left-[25%] w-36 h-36 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg transform rotate-3 animate-float-3" };
const _hoisted_25$1 = ["alt"];
const _hoisted_26$1 = { class: "absolute top-[60%] right-[25%] w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg transform -rotate-3 animate-float-4" };
const _hoisted_27$1 = ["alt"];
const _hoisted_28$1 = { class: "absolute bottom-[35%] left-[10%] w-28 h-28 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg transform rotate-12 animate-float-5" };
const _hoisted_29$1 = ["alt"];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "HeroBanner",
  setup(__props) {
    const scrollToSection = (href) => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$9, [
        _cache[7] || (_cache[7] = createBaseVNode("div", { class: "absolute inset-0" }, [
          createBaseVNode("div", { class: "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_70%)]" }),
          createBaseVNode("div", { class: "absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.3),transparent_70%)]" }),
          createBaseVNode("div", { class: "absolute inset-0 bg-grid opacity-20" })
        ], -1)),
        createBaseVNode("div", _hoisted_2$8, [
          createBaseVNode("div", _hoisted_3$8, [
            createBaseVNode("div", _hoisted_4$8, [
              createBaseVNode("div", _hoisted_5$8, [
                createBaseVNode("div", _hoisted_6$6, [
                  _cache[2] || (_cache[2] = createBaseVNode("span", { class: "animate-pulse w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" }, null, -1)),
                  createBaseVNode("span", _hoisted_7$6, toDisplayString(_ctx.$t("hero.title")), 1)
                ]),
                createBaseVNode("h1", _hoisted_8$6, [
                  createBaseVNode("span", _hoisted_9$6, toDisplayString(_ctx.$t("hero.company")), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_10$5, toDisplayString(_ctx.$t("hero.subtitle")), 1),
              createBaseVNode("div", _hoisted_11$4, [
                createBaseVNode("button", {
                  onClick: _cache[0] || (_cache[0] = ($event) => scrollToSection("#news")),
                  class: "group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                }, [
                  createBaseVNode("span", null, toDisplayString(_ctx.$t("hero.learnMore")), 1),
                  createVNode(unref(render$a), { class: "w-4 h-4 transition-transform group-hover:translate-x-1" })
                ]),
                createBaseVNode("button", {
                  onClick: _cache[1] || (_cache[1] = ($event) => scrollToSection("#contact")),
                  class: "group relative inline-flex items-center gap-2 px-6 py-3 border-2 border-gradient-to-r from-blue-400/50 to-purple-400/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-lg font-semibold text-white transition-all duration-500"
                }, [
                  createBaseVNode("span", null, toDisplayString(_ctx.$t("hero.contactUs")), 1),
                  createVNode(unref(render$3), { class: "w-4 h-4 transition-transform group-hover:scale-110" })
                ])
              ]),
              createBaseVNode("div", _hoisted_12$4, [
                createBaseVNode("div", _hoisted_13$4, [
                  _cache[3] || (_cache[3] = createBaseVNode("div", { class: "flex items-baseline gap-1" }, [
                    createBaseVNode("span", { class: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-500" }, "200+")
                  ], -1)),
                  createBaseVNode("p", _hoisted_14$4, toDisplayString(_ctx.$t("hero.stats.countries")), 1)
                ]),
                createBaseVNode("div", _hoisted_15$4, [
                  _cache[4] || (_cache[4] = createBaseVNode("div", { class: "flex items-baseline gap-1" }, [
                    createBaseVNode("span", { class: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-500" }, "99.9%")
                  ], -1)),
                  createBaseVNode("p", _hoisted_16$3, toDisplayString(_ctx.$t("hero.stats.availability")), 1)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_17$2, [
              _cache[6] || (_cache[6] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow" }, null, -1)),
              createBaseVNode("div", _hoisted_18$2, [
                createBaseVNode("div", _hoisted_19$2, [
                  createBaseVNode("div", _hoisted_20$2, [
                    createBaseVNode("img", {
                      src: _imports_0$1,
                      alt: _ctx.$t("hero.partners.alt"),
                      class: "w-full h-full object-contain p-4"
                    }, null, 8, _hoisted_21$1)
                  ]),
                  createBaseVNode("div", _hoisted_22$1, [
                    createBaseVNode("img", {
                      src: _imports_1$1,
                      alt: _ctx.$t("hero.partners.alt"),
                      class: "w-full h-full object-contain p-4"
                    }, null, 8, _hoisted_23$1)
                  ]),
                  createBaseVNode("div", _hoisted_24$1, [
                    createBaseVNode("img", {
                      src: _imports_2$1,
                      alt: _ctx.$t("hero.partners.alt"),
                      class: "w-full h-full object-contain p-4"
                    }, null, 8, _hoisted_25$1)
                  ]),
                  createBaseVNode("div", _hoisted_26$1, [
                    createBaseVNode("img", {
                      src: _imports_3$1,
                      alt: _ctx.$t("hero.partners.alt"),
                      class: "w-full h-full object-contain p-4"
                    }, null, 8, _hoisted_27$1)
                  ]),
                  createBaseVNode("div", _hoisted_28$1, [
                    createBaseVNode("img", {
                      src: _imports_4$1,
                      alt: _ctx.$t("hero.partners.alt"),
                      class: "w-full h-full object-contain p-4"
                    }, null, 8, _hoisted_29$1)
                  ]),
                  _cache[5] || (_cache[5] = createBaseVNode("div", { class: "absolute inset-0" }, [
                    createBaseVNode("div", { class: "absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse" }),
                    createBaseVNode("div", { class: "absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-pulse delay-300" })
                  ], -1))
                ])
              ])
            ])
          ])
        ]),
        _cache[8] || (_cache[8] = createBaseVNode("div", { class: "absolute bottom-0 left-0 right-0" }, [
          createBaseVNode("div", { class: "h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" })
        ], -1))
      ]);
    };
  }
});
const HeroBanner = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-e87a1c7f"]]);
const _hoisted_1$8 = {
  id: "services",
  class: "relative py-16 overflow-hidden"
};
const _hoisted_2$7 = { class: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3$7 = { class: "text-center mb-12" };
const _hoisted_4$7 = { class: "text-3xl font-bold text-white mb-3" };
const _hoisted_5$7 = { class: "text-base text-gray-300" };
const _hoisted_6$5 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" };
const _hoisted_7$5 = { class: "w-14 h-14 bg-gradient-to-br from-blue-500/30 to-blue-400/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500/40 group-hover:to-blue-400/30 transition-all duration-300" };
const _hoisted_8$5 = { class: "text-xl font-semibold text-white mb-3" };
const _hoisted_9$5 = { class: "text-base text-gray-200" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Services",
  setup(__props) {
    const services = [
      {
        key: "cloud",
        icon: render$7
      },
      {
        key: "gpu",
        icon: render$6
      },
      {
        key: "ai",
        icon: render$2
      },
      {
        key: "edge",
        icon: render$4
      },
      {
        key: "security",
        icon: render$1
      },
      {
        key: "sms",
        icon: render$5
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$8, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20" }, [
          createBaseVNode("div", { class: "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10" }),
          createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-blue-900/40" })
        ], -1)),
        createBaseVNode("div", _hoisted_2$7, [
          createBaseVNode("div", _hoisted_3$7, [
            createBaseVNode("h2", _hoisted_4$7, toDisplayString(_ctx.$t("services.title")), 1),
            createBaseVNode("p", _hoisted_5$7, toDisplayString(_ctx.$t("services.subtitle")), 1)
          ]),
          createBaseVNode("div", _hoisted_6$5, [
            (openBlock(), createElementBlock(Fragment, null, renderList(services, (service, index) => {
              return createBaseVNode("div", {
                key: index,
                class: "bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 group shadow-lg hover:shadow-xl"
              }, [
                createBaseVNode("div", _hoisted_7$5, [
                  (openBlock(), createBlock(resolveDynamicComponent(service.icon), { class: "w-7 h-7 text-blue-300" }))
                ]),
                createBaseVNode("h3", _hoisted_8$5, toDisplayString(_ctx.$t(`services.items.${service.key}.title`)), 1),
                createBaseVNode("p", _hoisted_9$5, toDisplayString(_ctx.$t(`services.items.${service.key}.desc`)), 1)
              ]);
            }), 64))
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$7 = {
  id: "solutions",
  class: "py-16 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
};
const _hoisted_2$6 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" };
const _hoisted_3$6 = { class: "text-center mb-12" };
const _hoisted_4$6 = { class: "text-3xl font-bold mb-4 text-white" };
const _hoisted_5$6 = { class: "text-gray-400" };
const _hoisted_6$4 = { class: "grid grid-cols-1 md:grid-cols-2 gap-8" };
const _hoisted_7$4 = { class: "bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl overflow-hidden" };
const _hoisted_8$4 = { class: "p-8" };
const _hoisted_9$4 = { class: "flex items-center space-x-4 mb-6" };
const _hoisted_10$4 = { class: "w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm" };
const _hoisted_11$3 = { class: "text-xl font-bold text-white" };
const _hoisted_12$3 = { class: "text-blue-100" };
const _hoisted_13$3 = { class: "bg-gradient-to-br from-green-500 to-green-600 rounded-2xl overflow-hidden" };
const _hoisted_14$3 = { class: "p-8" };
const _hoisted_15$3 = { class: "flex items-center space-x-4 mb-6" };
const _hoisted_16$2 = { class: "w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm" };
const _hoisted_17$1 = { class: "text-xl font-bold text-white" };
const _hoisted_18$1 = { class: "text-green-100" };
const _hoisted_19$1 = { class: "bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl overflow-hidden" };
const _hoisted_20$1 = { class: "p-8" };
const _hoisted_21 = { class: "flex items-center space-x-4 mb-6" };
const _hoisted_22 = { class: "w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm" };
const _hoisted_23 = { class: "text-xl font-bold text-white" };
const _hoisted_24 = { class: "text-purple-100" };
const _hoisted_25 = { class: "bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl overflow-hidden" };
const _hoisted_26 = { class: "p-8" };
const _hoisted_27 = { class: "flex items-center space-x-4 mb-6" };
const _hoisted_28 = { class: "w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm" };
const _hoisted_29 = { class: "text-xl font-bold text-white" };
const _hoisted_30 = { class: "text-indigo-100" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Solutions",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$7, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "absolute inset-0" }, [
          createBaseVNode("div", { class: "absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_70%)]" }),
          createBaseVNode("div", { class: "absolute inset-0 bg-grid opacity-10" })
        ], -1)),
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("div", _hoisted_3$6, [
            createBaseVNode("h2", _hoisted_4$6, toDisplayString(_ctx.$t("solutions.title")), 1),
            createBaseVNode("p", _hoisted_5$6, toDisplayString(_ctx.$t("solutions.subtitle")), 1)
          ]),
          createBaseVNode("div", _hoisted_6$4, [
            createBaseVNode("div", _hoisted_7$4, [
              createBaseVNode("div", _hoisted_8$4, [
                createBaseVNode("div", _hoisted_9$4, [
                  createBaseVNode("div", _hoisted_10$4, [
                    createVNode(unref(render$4), { class: "h-6 w-6 text-white" })
                  ]),
                  createBaseVNode("h3", _hoisted_11$3, toDisplayString(_ctx.$t("solutions.items.crossBorder.title")), 1)
                ]),
                createBaseVNode("p", _hoisted_12$3, toDisplayString(_ctx.$t("solutions.items.crossBorder.desc")), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_13$3, [
              createBaseVNode("div", _hoisted_14$3, [
                createBaseVNode("div", _hoisted_15$3, [
                  createBaseVNode("div", _hoisted_16$2, [
                    createVNode(unref(render$8), { class: "h-6 w-6 text-white" })
                  ]),
                  createBaseVNode("h3", _hoisted_17$1, toDisplayString(_ctx.$t("solutions.items.sms.title")), 1)
                ]),
                createBaseVNode("p", _hoisted_18$1, toDisplayString(_ctx.$t("solutions.items.sms.desc")), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_19$1, [
              createBaseVNode("div", _hoisted_20$1, [
                createBaseVNode("div", _hoisted_21, [
                  createBaseVNode("div", _hoisted_22, [
                    createVNode(unref(render$1), { class: "h-6 w-6 text-white" })
                  ]),
                  createBaseVNode("h3", _hoisted_23, toDisplayString(_ctx.$t("solutions.items.ddos.title")), 1)
                ]),
                createBaseVNode("p", _hoisted_24, toDisplayString(_ctx.$t("solutions.items.ddos.desc")), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", _hoisted_27, [
                  createBaseVNode("div", _hoisted_28, [
                    createVNode(unref(render$2), { class: "h-6 w-6 text-white" })
                  ]),
                  createBaseVNode("h3", _hoisted_29, toDisplayString(_ctx.$t("solutions.items.acceleration.title")), 1)
                ]),
                createBaseVNode("p", _hoisted_30, toDisplayString(_ctx.$t("solutions.items.acceleration.desc")), 1)
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const Solutions = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-c6b55b27"]]);
const _sfc_main$6 = {};
const _hoisted_1$6 = {
  id: "cases",
  class: "py-20 bg-gray-50"
};
const _hoisted_2$5 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3$5 = { class: "text-center mb-16" };
const _hoisted_4$5 = { class: "text-3xl font-bold text-gray-900 mb-4" };
const _hoisted_5$5 = { class: "text-lg text-gray-600" };
const _hoisted_6$3 = { class: "grid grid-cols-1 md:grid-cols-2 gap-8" };
const _hoisted_7$3 = { class: "p-6" };
const _hoisted_8$3 = { class: "text-xl font-semibold text-gray-900 mb-2" };
const _hoisted_9$3 = { class: "text-gray-600 mb-4" };
const _hoisted_10$3 = { class: "flex flex-wrap gap-2" };
const _hoisted_11$2 = { class: "px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm" };
const _hoisted_12$2 = { class: "px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm" };
const _hoisted_13$2 = { class: "px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm" };
const _hoisted_14$2 = { class: "p-6" };
const _hoisted_15$2 = { class: "text-xl font-semibold text-gray-900 mb-2" };
const _hoisted_16$1 = { class: "text-gray-600 mb-4" };
const _hoisted_17 = { class: "flex flex-wrap gap-2" };
const _hoisted_18 = { class: "px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm" };
const _hoisted_19 = { class: "px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm" };
const _hoisted_20 = { class: "px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm" };
function _sfc_render$5(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("section", _hoisted_1$6, [
    createBaseVNode("div", _hoisted_2$5, [
      createBaseVNode("div", _hoisted_3$5, [
        createBaseVNode("h2", _hoisted_4$5, toDisplayString(_ctx.$t("cases.title")), 1),
        createBaseVNode("p", _hoisted_5$5, toDisplayString(_ctx.$t("cases.subtitle")), 1)
      ]),
      createBaseVNode("div", _hoisted_6$3, [
        createVNode(_component_router_link, {
          to: "/cases/cross-border",
          class: "block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_7$3, [
              createBaseVNode("h3", _hoisted_8$3, toDisplayString(_ctx.$t("cases.items.crossBorder.title")), 1),
              createBaseVNode("p", _hoisted_9$3, toDisplayString(_ctx.$t("cases.items.crossBorder.desc")), 1),
              createBaseVNode("div", _hoisted_10$3, [
                createBaseVNode("span", _hoisted_11$2, toDisplayString(_ctx.$t("cases.items.crossBorder.tags.ecommerce")), 1),
                createBaseVNode("span", _hoisted_12$2, toDisplayString(_ctx.$t("cases.items.crossBorder.tags.payment")), 1),
                createBaseVNode("span", _hoisted_13$2, toDisplayString(_ctx.$t("cases.items.crossBorder.tags.multilingual")), 1)
              ])
            ])
          ]),
          _: 1
        }),
        createVNode(_component_router_link, {
          to: "/cases/ddos",
          class: "block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_14$2, [
              createBaseVNode("h3", _hoisted_15$2, toDisplayString(_ctx.$t("cases.items.ddos.title")), 1),
              createBaseVNode("p", _hoisted_16$1, toDisplayString(_ctx.$t("cases.items.ddos.desc")), 1),
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("span", _hoisted_18, toDisplayString(_ctx.$t("cases.items.ddos.tags.protection")), 1),
                createBaseVNode("span", _hoisted_19, toDisplayString(_ctx.$t("cases.items.ddos.tags.gameserver")), 1),
                createBaseVNode("span", _hoisted_20, toDisplayString(_ctx.$t("cases.items.ddos.tags.security")), 1)
              ])
            ])
          ]),
          _: 1
        })
      ])
    ])
  ]);
}
const Cases = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5]]);
const _imports_5 = "/vip/assets/6.DUtRWKq2.jpg";
const _sfc_main$5 = {};
const _hoisted_1$5 = {
  id: "partners",
  class: "py-20 bg-gradient-to-b from-blue-50 to-white"
};
const _hoisted_2$4 = { class: "container mx-auto px-4" };
const _hoisted_3$4 = { class: "text-3xl font-bold text-center mb-16 text-gray-800" };
const _hoisted_4$4 = { class: "grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto" };
const _hoisted_5$4 = { class: "flex items-center justify-center bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300" };
const _hoisted_6$2 = ["alt"];
const _hoisted_7$2 = { class: "flex items-center justify-center bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300" };
const _hoisted_8$2 = ["alt"];
const _hoisted_9$2 = { class: "flex items-center justify-center bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300" };
const _hoisted_10$2 = ["alt"];
const _hoisted_11$1 = { class: "flex items-center justify-center bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300" };
const _hoisted_12$1 = ["alt"];
const _hoisted_13$1 = { class: "flex items-center justify-center bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300" };
const _hoisted_14$1 = ["alt"];
const _hoisted_15$1 = { class: "flex items-center justify-center bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300" };
const _hoisted_16 = ["alt"];
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("section", _hoisted_1$5, [
    createBaseVNode("div", _hoisted_2$4, [
      createBaseVNode("h2", _hoisted_3$4, toDisplayString(_ctx.$t("partners.title")), 1),
      createBaseVNode("div", _hoisted_4$4, [
        createBaseVNode("div", _hoisted_5$4, [
          createBaseVNode("img", {
            src: _imports_0$1,
            alt: _ctx.$t("partners.items.partner1"),
            class: "h-20 transition-all duration-300"
          }, null, 8, _hoisted_6$2)
        ]),
        createBaseVNode("div", _hoisted_7$2, [
          createBaseVNode("img", {
            src: _imports_1$1,
            alt: _ctx.$t("partners.items.partner2"),
            class: "h-20 transition-all duration-300"
          }, null, 8, _hoisted_8$2)
        ]),
        createBaseVNode("div", _hoisted_9$2, [
          createBaseVNode("img", {
            src: _imports_2$1,
            alt: _ctx.$t("partners.items.partner3"),
            class: "h-20 transition-all duration-300"
          }, null, 8, _hoisted_10$2)
        ]),
        createBaseVNode("div", _hoisted_11$1, [
          createBaseVNode("img", {
            src: _imports_3$1,
            alt: _ctx.$t("partners.items.partner4"),
            class: "h-20 transition-all duration-300"
          }, null, 8, _hoisted_12$1)
        ]),
        createBaseVNode("div", _hoisted_13$1, [
          createBaseVNode("img", {
            src: _imports_4$1,
            alt: _ctx.$t("partners.items.partner5"),
            class: "h-20 transition-all duration-300"
          }, null, 8, _hoisted_14$1)
        ]),
        createBaseVNode("div", _hoisted_15$1, [
          createBaseVNode("img", {
            src: _imports_5,
            alt: _ctx.$t("partners.items.partner6"),
            class: "h-20 transition-all duration-300"
          }, null, 8, _hoisted_16)
        ])
      ])
    ])
  ]);
}
const Partners = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
const _sfc_main$4 = {};
const _hoisted_1$4 = {
  id: "news",
  class: "py-20 bg-gradient-to-b from-gray-900 to-gray-800"
};
const _hoisted_2$3 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3$3 = { class: "text-center mb-16" };
const _hoisted_4$3 = { class: "text-3xl font-bold text-white mb-4" };
const _hoisted_5$3 = { class: "text-gray-300" };
const _hoisted_6$1 = { class: "max-w-4xl mx-auto" };
const _hoisted_7$1 = { class: "bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700" };
const _hoisted_8$1 = { class: "" };
const _hoisted_9$1 = { class: "text-gray-300 leading-relaxed" };
const _hoisted_10$1 = { class: "text-gray-300 leading-relaxed mt-6" };
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("section", _hoisted_1$4, [
    createBaseVNode("div", _hoisted_2$3, [
      createBaseVNode("div", _hoisted_3$3, [
        createBaseVNode("h2", _hoisted_4$3, toDisplayString(_ctx.$t("news.title")), 1),
        createBaseVNode("p", _hoisted_5$3, toDisplayString(_ctx.$t("news.subtitle")), 1)
      ]),
      createBaseVNode("div", _hoisted_6$1, [
        createBaseVNode("div", _hoisted_7$1, [
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("p", _hoisted_9$1, toDisplayString(_ctx.$t("news.content.paragraph1")), 1),
            createBaseVNode("p", _hoisted_10$1, toDisplayString(_ctx.$t("news.content.paragraph2")), 1)
          ])
        ])
      ])
    ])
  ]);
}
const News = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-4bc5b19f"]]);
const _imports_0 = "/vip/assets/Jonny_TG.gR2QuDQP.jpg";
const _imports_1 = "/vip/assets/Leon_TG.C2MnYuC8.jpg";
const _imports_2 = "/vip/assets/wechat.B1xSEvwW.png";
const _imports_3 = "/vip/assets/wechat.D3vEf1Y7.jpg";
const _imports_4 = "/vip/assets/whatsApp.drYYwvNk.jpg";
const _sfc_main$3 = {
  name: "Contact"
};
const _hoisted_1$3 = {
  id: "contact",
  class: "py-12 bg-gradient-to-b from-gray-900 to-gray-800"
};
const _hoisted_2$2 = { class: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3$2 = { class: "text-center mb-8" };
const _hoisted_4$2 = { class: "text-2xl font-bold text-white mb-2" };
const _hoisted_5$2 = { class: "text-gray-400 text-sm" };
const _hoisted_6 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" };
const _hoisted_7 = { class: "bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300" };
const _hoisted_8 = { class: "flex items-center space-x-4" };
const _hoisted_9 = { class: "text-sm font-medium text-white mb-0.5" };
const _hoisted_10 = { class: "bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300" };
const _hoisted_11 = { class: "flex items-center space-x-4" };
const _hoisted_12 = { class: "text-sm font-medium text-white mb-0.5" };
const _hoisted_13 = { class: "text-gray-400 text-sm" };
const _hoisted_14 = { class: "mt-8 text-center" };
const _hoisted_15 = { class: "text-gray-500 text-sm" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", _hoisted_2$2, [
      createBaseVNode("div", _hoisted_3$2, [
        createBaseVNode("h2", _hoisted_4$2, toDisplayString(_ctx.$t("contact.title")), 1),
        createBaseVNode("p", _hoisted_5$2, toDisplayString(_ctx.$t("contact.subtitle")), 1)
      ]),
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center" }, [
              createBaseVNode("svg", {
                class: "w-5 h-5 text-blue-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createBaseVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                })
              ])
            ], -1)),
            createBaseVNode("div", null, [
              createBaseVNode("h3", _hoisted_9, toDisplayString(_ctx.$t("contact.email.title")), 1),
              _cache[0] || (_cache[0] = createBaseVNode("p", { class: "text-gray-400 text-sm" }, "san@dycloud.ai", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "flex-shrink-0 w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center" }, [
              createBaseVNode("svg", {
                class: "w-5 h-5 text-green-400",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createBaseVNode("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.16 9.19 19.86 19.86 0 0 1 .92 2.18 2 2 0 0 1 2.92 0h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L6.37 7.91a16 16 0 0 0 6.72 6.72l1.74-1.74a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" })
              ])
            ], -1)),
            createBaseVNode("div", null, [
              createBaseVNode("h3", _hoisted_12, toDisplayString(_ctx.$t("contact.phone.title")), 1),
              createBaseVNode("p", _hoisted_13, toDisplayString(_ctx.$t("contact.phone.value")), 1)
            ])
          ])
        ])
      ]),
      _cache[3] || (_cache[3] = createStaticVNode('<div class="flex justify-center space-x-6" data-v-6ee5a40e><a class="group relative" data-v-6ee5a40e><div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-sky-500/50 transition-all duration-300 flex items-center justify-center" data-v-6ee5a40e><svg class="w-5 h-5 text-sky-400 group-hover:text-sky-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor" data-v-6ee5a40e><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" data-v-6ee5a40e></path></svg></div><div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block" data-v-6ee5a40e><div class="bg-white p-2 rounded-lg shadow-lg aspect-square w-40 h-44" data-v-6ee5a40e><img src="' + _imports_0 + '" alt="Telegram QR Code 1" class="w-38 h-42 object-cover rounded aspect-square" data-v-6ee5a40e></div></div></a><a class="group relative" data-v-6ee5a40e><div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-sky-500/50 transition-all duration-300 flex items-center justify-center" data-v-6ee5a40e><svg class="w-5 h-5 text-sky-400 group-hover:text-sky-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor" data-v-6ee5a40e><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" data-v-6ee5a40e></path></svg></div><div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block" data-v-6ee5a40e><div class="bg-white p-2 rounded-lg shadow-lg aspect-square w-40 h-44" data-v-6ee5a40e><img src="' + _imports_1 + '" alt="Telegram QR Code 2" class="w-38 h-42 object-cover rounded aspect-square" data-v-6ee5a40e></div></div></a><a class="group relative" data-v-6ee5a40e><div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-green-500/50 transition-all duration-300 flex items-center justify-center" data-v-6ee5a40e><img src="' + _imports_2 + '" alt="WeChat" class="w-5 h-5" data-v-6ee5a40e></div><div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block" data-v-6ee5a40e><div class="bg-white p-2 rounded-lg shadow-lg aspect-square w-40 h-40" data-v-6ee5a40e><img src="' + _imports_3 + '" alt="WeChat QR Code" class="w-38 h-38 object-cover rounded aspect-square" data-v-6ee5a40e></div></div></a><a class="group relative" data-v-6ee5a40e><div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-green-500/50 transition-all duration-300 flex items-center justify-center" data-v-6ee5a40e><svg class="w-5 h-5 text-green-400 group-hover:text-green-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor" data-v-6ee5a40e><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-v-6ee5a40e></path></svg></div><div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block" data-v-6ee5a40e><div class="bg-white p-2 rounded-lg shadow-lg aspect-square w-40 h-40" data-v-6ee5a40e><img src="' + _imports_4 + '" alt="WhatsApp QR Code" class="w-38 h-38 object-cover rounded aspect-square" data-v-6ee5a40e></div></div></a></div>', 1)),
      createBaseVNode("div", _hoisted_14, [
        createBaseVNode("p", _hoisted_15, toDisplayString(_ctx.$t("contact.copyright")), 1)
      ])
    ])
  ]);
}
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-6ee5a40e"]]);
const _hoisted_1$2 = { class: "min-h-screen" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Home",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(Navbar),
        createVNode(HeroBanner),
        createVNode(_sfc_main$8),
        createVNode(Solutions),
        createVNode(Cases),
        createVNode(Partners),
        createVNode(News),
        createVNode(Contact)
      ]);
    };
  }
});
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5f6954f2"]]);
const _sfc_main$1 = {
  name: "CrossBorder"
};
const _hoisted_1$1 = { class: "min-h-screen bg-gradient-to-b from-gray-900 to-gray-800" };
const _hoisted_2$1 = { class: "bg-gray-800/50 backdrop-blur-sm border-b border-gray-700" };
const _hoisted_3$1 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_4$1 = { class: "flex items-center justify-between h-16" };
const _hoisted_5$1 = { class: "flex items-center" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("nav", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3$1, [
        createBaseVNode("div", _hoisted_4$1, [
          createBaseVNode("div", _hoisted_5$1, [
            createVNode(_component_router_link, {
              to: "/",
              class: "text-white hover:text-blue-400 transition-colors duration-300"
            }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createBaseVNode("svg", {
                  class: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                  })
                ], -1)
              ])),
              _: 1,
              __: [0]
            }),
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "ml-4 text-white text-lg" }, "返回首页", -1))
          ])
        ])
      ])
    ]),
    _cache[2] || (_cache[2] = createStaticVNode('<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><article class="prose prose-invert max-w-none"><h1 class="text-4xl font-bold text-white mb-8">跨境业务解决方案</h1><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8"><h2 class="text-2xl font-semibold text-white mb-4">项目背景</h2><p class="text-gray-300 leading-relaxed"> 随着全球化的深入发展，越来越多的企业开始拓展海外市场。然而，跨境业务面临着网络延迟、数据安全、合规性等多重挑战。我们的客户是一家快速发展的跨境电商企业，需要稳定、安全、高效的网络基础设施来支持其全球业务。 </p></div><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8"><h2 class="text-2xl font-semibold text-white mb-4">解决方案</h2><div class="space-y-6"><div><h3 class="text-xl font-medium text-white mb-3">1. 全球网络加速</h3><p class="text-gray-300 leading-relaxed"> 部署全球CDN网络，通过智能路由和边缘节点优化，显著降低网络延迟，提升用户体验。主要特点： </p><ul class="list-disc list-inside text-gray-300 mt-2 space-y-2"><li>覆盖全球200+个节点</li><li>智能DNS解析</li><li>动态路由优化</li><li>实时流量监控</li></ul></div><div><h3 class="text-xl font-medium text-white mb-3">2. 安全防护</h3><p class="text-gray-300 leading-relaxed"> 构建多层安全防护体系，确保业务安全稳定运行： </p><ul class="list-disc list-inside text-gray-300 mt-2 space-y-2"><li>DDoS防护</li><li>WAF防火墙</li><li>SSL加密</li><li>实时安全监控</li></ul></div><div><h3 class="text-xl font-medium text-white mb-3">3. 合规性保障</h3><p class="text-gray-300 leading-relaxed"> 确保业务符合各地区法律法规要求： </p><ul class="list-disc list-inside text-gray-300 mt-2 space-y-2"><li>数据本地化存储</li><li>隐私保护合规</li><li>行业认证支持</li><li>合规性咨询</li></ul></div></div></div><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"><h2 class="text-2xl font-semibold text-white mb-4">实施效果</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-gray-700/30 rounded-lg p-6"><div class="text-3xl font-bold text-blue-400 mb-2">85%</div><p class="text-gray-300">网络延迟降低</p></div><div class="bg-gray-700/30 rounded-lg p-6"><div class="text-3xl font-bold text-green-400 mb-2">99.9%</div><p class="text-gray-300">服务可用性</p></div><div class="bg-gray-700/30 rounded-lg p-6"><div class="text-3xl font-bold text-purple-400 mb-2">60%</div><p class="text-gray-300">运营成本降低</p></div></div></div></article></div>', 1))
  ]);
}
const CrossBorder = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "Ddos"
};
const _hoisted_1 = { class: "min-h-screen bg-gradient-to-b from-gray-900 to-gray-800" };
const _hoisted_2 = { class: "bg-gray-800/50 backdrop-blur-sm border-b border-gray-700" };
const _hoisted_3 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_4 = { class: "flex items-center justify-between h-16" };
const _hoisted_5 = { class: "flex items-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_router_link, {
              to: "/",
              class: "text-white hover:text-blue-400 transition-colors duration-300"
            }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createBaseVNode("svg", {
                  class: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                  })
                ], -1)
              ])),
              _: 1,
              __: [0]
            }),
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "ml-4 text-white text-lg" }, "返回首页", -1))
          ])
        ])
      ])
    ]),
    _cache[2] || (_cache[2] = createStaticVNode('<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><article class="prose prose-invert max-w-none"><h1 class="text-4xl font-bold text-white mb-8">DDoS防护解决方案</h1><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8"><h2 class="text-2xl font-semibold text-white mb-4">项目背景</h2><p class="text-gray-300 leading-relaxed"> 随着网络攻击日益频繁和复杂，DDoS攻击已成为企业面临的主要安全威胁之一。我们的客户是一家在线游戏公司，经常遭受大规模DDoS攻击，导致服务中断，严重影响用户体验和业务运营。 </p></div><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8"><h2 class="text-2xl font-semibold text-white mb-4">解决方案</h2><div class="space-y-6"><div><h3 class="text-xl font-medium text-white mb-3">1. 智能防护系统</h3><p class="text-gray-300 leading-relaxed"> 部署智能DDoS防护系统，实现攻击的实时检测和自动防护： </p><ul class="list-disc list-inside text-gray-300 mt-2 space-y-2"><li>AI智能识别</li><li>实时流量分析</li><li>自动防护策略</li><li>攻击源追踪</li></ul></div><div><h3 class="text-xl font-medium text-white mb-3">2. 多层防护架构</h3><p class="text-gray-300 leading-relaxed"> 构建多层防护架构，确保业务持续可用： </p><ul class="list-disc list-inside text-gray-300 mt-2 space-y-2"><li>边缘节点防护</li><li>数据中心防护</li><li>应用层防护</li><li>智能负载均衡</li></ul></div><div><h3 class="text-xl font-medium text-white mb-3">3. 安全运维服务</h3><p class="text-gray-300 leading-relaxed"> 提供全方位的安全运维支持： </p><ul class="list-disc list-inside text-gray-300 mt-2 space-y-2"><li>7x24小时监控</li><li>专家团队支持</li><li>定期安全评估</li><li>应急响应服务</li></ul></div></div></div><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"><h2 class="text-2xl font-semibold text-white mb-4">实施效果</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-gray-700/30 rounded-lg p-6"><div class="text-3xl font-bold text-blue-400 mb-2">100%</div><p class="text-gray-300">攻击防护成功率</p></div><div class="bg-gray-700/30 rounded-lg p-6"><div class="text-3xl font-bold text-green-400 mb-2">99.99%</div><p class="text-gray-300">服务可用性</p></div><div class="bg-gray-700/30 rounded-lg p-6"><div class="text-3xl font-bold text-purple-400 mb-2">50%</div><p class="text-gray-300">运维成本降低</p></div></div></div></article></div>', 1))
  ]);
}
const Ddos = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cases/cross-border",
    name: "CrossBorder",
    component: CrossBorder
  },
  {
    path: "/cases/ddos",
    name: "Ddos",
    component: Ddos
  }
];
const router = createRouter({
  history: createWebHistory("/vip/"),
  routes
});
const i18n = createI18n({
  locale: localStorage.getItem("locale") || "zh-TW",
  fallbackLocale: "en",
  messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  missingWarn: false,
  fallbackWarn: false
});
const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
//# sourceMappingURL=index.BGfNfJhg.js.map
