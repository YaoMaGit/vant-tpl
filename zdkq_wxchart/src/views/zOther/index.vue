<template>
  <div class="test">
    <div>
      <input type="file" id="file" name="file" />
      <a @click="upload()" href="javascript:;">上传</a>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      aliyunOssToken: ""
    };
  },
  mounted() {
    this.getOssToken();
  },
  methods: {
    //获取上传通行证
    getOssToken() {
      let _self = this;

      _self.$axios
        .get("/alioss/getSignature", {
          data: {
            // ID: 12345
          }
        })
        .then(function(res) {
          console.log(res);

          if (res.status == 200) {
            _self.aliyunOssToken = res.data;
          } else {
            that.$Toast("oss签名失败！");
          }
        });
    },

    upload() {
      var _self = this;
      var getSuffix = function(fileName) {
        var pos = fileName.lastIndexOf(".");
        var suffix = "";
        if (pos != -1) {
          suffix = fileName.substring(pos);
        }
        return suffix;
      };

      var file = $("#file").val();
      if (file.length == 0) {
        alert("请选择文件");
      }

      var filename = new Date().getTime() + getSuffix(file);
      var formData = new FormData();

      //注意formData里append添加的键的大小写
      formData.append("key", _self.aliyunOssToken.dir + filename); //存储在oss的文件路径
      formData.append("OSSAccessKeyId", _self.aliyunOssToken.accessid); //accessKeyId
      formData.append("policy", _self.aliyunOssToken.policy); //policy
      formData.append("Signature", _self.aliyunOssToken.signature); //签名
      formData.append("callback", _self.aliyunOssToken.callback); //

      //如果是base64文件，那么直接把base64字符串转成blob对象进行上传就可以了

      formData.append("file", $("#file")[0].files[0]);
      formData.append("success_action_status", 200); //成功后返回的操作码

      var url = _self.aliyunOssToken.host;
      var fileUrl =
        _self.aliyunOssToken.host + "/" + _self.aliyunOssToken.dir + filename;
      console.log(fileUrl);
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function(data) {
          console.log(fileUrl);
          console.log(data);
        },
        error: function(data) {
          console.log(data);
        }
      });
    }
  }
};
</script>