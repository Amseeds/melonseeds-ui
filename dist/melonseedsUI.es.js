import { defineComponent as d, computed as g, createElementBlock as a, openBlock as t, normalizeStyle as y, normalizeClass as f, toDisplayString as v, createElementVNode as u, createStaticVNode as b, createCommentVNode as s, createBlock as p, createTextVNode as h, ref as w, createVNode as z } from "vue";
const m = /* @__PURE__ */ d({
  __name: "Button",
  props: {
    label: {},
    primary: { type: Boolean, default: !1 },
    size: {},
    backgroundColor: {}
  },
  emits: ["click"],
  setup(l, { emit: o }) {
    const e = l, n = o, i = g(() => ({
      "storybook-button": !0,
      "storybook-button--primary": e.primary,
      "storybook-button--secondary": !e.primary,
      [`storybook-button--${e.size || "medium"}`]: !0
    })), c = g(() => ({
      backgroundColor: e.backgroundColor
    })), r = () => {
      n("click", 1);
    };
    return (k, B) => (t(), a("button", {
      type: "button",
      class: f(i.value),
      onClick: r,
      style: y(c.value)
    }, v(k.label), 7));
  }
}), V = { class: "storybook-header" }, C = {
  key: 0,
  class: "welcome"
}, A = /* @__PURE__ */ d({
  __name: "Header",
  props: {
    user: {}
  },
  emits: ["createAccount", "login", "logout"],
  setup(l) {
    return (o, e) => (t(), a("header", null, [
      u("div", V, [
        e[5] || (e[5] = b('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>', 1)),
        u("div", null, [
          o.user ? (t(), a("span", C, [
            e[3] || (e[3] = h("Welcome, ")),
            u("b", null, v(o.user.name), 1),
            e[4] || (e[4] = h("!"))
          ])) : s("", !0),
          o.user ? (t(), p(m, {
            key: 1,
            size: "small",
            onClick: e[0] || (e[0] = (n) => o.$emit("logout")),
            label: "Log out"
          })) : s("", !0),
          o.user ? s("", !0) : (t(), p(m, {
            key: 2,
            size: "small",
            onClick: e[1] || (e[1] = (n) => o.$emit("login")),
            label: "Log in"
          })),
          o.user ? s("", !0) : (t(), p(m, {
            key: 3,
            primary: "",
            size: "small",
            onClick: e[2] || (e[2] = (n) => o.$emit("createAccount")),
            label: "Sign up"
          }))
        ])
      ])
    ]));
  }
}), $ = /* @__PURE__ */ d({
  __name: "Page",
  setup(l) {
    const o = w(null), e = () => {
      o.value = { name: "Jane Doe" };
    }, n = () => {
      o.value = null;
    }, i = () => {
      o.value = { name: "Jane Doe" };
    };
    return (c, r) => (t(), a("article", null, [
      z(A, {
        user: o.value,
        onLogin: e,
        onLogout: n,
        onCreateAccount: i
      }, null, 8, ["user"]),
      r[0] || (r[0] = b('<section class="storybook-page"><h2>Pages in Storybook</h2><p> We recommend building UIs with a <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a> process starting with atomic components and ending with pages. </p><p> Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: </p><ul><li> Use a higher-level connected component. Storybook helps you compose such data from the &quot;args&quot; of child component stories </li><li> Assemble data in the page component from your services. You can mock these services out using Storybook. </li></ul><p> Get a guided tutorial on component-driven development at <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a> . Read more in the <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a> . </p><div class="tip-wrapper"><span class="tip">Tip</span> Adjust the width of the canvas with the <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" id="a" fill="#999"></path></g></svg> Viewports addon in the toolbar </div></section>', 1))
    ]));
  }
});
export {
  m as MeButton,
  A as MeHeader,
  $ as MePage
};
//# sourceMappingURL=melonseedsUI.es.js.map
