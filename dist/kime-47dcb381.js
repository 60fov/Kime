const E = {
  qwerty: {
    sebeolsik: {
      // duping feels less gross than performing two lookups for a miss (see keyLookUp fn)
      // or a reverse map whic seems less gross than the former but still too complex for no gain
      Q: "ㅃ",
      W: "ㅉ",
      E: "ㄸ",
      R: "ㄲ",
      T: "ㅆ",
      Y: "ㅛ",
      U: "ㅕ",
      I: "ㅑ",
      O: "ㅒ",
      P: "ㅖ",
      A: "ㅁ",
      S: "ㄴ",
      D: "ㅇ",
      F: "ㄹ",
      G: "ㅎ",
      H: "ㅗ",
      J: "ㅓ",
      K: "ㅏ",
      L: "ㅣ",
      Z: "ㅋ",
      X: "ㅌ",
      C: "ㅊ",
      V: "ㅍ",
      B: "ㅠ",
      N: "ㅜ",
      M: "ㅡ",
      q: "ㅂ",
      w: "ㅈ",
      e: "ㄷ",
      r: "ㄱ",
      t: "ㅅ",
      y: "ㅛ",
      u: "ㅕ",
      i: "ㅑ",
      o: "ㅐ",
      p: "ㅔ",
      a: "ㅁ",
      s: "ㄴ",
      d: "ㅇ",
      f: "ㄹ",
      g: "ㅎ",
      h: "ㅗ",
      j: "ㅓ",
      k: "ㅏ",
      l: "ㅣ",
      z: "ㅋ",
      x: "ㅌ",
      c: "ㅊ",
      v: "ㅍ",
      b: "ㅠ",
      n: "ㅜ",
      m: "ㅡ"
      // " ": " " // this one went crazy, rip, Sat Dec 3:17, qq
    }
  }
};
function b(o, i) {
  return E[o][i];
}
function v(o, i = "qwerty", n = "sebeolsik") {
  return b(i, n)[o];
}
function A([...o]) {
  return {
    data: () => o,
    isEmpty: () => o.length == 0,
    consume: () => o.shift(),
    peek: (i = 1) => o.length > i - 1 ? o[i - 1] : void 0
  };
}
const a = {
  single: [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
    "ㅏ",
    "ㅐ",
    "ㅑ",
    "ㅒ",
    "ㅓ",
    "ㅔ",
    "ㅕ",
    "ㅖ",
    "ㅗ",
    "ㅛ",
    "ㅜ",
    "ㅠ",
    "ㅡ",
    "ㅣ"
  ],
  initial: [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ"
  ],
  medial: [
    "ㅏ",
    "ㅐ",
    "ㅑ",
    "ㅒ",
    "ㅓ",
    "ㅔ",
    "ㅕ",
    "ㅖ",
    "ㅗ",
    "ㅘ",
    "ㅙ",
    "ㅚ",
    "ㅛ",
    "ㅜ",
    "ㅝ",
    "ㅞ",
    "ㅟ",
    "ㅠ",
    "ㅡ",
    "ㅢ",
    "ㅣ"
  ],
  final: [
    "ㄱ",
    "ㄲ",
    "ㄳ",
    "ㄴ",
    "ㄵ",
    "ㄶ",
    "ㄷ",
    "ㄹ",
    "ㄺ",
    "ㄻ",
    "ㄼ",
    "ㄽ",
    "ㄾ",
    "ㄿ",
    "ㅀ",
    "ㅁ",
    "ㅂ",
    "ㅄ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ"
  ],
  decompositionMaps: {
    ㅘ: ["ㅗ", "ㅏ"],
    ㅙ: ["ㅗ", "ㅐ"],
    ㅚ: ["ㅗ", "ㅣ"],
    ㅝ: ["ㅜ", "ㅓ"],
    ㅞ: ["ㅜ", "ㅔ"],
    ㅟ: ["ㅜ", "ㅣ"],
    ㅢ: ["ㅡ", "ㅣ"],
    ㄳ: ["ㄱ", "ㅅ"],
    ㄵ: ["ㄴ", "ㅈ"],
    ㄶ: ["ㄴ", "ㅎ"],
    ㄺ: ["ㄹ", "ㄱ"],
    ㄻ: ["ㄹ", "ㅁ"],
    ㄼ: ["ㄹ", "ㅂ"],
    ㄽ: ["ㄹ", "ㅅ"],
    ㄾ: ["ㄹ", "ㅌ"],
    ㄿ: ["ㄹ", "ㅍ"],
    ㅀ: ["ㄹ", "ㅎ"],
    ㅄ: ["ㅂ", "ㅅ"]
  },
  complexMaps: {
    ㅗ: {
      ㅏ: "ㅘ",
      ㅐ: "ㅙ",
      ㅣ: "ㅚ"
    },
    ㅜ: {
      ㅓ: "ㅝ",
      ㅔ: "ㅞ",
      ㅣ: "ㅟ"
    },
    ㅡ: {
      ㅣ: "ㅢ"
    },
    ㄱ: {
      ㅅ: "ㄳ"
    },
    ㄴ: {
      ㅈ: "ㄵ",
      ㅎ: "ㄶ"
    },
    ㄹ: {
      ㄱ: "ㄺ",
      ㅁ: "ㄻ",
      ㅂ: "ㄼ",
      ㅅ: "ㄽ",
      ㅌ: "ㄾ",
      ㅍ: "ㄿ",
      ㅎ: "ㅀ"
    },
    ㅂ: {
      ㅅ: "ㅄ"
    }
  }
};
function y(o) {
  return a.initial.includes(o);
}
function m(o) {
  return a.medial.includes(o);
}
function h(o) {
  return a.final.includes(o);
}
function J(o) {
  return a.initial.indexOf(o);
}
function M(o) {
  return a.medial.indexOf(o);
}
function g(o) {
  return a.final.indexOf(o);
}
function u(o, i) {
  if (o === void 0 || i === void 0)
    return;
  const n = a.complexMaps[o];
  if (!(n === void 0 || n[i] === void 0))
    return n[i];
}
function x(o, i, n) {
  const t = J(o), s = M(i), f = n ? g(n) + 1 : 0, e = t * 588 + s * 28 + f + 44032;
  return 44032 <= e && e <= 55203 ? String.fromCodePoint(e) : void 0;
}
const O = (o) => {
  const i = Array.isArray(o) ? [...o] : o.split("");
  let n, t, s, f;
  const e = A(i);
  for (; !e.isEmpty(); ) {
    const r = e.peek();
    if (n === void 0) {
      if (y(r)) {
        const c = e.peek(2);
        if (c === void 0)
          break;
        if (!m(c)) {
          f = e.consume();
          break;
        }
        n = e.consume();
        continue;
      }
      if (m(r)) {
        const c = e.peek(2);
        if (c === void 0)
          break;
        f = e.consume();
        const l = u(r, c);
        if (l === void 0)
          break;
        f = l, e.consume();
        break;
      }
    }
    if (t === void 0) {
      if (m(r)) {
        const c = e.consume(), l = e.peek();
        if (l === void 0) {
          t = c;
          break;
        }
        const d = u(c, l);
        if (d) {
          e.consume(), t = d;
          continue;
        }
        t = c;
        continue;
      }
      break;
    }
    if (s === void 0) {
      if (!h(r))
        break;
      const c = e.peek(2);
      if (c === void 0) {
        s = e.consume();
        break;
      }
      const l = u(r, c);
      if (l) {
        const d = e.peek(3), k = e.consume();
        if (d && m(d)) {
          s = k;
          break;
        }
        s = l, e.consume();
        break;
      }
      if (m(c))
        break;
      s = e.consume();
      break;
    }
  }
  if (f)
    return [f, ...e.data()];
  if (n && t) {
    const r = x(n, t, s);
    return r === void 0 ? [""] : e.isEmpty() ? [r] : [r, ...e.data()];
  }
  return e.isEmpty() ? [""] : [...e.data()];
}, F = (o, i = 1e3) => {
  let n = [], t = o, s = 0;
  for (; t.length && (s++, !(s > i)); ) {
    const [f, ...e] = O(t);
    n.push(f), t = e;
  }
  return n;
}, p = (o) => a.decompositionMaps[o], C = (o) => {
  const i = o.charCodeAt(0);
  if (44032 <= i && i <= 55203) {
    const t = i - 44032, s = t % 28, f = Math.floor(t / 588), e = (t - s) % 588 / 28, r = s ? s - 1 : void 0, c = a.initial[f], d = p(a.medial[e]) ?? [a.medial[e]];
    if (r !== void 0) {
      const w = p(a.final[r]) ?? [a.final[r]];
      return [c, ...d, ...w];
    }
    return [c, ...d];
  }
  return p(o) ?? [o];
}, j = (o) => {
  let i = [];
  for (let n = 0; n < o.length; n++) {
    const t = o[n];
    i.push(...C(t));
  }
  return i;
}, q = {
  keyLookUp: v,
  key: v,
  getKeymap: b,
  isInitialJamo: y,
  isMedialJamo: m,
  isFinalJamo: h,
  initialJamoOffset: J,
  medialJamoOffset: M,
  finalJamoOffset: g,
  composeJamo: u,
  composeSyllable: x,
  composeBlock: O,
  compose: F,
  decomposeCompatibilityJamo: p,
  decomposeBlock: C,
  decompose: j
};
export {
  F as c,
  C as d,
  a as j,
  q as k
};
//# sourceMappingURL=kime-47dcb381.js.map
