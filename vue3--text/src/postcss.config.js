//在vite中的正确写法
export default {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*']
      }
    }
  }