import Router from "next/router";
import NProgress from "nprogress";

let timer;
let state;
let activeRequest = 0;
const delay = 250;

function load() {
  if (state === "loading") return;

  state = "loading";

  timer = setTimeout(() => {
    NProgress.start();
  }, delay);
}

function stop() {
  if (activeRequest > 0) return;
  state = "stop";

  clearTimeout(timer);
  NProgress.done();
}

Router.events.on("routeChangeStart", load);
Router.events.on("routeChangeComplete", stop);
Router.events.on("routeChangeError", stop);

const originalFetch = window.fetch;
window.fetch = async function (...args) {
  if (activeRequest === 0) {
    load();
  }
  activeRequest++;
  try {
    const response = await originalFetch(...args);
    return response;
  } catch (error) {
    return Promise.reject(error);
  } finally {
    activeRequest -= 1;
    if (activeRequest === 0) {
      stop();
    }
  }
};


export default function(){
    return null;
}



/* Thank you Vincent Voyer. 
   source: https://dev.to/vvo/show-a-top-progress-bar-on-fetch-and-router-events-in-next-js-4df3
*/