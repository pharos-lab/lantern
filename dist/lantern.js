import { provide as Y, computed as i, openBlock as c, createElementBlock as h, normalizeClass as g, unref as o, renderSlot as p, inject as Z, useSlots as U, ref as $, toDisplayString as P, createCommentVNode as q, createBlock as T, Transition as We, withCtx as R, createElementVNode as w, withDirectives as j, vShow as ee, onMounted as fe, createTextVNode as te, isRef as me, vModelCheckbox as Ve, createVNode as ge, resolveDynamicComponent as Ie, mergeProps as Ae, Fragment as he, Teleport as Re, withModifiers as De, vModelRadio as Ee, renderList as Pe } from "vue";
function O(t) {
  switch (t) {
    case "none":
      return "rounded-none";
    case "normal":
      return "rounded";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    case "xl":
      return "rounded-xl";
    case "pill":
      return "rounded-full";
    case "":
      return "rounded";
  }
}
function je(t, e) {
  switch (t) {
    case "gray":
      if (e == "none" || e == "outlined")
        return "divide-slate-500";
      if (e == "fill")
        return "divide-slate-600";
      if (e == "light")
        return "divide-slate-200";
      break;
    case "red":
      if (e == "none" || e == "outlined")
        return "divide-red-500";
      if (e == "fill")
        return "divide-red-600";
      if (e == "light")
        return "divide-red-200";
      break;
    case "orange":
      if (e == "none" || e == "outlined")
        return "divide-orange-500";
      if (e == "fill")
        return "divide-orange-600";
      if (e == "light")
        return "divide-orange-200";
      break;
    case "yellow":
      if (e == "none" || e == "outlined")
        return "divide-yellow-500";
      if (e == "fill")
        return "divide-yellow-600";
      if (e == "light")
        return "divide-yellow-200";
      break;
    case "green":
      if (e == "none" || e == "outlined")
        return "divide-emerald-500";
      if (e == "fill")
        return "divide-emerald-600";
      if (e == "light")
        return "divide-emerald-200";
      break;
    case "blue":
      if (e == "none" || e == "outlined")
        return "divide-sky-500";
      if (e == "fill")
        return "divide-sky-600";
      if (e == "light")
        return "divide-sky-200";
      break;
  }
}
const Oe = {
  __name: "LAccordion",
  props: {
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "fill",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    rounded: {
      type: Boolean
    }
  },
  setup(t) {
    const e = t;
    Y("accordionColor", e.color), Y("accordionMode", e.mode);
    const r = i(() => O("normal")), n = i(() => je(e.color, e.mode));
    return (s, a) => (c(), h("div", {
      class: g(["l-accordion divide-y", [o(r), o(n)]])
    }, [
      p(s.$slots, "default")
    ], 2));
  }
};
function C(t, e) {
  switch (t) {
    case "gray":
      if (e == "none")
        return "text-slate-500";
      if (e == "outlined")
        return "text-slate-500 border-2 border-slate-500";
      if (e == "fill")
        return "bg-slate-500 text-white";
      if (e == "light")
        return "bg-slate-100 text-slate-600";
      break;
    case "red":
      if (e == "none")
        return "text-red-500";
      if (e == "outlined")
        return "text-red-500 border-2 border-red-500";
      if (e == "fill")
        return "bg-red-500 text-white";
      if (e == "light")
        return "bg-red-100 text-red-600";
      break;
    case "orange":
      if (e == "none")
        return "text-orange-500";
      if (e == "outlined")
        return "text-orange-500 border-2 border-orange-500";
      if (e == "fill")
        return "bg-orange-500 text-white";
      if (e == "light")
        return "bg-orange-100 text-orange-600";
      break;
    case "yellow":
      if (e == "none")
        return "text-yellow-500";
      if (e == "outlined")
        return "text-yellow-500 border-2 border-yellow-500";
      if (e == "fill")
        return "bg-yellow-500 text-white";
      if (e == "light")
        return "bg-yellow-100 text-yellow-600";
      break;
    case "green":
      if (e == "none")
        return "text-emerald-500";
      if (e == "outlined")
        return "text-emerald-500 border-2 border-emerald-500";
      if (e == "fill")
        return "bg-emerald-500 text-white";
      if (e == "light")
        return "bg-emerald-100 text-emerald-600";
      break;
    case "blue":
      if (e == "none")
        return "text-sky-500";
      if (e == "outlined")
        return "text-sky-500 border-2 border-sky-500";
      if (e == "fill")
        return "bg-sky-500 text-white";
      if (e == "light")
        return "bg-sky-100 text-sky-600";
      break;
  }
}
function Ne(t, e) {
  switch (t) {
    case "gray":
      if (e == "none")
        return "text-slate-300";
      if (e == "outlined")
        return "text-slate-300 border-2 border-slate-300";
      if (e == "fill")
        return "bg-slate-300 text-white";
      if (e == "light")
        return "bg-slate-50 text-slate-600";
      break;
    case "red":
      if (e == "none")
        return "text-red-300";
      if (e == "outlined")
        return "text-red-300 border-2 border-red-300";
      if (e == "fill")
        return "bg-red-300 text-white";
      if (e == "light")
        return "bg-red-50 text-red-600";
      break;
    case "orange":
      if (e == "none")
        return "text-orange-300";
      if (e == "outlined")
        return "text-orange-300 border-2 border-orange-300";
      if (e == "fill")
        return "bg-orange-300 text-white";
      if (e == "light")
        return "bg-orange-50 text-orange-600";
      break;
    case "yellow":
      if (e == "none")
        return "text-yellow-300";
      if (e == "outlined")
        return "text-yellow-300 border-2 border-yellow-300";
      if (e == "fill")
        return "bg-yellow-300 text-white";
      if (e == "light")
        return "bg-yellow-50 text-yellow-600";
      break;
    case "green":
      if (e == "none")
        return "text-emerald-300";
      if (e == "outlined")
        return "text-emerald-300 border-2 border-emerald-300";
      if (e == "fill")
        return "bg-emerald-300 text-white";
      if (e == "light")
        return "bg-emerald-50 text-emerald-600";
      break;
    case "blue":
      if (e == "none")
        return "text-sky-300";
      if (e == "outlined")
        return "text-sky-300 border-2 border-sky-300";
      if (e == "fill")
        return "bg-sky-300 text-white";
      if (e == "light")
        return "bg-sky-50 text-sky-600";
      break;
  }
}
const Fe = { class: "l-accordion-item" }, He = {
  __name: "LAccordionItem",
  props: {
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "fill",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    label: String
  },
  setup(t) {
    const e = t, r = Z("accordionColor"), n = Z("accordionMode"), s = U(), a = $(), u = i(() => C(r, n)), y = i(() => Ne(r, n));
    return (S, f) => (c(), h("div", Fe, [
      o(s).label ? (c(), h("div", {
        key: 0,
        class: "l-accordion-item-label cursor-pointer",
        onClick: f[0] || (f[0] = (x) => a.value = !a.value)
      }, [
        p(S.$slots, "label")
      ])) : (c(), h("div", {
        key: 1,
        class: g(["l-accordion-itel-label px-4 py-2 cursor-pointer", o(u)]),
        onClick: f[1] || (f[1] = (x) => a.value = !a.value)
      }, P(e.label), 3)),
      a.value ? (c(), h("div", {
        key: 2,
        class: g(["l-accordion-item-content px-4 py-2", o(y)])
      }, [
        p(S.$slots, "default")
      ], 2)) : q("", !0)
    ]));
  }
};
const pe = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, s] of e)
    r[n] = s;
  return r;
}, Ge = {};
function Ue(t, e, r, n, s, a) {
  return c(), T(We, { name: "fade" }, {
    default: R(() => [
      p(t.$slots, "default")
    ]),
    _: 3
  });
}
const Se = /* @__PURE__ */ pe(Ge, [["render", Ue]]), qe = /* @__PURE__ */ w("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, [
  /* @__PURE__ */ w("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" })
], -1), Je = [
  qe
], be = {
  __name: "LClose",
  props: {
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue", "white"].includes(
          t
        );
      }
    },
    context: {
      type: String,
      default: "none",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    hover: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const e = t;
    $();
    const r = i(() => {
      switch (e.color) {
        case "gray":
          if (e.context == "outlined" || e.context == "none")
            return "fill-slate-500 hover:bg-slate-500 hover:fill-white";
          if (e.context == "fill")
            return "fill-white hover:bg-slate-600";
          if (e.context == "light")
            return "hover:bg-slate-300 fill-slate-600";
        case "red":
          if (e.context == "outlined" || e.context == "none")
            return "fill-red-500 hover:bg-red-500 hover:fill-white";
          if (e.context == "fill")
            return "fill-white hover:bg-red-600";
          if (e.context == "light")
            return "hover:bg-red-300 fill-red-600";
        case "orange":
          if (e.context == "outlined" || e.context == "none")
            return "fill-orange-500 hover:bg-orange-500 hover:fill-white";
          if (e.context == "fill")
            return "fill-white hover:bg-orange-600";
          if (e.context == "light")
            return "hover:bg-orange-300 fill-orange-600";
        case "yellow":
          if (e.context == "outlined" || e.context == "none")
            return "fill-yellow-500 hover:bg-yellow-500 hover:fill-white";
          if (e.context == "fill")
            return "fill-white hover:bg-yellow-600";
          if (e.context == "light")
            return "hover:bg-yellow-300 fill-yellow-600";
        case "green":
          if (e.context == "outlined" || e.context == "none")
            return "fill-emerald-500 hover:bg-emerald-500 hover:fill-white";
          if (e.context == "fill")
            return "fill-white hover:bg-emerald-600";
          if (e.context == "light")
            return "hover:bg-emerald-300 fill-emerald-600";
        case "blue":
          if (e.context == "outlined" || e.context == "none")
            return "fill-sky-500 hover:bg-sky-500 hover:fill-white";
          if (e.context == "fill")
            return "fill-white hover:bg-sky-600";
          if (e.context == "light")
            return "hover:bg-sky-300 fill-sky-600";
      }
    });
    return (n, s) => (c(), h("div", {
      class: g(["l-close p-1 flex justify-center items-center rounded", o(r)])
    }, Je, 2));
  }
};
function re(t, e) {
  switch (t) {
    case "gray":
      if (e == "outlined" || e == "none")
        return "border-slate-500";
      if (e == "fill")
        return "border-slate-600";
      if (e == "light")
        return "border-slate-300";
      break;
    case "red":
      if (e == "outlined" || e == "none")
        return "border-red-500";
      if (e == "fill")
        return "border-red-600";
      if (e == "light")
        return "border-red-300";
      break;
    case "orange":
      if (e == "outlined" || e == "none")
        return "border-orange-500";
      if (e == "fill")
        return "border-orange-600";
      if (e == "light")
        return "border-orange-300";
      break;
    case "yellow":
      if (e == "outlined" || e == "none")
        return "border-yellow-500";
      if (e == "fill")
        return "border-yellow-600";
      if (e == "light")
        return "border-yellow-300";
      break;
    case "green":
      if (e == "outlined" || e == "none")
        return "border-emerald-500";
      if (e == "fill")
        return "border-emerald-600";
      if (e == "light")
        return "border-emerald-300";
      break;
    case "blue":
      if (e == "outlined" || e == "none")
        return "border-sky-500";
      if (e == "fill")
        return "border-sky-600";
      if (e == "light")
        return "border-sky-300";
      break;
  }
}
const Ke = {
  __name: "LAlert",
  props: {
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "fill",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    rounded: {
      type: String,
      validator(t) {
        return ["none", "sm", "normal", "md", "lg", "xl", "pills"].includes(
          t
        );
      }
    },
    dismissable: {
      type: Boolean,
      default: !0
    },
    leftBorder: Boolean
  },
  setup(t) {
    const e = t, r = $(!0), n = i(() => C(e.color, e.mode)), s = i(() => O(e.rounded)), a = i(() => {
      if (e.leftBorder)
        return re(e.color, e.mode) + " border-l-4";
    });
    return (u, y) => (c(), T(Se, null, {
      default: R(() => [
        j(w("div", {
          class: g([[o(n), o(s), o(a)], "l-alert p-4 font-semibold shadow-md relative"])
        }, [
          e.dismissable ? (c(), T(be, {
            key: 0,
            class: "float-right w-5 h-5",
            onClick: y[0] || (y[0] = (S) => r.value = !1),
            color: e.color,
            context: e.mode
          }, null, 8, ["color", "context"])) : q("", !0),
          p(u.$slots, "default")
        ], 2), [
          [ee, r.value]
        ])
      ]),
      _: 3
    }));
  }
}, Ce = {
  __name: "LAspect",
  props: {
    aspect: String,
    validator(t) {
      return t.match(/\d\/\d/);
    }
  },
  setup(t) {
    const e = t, r = $();
    return fe(() => {
      r.value.style.aspectRatio = e.aspect;
    }), (n, s) => (c(), h("div", {
      class: "l-aspect",
      ref_key: "tag",
      ref: r
    }, [
      p(n.$slots, "default")
    ], 512));
  }
}, Qe = ["src", "alt"], Xe = {
  __name: "LAvatar",
  props: {
    alt: String,
    src: String,
    size: {
      type: String,
      validator(t) {
        return [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
          "6xl"
        ].includes(t);
      }
    }
  },
  setup(t) {
    const e = t, r = i(() => {
      switch (e.size) {
        case "xs":
          return "w-5 h-5";
        case "sm":
          return "w-6 h-6";
        case "md":
          return "w-8 h-8";
        case "lg":
          return "w-12 h-12";
        case "xl":
          return "w-16 h-16";
        case "2xl":
          return "w-20 h-20";
        case "3xl":
          return "w-28 h-28";
        case "4xl":
          return "w-40 h-40";
        case "5xl":
          return "w-48 h-48";
        default:
          return "w-10 h-10";
      }
    });
    return (n, s) => (c(), h("div", {
      class: g(["l-avatar inline-block overflow-hidden rounded-full", [o(r)]])
    }, [
      w("img", {
        src: e.src,
        alt: e.alt,
        class: "min-w-full l-avatar-image"
      }, null, 8, Qe)
    ], 2));
  }
};
function $e(t, e) {
  switch (t) {
    case "gray":
      if (e == "outlined")
        return "hover:bg-slate-500 hover:text-white";
      if (e == "fill")
        return "hover:bg-slate-600";
      if (e == "light")
        return "hover:bg-slate-200 text-slate-700";
      break;
    case "red":
      if (e == "outlined")
        return "hover:bg-red-500 hover:text-white";
      if (e == "fill")
        return "hover:bg-red-600";
      if (e == "light")
        return "hover:bg-red-200 text-red-700";
      break;
    case "orange":
      if (e == "outlined")
        return "hover:bg-orange-500 hover:text-white";
      if (e == "fill")
        return "hover:bg-orange-600";
      if (e == "light")
        return "hover:bg-orange-200 text-orange-700";
      break;
    case "yellow":
      if (e == "outlined")
        return "hover:bg-yellow-500 hover:text-white";
      if (e == "fill")
        return "hover:bg-yellow-600";
      if (e == "light")
        return "hover:bg-yellow-200 text-yellow-700";
      break;
    case "green":
      if (e == "outlined")
        return "hover:bg-emerald-500 hover:text-white";
      if (e == "fill")
        return "hover:bg-emerald-600";
      if (e == "light")
        return "hover:bg-emerald-200 text-emerald-700";
      break;
    case "blue":
      if (e == "outlined")
        return "hover:bg-sky-500 hover:text-white";
      if (e == "fill")
        return "hover:bg-sky-600";
      if (e == "light")
        return "hover:bg-sky-200 text-sky-700";
      break;
  }
}
function W(t, e) {
  switch (t) {
    case "gray":
      if (e == "outlined" || e == "fill" || e == "light")
        return "focus:outline-none focus:ring focus:ring-gray-300";
      break;
    case "red":
      if (e == "outlined" || e == "fill" || e == "light")
        return "focus:outline-none focus:ring focus:ring-red-300";
      break;
    case "orange":
      if (e == "outlined" || e == "fill" || e == "light")
        return "focus:outline-none focus:ring focus:ring-orange-300";
      break;
    case "yellow":
      if (e == "outlined" || e == "fill" || e == "light")
        return "focus:outline-none focus:ring focus:ring-yellow-300";
      break;
    case "green":
      if (e == "outlined" || e == "fill" || e == "light")
        return "focus:outline-none focus:ring focus:ring-emerald-300";
      break;
    case "blue":
      if (e == "outlined" || e == "fill" || e == "light")
        return "focus:outline-none focus:ring focus:ring-sky-300";
      break;
  }
}
const ye = {
  __name: "LButton",
  props: {
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "fill",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    rounded: {
      type: String,
      validator(t) {
        return ["none", "sm", "normal", "md", "lg", "xl", "pill"].includes(t);
      }
    },
    hover: {
      type: Boolean,
      default: !0
    },
    focus: String
  },
  setup(t) {
    const e = t, r = i(() => C(e.color, e.mode)), n = i(() => e.hover ? $e(e.color, e.mode) : ""), s = i(() => O(e.rounded)), a = i(() => e.focus ? W(e.focus, e.mode) : e.focus == "" ? W(e.color, e.mode) : "focus:outline-none");
    return (u, y) => (c(), h("button", {
      class: g(["l-button py-2 px-4 font-semibold", [o(r), o(s), o(n), o(a)]])
    }, [
      p(u.$slots, "default", {}, () => [
        te("Click me")
      ])
    ], 2));
  }
};
function Ye(t) {
  switch (t) {
    case "top":
      return "flex flex-col";
    case "bottom":
      return "flex flex-col-reverse";
    case "left":
      return "flex flex-row";
    case "right":
      return "flex flex-row-reverse";
  }
}
const Ze = ["src", "alt"], et = { class: "l-card-header" }, tt = { class: "l-card-body" }, rt = { class: "l-card-footer" }, lt = {
  __name: "LCard",
  props: {
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "fill",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    img: String,
    position: {
      type: String,
      default: "top",
      validator(t) {
        return ["top", "bottom", "left", "right"].includes(t);
      }
    },
    size: {
      type: String,
      validator(t) {
        return ["w-1/2", "w-1/3", "w-1/4", "w-1/5", "w-1/6"].includes(t);
      }
    },
    aspect: {
      type: String,
      validator(t) {
        return t.match(/\d\/\d/);
      }
    }
  },
  setup(t) {
    const e = t, r = i(() => {
      if (e.size) {
        let u = e.size.match(/w-(\d)\/(\d)/);
        return `w-${u[2] - u[1]}/${u[2]}`;
      }
    }), n = i(() => C(e.color, e.mode)), s = i(() => Ye(e.position)), a = i(() => {
      if (e.aspect)
        return e.aspect;
      switch (e.position) {
        case "top":
        case "bottom":
          return "2/1";
        case "right":
        case "left":
          return "auto";
      }
    });
    return (u, y) => (c(), h("div", {
      class: g(["l-card shadow-md", [o(n), o(s), e.noRounded ? "" : "rounded-md"]])
    }, [
      e.img ? (c(), T(Ce, {
        key: 0,
        aspect: o(a),
        class: g(["l-card-image", e.size])
      }, {
        default: R(() => [
          w("img", {
            src: e.img,
            alt: e.alt ?? "card illustration",
            class: "object-cover"
          }, null, 8, Ze)
        ]),
        _: 1
      }, 8, ["aspect", "class"])) : q("", !0),
      w("div", {
        class: g(["l-card-content flex-grow", o(r)])
      }, [
        w("div", et, [
          p(u.$slots, "header")
        ]),
        w("div", tt, [
          p(u.$slots, "default")
        ]),
        w("div", rt, [
          p(u.$slots, "footer")
        ])
      ], 2)
    ], 2));
  }
};
function ve(t) {
  if (t != null)
    return t == "" ? "border" : t;
}
function Le(t, e, r = !1) {
  switch (t) {
    case "gray":
      if (e == "outlined")
        return (r ? "hover:bg-slate-200 " : "") + " checked:bg-slate-500 checked:hover:bg-slate-600";
      if (e == "fill")
        return (r ? "hover:bg-slate-600 " : "") + " bg-slate-500 checked:bg-slate-700 checked:hover:bg-slate-800";
      if (e == "light")
        return (r ? "hover:bg-slate-300 " : "") + " bg-slate-200 checked:bg-slate-500 checked:hover:bg-slate600";
      break;
    case "red":
      if (e == "outlined")
        return (r ? "hover:bg-red-200 " : "") + " checked:bg-red-500 checked:hover:bg-red-600";
      if (e == "fill")
        return (r ? "hover:bg-red-600 " : "") + " bg-red-500 checked:bg-red-700 checked:hover:bg-red-800";
      if (e == "light")
        return (r ? "hover:bg-red-300 " : "") + " bg-red-200 checked:bg-red-500 checked:hover:bg-red-600";
      break;
    case "orange":
      if (e == "outlined")
        return (r ? "hover:bg-orange-200 " : "") + " checked:bg-orange-500 checked:hover:bg-orange-600";
      if (e == "fill")
        return (r ? "hover:bg-orange-600 " : "") + " bg-orange-500 checked:bg-orange-700 checked:hover:bg-orange-800";
      if (e == "light")
        return (r ? "hover:bg-orange-300 " : "") + " bg-orange-200 checked:bg-orange-500 checked:hover:bg-orange-600";
      break;
    case "yellow":
      if (e == "outlined")
        return (r ? "hover:bg-yellow-200 " : "") + " checked:bg-yellow-500 checked:hover:bg-yellow-600";
      if (e == "fill")
        return (r ? "hover:bg-yellow-600 " : "") + " bg-yellow-500 checked:bg-yellow-700 checked:hover:bg-yellow-800";
      if (e == "light")
        return (r ? "hover:bg-yellow-300 " : "") + " bg-yellow-200 checked:bg-yellow-500 checked:hover:bg-yellow-600";
      break;
    case "green":
      if (e == "outlined")
        return (r ? "hover:bg-emerald-200 " : "") + " checked:bg-emerald-500 checked:hover:bg-emerald-600";
      if (e == "fill")
        return (r ? "hover:bg-emerald-600 " : "") + " bg-emerald-500 checked:bg-emerald-700 checked:hover:bg-emerald-800";
      if (e == "light")
        return (r ? "hover:bg-emerald-300 " : "") + " bg-emerald-200 checked:bg-emerald-500 checked:hover:bg-emerald-600";
      break;
    case "blue":
      if (e == "outlined")
        return (r ? "hover:bg-sky-200 " : "") + " checked:bg-sky-500 checked:hover:bg-sky-600";
      if (e == "fill")
        return (r ? "hover:bg-sky-600 " : "") + " bg-sky-500 checked:bg-sky-700 checked:hover:bg-sky-800";
      if (e == "light")
        return (r ? "hover:bg-sky-300 " : "") + " bg-sky-200 checked:bg-sky-500 checked:hover:bg-sky-600";
      break;
  }
}
const nt = {
  __name: "LCheckbox",
  props: {
    modelValue: String,
    rounded: {
      type: String,
      default: "normal",
      validator(t) {
        return ["none", "sm", "normal", "md", "lg", "xl", "pill"].includes(t);
      }
    },
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "outlined",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    border: {
      type: String
    },
    focus: {
      type: String
    },
    hover: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = t, n = i({
      get() {
        return r.modelValue;
      },
      set(x) {
        e("update:modelValue", x);
      }
    }), s = i(() => O(r.rounded)), a = i(() => C(r.color, r.mode)), u = i(() => r.focus ? W(r.focus, r.mode) : r.focus == "" ? W(r.color, r.mode) : "focus:outline-none"), y = i(() => r.border == null ? "" : re(r.color, r.mode)), S = i(() => ve(r.border)), f = i(() => Le(r.color, r.mode, r.hover));
    return (x, M) => j((c(), h("input", {
      class: g(["l-checkbox appearance-none w-5 h-5", [
        o(s),
        o(a),
        o(y),
        o(S),
        o(u),
        o(f)
      ]]),
      type: "checkbox",
      "onUpdate:modelValue": M[0] || (M[0] = (N) => me(n) ? n.value = N : null)
    }, null, 2)), [
      [Ve, o(n)]
    ]);
  }
}, ot = /* @__PURE__ */ pe(nt, [["__scopeId", "data-v-37e05823"]]), it = {
  __name: "LDivider",
  props: {
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    size: {
      type: String,
      default: "normal",
      validator(t) {
        return ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "fill",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    }
  },
  setup(t) {
    const e = t, r = i(() => {
      switch (e.size) {
        case "xs":
          return "h-px";
        case "sm":
          return "h-0.5";
        case "md":
          return "h-1";
        case "lg":
          return "h-2";
        case "xl":
          return "h-5";
        case "2xl":
          return "h-6";
        case "3xl":
          return "h-8";
        default:
          return "h-px";
      }
    }), n = i(() => e.color ? C(e.color, e.mode) : "bg-slate-800");
    return (s, a) => (c(), h("div", {
      class: g([[o(r), o(n)], "l-divider"])
    }, null, 2));
  }
}, st = { class: "l-dropdown relative inline-block" }, at = {
  __name: "LDropdown",
  props: {
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    click: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    margin: {
      type: Boolean,
      default: !1
    },
    right: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t;
    Y("dropdownColor", e.color);
    const r = U(), n = $(!1), s = i(() => {
      if (e.rounded && !e.margin && n.value)
        return "rounded-t";
      if (e.rounded)
        return "rounded";
    }), a = i(() => e.rounded && !e.margin ? "rounded-b" : e.rounded && e.margin ? "rounded mt-2" : e.rounded ? "rounded" : e.margin ? "mt-2" : ""), u = i(() => e.right ? "right-0" : ""), y = i(() => C(e.color, "fill"));
    return (S, f) => (c(), h("div", st, [
      o(r).label ? (c(), h("div", {
        key: 0,
        class: g(["inline-block", o(y)]),
        onMouseenter: f[0] || (f[0] = (x) => e.click ? null : n.value = !0),
        onMouseleave: f[1] || (f[1] = (x) => e.click ? null : n.value = !1),
        onClick: f[2] || (f[2] = (x) => e.click ? n.value = !n.value : null)
      }, [
        p(S.$slots, "label")
      ], 34)) : (c(), T(ye, {
        key: 1,
        hover: "",
        class: g(["l-dropdown-button ease-in-out transition-all duration-500", o(s)]),
        color: e.color,
        onMouseenter: f[3] || (f[3] = (x) => e.click ? null : n.value = !0),
        onMouseleave: f[4] || (f[4] = (x) => e.click ? null : n.value = !1),
        onClick: f[5] || (f[5] = (x) => e.click ? n.value = !n.value : null)
      }, {
        default: R(() => [
          te(P(e.label ?? "Add a label"), 1)
        ]),
        _: 1
      }, 8, ["color", "class"])),
      ge(Se, null, {
        default: R(() => [
          j(w("div", {
            class: g(["l-dropdown-items absolute whitespace-nowrap overflow-hidden z-10", [o(a), o(u)]]),
            onMouseenter: f[6] || (f[6] = (x) => n.value = !0),
            onMouseleave: f[7] || (f[7] = (x) => n.value = !1)
          }, [
            p(S.$slots, "default")
          ], 34), [
            [ee, n.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, ut = {
  __name: "LDropdownItem",
  props: {
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    }
  },
  setup(t) {
    const e = Z("dropdownColor"), r = i(() => C(e, "light") + " " + $e(e, "light"));
    return (n, s) => (c(), h("div", {
      class: g(["l-dropdown-item px-4 py-2", o(r)])
    }, [
      p(n.$slots, "default")
    ], 2));
  }
}, ct = {
  __name: "LHeading",
  props: {
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "none",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    size: {
      type: String,
      default: "normal",
      validator(t) {
        return [
          "xs",
          "sm",
          "normal",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
          "6xl",
          "7xl",
          "8xl",
          "9xl"
        ].includes(t);
      }
    },
    level: {
      type: String,
      default: "2",
      validator(t) {
        return ["1", "2", "3", "4", "5", "6"].includes(t);
      }
    },
    noMargin: {
      type: Boolean,
      default: !1
    },
    noPadding: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, r = i(() => C(e.color, e.mode)), n = i(() => "h" + e.level), s = i(() => e.noPadding ? "" : "py-2 px-4"), a = i(() => e.noMargin ? "" : "my-4"), u = i(() => useSizeSwitch(e.size));
    return (y, S) => (c(), T(Ie(o(n)), {
      class: g(["l-heading", [o(u), o(r), o(a), o(s)]])
    }, {
      default: R(() => [
        p(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
};
function dt(t, e) {
  switch (t) {
    case "gray":
      if (e == "light")
        return "placeholder:text-slate-500";
      if (e == "fill")
        return "placeholder:text-slate-200";
      if (e == "outlined")
        return "placeholder:text-slate-500";
      break;
    case "red":
      if (e == "light")
        return "placeholder:text-red-500";
      if (e == "fill")
        return "placeholder:text-red-200";
      if (e == "outlined")
        return "placeholder:text-red-500";
      break;
    case "orange":
      if (e == "light")
        return "placeholder:text-orange-500";
      if (e == "fill")
        return "placeholder:text-orange-200";
      if (e == "outlined")
        return "placeholder:text-orange-500";
      break;
    case "yellow":
      if (e == "light")
        return "placeholder:text-yellow-500";
      if (e == "fill")
        return "placeholder:text-yellow-200";
      if (e == "outlined")
        return "placeholder:text-yellow-500";
      break;
    case "green":
      if (e == "light")
        return "placeholder:text-green-500";
      if (e == "fill")
        return "placeholder:text-green-200";
      if (e == "outlined")
        return "placeholder:text-green-500";
      break;
    case "blue":
      if (e == "light")
        return "placeholder:text-sky-500";
      if (e == "fill")
        return "placeholder:text-sky-200";
      if (e == "outlined")
        return "placeholder:text-sky-500";
      break;
  }
}
const ft = ["value"], Be = {
  __name: "LInput",
  props: {
    modelValue: String,
    noRounded: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "fill",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    border: {
      type: String
    },
    focus: {
      type: String
    }
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = t;
    U();
    const r = i(() => e.noRounded ? "" : "rounded"), n = i(() => C(e.color, e.mode)), s = i(() => e.focus ? W(e.focus, e.mode) : e.focus == "" ? W(e.color, e.mode) : "focus:outline-none"), a = i(() => e.border == null ? "" : re(e.color, e.mode)), u = i(() => ve(e.border)), y = i(() => dt(e.color, e.mode));
    return (S, f) => (c(), h("input", {
      class: g(["l-input flex-grow px-4 py-2 placeholder:italic", [
        o(r),
        o(n),
        o(a),
        o(u),
        o(s),
        o(y)
      ]]),
      value: t.modelValue,
      onInput: f[0] || (f[0] = (x) => S.$emit("update:modelValue", x.target.value))
    }, null, 42, ft));
  }
};
function gt(t, e) {
  switch (t) {
    case "gray":
      if (e == "light")
        return "text-slate-300";
      if (e == "normal")
        return "text-slate-500";
      if (e == "dark")
        return "text-slate-700";
      break;
    case "red":
      if (e == "light")
        return "text-red-300";
      if (e == "normal")
        return "text-red-500";
      if (e == "dark")
        return "text-red-700";
      break;
    case "orange":
      if (e == "light")
        return "text-orange-300";
      if (e == "normal")
        return "text-orange-500";
      if (e == "dark")
        return "text-orange-700";
      break;
    case "yellow":
      if (e == "light")
        return "text-yellow-300";
      if (e == "normal")
        return "text-yellow-500";
      if (e == "dark")
        return "text-yellow-700";
      break;
    case "green":
      if (e == "light")
        return "text-emerald-300";
      if (e == "normal")
        return "text-emerald-500";
      if (e == "dark")
        return "text-emerald-700";
      break;
    case "blue":
      if (e == "light")
        return "text-sky-300";
      if (e == "normal")
        return "text-sky-500";
      if (e == "dark")
        return "text-sky-700";
      break;
  }
}
const ht = {
  inheritAttrs: !1
}, pt = /* @__PURE__ */ Object.assign(ht, {
  __name: "LInputGroup",
  props: {
    label: String,
    position: {
      type: String,
      default: "top",
      validator(t) {
        return ["top", "left"].includes(t);
      }
    },
    noRounded: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "fill",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    border: {
      type: Boolean,
      default: !1
    },
    focus: {
      type: Boolean,
      default: !1
    },
    autofocus: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, r = U(), n = i(() => {
      switch (e.position) {
        case "top":
          return "flex flex-col gap-y-4";
        case "left":
          return "flex items-center gap-x-4";
      }
    }), s = i(() => gt(e.color, "dark"));
    return (a, u) => (c(), h("div", {
      class: g(["l-input", [o(n)]])
    }, [
      p(a.$slots, "label", {}, () => [
        o(r).label || e.label ? (c(), h("label", {
          key: 0,
          class: g(["l-input-label", o(s)])
        }, P(e.label), 3)) : q("", !0)
      ]),
      ge(Be, Ae({ class: "flex-grow" }, { ...a.$attrs, ...e }), null, 16)
    ], 2));
  }
}), bt = { class: "l-modal-content w-2/3 opacity-100 bg-white relative" }, yt = { class: "l-modal-header p-4" }, vt = { class: "l-modal-body p-4" }, wt = { class: "l-modal-footer p-4" }, xt = {
  __name: "LModal",
  props: {
    label: {
      type: String
    },
    dismissable: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const e = t, r = $(!1);
    return (n, s) => (c(), h(he, null, [
      w("div", {
        class: "inline-block l-modal-trigger",
        onClick: s[0] || (s[0] = (a) => r.value = !0)
      }, [
        p(n.$slots, "label", {}, () => [
          ge(ye, null, {
            default: R(() => [
              te(P(e.label ?? "Add a label"), 1)
            ]),
            _: 1
          })
        ])
      ]),
      (c(), T(Re, { to: "body" }, [
        j(w("div", {
          class: "l-modal absolute inset-0 flex justify-center items-start pt-64 bg-slate-500/50",
          onClick: s[2] || (s[2] = De((a) => r.value = !1, ["self"]))
        }, [
          w("div", bt, [
            e.dismissable ? (c(), T(be, {
              key: 0,
              onClick: s[1] || (s[1] = (a) => r.value = !1),
              color: "gray",
              context: "outlined",
              class: "right-2 absolute top-2"
            })) : q("", !0),
            w("div", yt, [
              p(n.$slots, "header")
            ]),
            w("div", vt, [
              p(n.$slots, "default")
            ]),
            w("div", wt, [
              p(n.$slots, "footer")
            ])
          ])
        ], 512), [
          [ee, r.value]
        ])
      ]))
    ], 64));
  }
}, kt = {
  __name: "LParagraph",
  props: {
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "none",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    background: {
      type: Boolean,
      default: !1
    },
    noMargin: {
      type: Boolean,
      default: !1
    },
    noPadding: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "normal",
      validator(t) {
        return [
          "xs",
          "sm",
          "normal",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
          "6xl",
          "7xl",
          "8xl",
          "9xl"
        ].includes(t);
      }
    }
  },
  setup(t) {
    const e = t, r = i(() => C(e.color, e.mode)), n = i(() => e.noMargin ? "" : "my-4"), s = i(() => e.noPadding ? "" : "px-4 py-2"), a = i(() => useSizeSwitch(e.size));
    return (u, y) => (c(), h("p", {
      class: g(["l-paragraph", [o(r), o(s), o(n), o(a)]])
    }, [
      p(u.$slots, "default")
    ], 2));
  }
};
const _t = {
  __name: "LRadio",
  props: {
    modelValue: String,
    rounded: {
      type: String,
      default: "pill",
      validator(t) {
        return ["none", "sm", "normal", "md", "lg", "xl", "pill"].includes(t);
      }
    },
    color: {
      type: String,
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "outlined",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    border: {
      type: String
    },
    focus: {
      type: String
    },
    hover: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = t, n = i({
      get() {
        return r.modelValue;
      },
      set(x) {
        e("update:modelValue", x);
      }
    }), s = i(() => O(r.rounded)), a = i(() => C(r.color, r.mode)), u = i(() => r.focus ? W(r.focus, r.mode) : r.focus == "" ? W(r.color, r.mode) : "focus:outline-none"), y = i(() => r.border == null ? "" : re(r.color, r.mode)), S = i(() => ve(r.border)), f = i(() => Le(r.color, r.mode, !0));
    return (x, M) => j((c(), h("input", {
      class: g(["l-radio appearance-none h-4 w-4", [
        o(s),
        o(a),
        o(y),
        o(S),
        o(u),
        o(f)
      ]]),
      type: "radio",
      "onUpdate:modelValue": M[0] || (M[0] = (N) => me(n) ? n.value = N : null)
    }, null, 2)), [
      [Ee, o(n)]
    ]);
  }
}, mt = /* @__PURE__ */ pe(_t, [["__scopeId", "data-v-c11ec624"]]), St = ["onClick"], Ct = {
  __name: "LTabs",
  props: {
    color: {
      type: String,
      default: "gray",
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "none",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    background: {
      type: Boolean,
      default: !1
    },
    pills: {
      type: Boolean,
      default: !1
    },
    card: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, r = $([]), n = $(), s = $(), a = $(), u = $();
    Y("selected", n), fe(() => {
      U().default().forEach((M, N) => {
        r.value.push(M.props.title);
      }), n.value = r.value[0];
    });
    const y = i(() => {
      switch (s.value = C(e.color, "fill"), u.value = C(e.color, e.mode), e.color) {
        case "gray":
          return a.value = `${e.card ? "bg-slate-50" : ""} border-slate-500`, "text-slate-700 hover:bg-slate-200";
        case "red":
          return a.value = `${e.card ? "bg-red-50" : ""} border-red-500`, "text-red-700 hover:bg-red-100";
        case "orange":
          return a.value = `${e.card ? "bg-orange-50" : ""} border-orange-500`, "text-orange-700 hover:bg-orange-100";
        case "yellow":
          return a.value = `${e.card ? "bg-yellow-50" : ""} border-yellow-500`, "text-yellow-700 hover:bg-yellow-100";
        case "green":
          return a.value = `${e.card ? "bg-emerald-50" : ""} border-emerald-500`, "text-emerald-700 hover:bg-emerald-100";
        case "blue":
          return a.value = `${e.card ? "bg-sky-50" : ""} border-sky-500`, "text-sky-700 hover:bg-sky-100";
      }
    }), S = i(() => e.pills ? "rounded-lg my-2 mx-1" : "rounded-t mt-2"), f = i(() => e.card ? "border shadow-md" : ""), x = i(() => e.mode == "outlined" ? "border-0" : "border-b-2");
    return (M, N) => (c(), h("div", {
      class: g(["l-tabs rounded overflow-hidden", o(f)])
    }, [
      w("ul", {
        class: g(["flex px-4 l-tabs-labels", [a.value, o(x)]])
      }, [
        (c(!0), h(he, null, Pe(r.value, (J) => (c(), h("li", {
          key: J,
          onClick: (Mt) => n.value = J,
          class: g(["px-4 py-2 font-semibold l-tabs-label", [n.value == J ? s.value : o(y), o(S)]])
        }, P(J), 11, St))), 128))
      ], 2),
      w("div", {
        class: g(["l-tabs-items p-4 relative", u.value])
      }, [
        p(M.$slots, "default")
      ], 2)
    ], 2));
  }
}, $t = { class: "l-tabs-item" }, Lt = {
  __name: "LTabsItem",
  props: {
    title: {
      type: String
    }
  },
  setup(t) {
    const e = t, r = Z("selected"), n = i(() => e.title == r.value);
    return (s, a) => j((c(), h("div", $t, [
      p(s.$slots, "default")
    ], 512)), [
      [ee, o(n)]
    ]);
  }
};
var we = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, l = (t, e, r) => (we(t, e, "read from private field"), r ? r.call(t) : e.get(t)), k = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, L = (t, e, r, n) => (we(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), v = (t, e, r) => (we(t, e, "access private method"), r), G, I, b, _, A, d, m, H, z, ie, Me, se, ze, ae, Te, E, F, K, le, Q, ne, X, oe, ue, xe, ce, ke, V, D;
const B = class {
  constructor(t, e, r) {
    if (k(this, ie), k(this, se), k(this, ae), k(this, E), k(this, K), k(this, Q), k(this, X), k(this, ue), k(this, ce), k(this, V), k(this, b, void 0), k(this, _, void 0), k(this, A, void 0), k(this, d, void 0), k(this, m, void 0), k(this, H, !1), k(this, z, void 0), !l(B, G))
      throw new TypeError("Blink Class is not constructable");
    L(this, A, t), L(this, d, e), L(this, m, r), L(this, z, r.arrow ? document.createElement("div") : null);
  }
  static create(t, e, r) {
    var n, s, a;
    const u = Object.assign(
      {
        placement: "auto",
        event: "hover",
        arrow: !1,
        dropdown: "none",
        duration: 700
      },
      r
    );
    return L(B, G, !0), L(B, I, new B(t, e, u)), L(B, G, !1), v(n = l(B, I), ie, Me).call(n), v(s = l(B, I), se, ze).call(s), v(a = l(B, I), ae, Te).call(a), l(B, I);
  }
};
let de = B;
G = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakSet(), Me = function() {
  l(this, d).style.position = "absolute", l(this, d).style.zIndex = 10, l(this, d).style.opacity = 0, l(this, d).style.margin = 0, l(this, d).style.padding = "8px 12px", l(this, d).style.transition = `opacity ${l(this, m).duration / 1e3}s ease`, L(this, b, l(this, A).getBoundingClientRect()), L(this, _, l(this, d).getBoundingClientRect()), l(this, d).style.display = "none";
}, se = /* @__PURE__ */ new WeakSet(), ze = function() {
  l(this, m).event == "hover" && (l(this, A).addEventListener("mouseenter", () => {
    l(this, d).style.display = "block", setTimeout(() => {
      l(this, d).style.opacity = 100;
    }, 100);
  }), l(this, A).addEventListener("mouseleave", () => {
    l(this, d).style.opacity = 0, setTimeout(() => {
      l(this, d).style.display = "none";
    }, l(this, m).duration);
  })), l(this, m).event == "click" && l(this, A).addEventListener("click", () => {
    l(this, H) ? (l(this, d).style.opacity = 0, setTimeout(() => {
      l(this, d).style.display = "none";
    }, l(this, m).duration), L(this, H, !1)) : (l(this, d).style.display = "block", setTimeout(() => {
      l(this, d).style.opacity = 100;
    }, 100), L(this, H, !0));
  });
}, ae = /* @__PURE__ */ new WeakSet(), Te = function() {
  if (l(this, m).dropdown !== "none")
    v(this, ce, ke).call(this, l(this, m).dropdown);
  else {
    if (l(this, m).arrow) {
      const t = window.getComputedStyle(
        l(this, d)
      ).backgroundColor;
      l(this, z).style.cssText = `width: 10px;
           height: 10px;
           transform: rotate(45deg);
           position: absolute;
           background-color: ${t};`, l(this, d).appendChild(l(this, z));
    }
    switch (l(this, m).placement) {
      case "top":
        v(this, E, F).call(this);
        break;
      case "bottom":
        v(this, K, le).call(this);
        break;
      case "left":
        v(this, Q, ne).call(this);
        break;
      case "right":
        v(this, X, oe).call(this);
        break;
      case "auto":
        v(this, ue, xe).call(this);
        break;
      default:
        v(this, E, F).call(this);
    }
  }
  v(this, V, D).call(this, l(this, m).placement) || console.warn(
    "Be carreful, there is no place for the tooltip to show !"
  );
}, E = /* @__PURE__ */ new WeakSet(), F = function() {
  l(this, d).style.left = l(this, b).left + (l(this, b).width - l(this, _).width) / 2 + "px", l(this, d).style.top = l(this, b).top - l(this, _).height - 15 + "px", l(this, m).arrow && (l(this, z).style.cssText += `bottom: -5px;left: ${l(this, _).width / 2 - 5}px;`);
}, K = /* @__PURE__ */ new WeakSet(), le = function() {
  l(this, d).style.left = l(this, b).left + (l(this, b).width - l(this, _).width) / 2 + "px", l(this, d).style.top = l(this, b).bottom + 15 + "px", l(this, m).arrow && (l(this, z).style.cssText += `top: -5px;
         left: ${l(this, _).width / 2 - 5}px;`);
}, Q = /* @__PURE__ */ new WeakSet(), ne = function() {
  l(this, d).style.top = l(this, b).top + (l(this, b).height - l(this, _).height) / 2 + "px", l(this, d).style.left = l(this, b).left - l(this, _).width - 20 + "px", l(this, m).arrow && (l(this, z).style.cssText += `top: ${l(this, _).height / 2 - 5}px;right: -5px;`);
}, X = /* @__PURE__ */ new WeakSet(), oe = function() {
  l(this, d).style.top = l(this, b).top + (l(this, b).height - l(this, _).height) / 2 + "px", l(this, d).style.left = l(this, b).right + 15 + "px", l(this, m).arrow && (l(this, z).style.cssText += `top: ${l(this, _).height / 2 - 5}px;left: -5px;`);
}, ue = /* @__PURE__ */ new WeakSet(), xe = function() {
  v(this, V, D).call(this, "top") ? v(this, E, F).call(this) : v(this, V, D).call(this, "bottom") ? v(this, K, le).call(this) : v(this, V, D).call(this, "right") ? v(this, X, oe).call(this) : v(this, V, D).call(this, "left") ? v(this, Q, ne).call(this) : (v(this, E, F).call(this), console.warn(
    "Be carreful, there is no place for the tooltip to show !"
  ));
}, ce = /* @__PURE__ */ new WeakSet(), ke = function(t) {
  t == "right" ? (l(this, d).style.left = l(this, b).right - l(this, _).width + "px", l(this, d).style.top = l(this, b).bottom + "px") : (l(this, d).style.left = l(this, b).left + "px", l(this, d).style.top = l(this, b).bottom + "px");
}, V = /* @__PURE__ */ new WeakSet(), D = function(t) {
  switch (t) {
    case "top":
      return l(this, b).top > l(this, _).height + 20;
    case "bottom":
      return window.innerHeight - l(this, b).bottom > l(this, _).height + 20;
    case "left":
      return l(this, b).left > l(this, _).width + 20;
    case "right":
      return window.innerWidth - l(this, b).right > l(this, _).width + 20;
    case "auto":
      return !0;
  }
}, k(de, G, !1), k(de, I, void 0);
const Bt = {
  __name: "LTooltip",
  props: {
    tooltip: String,
    color: {
      type: String,
      default: "gray",
      validator(t) {
        return ["gray", "red", "orange", "yellow", "blue"].includes(t);
      }
    },
    mode: {
      type: String,
      default: "fill",
      validator(t) {
        return ["none", "fill", "light", "outlined"].includes(t);
      }
    },
    rounded: {
      type: String,
      default: "normal",
      validator(t) {
        return ["none", "sm", "normal", "md", "lg", "xl", "pills"].includes(
          t
        );
      }
    },
    arrow: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      default: "top",
      validator(t) {
        return ["top", "bottom", "left", "right"].includes(t);
      }
    },
    event: {
      type: String,
      default: "hover",
      validator(t) {
        return ["hover", "click"].includes(t);
      }
    },
    dropdown: {
      type: String,
      default: "none",
      validator(t) {
        return ["left", "right"].includes(t);
      }
    }
  },
  setup(t) {
    const e = t, r = $(null), n = $(null);
    fe(() => {
      de.create(r.value, n.value, {
        arrow: e.arrow,
        placement: e.placement,
        event: e.event,
        dropdown: e.dropdown
      });
    });
    const s = i(() => O(e.rounded)), a = i(() => C(e.color, e.mode));
    return (u, y) => (c(), h(he, null, [
      w("span", {
        ref_key: "trigger",
        ref: r,
        class: "l-tooltip-trigger cursor-pointer"
      }, [
        p(u.$slots, "default")
      ], 512),
      w("div", {
        class: g(["l-tooltip-popper px-4 py-2", [o(s), o(a)]]),
        ref_key: "popper",
        ref: n
      }, [
        p(u.$slots, "tooltip", {}, () => [
          te(P(e.tooltip), 1)
        ])
      ], 2)
    ], 64));
  }
}, _e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LAccordion: Oe,
  LAccordionItem: He,
  LAlert: Ke,
  LAspect: Ce,
  LAvatar: Xe,
  LButton: ye,
  LCard: lt,
  LCheckbox: ot,
  LClose: be,
  LDivider: it,
  LDropdown: at,
  LDropdownItem: ut,
  LHeading: ct,
  LInput: Be,
  LInputGroup: pt,
  LModal: xt,
  LParagraph: kt,
  LRadio: mt,
  LTabs: Ct,
  LTabsItem: Lt,
  LTooltip: Bt
}, Symbol.toStringTag, { value: "Module" })), Tt = {
  install(t, e = {}) {
    for (const r in _e) {
      const n = _e[r];
      t.component(n.name, n);
    }
  }
};
export {
  Tt as lantern
};
