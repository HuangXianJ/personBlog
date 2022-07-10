<template>
  <div class="common-layout">
    <el-image class="img" src="https://pic3.zhimg.com/v2-790d6710072e69e90e7a3a6a533a539d_r.jpg?source=1940ef5c"/>
    <el-container>
      <!-- <el-header class="headerBox">HuangJunJun</el-header> -->
        <el-main class="mainBox">
          <div class="timeBox">
            {{ state.currentTime }}
          </div>
          <el-card class="box-card">
              <el-collapse class="collapse" v-model="state.activeNames">
                <el-collapse-item title="个人简介" name="1">
                  <div>
                    {{ state.PersonalProfile }}
                  </div>
                </el-collapse-item>
              </el-collapse>
            <div class="contact-box">
              <el-popover :width="300">
                <template #reference>
                  <div>
                    <el-icon class="icon-box" :size="24">
                      <Edit />
                    </el-icon>
                  </div>
                </template>
                <template #default>
                  <div
                    style="display: flex; gap: 16px; flex-direction: column"
                  >
                    <el-avatar
                      :size="60"
                      src="https://img0.baidu.com/it/u=1999019788,555474975&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
                      style="margin-bottom: 8px"
                    />
                    <div>
                      <p
                        style="margin: 0; font-weight: 500"
                      >
                        HuangJunJun
                      </p>
                      <p
                        style="margin: 0; font-size: 14px; color: var(--el-color-info)"
                      >
                        @HuangXianJ
                      </p>
                    </div>

                    <p style="margin: 0">
                      联系方式: 18079472428(微信同号)
                    </p>
                    <p style="margin: 0">
                      github地址: https://github.com/HuangXianJ
                    </p>
                  </div>
                </template>
              </el-popover>
            </div>
          </el-card>
        </el-main>
      <el-footer class="footerBox">footer HuangJunJun</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment'
import { ref, onMounted, reactive } from 'vue'

  // 数据
  const state = reactive({
    PersonalProfile: '尽量成为一个不为其他人添麻烦的人',
    activeNames: ref(['1']),
    currentTime: moment().format("HH:mm:ss")
  })

  // 生命周期函数
  onMounted(() => {
    setInterval(() => {
      state.currentTime = moment().format("HH:mm:ss")
    }, 1000)
  })

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

.card-footer {
  /* display: inline-block; */
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 16px;
  margin: 0 20px 10px 0
}

.collapse {
  border: 1px;
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
  top: 20%;
}

.contact-box {
  display: flex;
  justify-content: end;
  height: 24px;
}

.icon-box {
  font-size: 24px;
  display: inline-block;
  margin-top: 10px;
  margin-right: 10px;
}

</style>