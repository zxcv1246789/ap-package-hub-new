<template>
  <div id="app">
    <h1>APHUB.IO</h1>
    <nav>
      <b-nav fill tabs>
        <b-nav-item href="/#/login">로그인</b-nav-item>
        <b-nav-item href="/#/filelist">패키지 목록</b-nav-item>
        <b-nav-item href="/#/upload">패키지 업로드</b-nav-item>
        <b-nav-item href="/#/log">로그 확인</b-nav-item>
      </b-nav>
    </nav>
    <article>
      <router-view/>
    </article>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
}
h1 {
  margin-top: 20px;
  margin-bottom: 20px;
}
nav {
  margin-bottom: 30px;
}
</style>
