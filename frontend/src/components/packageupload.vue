<template>
  <div class="upload_dev">
  <h2>{{ msg }}</h2>
  <!-- Styled -->
  <div class="Formfile">
    <b-form-file type="file" id="file" ref="file" v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
  </div>
  <b-button v-on:click="submitFile()">파일 업로드</b-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      file: null,
      msg: '패키지 업로드'
    }
  },
  methods: {
    submitFile () {
      if (this.file != null) {
        console.log(this.file)
        let formData = new FormData()
        formData.append('fileKey', this.file)

        this.$http.post('http://39.119.118.242:9010/upload',
          formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function (result) {
          if (result.data === -1) {
            alert('*.zip파일 형식이 아닙니다.')
          } else if (result.data === 1) {
            alert('파일 전송 완료')
          } else if (result.data === -2) {
            alert('파일 저장 오류')
          }
        })
      } else {
        alert('파일을 선택해주세요.')
      }
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
