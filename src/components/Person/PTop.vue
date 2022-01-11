<template>
  <div class="person-top">
    <div class="person-top-left">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.2qqtouxiang.com%2Fpic%2FTX8625_07.jpg&refer=http%3A%2F%2Fimg.2qqtouxiang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644475989&t=f467382373bc39416fbef2e10c621d3b"
        alt=""
      >
      <div class="person-info">
        <p>显示用户姓名</p>
        <p>注册时间:2020-1-1</p>
        <p>个性签名</p>
      </div>
      <div class="expbar">
        <div class="cur-exp"></div>
      </div>
    </div>
    <div class="person-top-right">
      <p class="uid">UID:10001</p>
      <div class="other-info">
        <ul>
          <li>发帖量:0</li>
          <li>回复量:0</li>
          <li>访问量:0</li>
          <li>粉丝:0</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "person-top",
};
</script>

<style lang="scss" scoped>
@mixin flex-row {
  display: flex;
}
.person-top {
  @include flex-row;
  padding: 0.8em 1.5em;
  & > div {
    height: 12em;
    background-color: white;
  }
  &-left {
    @include flex-row();
    background-image: url(./images/bg.jpeg);
    background-size: cover;
    background-position: 100%;
    position: relative;
    align-items: center;
    width: 70%;
    // margin-left: .5em;
    & > img {
      width: 10em;
      height: 10em;
      margin-left: 1em;
      border-radius: 50%;
    }
    .person-info {
      margin-left: 1em;
      & > p {
        font-size: 0.9em;
        margin: 1em 0;
      }
      & > p:nth-of-type(1) {
        font-size: 1.2em;
        color: #555;
      }
    }
    .expbar {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0.6em;
      background-color: rgb(180, 180, 180);
      .cur-exp {
        width: 10%;
        height: 100%;
        background-color: rgb(250, 201, 68);
      }
    }
  }
  &-right {
    flex-grow: 1;
    margin-left: 0.5em;
    position: relative;
    .uid {
      position: absolute;
      right: 0;
      top: 0;
      margin: 0.5em;
      font-weight: bold;
      color: #999;
      user-select: none;
    }
    .medal {
      @include flex-row();
      justify-content: center;
      margin-top: 1em;
      p {
        color: #666;
      }
      img {
        width: 4em;
        height: 4em;
        margin: 0 0.5em;
      }
    }
    .other-info {
      position: absolute;
      bottom: 0;
      width: 100%;
      ul {
        list-style: none;
        @include flex-row();
        justify-content: space-evenly;
        li {
          padding: 0.5em 0;
        }
      }
    }
  }
}
</style>