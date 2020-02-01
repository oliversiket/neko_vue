<template>
    <div className="loading-container">
        <span className="loading-spinner"></span>
    </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading-spinner {
    display: inline-block;
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid rgb(197, 54, 85);
    border-bottom: 3px solid rgb(197, 54, 85);
    border-top: 3px solid transparent;
    border-right: none;
    animation: loadingSpinner 1s linear infinite;
    margin: 0 auto;
  }

</style>