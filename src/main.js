import { createApp, h } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./routes";

const app = createApp({
  render: () => h(App),
  router,
});

app.use(router).mount("#app");
