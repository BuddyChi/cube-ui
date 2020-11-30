## 如何添加新的ICON

此icon图标库项目保存于iconfont，地址为https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2237159，管理员添加用户到项目后有权限访问。

1. 挑选到图标并加入到该项目。
2. 下载图标库至本地并解压。
3. 替换项目中以下文件：
    * styles/common/fonts/iconfont.svg
    * styles/common/fonts/iconfont.ttf
    * styles/common/fonts/iconfont.woff
    * styles/common/fonts/iconfont.woff2
4. 将iconfont.css中新增类名添加到styles/components/_icon.scss文件，并修改类名为 .cube-icon-图标名.
5. 将_icon.scss中以下url用iconfont.css中src woff2内容替换：
    ```javascript
        url('data:application/x-font-woff2;charset=utf-8;
    ```