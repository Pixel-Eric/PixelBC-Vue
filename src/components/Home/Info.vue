<template>
  <div class="info">
      <div class="info-top">
          <p class="status-a">热门</p>
          <p class="status-b">最新帖子</p>
      </div>
      <div class="info-list-hot">
          <ul>
              <li v-for="n in 8" :key="n.index">
                  <a href="javascript:;">这是一个测试的填充内容</a>
                  <p>2021-12-29</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.info-top{
    display: flex;
    border-bottom:#0080ff solid 1px;
    p{
        padding: .5em 1em;
    }
}
.info-list-hot{
    height: 20em;
    ul{
        list-style: none;
        li{
            display: flex;
            padding: .5em .3em;
            justify-content: space-between;
        }
        a{
            color: #0080ff;
            text-decoration: none;
        }
        p{
            color: #777;
        }
    }
}
.info-top{
    p{
        font-size: 1.1em;
        font-weight: bold;
    }
    .status-a{
        color: #0080ff;
    }
    .status-b{
        color: #77a7d8;
    }
}
</style>