<template>
    <div>
        <div class="navigation-wrapper">
            <div ref="slider" class="keen-slider">
                <slot></slot>
            </div>

            <svg @click="slider.prev()" :class="{
                arrow: true,
                'arrow--left': true,
                // 'arrow--disabled': current === 0,
            }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
            </svg>
            <svg v-if="slider" @click="slider.next()" :class="{
                arrow: true,
                'arrow--right': true,
                // 'arrow--disabled': current === slider.track.details.slides.length - 1,
            }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
            </svg>
        </div>
        <div v-if="slider" class="dots">
            <button v-for="(_slide, idx) in dotHelper" @click="slider.moveToIdx(idx)"
                :class="{ dot: true, active: current === idx }" :key="idx"></button>
        </div>
    </div>
</template>

<script>
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
export default {
    name: "Slider",
    computed: {
        dotHelper() {
            return this.slider
                ? [...Array(this.slider.track.details.slides.length).keys()]
                : [];
        },
    },
    data() {
        return {
            current: 1,
            slider: null,
        };
    },
    mounted() {
        this.slider = new KeenSlider(this.$refs.slider, {
            initial: this.current,
            loop:true,
            slideChanged: (s) => {
                this.current = s.track.details.rel;
            },
        });
    },
    beforeDestroy() {
        if (this.slider) this.slider.destroy();
    },
};
</script>

<style>
[class^="number-slide"],
[class*=" number-slide"] {
    display: flex;
    align-items: center;
    justify-content: center;
}


.navigation-wrapper {
    position: relative;
}

.dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
}

.dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
}

.dot:focus {
    outline: none;
}

.dot.active {
    background: #000;
}

.arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #000;
    cursor: pointer;
}

.arrow--left {
    left: 5px;
}

.arrow--right {
    left: auto;
    right: 5px;
}

.arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
}
</style>