import { inject as g, computed as m, openBlock as r, createElementBlock as d, normalizeClass as c, renderSlot as i, ref as h, provide as v, createBlock as _, withCtx as y } from "vue";
const w = ["href"], S = {
  __name: "Button",
  props: {
    href: String,
    color: {
      type: String,
      default: "default"
    },
    variant: {
      type: String,
      default: "base",
      validator(t) {
        return ["base", "outline", "light", "text"].includes(t);
      }
    },
    size: {
      type: String,
      default: "base",
      validator(t) {
        return ["base", "large", "small"].includes(t);
      }
    },
    hover: {
      type: Boolean,
      default: !0
    },
    rounded: {
      type: String,
      default: "medium",
      validator(t) {
        return ["medium", "none", "large", "full"].includes(t);
      }
    },
    shadow: {
      type: Boolean,
      default: !1
    },
    unstyle: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = g("pharos"), s = m(() => e.getThemeClasses(o, "button"));
    return (l, n) => o.href ? (r(), d("a", {
      key: 0,
      href: o.href,
      class: c(["l-button flex items-center gap-2 cursor-pointer font-semibold transition disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed", s.value])
    }, [
      i(l.$slots, "default")
    ], 10, w)) : (r(), d("button", {
      key: 1,
      type: "button",
      class: c([s.value, "l-button flex items-center gap-2 cursor-pointer font-semibold transition disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed"])
    }, [
      i(l.$slots, "default")
    ], 2));
  }
}, k = {
  __name: "Floating",
  props: {
    trigger: {
      type: String,
      default: "click",
      validator(t) {
        return ["click", "hover"].includes(t);
      }
    },
    placement: {
      type: String,
      default: "bottom",
      validator: (t) => [
        "top",
        "bottom",
        "left",
        "right",
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end",
        "left-start",
        "left-end",
        "right-start",
        "right-end"
      ].includes(t)
    },
    delay: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 300
    },
    unstyle: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = h(!1);
    v("floating", { isOpen: e, toggle: () => e.value = !e.value, close: () => e.value = !1, open: () => e.value = !0, props: o });
    const a = g("pharos"), u = m(() => a.getThemeClasses(o, "floating"));
    return (b, x) => (r(), d("div", {
      class: c(["l-dropdown relative inline-block", u.value])
    }, [
      i(b.$slots, "default")
    ], 2));
  }
}, p = {
  __name: "Dropdown",
  setup(t) {
    return (o, e) => (r(), _(k, { trigger: "click" }, {
      default: y(() => [
        i(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}, f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: S,
  Dropdown: p
}, Symbol.toStringTag, { value: "Module" }));
function B(t) {
  function o(e, s) {
    var n, a;
    console.log(e);
    const l = [];
    if (!e.unstyle) {
      if (e.color && l.push((n = t.colors[e.color]) == null ? void 0 : n[e.variant]), e.hover && l.push((a = t.colors[e.color]) == null ? void 0 : a.hover[e.variant]), e.rounded && l.push(t.radius[e.rounded]), e.shadow && l.push(t.shadow), e.disabled && l.push("disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed"), e.size && l.push(t.sizes[s][e.size]), e.aspect) {
        const u = e.aspect === "circle" ? "full" : "large";
        l.push(t.radius[u]);
      }
      return l;
    }
  }
  return { theme: t, getThemeClasses: o };
}
const z = p, $ = {
  install(t, o = {}) {
    for (const e in f) {
      const s = f[e];
      t.component(s.name, s);
    }
    t.provide("pharos", B(o.theme));
  }
};
export {
  z as Dropdown,
  $ as lantern
};
