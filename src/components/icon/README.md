## 如何添加新的ICON

此icon图标库项目保存于iconfont，地址为https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2237159，管理员添加用户到项目后有权限访问。

1. 在图标市场挑选到所需图标后，选择加入到该项目中。
2. 下载图标至本地并解压。
3. 替换以下文件 
    * styles/common/fonts/iconfont.svg
    * styles/common/fonts/iconfont.ttf
    * styles/common/fonts/iconfont.woff
    * styles/common/fonts/iconfont.woff2
4. 将iconfont.css文件中新增类名添加到styles/components/_icon.scss文件，并修改类名为 cube-icon-图标名；
5. 替换_icon.scss中以下内容
    ```javascript
        url('data:application/x-font-woff2;charset=utf-8;
    ```