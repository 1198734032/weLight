module.exports = {
    lintOnSave: false, //是否开启eslint
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',

    devServer: {
        open: true, //是否自动弹出浏览器页面
        // https: true,
        // hot:true,
        //hotOnly:false,
        proxy: {
            '/hls': {
                target: 'http://47.97.214.211:81/',
                // target:'http://127.0.0.1:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/': '/'     //      代表重写，前边的是匹配规则，后边的是写入规则
                  }
            }
        },
    }
}