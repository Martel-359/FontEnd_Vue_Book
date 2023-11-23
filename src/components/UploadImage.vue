<template>
    <div id="app">
        <input type="text" v-model="MSHH" placeholder="Nhập Mã Số Hàng Hóa" />
        <br>
        <input type="file" multiple ref="file" v-on:change="handleUpload()" />

        <button v-on:click="uploadFile()">Upload</button> <br>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            file: '',
            MSHH: ''
        }
    },
    methods: {
        handleUpload() {
            this.file = this.$refs.file.files
        },
        uploadFile() {
            //   const formData = new FormData()
            //   formData.append("file", this.file)
            const formData = new FormData();
            formData.append("MSHH", this.MSHH);
            for (let i = 0; i < this.file.length; i++) {
                formData.append("file", this.file[i]);
            }

            console.log(this.file)
            axios.post('http://localhost:3000/api/uploads', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                alert("Upload thành công")
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
