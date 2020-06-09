const webpack = require('webpack');  
const path = require('path');

module.exports = {
    devServer:{
        host:"127.0.0.1", //ip
        port:8000,  // 端口
    },
    lintOnSave:false, // 取消 eslint 验证
    
    chainWebpack: (config) => {  
        config.resolve.alias  
          .set('@', path.resolve(__dirname, './src'))  
          .set('mui', path.resolve(__dirname, './src/assets/mui/js/mui.js'))  
      },  
      configureWebpack: {      
        // 增加一个plugins  
        plugins: [  
          new webpack.ProvidePlugin({  
            mui: "mui",  
            "window.mui": "mui"  
          })  
        ]  
      },  
}