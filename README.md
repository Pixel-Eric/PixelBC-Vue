# 像素脑洞 Pixel 论坛GitHub仓库

## 项目概述
本项目为毕业设计作品，非商业用途，后续开发由Pixel进行同一维护，有兴趣的小伙伴们可以进行协同开发该项目.

## 版本更迭
### version - 0.0.1 PHOTOSHOP 2022-1-6
该版本为正在开发的版本，稳定版在master分支上。
### version - 0.0.2 PHOTOSHOP 2022-1-6
#### 主要的改变
1、完善路由跳转URL变化但页面无反应，修正部分BUG
2、完善PageTurn组件，添加pageUp、pageDown、jumpPage、getAllpage四个外置功能函数。
3、App.vue 添加key来监视路由的刷新。
4、修改Plate index.vue组件获取数据函数的位置(由created迁移到setup,但执行时间依旧在created)
### version - 0.0.3 PHOTOSHOP 2022-1-6
1、迁移部分API.
2、添加一个新的hook，配合PageTurn组件进行使用
3、修正部分BUG