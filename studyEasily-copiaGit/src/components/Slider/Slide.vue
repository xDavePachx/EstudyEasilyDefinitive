<template>
        <div class="keen-slider__slide number-slide"><slot></slot></div>
</template>

<script>
    import "keen-slider/keen-slider.min.css";
export default {
        name: "Slide",
    }
</script>

<style>
[class^="number-slide"],
[class*=" number-slide"] {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>