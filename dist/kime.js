import { useState as d, useCallback as w, useRef as K, useEffect as v } from "react";
import { j as E, k as y, d as D, c as g } from "./kime-47dcb381.js";
const j = (r) => {
  const [i, a] = d(!1), [s, p] = d("");
  function o(e) {
    var t;
    (t = r.current) == null || t.dispatchEvent(new CustomEvent("kimeinput", {
      detail: { value: e }
    }));
  }
  const k = w((e) => {
    const t = E.single.includes(e.key) ? e.key : y.keyLookUp(e.key);
    if (t) {
      if (e.altKey || e.metaKey || e.ctrlKey)
        return;
      e.preventDefault();
      const n = s.split("");
      if (i) {
        const c = n.pop() ?? "", u = y.compose([...y.decompose(c), t]);
        n.push(...u);
        const l = n.join("");
        o(l);
      } else
        o(s + t), a(!0);
    } else if (e.key.length === 1) {
      if (e.altKey || e.metaKey || e.ctrlKey)
        return;
      e.preventDefault(), a(!1), o(s + e.key);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown")
      e.preventDefault();
    else if (e.key === "Backspace")
      if (e.preventDefault(), e.ctrlKey || e.metaKey)
        o("");
      else {
        const n = s.split(""), c = n.pop();
        if (i && c) {
          const l = D(c);
          l.pop(), l.length ? n.push(g(l).join("")) : a(!1);
        }
        const u = n.join("");
        o(u);
      }
    else
      e.key === "Enter" || e.key === "Escape" && a(!1);
  }, [i, s]), m = (e) => {
    p(e.detail.value);
  }, f = K(k);
  return v(() => {
    f.current = k;
  }), v(() => {
    const e = r == null ? void 0 : r.current;
    if (!e)
      return;
    const t = (n) => f.current(n);
    return e.addEventListener("keydown", t), e.addEventListener("kimeinput", m), () => {
      e.removeEventListener("keydown", t), e.removeEventListener("kimeinput", m);
    };
  }, []), {
    input: {
      value: s,
      clear: () => p(""),
      setValue: p
    },
    composing: i
  };
};
export {
  j as default
};
//# sourceMappingURL=kime.js.map
