<template>
  <div class="person-body">
    <div class="person-body-left">
        <div class="recent">

        </div>
    </div>
    <div class="person-body-right">
        <div class="announcement">

        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.person-body{
    display: flex;
    margin: 1em 1.5em;
    &-left{
        width: 70%;
        margin-right: .5em;
        .recent{
            background-color: white;
            height: 20em;
        }
    }
    &-right{
        flex-grow: 1;
        margin-left: .5em;
        .announcement{
            background-color: white;
            height: 15em;
        }
    }
}
</style>