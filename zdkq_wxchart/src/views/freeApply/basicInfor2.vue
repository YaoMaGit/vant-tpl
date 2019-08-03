<template>
  <div id="basicInfor2">
    <div class="steps">
      <div class="top">
        <van-row>
          <van-col class="noActive" span="8">
            <div>第一步</div>
            <div>基本信息</div>
          </van-col>
          <van-col span="8">
            <div>第二步</div>
            <div>上传照片</div>
          </van-col>
          <van-col class="noActive" span="8">
            <div>第三步</div>
            <div>牙齿情况</div>
          </van-col>
        </van-row>
      </div>
      <div class="bottom">
        <span class="circle noActiveBG"></span>
        <span class="slid noActiveBG"></span>
        <span class="checked">
          <van-icon name="checked" />
        </span>
        <span class="slid noActiveBG"></span>
        <span class="circle noActiveBG"></span>
      </div>
    </div>

    <div class="infor view">
      <div class="topCase">
        <div class="title">拍照小技巧</div>
        <div class="content">
          <span class="num">1</span>
          <span class="nump">为了更好的结果，让身边的人协助你拍照，有些角度会比较难捕捉。</span>
        </div>
        <div class="content">
          <span class="num">2</span>
          <span class="nump">为了更好的结果，让身边的人协助你拍照，有些角度会比较难捕捉。</span>
        </div>
      </div>

      <div class="phoneItem">
        <div>
          <span class="title">上传八面照</span>
          <span class="subtitle">（参考右侧示例及图片详解）</span>
        </div>

        <div class="itemPhoneBox">
          <div
            class="item"
            v-for="(item,index) in uploadList"
            :key="index"
          >
            <div class="left" @click="uploadClk(item,index)">
              <div class="dashedBox">
                <img v-if="item.uploadStatus" :src="item.uploadImg" alt />
                <input
                  @change="inputChange(item,index)"
                  type="file"
                  v-show="false"
                  :id="'file'+item.picId"
                  name="file"
                />
                <div v-if="!item.uploadStatus" class="addIcon">
                  <van-icon
                    class="iconfont"
                    size="46"
                    color="#DDDDDD"
                    class-prefix="my-icon"
                    name="add-circle-fill"
                  />
                </div>
                <div v-if="!item.uploadStatus">上传照片</div>
              </div>
            </div>
            <div class="center">
              <div class="centerImgBox">
                <span class="centerSpan">示例</span>
                <img src="../../../static/carmer8/微笑像.png" alt />
              </div>
            </div>
            <div class="right">
              <div style="font-size:14px;margin-bottom:5px;">
                <img src="../../../static/requied.png" alt />
                {{item.title}}
              </div>
              <div style="font-size:12px;color:#999999;">{{item.subtitle}}</div>
            </div>
          </div>

          <div class="save" @click="btnClk()">
            <span>下一步</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  data() {
    return {
      aliyunOssToken: "",
      uploadList: [
        {
          picId: "pic1",
          title: "上传微笑像",
          subtitle: "保持微笑，拍一张美哒哒微笑像。",
          egImg: "../../../static/carmer8/微笑像.png",
          uploadStatus: false,
          uploadImg: ""
        },
        {
          picId: "pic2",
          title: "上传微笑像",
          subtitle: "保持微笑，拍一张美哒哒微笑像。",
          egImg: "../../../static/carmer8/微笑像.png",
          uploadStatus: false,
          uploadImg: ""
        },
        {
          picId: "pic3",
          title: "上传微笑像",
          subtitle: "保持微笑，拍一张美哒哒微笑像。",
          egImg: "../../../static/carmer8/微笑像.png",
          uploadStatus: false,
          uploadImg: ""
        },
        {
          picId: "pic4",
          title: "上传微笑像",
          subtitle: "保持微笑，拍一张美哒哒微笑像。",
          egImg: "../../../static/carmer8/微笑像.png",
          uploadStatus: false,
          uploadImg: ""
        },
        {
          picId: "pic5",
          title: "上传微笑像",
          subtitle: "保持微笑，拍一张美哒哒微笑像。",
          egImg: "../../../static/carmer8/微笑像.png",
          uploadStatus: false,
          uploadImg: ""
        },
        {
          picId: "pic6",
          title: "上传微笑像",
          subtitle: "保持微笑，拍一张美哒哒微笑像。",
          egImg: "../../../static/carmer8/微笑像.png",
          uploadStatus: false,
          uploadImg: ""
        },
        {
          picId: "pic7",
          title: "上传微笑像",
          subtitle: "保持微笑，拍一张美哒哒微笑像。",
          egImg: "../../../static/carmer8/微笑像.png",
          uploadStatus: false,
          uploadImg: ""
        },
        {
          picId: "pic8",
          title: "上传微笑像",
          subtitle: "保持微笑，拍一张美哒哒微笑像。",
          egImg: "../../../static/carmer8/微笑像.png",
          uploadStatus: false,
          uploadImg: ""
        }
      ]
    };
  },
  mounted() {
    this.getOssToken();
  },
  methods: {
    uploadClk(item,index) {
      console.log(item);
      $("#file" + item.picId).click();
    },
    inputChange(item,index) {
      this.upload(item,index);
    },
    btnClk() {
      let that = this;
      let obj = {};
      let bool = true;
      for (let key in that.uploadList) {
        if (that.uploadList[key].uploadStatus=="") {
          that.$Toast("请上传8张图片");
          bool = false;
        }
      }
      if (bool) {
        that.$axios
          .post("/api/cases/casessecond", {
            id:that.$route.query.freeApplyId,
            pic1: that.uploadList[0].uploadImg,
            pic2: that.uploadList[1].uploadImg,
            pic3: that.uploadList[2].uploadImg,
            pic4: that.uploadList[3].uploadImg,
            pic5: that.uploadList[4].uploadImg,
            pic6: that.uploadList[5].uploadImg,
            pic7: that.uploadList[6].uploadImg,
            pic8: that.uploadList[7].uploadImg,
          })
          .then(function(res) {
            console.log(res);

            if (res.data.code == 200) {
              that.$Toast(res.data.msg);
              setTimeout(function() {
                that.$router.push({ name: "basicInfor3",query: { freeApplyId: res.data.data.id } });
              }, 1000);
            } else {
              that.$Toast(res.data.msg);
            }
            that.loading = false;
          });
      }
    },
    //获取上传通行证
    getOssToken() {
      var _self = this;

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

    upload(item,index) {
      var _self = this;
      var getSuffix = function(fileName) {
        var pos = fileName.lastIndexOf(".");
        var suffix = "";
        if (pos != -1) {
          suffix = fileName.substring(pos);
        }
        return suffix;
      };

      var file = $("#file" + item.picId).val();
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

      formData.append("file", $("#file" + item.picId)[0].files[0]);
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
        success: function(res) {
          console.log(res);
          if (res.Status == "Ok") {
            _self.uploadList[index].uploadImg = res.body;
            _self.uploadList[index].uploadStatus = true;
          }
        },
        error: function(data) {
          console.log(data);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../common/css/globle.less");
#basicInfor2 {
  .steps {
    text-align: center;
    .top {
      padding-top: 15px;
      font-size: 13px;
      color: #ffffff;
      background: @globleColor;
      text-align: center;
      padding-bottom: 5px;
      > div {
        //   padding-bottom: 3px;
      }
    }
    .bottom {
      padding-bottom: 10px;
      color: #ffffff;
      background: @globleColor;
      .checked {
      }
      .slid {
        width: 110px;
        height: 1px;
        margin-bottom: 7px;
        display: inline-block;
        background: #ffffff;
      }
      .circle {
        width: 8px;
        height: 8px;
        display: inline-block;
        background: #ffffff;
        border-radius: 50px;
        margin-bottom: 4px;
      }
      .noActiveBG {
        background: #c3dca2;
      }
    }
  }

  .noActive {
    color: #c3dca2;
  }

  .infor {
    margin-top: 15px;
    .topCase {
      color: #999999;
      font-size: 14px;
    }
    .title {
      color: #333333;
      font-size: 16px;
      margin-bottom: 10px;
    }
    .content {
      margin-bottom: 10px;
    }
    .num {
      background: @globleColor;
      width: 16px;
      height: 16px;
      line-height: 16px;
      padding-top: 1px;
      font-size: 13px;
      display: inline-block;
      text-align: center;
      color: #ffffff;
      border-radius: 50px;
    }
    .nump {
    }

    .phoneItem {
      .subtitle {
        color: #999999;
        font-size: 12px;
        margin-bottom: 15px;
      }
      .itemPhoneBox {
        .item {
          display: flex;
          padding: 15px 0;
          border-bottom: 1px solid #dddddd;
          .left {
            flex: 1;
            .dashedBox {
              height: 90px;
              width: 90px;
              text-align: center;
              color: #dddddd;
              border: 1px dashed #dddddd;
              // overflow: hidden;
              img {
                width: 90px;
              }
              .addIcon {
                margin-top: 6px;
              }
            }
          }
          .center {
            flex: 1;
            .centerImgBox {
              width: 91px;
              height: 91px;
              overflow: hidden;
              position: relative;
              .centerSpan {
                color: #ffffff;
                background: rgba(51, 51, 51, 1);
                position: absolute;
                display: inline-block;
                padding: 3px 6px;
                font-size: 12px;
              }
              > img {
                width: 90px;
              }
            }
          }
          .right {
            flex: 1;
            img {
              width: 10px;
              padding-bottom: 5px;
            }
          }
        }
      }
    }
  }

  .save {
    background: @globleColor;
    width: 90%;
    margin: auto;
    border-radius: 5px;
    padding: 15px 0;
    text-align: center;
    color: #ffffff;
    margin-top: 50px;
  }
}
</style>


