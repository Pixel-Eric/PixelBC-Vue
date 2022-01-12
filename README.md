# 像素脑洞 Pixel 论坛GitHub仓库

## 项目概述
    本项目为毕业设计作品，非商业用途，后续开发由Pixel进行同一维护，有兴趣的小伙伴们可以进行协同开发该项目.

## 版本更迭

### version - 0.0.1 PHOTOSHOP 2022-1-6 1
    该版本为正在开发的版本，稳定版在master分支上。
### version - 0.0.2 PHOTOSHOP 2022-1-6 2
    1、完善路由跳转URL变化但页面无反应，修正部分BUG
    2、完善PageTurn组件，添加pageUp、pageDown、jumpPage、getAllpage四个外置功能函数。
    3、App.vue 添加key来监视路由的刷新。
    4、修改Plate index.vue组件获取数据函数的位置(由created迁移到setup,但执行时间依旧在created)
### version - 0.0.3 PHOTOSHOP 2022-1-6 3
    1、迁移部分API.
    2、添加一个新的hook，配合PageTurn组件进行使用
    3、修正部分BUG
    4、完成Locaiton组件的开发
### version - 0.0.4 PHOTOSHOP 2022-1-6 last
    CSS预处理器由Less更换为Sass
### version - 0.0.5 PHOTOSHOP 2022-1-7
    版块预览添加了最新动态的获取
    帖子增加了点击量显示和回复显示
    添加了部分新的API
    添加了帖子的编辑功能(只添加API和编辑器，功能还未开发)
### version - 0.0.6 PHOTOSHOP 2022-1-9 1
    修正Location在帖子页面显示版块名称错误
    添加了最新帖子和热门帖子功能
    完善帖子编辑功能
    完善发布帖子和回复帖子功能
### version - 0.0.7 PHOTOSHOP 2022-1-9 2
    修正帖子在未编辑情况下显示 “最后编辑与1970-01-01 08:00 的字样”
    修改帖子页面用户信息显示文字大小
    增加版块简介展开状态管理
### version - 0.1.0 PHOTOSHOP 2022-1-10 1
    添加 版块排名、热度、发帖量、版主、今日
    添加 版块推荐功能
    修正 发帖、编辑、回复跳转问题
    修正 修正版块简介内容显示、版主显示
### version - 0.1.2 PHOTOSHOP 2022-1-10 2
    添加 版块编辑
    修正Location组件的链接显示问题(非链接指针指上去也会有链接效果)
    修正 首页推荐版块的个性介绍显示
### version - 0.1.4 PHOTOSHOP 2022-1-10 3
    添加 帖子标识显示
### version - 0.2.0 PHOTOSHOP 2022-1-10 4
    添加 注册功能相关接口和页面
    添加 首页拉帘模块
    修正 非登录时发帖框和回复框的显示问题
### version - 0.3.0 PHOTOSHOP 2022-1-11
    添加 勋章显示
    添加 注册功能
    添加 个人中心基础界面
    修正 修正发帖签名(非个性签名)
    修正 主页导航栏穿透问题
    修改 用户菜单栏由左侧修改为右侧抽屉栏中
    修改 主页用户菜单外观 用户注册和密码找回移动到用户登录页面
### version - 0.3.1 PHOTOSHOP 2022-1-11 2
    修正 非当前发帖人不显示楼主信息和热度信息
### version - 0.4.0 PHOTOSHOP 2022-1-12
    添加
        主页滚屏效果
        添加版块缩略图版主显示
        退出用户
    移除
        主页左侧游戏发布、站内消息、游戏发布，添加至左侧抽屉栏
    优化 
        发帖相关信息显示
    修正 
        发帖标题输入位置偏移问题
        版块编辑时界面过大超屏问题
        注册页面跳转问题
        登录后点击头像跳转至个人中心

    