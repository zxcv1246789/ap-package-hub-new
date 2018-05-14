<template>
  <div class="upload_dev">
  <h2>{{ msg }}</h2>
  <!-- Styled -->
  <div class="Formfile">
    <b-form-file type="file" id="file" ref="file" v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
  </div>
  <b-button v-on:click="FileList()">파일 목록 보기</b-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      file: null,
      fileNmaelist: null,
      msg: '패키지 목록'
    }
  },
  methods: {
    FileList () {
      this.$http.get('http://localhost:9010/file'
      ).then(function (result) {
        this.fileNmaelist = result
        console.log(this.fileNmaelist.data[0])
      })
    }
  }
}
</script>

<style>
.upload_dev {
  padding: 24px;
}
.Formfile {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
