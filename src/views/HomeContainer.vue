<template>
    <div>
        <el-carousel :interval="4000" type="card" :height="bannerHeight+'px'">
            <el-carousel-item v-for="item in pics" :key="item.url">
                <img ref="bannerHeight" :src="item.url" @Load="imgLoad" />
            </el-carousel-item>
        </el-carousel>
       
        <h1>热门课程</h1>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                  <img src="../assets/classpic1.jpg" alt="">
                  <div>
                   <h3>计算机组成原理+计算机网络</h3>
                  </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                 <img src="../assets/classpic2.jpg" alt="">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                  <img src="../assets/classpic3.jpg" alt="">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                  <img src="../assets/classpic4.jpg" alt="">
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                 <img src="../assets/classpic5.png" alt="">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                 <img src="../assets/classpic6.png" alt="">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                 <img src="../assets/classpic7.jpg" alt="">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                 <img src="../assets/classpic8.jpg" alt="">
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bannerHeight: "",
            pics: [
                { url: require("../assets/pic1.jpg") },
                { url: require("../assets/pic2.jpg") },
                { url: require("../assets/pic3.jpg") },
                { url: require("../assets/pic4.jpg") }
            ]
        };
    },
    methods: {
        imgLoad() {
            this.$nextTick(() => {
                this.bannerHeight = this.$refs.bannerHeight[0].height
                console.log(this.$refs.bannerHeight[0].height);
            })
        }
    },
    mounted() {
        this.imgLoad();
        window.addEventListener('resize', () => {
            this.bannerHeight = this.$refs.bannerHeight[0].height
            this.imgLoad();
        }, false)
    },
};
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.el-row {
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

img {
    width: 100%;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>