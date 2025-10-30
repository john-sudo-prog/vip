import { c as createElementBlock, a as createVNode, r as resolveComponent, o as openBlock, b as createBaseVNode, d as defineComponent, u as useI18n, e as ref, w as watch, f as onMounted, g as onUnmounted, h as createCommentVNode, F as Fragment, i as renderList, t as toDisplayString, n as normalizeClass, j as createBlock, k as unref, l as resolveDynamicComponent, m as createStaticVNode, p as withCtx, q as createTextVNode, s as createRouter, v as createWebHashHistory, x as createI18n, y as createApp } from "./vendor.hgTvilCP.js";
import { m as messages } from "./i18n.C068_K4-.js";
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
const _sfc_main$h = {
  name: "App"
};
const _hoisted_1$h = { class: "min-h-screen bg-gray-900 text-white" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", _hoisted_1$h, [
    createVNode(_component_router_view)
  ]);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$7]]);
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
const _hoisted_1$g = {
  key: 0,
  class: "absolute right-0 mt-2 w-32 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl py-2 z-50 border border-gray-700/50"
};
const _hoisted_2$f = ["onClick"];
const _hoisted_3$f = { class: "flex-1" };
const _hoisted_4$f = {
  key: 0,
  class: "w-4 h-4 text-blue-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitcher",
  setup(__props) {
    const i18n2 = useI18n();
    const isOpen = ref(false);
    const dropdownRef = ref(null);
    const languages = [
      { code: "zh-TW", name: "繁體中文" },
      { code: "en", name: "English" },
      { code: "zh-CN", name: "简体中文" }
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
    const handleClickOutside = (event) => {
      if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        isOpen.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "relative",
        ref_key: "dropdownRef",
        ref: dropdownRef
      }, [
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => isOpen.value = !isOpen.value),
          class: "p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
        }, [..._cache[1] || (_cache[1] = [
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
        ])]),
        isOpen.value ? (openBlock(), createElementBlock("div", _hoisted_1$g, [
          (openBlock(), createElementBlock(Fragment, null, renderList(languages, (lang) => {
            return createBaseVNode("button", {
              key: lang.code,
              onClick: ($event) => switchLanguage(lang.code),
              class: normalizeClass(["flex items-center w-full px-3 py-2 text-sm text-gray-200 hover:bg-gray-700/50 transition-colors duration-200", { "bg-gray-700/50": currentLanguage.value.code === lang.code }])
            }, [
              createBaseVNode("span", _hoisted_3$f, toDisplayString(lang.name), 1),
              currentLanguage.value.code === lang.code ? (openBlock(), createElementBlock("svg", _hoisted_4$f, [..._cache[2] || (_cache[2] = [
                createBaseVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M5 13l4 4L19 7"
                }, null, -1)
              ])])) : createCommentVNode("", true)
            ], 10, _hoisted_2$f);
          }), 64))
        ])) : createCommentVNode("", true)
      ], 512);
    };
  }
});
const _hoisted_1$f = { class: "fixed w-full bg-white backdrop-blur-md z-50 shadow-sm border-b border-gray-100/50" };
const _hoisted_2$e = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3$e = { class: "flex justify-between items-center h-16" };
const _hoisted_4$e = { class: "flex items-center space-x-8" };
const _hoisted_5$a = { class: "hidden md:flex space-x-8" };
const _hoisted_6$7 = ["href", "onClick"];
const _hoisted_7$6 = { class: "relative z-10" };
const _hoisted_8$6 = { class: "hidden md:flex items-center" };
const _hoisted_9$6 = { class: "md:hidden" };
const _hoisted_10$5 = {
  key: 0,
  class: "md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100/50 animate-slide-down"
};
const _hoisted_11$4 = { class: "px-2 pt-2 pb-3 space-y-1" };
const _hoisted_12$4 = ["href", "onClick"];
const _hoisted_13$4 = { class: "px-3 py-2" };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  setup(__props) {
    const isMenuOpen = ref(false);
    const navItems = [
      { id: 1, title: "nav.home", href: "#home" },
      { id: 2, title: "nav.services", href: "#services" },
      { id: 3, title: "nav.solutions", href: "#solutions" },
      { id: 4, title: "nav.cases", href: "#cases" },
      { id: 5, title: "nav.partners", href: "#partners" },
      { id: 8, title: "nav.smb", href: "/smb" },
      // { id: 6, title: 'nav.news', href: '#news' },
      { id: 7, title: "nav.contact", href: "#contact" }
    ];
    const onNavClick = (item, event) => {
      const href = item.href;
      if (href && href.startsWith("#")) {
        event.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        isMenuOpen.value = false;
      } else if (href) {
        isMenuOpen.value = false;
        window.location.href = href;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", _hoisted_1$f, [
        createBaseVNode("div", _hoisted_2$e, [
          createBaseVNode("div", _hoisted_3$e, [
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "flex-shrink-0 group" }, [
              createBaseVNode("img", {
                src: _imports_0$2,
                alt: "点一云科技",
                class: "h-8 transition-transform duration-300 group-hover:scale-105"
              })
            ], -1)),
            createBaseVNode("div", _hoisted_4$e, [
              createBaseVNode("div", _hoisted_5$a, [
                (openBlock(), createElementBlock(Fragment, null, renderList(navItems, (item) => {
                  return createBaseVNode("a", {
                    key: item.id,
                    href: item.href,
                    onClick: ($event) => onNavClick(item, $event),
                    class: "relative text-gray-600 hover:text-primary-600 transition-colors duration-300 py-2 group"
                  }, [
                    createBaseVNode("span", _hoisted_7$6, toDisplayString(_ctx.$t(item.title)), 1),
                    _cache[1] || (_cache[1] = createBaseVNode("span", { class: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" }, null, -1))
                  ], 8, _hoisted_6$7);
                }), 64))
              ]),
              createBaseVNode("div", _hoisted_8$6, [
                createVNode(_sfc_main$g)
              ]),
              createBaseVNode("div", _hoisted_9$6, [
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
          isMenuOpen.value ? (openBlock(), createElementBlock("div", _hoisted_10$5, [
            createBaseVNode("div", _hoisted_11$4, [
              (openBlock(), createElementBlock(Fragment, null, renderList(navItems, (item) => {
                return createBaseVNode("a", {
                  key: item.id,
                  href: item.href,
                  onClick: ($event) => onNavClick(item, $event),
                  class: "block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50/50 rounded-lg transition-colors duration-300"
                }, toDisplayString(_ctx.$t(item.title)), 9, _hoisted_12$4);
              }), 64)),
              createBaseVNode("div", _hoisted_13$4, [
                createVNode(_sfc_main$g)
              ])
            ])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-8304f352"]]);
const _imports_0$1 = "/vip/assets/1.BkiepcgT.jpg";
const _imports_1$1 = "/vip/assets/2.D2zvkKpT.jpg";
const _imports_2$1 = "/vip/assets/3.BF3sJ9Id.jpg";
const _imports_3$1 = "/vip/assets/4.Ca7N3nEU.jpg";
const _imports_4$1 = "/vip/assets/5.DtazJjHU.jpg";
const _hoisted_1$e = {
  id: "home",
  class: "min-h-[90vh] pt-16 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 relative overflow-hidden"
};
const _hoisted_2$d = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" };
const _hoisted_3$d = { class: "grid lg:grid-cols-2 gap-12 items-center min-h-[calc(90vh-4rem)]" };
const _hoisted_4$d = { class: "text-white space-y-8" };
const _hoisted_5$9 = { class: "space-y-4" };
const _hoisted_6$6 = { class: "inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-1 border border-blue-400/30 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 transition-all duration-500" };
const _hoisted_7$5 = { class: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-medium" };
const _hoisted_8$5 = { class: "text-5xl lg:text-7xl font-bold tracking-tight" };
const _hoisted_9$5 = { class: "block text-transparent bg-clip-text animate-gradient-fast bg-gradient-to-r from-white via-blue-300 to-purple-300" };
const _hoisted_10$4 = { class: "text-white" };
const _hoisted_11$3 = { class: "flex flex-wrap gap-4" };
const _hoisted_12$3 = { class: "grid grid-cols-2 gap-4 pt-8 border-t border-gradient-to-r from-blue-500/20 to-purple-500/20" };
const _hoisted_13$3 = { class: "space-y-2 group" };
const _hoisted_14$3 = { class: "text-sm text-blue-200/70 group-hover:text-purple-200/70 transition-colors duration-500" };
const _hoisted_15$3 = { class: "space-y-2 group" };
const _hoisted_16$2 = { class: "text-sm text-purple-200/70 group-hover:text-blue-200/70 transition-colors duration-500" };
const _hoisted_17$1 = { class: "relative hidden lg:block" };
const _hoisted_18$1 = { class: "relative" };
const _hoisted_19$1 = { class: "relative w-full h-[500px]" };
const _hoisted_20$1 = { class: "absolute top-[10%] left-[15%] w-32 h-32 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg transform rotate-4 animate-float-1" };
const _hoisted_21$1 = ["alt"];
const _hoisted_22$1 = { class: "absolute top-[25%] right-[20%] w-28 h-28 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg transform -rotate-6 animate-float-2" };
const _hoisted_23$1 = ["alt"];
const _hoisted_24$1 = { class: "absolute bottom-[20%] left-[25%] w-36 h-36 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg transform rotate-3 animate-float-3" };
const _hoisted_25$1 = ["alt"];
const _hoisted_26$1 = { class: "absolute top-[60%] right-[25%] w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg transform -rotate-3 animate-float-4" };
const _hoisted_27$1 = ["alt"];
const _hoisted_28$1 = { class: "absolute bottom-[35%] left-[10%] w-28 h-28 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg transform rotate-12 animate-float-5" };
const _hoisted_29$1 = ["alt"];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "HeroBanner",
  setup(__props) {
    const scrollToSection = (href) => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$e, [
        _cache[7] || (_cache[7] = createBaseVNode("div", { class: "absolute inset-0" }, [
          createBaseVNode("div", { class: "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_70%)]" }),
          createBaseVNode("div", { class: "absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.3),transparent_70%)]" }),
          createBaseVNode("div", { class: "absolute inset-0 bg-grid opacity-20" })
        ], -1)),
        createBaseVNode("div", _hoisted_2$d, [
          createBaseVNode("div", _hoisted_3$d, [
            createBaseVNode("div", _hoisted_4$d, [
              createBaseVNode("div", _hoisted_5$9, [
                createBaseVNode("div", _hoisted_6$6, [
                  _cache[2] || (_cache[2] = createBaseVNode("span", { class: "animate-pulse w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" }, null, -1)),
                  createBaseVNode("span", _hoisted_7$5, toDisplayString(_ctx.$t("hero.title")), 1)
                ]),
                createBaseVNode("h1", _hoisted_8$5, [
                  createBaseVNode("span", _hoisted_9$5, toDisplayString(_ctx.$t("hero.company")), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_10$4, toDisplayString(_ctx.$t("hero.subtitle")), 1),
              createBaseVNode("div", _hoisted_11$3, [
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
              createBaseVNode("div", _hoisted_12$3, [
                createBaseVNode("div", _hoisted_13$3, [
                  _cache[3] || (_cache[3] = createBaseVNode("div", { class: "flex items-baseline gap-1" }, [
                    createBaseVNode("span", { class: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-500" }, "200+")
                  ], -1)),
                  createBaseVNode("p", _hoisted_14$3, toDisplayString(_ctx.$t("hero.stats.countries")), 1)
                ]),
                createBaseVNode("div", _hoisted_15$3, [
                  _cache[4] || (_cache[4] = createBaseVNode("div", { class: "flex items-baseline gap-1" }, [
                    createBaseVNode("span", { class: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-500" }, "99.9%")
                  ], -1)),
                  createBaseVNode("p", _hoisted_16$2, toDisplayString(_ctx.$t("hero.stats.availability")), 1)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_17$1, [
              _cache[6] || (_cache[6] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow" }, null, -1)),
              createBaseVNode("div", _hoisted_18$1, [
                createBaseVNode("div", _hoisted_19$1, [
                  createBaseVNode("div", _hoisted_20$1, [
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
const HeroBanner = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-e87a1c7f"]]);
const _hoisted_1$d = {
  id: "services",
  class: "relative py-16 overflow-hidden"
};
const _hoisted_2$c = { class: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3$c = { class: "text-center mb-12" };
const _hoisted_4$c = { class: "text-3xl font-bold text-white mb-3" };
const _hoisted_5$8 = { class: "text-base text-gray-300" };
const _hoisted_6$5 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" };
const _hoisted_7$4 = { class: "w-14 h-14 bg-gradient-to-br from-blue-500/30 to-blue-400/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500/40 group-hover:to-blue-400/30 transition-all duration-300" };
const _hoisted_8$4 = { class: "text-xl font-semibold text-white mb-3" };
const _hoisted_9$4 = { class: "text-base text-gray-200" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("section", _hoisted_1$d, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20" }, [
          createBaseVNode("div", { class: "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10" }),
          createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-blue-900/40" })
        ], -1)),
        createBaseVNode("div", _hoisted_2$c, [
          createBaseVNode("div", _hoisted_3$c, [
            createBaseVNode("h2", _hoisted_4$c, toDisplayString(_ctx.$t("services.title")), 1),
            createBaseVNode("p", _hoisted_5$8, toDisplayString(_ctx.$t("services.subtitle")), 1)
          ]),
          createBaseVNode("div", _hoisted_6$5, [
            (openBlock(), createElementBlock(Fragment, null, renderList(services, (service, index) => {
              return createBaseVNode("div", {
                key: index,
                class: "bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 group shadow-lg hover:shadow-xl"
              }, [
                createBaseVNode("div", _hoisted_7$4, [
                  (openBlock(), createBlock(resolveDynamicComponent(service.icon), { class: "w-7 h-7 text-blue-300" }))
                ]),
                createBaseVNode("h3", _hoisted_8$4, toDisplayString(_ctx.$t(`services.items.${service.key}.title`)), 1),
                createBaseVNode("p", _hoisted_9$4, toDisplayString(_ctx.$t(`services.items.${service.key}.desc`)), 1)
              ]);
            }), 64))
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$c = {
  id: "solutions",
  class: "py-16 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
};
const _hoisted_2$b = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" };
const _hoisted_3$b = { class: "text-center mb-12" };
const _hoisted_4$b = { class: "text-3xl font-bold mb-4 text-white" };
const _hoisted_5$7 = { class: "text-gray-400" };
const _hoisted_6$4 = { class: "grid grid-cols-1 md:grid-cols-2 gap-8" };
const _hoisted_7$3 = { class: "bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl overflow-hidden" };
const _hoisted_8$3 = { class: "p-8" };
const _hoisted_9$3 = { class: "flex items-center space-x-4 mb-6" };
const _hoisted_10$3 = { class: "w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm" };
const _hoisted_11$2 = { class: "text-xl font-bold text-white" };
const _hoisted_12$2 = { class: "text-blue-100" };
const _hoisted_13$2 = { class: "bg-gradient-to-br from-green-500 to-green-600 rounded-2xl overflow-hidden" };
const _hoisted_14$2 = { class: "p-8" };
const _hoisted_15$2 = { class: "flex items-center space-x-4 mb-6" };
const _hoisted_16$1 = { class: "w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm" };
const _hoisted_17 = { class: "text-xl font-bold text-white" };
const _hoisted_18 = { class: "text-green-100" };
const _hoisted_19 = { class: "bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl overflow-hidden" };
const _hoisted_20 = { class: "p-8" };
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
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Solutions",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$c, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "absolute inset-0" }, [
          createBaseVNode("div", { class: "absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_70%)]" }),
          createBaseVNode("div", { class: "absolute inset-0 bg-grid opacity-10" })
        ], -1)),
        createBaseVNode("div", _hoisted_2$b, [
          createBaseVNode("div", _hoisted_3$b, [
            createBaseVNode("h2", _hoisted_4$b, toDisplayString(_ctx.$t("solutions.title")), 1),
            createBaseVNode("p", _hoisted_5$7, toDisplayString(_ctx.$t("solutions.subtitle")), 1)
          ]),
          createBaseVNode("div", _hoisted_6$4, [
            createBaseVNode("div", _hoisted_7$3, [
              createBaseVNode("div", _hoisted_8$3, [
                createBaseVNode("div", _hoisted_9$3, [
                  createBaseVNode("div", _hoisted_10$3, [
                    createVNode(unref(render$4), { class: "h-6 w-6 text-white" })
                  ]),
                  createBaseVNode("h3", _hoisted_11$2, toDisplayString(_ctx.$t("solutions.items.crossBorder.title")), 1)
                ]),
                createBaseVNode("p", _hoisted_12$2, toDisplayString(_ctx.$t("solutions.items.crossBorder.desc")), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_13$2, [
              createBaseVNode("div", _hoisted_14$2, [
                createBaseVNode("div", _hoisted_15$2, [
                  createBaseVNode("div", _hoisted_16$1, [
                    createVNode(unref(render$8), { class: "h-6 w-6 text-white" })
                  ]),
                  createBaseVNode("h3", _hoisted_17, toDisplayString(_ctx.$t("solutions.items.sms.title")), 1)
                ]),
                createBaseVNode("p", _hoisted_18, toDisplayString(_ctx.$t("solutions.items.sms.desc")), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", _hoisted_20, [
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
const Solutions = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-c6b55b27"]]);
const _sfc_main$b = {};
const _hoisted_1$b = {
  id: "cases",
  class: "py-20 bg-gray-50"
};
const _hoisted_2$a = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3$a = { class: "text-center mb-16" };
const _hoisted_4$a = { class: "text-3xl font-bold text-gray-900 mb-4" };
const _hoisted_5$6 = { class: "text-lg text-gray-600" };
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("section", _hoisted_1$b, [
    createBaseVNode("div", _hoisted_2$a, [
      createBaseVNode("div", _hoisted_3$a, [
        createBaseVNode("h2", _hoisted_4$a, toDisplayString(_ctx.$t("cases.title")), 1),
        createBaseVNode("p", _hoisted_5$6, toDisplayString(_ctx.$t("cases.subtitle")), 1)
      ]),
      _cache[0] || (_cache[0] = createStaticVNode('<div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"><div class="p-6"><h3 class="text-xl font-semibold text-gray-900 mb-2">广西锋锐信息技术服务有限公司上云成功案例 </h3><p class="text-gray-600 mb-4">帮助企业完成AWS云迁移，提升系统性能，降低运维成本</p><a href="/cases/fengrui" target="_blank" rel="noopener" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">查看详情</a></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"><div class="p-6"><h3 class="text-xl font-semibold text-gray-900 mb-2">武汉柏锐科技有限公司上云成功案例</h3><p class="text-gray-600 mb-4">为游戏公司提供高性能云托管服务，支持全球玩家同时在线</p><a href="/cases/bairui" target="_blank" rel="noopener" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">查看详情</a></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"><div class="p-6"><h3 class="text-xl font-semibold text-gray-900 mb-2">某企业库存管理系统上云成功案例</h3><p class="text-gray-600 mb-4">为库存管理系统提供稳定可靠的云服务，提升用户体验</p><a href="/cases/inventory-game" target="_blank" rel="noopener" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">查看详情</a></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"><div class="p-6"><h3 class="text-xl font-semibold text-gray-900 mb-2">某企业数据管理系统上云成功案例 </h3><p class="text-gray-600 mb-4">为企业提供强大的计算和存储资源，提高数据处理能力</p><a href="/cases/inventory-stable" target="_blank" rel="noopener" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">查看详情</a></div></div></div>', 1))
    ])
  ]);
}
const Cases = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$6]]);
const _imports_5 = "/vip/assets/6.DUtRWKq2.jpg";
const _sfc_main$a = {};
const _hoisted_1$a = {
  id: "partners",
  class: "py-20 bg-gradient-to-b from-blue-50 to-white"
};
const _hoisted_2$9 = { class: "container mx-auto px-4" };
const _hoisted_3$9 = { class: "text-3xl font-bold text-center mb-16 text-gray-800" };
const _hoisted_4$9 = { class: "grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto" };
const _hoisted_5$5 = { class: "flex items-center justify-center bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300" };
const _hoisted_6$3 = ["alt"];
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
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("section", _hoisted_1$a, [
    createBaseVNode("div", _hoisted_2$9, [
      createBaseVNode("h2", _hoisted_3$9, toDisplayString(_ctx.$t("partners.title")), 1),
      createBaseVNode("div", _hoisted_4$9, [
        createBaseVNode("div", _hoisted_5$5, [
          createBaseVNode("img", {
            src: _imports_0$1,
            alt: _ctx.$t("partners.items.partner1"),
            class: "h-20 transition-all duration-300"
          }, null, 8, _hoisted_6$3)
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
const Partners = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$5]]);
const _sfc_main$9 = {};
const _hoisted_1$9 = {
  id: "news",
  class: "py-20 bg-gradient-to-b from-gray-900 to-gray-800"
};
const _hoisted_2$8 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3$8 = { class: "text-center mb-16" };
const _hoisted_4$8 = { class: "text-3xl font-bold text-white mb-4" };
const _hoisted_5$4 = { class: "text-gray-300" };
const _hoisted_6$2 = { class: "max-w-4xl mx-auto" };
const _hoisted_7$1 = { class: "bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700" };
const _hoisted_8$1 = { class: "" };
const _hoisted_9$1 = { class: "text-gray-300 leading-relaxed" };
const _hoisted_10$1 = { class: "text-gray-300 leading-relaxed mt-6" };
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("section", _hoisted_1$9, [
    createBaseVNode("div", _hoisted_2$8, [
      createBaseVNode("div", _hoisted_3$8, [
        createBaseVNode("h2", _hoisted_4$8, toDisplayString(_ctx.$t("news.title")), 1),
        createBaseVNode("p", _hoisted_5$4, toDisplayString(_ctx.$t("news.subtitle")), 1)
      ]),
      createBaseVNode("div", _hoisted_6$2, [
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
const News = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$4], ["__scopeId", "data-v-4bc5b19f"]]);
const _imports_0 = "/vip/assets/Jonny_TG.gR2QuDQP.jpg";
const _imports_1 = "/vip/assets/Leon_TG.C2MnYuC8.jpg";
const _imports_2 = "/vip/assets/wechat.B1xSEvwW.png";
const _imports_3 = "/vip/assets/wechat.D3vEf1Y7.jpg";
const _imports_4 = "/vip/assets/whatsApp.drYYwvNk.jpg";
const _sfc_main$8 = {
  name: "Contact"
};
const _hoisted_1$8 = {
  id: "contact",
  class: "py-12 bg-gradient-to-b from-gray-900 to-gray-800"
};
const _hoisted_2$7 = { class: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3$7 = { class: "text-center mb-8" };
const _hoisted_4$7 = { class: "text-2xl font-bold text-white mb-2" };
const _hoisted_5$3 = { class: "text-gray-400 text-sm" };
const _hoisted_6$1 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" };
const _hoisted_7 = { class: "bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300" };
const _hoisted_8 = { class: "flex items-center space-x-4" };
const _hoisted_9 = { class: "text-sm font-medium text-white mb-0.5" };
const _hoisted_10 = { class: "bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300" };
const _hoisted_11 = { class: "flex items-center space-x-4" };
const _hoisted_12 = { class: "text-sm font-medium text-white mb-0.5" };
const _hoisted_13 = { class: "text-gray-400 text-sm" };
const _hoisted_14 = { class: "mt-8 text-center" };
const _hoisted_15 = { class: "text-gray-500 text-sm" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createBaseVNode("div", _hoisted_2$7, [
      createBaseVNode("div", _hoisted_3$7, [
        createBaseVNode("h2", _hoisted_4$7, toDisplayString(_ctx.$t("contact.title")), 1),
        createBaseVNode("p", _hoisted_5$3, toDisplayString(_ctx.$t("contact.subtitle")), 1)
      ]),
      createBaseVNode("div", _hoisted_6$1, [
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
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$3], ["__scopeId", "data-v-6ee5a40e"]]);
const _hoisted_1$7 = { class: "min-h-screen" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Home",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(Navbar),
        createVNode(HeroBanner),
        createVNode(_sfc_main$d),
        createVNode(Solutions),
        createVNode(Cases),
        createVNode(Partners),
        createVNode(News),
        createVNode(Contact)
      ]);
    };
  }
});
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-5f6954f2"]]);
const _sfc_main$6 = {
  name: "CrossBorder"
};
const _hoisted_1$6 = { class: "min-h-screen bg-gradient-to-b from-gray-900 to-gray-800" };
const _hoisted_2$6 = { class: "bg-gray-800/50 backdrop-blur-sm border-b border-gray-700" };
const _hoisted_3$6 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_4$6 = { class: "flex items-center justify-between h-16" };
const _hoisted_5$2 = { class: "flex items-center" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createBaseVNode("nav", _hoisted_2$6, [
      createBaseVNode("div", _hoisted_3$6, [
        createBaseVNode("div", _hoisted_4$6, [
          createBaseVNode("div", _hoisted_5$2, [
            createVNode(_component_router_link, {
              to: "/",
              class: "text-white hover:text-blue-400 transition-colors duration-300"
            }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
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
              ])]),
              _: 1
            }),
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "ml-4 text-white text-lg" }, "返回首页", -1))
          ])
        ])
      ])
    ]),
    _cache[2] || (_cache[2] = createStaticVNode('<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><article class="prose prose-invert max-w-none"><h1 class="text-4xl font-bold text-white mb-8">跨境业务解决方案</h1><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8"><h2 class="text-2xl font-semibold text-white mb-4">项目背景</h2><p class="text-gray-300 leading-relaxed"> 随着全球化的深入发展，越来越多的企业开始拓展海外市场。然而，跨境业务面临着网络延迟、数据安全、合规性等多重挑战。我们的客户是一家快速发展的跨境电商企业，需要稳定、安全、高效的网络基础设施来支持其全球业务。 </p></div><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8"><h2 class="text-2xl font-semibold text-white mb-4">解决方案</h2><div class="space-y-6"><div><h3 class="text-xl font-medium text-white mb-3">1. 全球网络加速</h3><p class="text-gray-300 leading-relaxed"> 部署全球CDN网络，通过智能路由和边缘节点优化，显著降低网络延迟，提升用户体验。主要特点： </p><ul class="list-disc list-inside text-gray-300 mt-2 space-y-2"><li>覆盖全球200+个节点</li><li>智能DNS解析</li><li>动态路由优化</li><li>实时流量监控</li></ul></div><div><h3 class="text-xl font-medium text-white mb-3">2. 安全防护</h3><p class="text-gray-300 leading-relaxed"> 构建多层安全防护体系，确保业务安全稳定运行： </p><ul class="list-disc list-inside text-gray-300 mt-2 space-y-2"><li>DDoS防护</li><li>WAF防火墙</li><li>SSL加密</li><li>实时安全监控</li></ul></div><div><h3 class="text-xl font-medium text-white mb-3">3. 合规性保障</h3><p class="text-gray-300 leading-relaxed"> 确保业务符合各地区法律法规要求： </p><ul class="list-disc list-inside text-gray-300 mt-2 space-y-2"><li>数据本地化存储</li><li>隐私保护合规</li><li>行业认证支持</li><li>合规性咨询</li></ul></div></div></div><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"><h2 class="text-2xl font-semibold text-white mb-4">实施效果</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-gray-700/30 rounded-lg p-6"><div class="text-3xl font-bold text-blue-400 mb-2">85%</div><p class="text-gray-300">网络延迟降低</p></div><div class="bg-gray-700/30 rounded-lg p-6"><div class="text-3xl font-bold text-green-400 mb-2">99.9%</div><p class="text-gray-300">服务可用性</p></div><div class="bg-gray-700/30 rounded-lg p-6"><div class="text-3xl font-bold text-purple-400 mb-2">60%</div><p class="text-gray-300">运营成本降低</p></div></div></div></article></div>', 1))
  ]);
}
const CrossBorder = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2]]);
const _sfc_main$5 = {
  name: "Ddos"
};
const _hoisted_1$5 = { class: "min-h-screen bg-gradient-to-b from-gray-900 to-gray-800" };
const _hoisted_2$5 = { class: "bg-gray-800/50 backdrop-blur-sm border-b border-gray-700" };
const _hoisted_3$5 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_4$5 = { class: "flex items-center justify-between h-16" };
const _hoisted_5$1 = { class: "flex items-center" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createBaseVNode("nav", _hoisted_2$5, [
      createBaseVNode("div", _hoisted_3$5, [
        createBaseVNode("div", _hoisted_4$5, [
          createBaseVNode("div", _hoisted_5$1, [
            createVNode(_component_router_link, {
              to: "/",
              class: "text-white hover:text-blue-400 transition-colors duration-300"
            }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
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
              ])]),
              _: 1
            }),
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "ml-4 text-white text-lg" }, "返回首页", -1))
          ])
        ])
      ])
    ]),
    _cache[2] || (_cache[2] = createStaticVNode('<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><article class="prose prose-invert max-w-none"><h1 class="text-4xl font-bold text-white mb-8">DDoS防护解决方案</h1><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8"><h2 class="text-2xl font-semibold text-white mb-4">项目背景</h2><p class="text-gray-300 leading-relaxed"> 随着网络攻击日益频繁和复杂，DDoS攻击已成为企业面临的主要安全威胁之一。我们的客户是一家在线游戏公司，经常遭受大规模DDoS攻击，导致服务中断，严重影响用户体验和业务运营。 </p></div><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8"><h2 class="text-2xl font-semibold text-white mb-4">解决方案</h2><div class="space-y-6"><div><h3 class="text-xl font-medium text-white mb-3">1. 智能防护系统</h3><p class="text-gray-300 leading-relaxed"> 部署智能DDoS防护系统，实现攻击的实时检测和自动防护： </p><ul class="list-disc list-inside text-gray-300 mt-2 space-y-2"><li>AI智能识别</li><li>实时流量分析</li><li>自动防护策略</li><li>攻击源追踪</li></ul></div><div><h3 class="text-xl font-medium text-white mb-3">2. 多层防护架构</h3><p class="text-gray-300 leading-relaxed"> 构建多层防护架构，确保业务持续可用： </p><ul class="list-disc list-inside text-gray-300 mt-2 space-y-2"><li>边缘节点防护</li><li>数据中心防护</li><li>应用层防护</li><li>智能负载均衡</li></ul></div><div><h3 class="text-xl font-medium text-white mb-3">3. 安全运维服务</h3><p class="text-gray-300 leading-relaxed"> 提供全方位的安全运维支持： </p><ul class="list-disc list-inside text-gray-300 mt-2 space-y-2"><li>7x24小时监控</li><li>专家团队支持</li><li>定期安全评估</li><li>应急响应服务</li></ul></div></div></div><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"><h2 class="text-2xl font-semibold text-white mb-4">实施效果</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-gray-700/30 rounded-lg p-6"><div class="text-3xl font-bold text-blue-400 mb-2">100%</div><p class="text-gray-300">攻击防护成功率</p></div><div class="bg-gray-700/30 rounded-lg p-6"><div class="text-3xl font-bold text-green-400 mb-2">99.99%</div><p class="text-gray-300">服务可用性</p></div><div class="bg-gray-700/30 rounded-lg p-6"><div class="text-3xl font-bold text-purple-400 mb-2">50%</div><p class="text-gray-300">运维成本降低</p></div></div></div></article></div>', 1))
  ]);
}
const Ddos = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1]]);
const _sfc_main$4 = {};
const _hoisted_1$4 = { class: "fixed w-full bg-white backdrop-blur-md z-50 shadow-sm border-b border-gray-100/50" };
const _hoisted_2$4 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3$4 = { class: "flex justify-between items-center h-16" };
const _hoisted_4$4 = { class: "flex-shrink-0 group" };
const _hoisted_5 = ["alt"];
const _hoisted_6 = { class: "flex items-center" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("nav", _hoisted_1$4, [
    createBaseVNode("div", _hoisted_2$4, [
      createBaseVNode("div", _hoisted_3$4, [
        createBaseVNode("div", _hoisted_4$4, [
          createVNode(_component_router_link, { to: "/" }, {
            default: withCtx(() => [
              createBaseVNode("img", {
                src: _imports_0$2,
                alt: _ctx.$t("nav.logo"),
                class: "h-8 transition-transform duration-300 group-hover:scale-105"
              }, null, 8, _hoisted_5)
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(_component_router_link, {
            to: "/",
            class: "text-gray-600 hover:text-primary-600 transition-colors duration-300 py-2"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("nav.home")), 1)
            ]),
            _: 1
          })
        ])
      ])
    ])
  ]);
}
const SimpleNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render]]);
const archImg$3 = "/vip/assets/case1-architecture.BLVwDXmg.png";
const _hoisted_1$3 = { class: "min-h-screen bg-gray-50 flex flex-col" };
const _hoisted_2$3 = { class: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32" };
const _hoisted_3$3 = { class: "space-y-10 text-gray-800 leading-7" };
const _hoisted_4$3 = ["src"];
const _sfc_main$3 = {
  __name: "Fengrui",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(SimpleNavbar),
        createBaseVNode("div", _hoisted_2$3, [
          _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "text-3xl md:text-4xl font-bold text-gray-900 mb-8" }, "广西锋锐信息技术服务有限公司 | 自营商城平台", -1)),
          createBaseVNode("div", _hoisted_3$3, [
            _cache[1] || (_cache[1] = createStaticVNode('<h2 class="text-2xl font-semibold text-gray-900">1. 项目背景</h2><p>广西锋锐信息技术服务有限公司是一家中小型创新型企业，现有员工约70人，年营业额约900万美元。自成立以来，公司专注于技术研发与产品创新，业务涵盖多个方向，其中自营商城平台是公司重点发展的板块之一。</p><p>该商城平台致力于构建一个公平、透明、安全且高效的自营电商生态。平台专注于自有品牌商品销售，具备高并发处理能力，能够支持海量用户的实时商品浏览、库存查询、订单处理和支付请求，并通过顶级安全防护保障用户交易数据和个人信息安全无虞。同时，平台已实现国际化服务，能够为全球用户提供无缝的购物体验，逐步在全球市场中树立自有品牌知名度。</p><p>随着业务的不断扩展，公司计划将成功的自营商城平台从美国市场推广至新加坡市场。然而测试发现，新加坡用户访问美国服务器时存在明显延迟，尤其在大型促销活动和品牌发布会期间，网络波动更为突出。此外，随着海外用户数量的迅速增长，平台在获得市场关注的同时，也遭遇了频繁的网络攻击与DDoS攻击，对系统运行和用户购物体验造成了影响。基于以上背景，我们建议采用亚马逊云计算技术构建自营商城平台：通过弹性伸缩以适应促销高峰、以多层安全保障客户数据与隐私，并通过自动化与标准化提升运维效率与系统稳定性。</p><h2 class="text-2xl font-semibold text-gray-900">2. 项目目标</h2><ul class="list-disc pl-6 space-y-2"><li><b>降低访问延迟：</b>在 AWS 新加坡区域部署 EKS 集群，显著提升新加坡及周边地区的访问速度，尤其在活动高峰期保持顺畅体验。</li><li><b>增强安全性：</b>引入 AWS Shield 与 WAF，有效抵御各类网络攻击和 DDoS 攻击，保障交易与支付流程安全稳定。</li><li><b>提升业务可用性：</b>通过 ELB 与多可用区的 EC2/EKS 部署，消除单点故障，确保核心业务持续稳定。</li><li><b>优化性能与成本：</b>使用 Auto Scaling 按需伸缩 EKS NodeGroup 规模，并结合 Reserved Instances 与成本工具优化TCO。</li><li><b>持续技术支持：</b>在 AWS 与点一云团队支持下，建立例行评估与改进机制，快速响应新场景与新需求。</li></ul><h2 class="text-2xl font-semibold text-gray-900">3. 项目架构图</h2>', 7)),
            createBaseVNode("figure", null, [
              createBaseVNode("img", {
                src: unref(archImg$3),
                alt: "商城平台 AWS 参考架构",
                class: "w-full h-auto rounded-lg"
              }, null, 8, _hoisted_4$3),
              _cache[0] || (_cache[0] = createBaseVNode("figcaption", { class: "mt-3 text-gray-500 text-sm" }, "架构要点：EKS 工作负载、ALB 暴露服务、Aurora 主从、ElastiCache 缓存、OpenSearch 检索、WAF/Shield 防护、多可用区与自动扩缩容等", -1))
            ]),
            _cache[2] || (_cache[2] = createStaticVNode('<h2 class="text-2xl font-semibold text-gray-900">4. 项目成果</h2><ul class="list-disc pl-6 space-y-2"><li><b>显著降低访问延迟：</b>在新加坡区域部署后，页面加载与下单响应明显加速，满意度与留存率提升。</li><li><b>安全性增强：</b>WAF+Shield 组合抵御约 95% 的常见网络攻击与DDoS威胁，数据与交易更安全。</li><li><b>高可用保障：</b>ELB + 多可用区 EKS 架构将服务可用性提升至 99.9% 级别，活动高峰依然稳定。</li><li><b>性能与成本优化：</b>Auto Scaling 保障高并发稳定响应，Reserved Instances 等策略显著降低云成本。</li><li><b>持续改进能力：</b>建立性能评估与安全审计机制，持续优化，快速适配业务增长与市场扩张。</li></ul>', 2))
          ])
        ]),
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "fixed bottom-0 left-0 right-0 py-4 text-center text-gray-400 text-sm bg-gradient-to-b from-gray-900 to-gray-800 z-40" }, " © 2024 香港點一雲科技有限公司. All rights reserved. ", -1))
      ]);
    };
  }
};
const archImg$2 = "/vip/assets/case2-architecture.BkzR6eFG.png";
const _hoisted_1$2 = { class: "min-h-screen bg-gray-50 flex flex-col" };
const _hoisted_2$2 = { class: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32" };
const _hoisted_3$2 = { class: "space-y-10 text-gray-800 leading-7" };
const _hoisted_4$2 = ["src"];
const _sfc_main$2 = {
  __name: "Bairui",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(SimpleNavbar),
        createBaseVNode("div", _hoisted_2$2, [
          _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "text-3xl md:text-4xl font-bold text-gray-900 mb-8" }, "武汉柏锐科技有限公司 | 游戏平台", -1)),
          createBaseVNode("div", _hoisted_3$2, [
            _cache[1] || (_cache[1] = createStaticVNode('<h2 class="text-2xl font-semibold text-gray-900">1. 项目背景</h2><p>武汉柏锐科技有限公司是一家中小型创新型企业，现有员工约50人，年营业额约200万美元。自成立以来，公司专注于技术研发与产品创新，业务涵盖多个方向，其中游戏平台是公司重点发展的板块之一。</p><p>该游戏平台致力于构建一个公平、透明、安全且高效的虚拟社区。平台融合社交与娱乐元素，具备高并发处理能力，能够支持海量用户的实时匹配请求，并通过顶级安全防护保障用户数据安全无虞。同时，平台已实现国际化服务，能够为全球用户提供无缝体验，逐步在全球市场中树立知名度。</p><p>随着业务扩展，公司计划推广至新加坡市场。但测试发现新加坡用户访问国内服务器时存在明显延迟，赛事与活动时网络波动更突出。海外用户增长同时也带来更频繁的网络与 DDoS 攻击，影响系统稳定与玩家体验。为此建议采用 AWS 云技术构建弹性、稳定且安全的平台，兼顾便捷运维与持续优化。</p><h2 class="text-2xl font-semibold text-gray-900">2. 项目目标</h2><ul class="list-disc pl-6 space-y-2"><li><b>降低访问延迟：</b>在 AWS 新加坡区域部署 EC2，提升区域访问速度，业务高峰也能保持流畅。</li><li><b>增强安全性：</b>引入 AWS Shield 与 WAF，抵御网络与 DDoS 攻击，保障数据与对战过程安全。</li><li><b>提升业务可用性：</b>借助 ELB 与多可用区 EC2 部署，避免单点故障，确保核心服务稳定运行。</li><li><b>优化性能与成本：</b>使用 Auto Scaling 按需伸缩 EC2 数量，并通过 Reserved Instances 等方式优化TCO。</li><li><b>持续技术支持：</b>在 AWS 与点一云支持下，建立持续评估与改进机制，快速响应新需求。</li></ul><h2 class="text-2xl font-semibold text-gray-900">3. 项目架构图</h2>', 7)),
            createBaseVNode("figure", null, [
              createBaseVNode("img", {
                src: unref(archImg$2),
                alt: "游戏平台 AWS 参考架构",
                class: "w-full h-auto rounded-lg"
              }, null, 8, _hoisted_4$2),
              _cache[0] || (_cache[0] = createBaseVNode("figcaption", { class: "mt-3 text-gray-500 text-sm" }, "架构要点：多可用区 VPC、公私子网、Auto Scaling 的 EC2 应用层，Redis 集群/MySQL 主从，前置 WAF + CloudFront + Route53，监控审计与KMS密钥管理等", -1))
            ]),
            _cache[2] || (_cache[2] = createStaticVNode('<h2 class="text-2xl font-semibold text-gray-900">4. 项目成果</h2><ul class="list-disc pl-6 space-y-2"><li><b>显著降低延迟：</b>新加坡区域就近部署，访问与匹配延迟明显下降，玩家留存率提升。</li><li><b>安全性增强：</b>WAF+Shield 自动化清洗与拦截，约 95% 常见攻击被阻断，平台声誉提升。</li><li><b>高可用保障：</b>ELB + 多可用区 EC2 提升服务可用性至 99.9% 级别，高峰期依旧稳定。</li><li><b>性能与成本优化：</b>Auto Scaling 高峰稳定、低谷节省成本；Reserved Instances 等手段降低支出。</li><li><b>持续改进能力：</b>建立性能评估与安全审计机制，持续优化以适配业务扩张。</li></ul>', 2))
          ])
        ]),
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "fixed bottom-0 left-0 right-0 py-4 text-center text-gray-400 text-sm bg-gradient-to-b from-gray-900 to-gray-800 z-40" }, " © 2024 香港點一雲科技有限公司. All rights reserved. ", -1))
      ]);
    };
  }
};
const archImg$1 = "/vip/assets/case3-architecture.CqeFZUNL.png";
const _hoisted_1$1 = { class: "min-h-screen bg-gray-50 flex flex-col" };
const _hoisted_2$1 = { class: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32" };
const _hoisted_3$1 = { class: "space-y-10 text-gray-800 leading-7" };
const _hoisted_4$1 = ["src"];
const _sfc_main$1 = {
  __name: "InventoryGame",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(SimpleNavbar),
        createBaseVNode("div", _hoisted_2$1, [
          _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "text-3xl md:text-4xl font-bold text-gray-900 mb-8" }, "某公司 | 库存管理系统", -1)),
          createBaseVNode("div", _hoisted_3$1, [
            _cache[1] || (_cache[1] = createStaticVNode('<h2 class="text-2xl font-semibold text-gray-900">1. 项目背景</h2><p>某公司是一家中小型创新型企业，现有员工约50人，年营业额约900万美元。公司专注于旅游业务与数字化转型，业务涵盖旅游产品销售、行程规划、客户服务等多个方向，其中库存管理系统是公司运营管理的核心系统之一。</p><p>该库存管理系统致力于构建一个安全、高效、智能且可靠的旅游业务管理系统。平台整合产品库存管理、客户订单、旅游资源存储与检索功能，具备高并发处理能力，能够支持公司内部海量旅游产品数据的实时管理和处理需求，并通过顶级安全防护保障公司及客户敏感数据安全无虞。随着公司业务国际化发展，该平台需要为公司在不同地区的办公室提供统一的库存管理服务。</p><p>随着业务的不断扩展，现有本地化 IT 基础设施面临挑战：旺季性能瓶颈导致查询与下单延迟；数据量增长带来存储扩容与频繁硬件升级；缺少专业运维团队导致维护依赖外包且成本高；安全防护能力有限，存在数据泄露与中断风险。基于此，建议采用 AWS 云技术重构系统，实现弹性伸缩、安全合规与便捷运维。</p><h2 class="text-2xl font-semibold text-gray-900">2. 项目目标</h2><ul class="list-disc pl-6 space-y-2"><li><b>降低访问延迟：</b>在 AWS 弗吉尼亚北部区域部署 EC2，提高旺季处理能力并降低响应延迟，保障查询与下单流畅。</li><li><b>增强安全性：</b>使用 AWS Shield 与 WAF 等安全服务，抵御网络与 DDoS 攻击，保护敏感数据与业务连续性。</li><li><b>提升业务可用性：</b>借助 ELB 与多可用区 EC2 架构消除单点故障，确保库存服务在高峰与紧急订单时稳定运行。</li><li><b>优化性能与成本：</b>通过 Auto Scaling 按需伸缩 EC2 容量，结合 Reserved Instances 与成本工具优化 TCO。</li><li><b>持续改进能力：</b>建立性能评估与安全审计机制，持续优化系统以支撑业务扩展与国际化需求。</li></ul><h2 class="text-2xl font-semibold text-gray-900">3. 项目架构图</h2>', 7)),
            createBaseVNode("figure", null, [
              createBaseVNode("img", {
                src: unref(archImg$1),
                alt: "库存管理系统 AWS 参考架构",
                class: "w-full h-auto rounded-lg"
              }, null, 8, _hoisted_4$1),
              _cache[0] || (_cache[0] = createBaseVNode("figcaption", { class: "mt-3 text-gray-500 text-sm" }, "架构要点：多可用区 VPC、公私子网、Auto Scaling 的 EC2 应用层，私有 API + Lambda 处理、S3 端点、MySQL 主读写分离，前置 CloudFront/Route53/WAF，配合 CloudWatch/CloudTrail/KMS 审计与密钥管理", -1))
            ]),
            _cache[2] || (_cache[2] = createStaticVNode('<h2 class="text-2xl font-semibold text-gray-900">4. 项目成果</h2><ul class="list-disc pl-6 space-y-2"><li><b>显著降低延迟：</b>高性能 EC2 与弹性伸缩，旺季响应时间显著下降，查询与订单处理更流畅。</li><li><b>安全性增强：</b>Shield + WAF 自动化防护，约 95% 常见攻击被拦截，内部数据安全与合规性提升。</li><li><b>高可用保障：</b>ALB + 多可用区 EC2 确保服务连续性，旺季与突发情况下仍可稳定提供库存服务。</li><li><b>性能与成本优化：</b>Auto Scaling 提升高并发承载并在低谷降本；Reserved Instances 等手段降低长期成本。</li><li><b>持续改进能力：</b>建立性能评估与安全审计机制，持续优化系统以支撑业务扩展与国际化需求。</li></ul>', 2))
          ])
        ]),
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "fixed bottom-0 left-0 right-0 py-4 text-center text-gray-400 text-sm bg-gradient-to-b from-gray-900 to-gray-800 z-40" }, " © 2024 香港點一雲科技有限公司. All rights reserved. ", -1))
      ]);
    };
  }
};
const archImg = "/vip/assets/case4-architecture.B8OOYqN-.png";
const _hoisted_1 = { class: "min-h-screen bg-gray-50 flex flex-col" };
const _hoisted_2 = { class: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32" };
const _hoisted_3 = { class: "space-y-10 text-gray-800 leading-7" };
const _hoisted_4 = ["src"];
const _sfc_main = {
  __name: "InventoryStable",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(SimpleNavbar),
        createBaseVNode("div", _hoisted_2, [
          _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "text-3xl md:text-4xl font-bold text-gray-900 mb-8" }, "某公司 | 内部数据管理平台", -1)),
          createBaseVNode("div", _hoisted_3, [
            _cache[1] || (_cache[1] = createStaticVNode('<h2 class="text-2xl font-semibold text-gray-900">1. 项目背景</h2><div class="space-y-4"><p>某公司是一家中小型创新型企业，现有员工约30人，年营业额约400万美元。公司专注于法律服务与数字化转型，业务涵盖法律咨询、合规管理、诉讼支持等多个方向，其中内部数据管理平台是公司运营管理的核心系统之一。</p><p>该平台致力于构建一个安全、高效、智能且合规的法律业务管理系统。平台整合案件管理、客户信息、法律文档存储与检索功能，具备高并发处理能力，能够支持公司内部海量法律文档的实时管理与处理，并通过顶级安全防护保障公司及客户敏感数据安全。随着业务国际化发展，需要为不同地区办公室提供统一的数据管理服务。</p><p>随着业务扩展，新加坡办公室访问深圳服务器时存在明显延迟，尤其在大型案件与紧急事务期间，数据同步波动更突出；同时外部网络攻击与 DDoS 事件增多，影响办公与客户服务。基于此，建议采用 AWS 云技术重构平台，实现弹性伸缩、安全合规与便捷运维。</p></div><h2 class="text-2xl font-semibold text-gray-900">2. 项目目标</h2><ul class="list-disc pl-6 space-y-2"><li><b>降低访问延迟：</b>在 AWS 新加坡区域部署 EC2，就近访问显著加速，保证高峰期数据处理流畅。</li><li><b>增强安全性：</b>使用 AWS Shield 与 WAF 等安全服务，抵御网络与 DDoS 攻击，保护敏感法律数据与客户信息。</li><li><b>提升业务可用性：</b>通过 ELB + 多可用区 EC2 消除单点故障，确保案件高峰与紧急处理时平台稳定。</li><li><b>优化性能与成本：</b>以 Auto Scaling 按需伸缩 EC2 容量，结合 Reserved Instances 与成本工具降低 TCO。</li><li><b>持续改进能力：</b>在 AWS 与点一云支持下，建立性能评估与安全审计机制，持续优化平台能力。</li></ul><h2 class="text-2xl font-semibold text-gray-900">3. 项目架构图</h2>', 5)),
            createBaseVNode("figure", null, [
              createBaseVNode("img", {
                src: unref(archImg),
                alt: "内部数据管理平台 AWS 参考架构",
                class: "w-full h-auto rounded-lg"
              }, null, 8, _hoisted_4),
              _cache[0] || (_cache[0] = createBaseVNode("figcaption", { class: "mt-3 text-gray-500 text-sm" }, "架构要点：多可用区 VPC、公私子网、ALB 前端与 Auto Scaling EC2 应用层，S3 存储与端点、Aurora/MySQL 读写分离，前置 WAF/CloudFront/Route53，配合 CloudWatch/CloudTrail/KMS 审计与密钥管理", -1))
            ]),
            _cache[2] || (_cache[2] = createStaticVNode('<h2 class="text-2xl font-semibold text-gray-900">4. 项目成果</h2><ul class="list-disc pl-6 space-y-2"><li><b>显著降低延迟：</b>新加坡区域就近部署，跨境访问延迟明显下降，办公效率与处理速度提升。</li><li><b>安全性增强：</b>Shield + WAF 自动化防护，约 95% 常见攻击被拦截，内部与客户数据更安全。</li><li><b>高可用保障：</b>ELB + 多可用区 EC2 提升可用性至 99.9% 级别，案件高峰与紧急事务期间保持稳定。</li><li><b>性能与成本优化：</b>Auto Scaling 高峰稳定、低谷降本；Reserved Instances 等策略降低长期成本。</li><li><b>持续改进能力：</b>建立例行评估与安全审计流程，持续优化系统以适配业务扩展。</li></ul>', 2))
          ])
        ]),
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "fixed bottom-0 left-0 right-0 py-4 text-center text-gray-400 text-sm bg-gradient-to-b from-gray-900 to-gray-800 z-40" }, " © 2024 香港點一雲科技有限公司. All rights reserved. ", -1))
      ]);
    };
  }
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cases/fengrui",
    name: "FengruiCase",
    component: _sfc_main$3
  },
  {
    path: "/cases/bairui",
    name: "BairuiCase",
    component: _sfc_main$2
  },
  {
    path: "/cases/inventory-game",
    name: "InventoryGameCase",
    component: _sfc_main$1
  },
  {
    path: "/cases/inventory-stable",
    name: "InventoryStableCase",
    component: _sfc_main
  },
  {
    path: "/smb",
    name: "Smb",
    beforeEnter() {
      window.location.href = "https://smb.dycloud.ai/";
    }
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
  history: createWebHashHistory(),
  routes
});
const i18n = createI18n({
  // 使用 Composition API 模式，支持 useI18n()
  legacy: false,
  locale: "zh-TW",
  fallbackLocale: "zh-TW",
  messages,
  // 允许在模板中直接使用 `$t`
  globalInjection: true,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  missingWarn: false,
  fallbackWarn: false
});
const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
//# sourceMappingURL=index.nylBwuL3.js.map
