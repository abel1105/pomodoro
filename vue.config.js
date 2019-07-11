module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/pomodoro/' : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variables.scss";`
      }
    }
  }
};
