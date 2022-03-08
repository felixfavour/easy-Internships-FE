<template>
  <div class="loader-ctn reveals">
    <div class="loader" />
  </div>
</template>

<style scoped>
.loader-ctn {
  display: grid;
  place-items: center;
}
.loader {
  border: 6px solid #FFFFFF;
  border-radius: 50%;
  border-top: 6px solid #0C1F55;
  width: 70px;
  height: 70px;
  -webkit-animation: spin 0.5s linear infinite;
  animation: spin 0.5s linear infinite;
}

.mt-half {
  margin-top: 35vh;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
