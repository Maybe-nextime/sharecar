<template>
    <div style="margin-bottom: 18px;">
        <div class="test_two">
            <video id="myVideo" class="video-js">
                <source :src="videoTest" type="video/mp4">
            </video>
        </div>
    </div>
</template>

<script>
    import videoTest from "../../../assets/videos/movie.mp4"

    export default {
        name: "videoText",
        data() {
            return {
                videoTest: videoTest
            }
        },
        mounted() {
            this.initVideo();
        },
        methods: {
            initVideo() {
                let myPlayer = this.$video(myVideo, {
                    controls:true,
                    autoplay:false,
                })
            }
        }
    }
</script>

<style scoped>
    .video-js {
        width:9.347rem;
        height: 5.253rem;
        position: relative;
        left: 0.32rem;
    }
</style>
