<template>
  <div class="common-layout">
    <el-image class="img" src="https://pic3.zhimg.com/v2-790d6710072e69e90e7a3a6a533a539d_r.jpg?source=1940ef5c"/>
    <el-container>
      <el-header class="headerBox">HuangJunJun</el-header>
        <el-main class="mainBox">
          <div class="timeBox">
            {{ currentTime }}
          </div>
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>个人简介</span>
              </div>
            </template>
            <div class="text item">
              <!-- {{ personalProfile }} -->
            </div>
          </el-card>
        </el-main>
      <el-footer class="footerBox">footer HuangJunJun</el-footer>
    </el-container>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  // 生命周期函数
  mounted() {
    setInterval(() => {
      this.currentTime = moment().format("HH:mm:ss")
    }, 1000)
  },
  // 数据
  data () {
    return {
      currentTime: moment().format("HH:mm:ss"),
    }
  },
}
</script>

<style less="scss" scoped>
.img {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.headerBox {
  position: relative;
  /* color: red; */
  font-size: 26px;
  text-align: center;
  width: 100%;
  line-height: 60px;
}

.mainBox {
  font-size: 40px;
  text-align: center;
  padding: 100px;
  color: #303133;
}

.timeBox {
  position: absolute;
  width: 200px;
  height: 60px;
  left: 50%;
  margin: 0 -100px 0 -100px;
  transition: all 0.6s;
}

.timeBox:hover {
  cursor: pointer;
  transform: scale(1.1)
}

.footerBox {
  position: absolute;
  bottom: 0;
  color: red;
  text-align: center;
  width: 100%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
} 

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
  position: absolute;
  left: 50%;
  margin: 0 -240px 0 -240px;
  top: 30%;
}

</style>