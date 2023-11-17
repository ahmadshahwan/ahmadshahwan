<template>
  <div id="wrapper">
    <Header></Header>
    <div id="page">
      <div id="bgtop">
        <div id="bgbottom">
          <div id="content">

            <slot/>

          </div>
          <Sidebar></Sidebar>
          <div style="clear: both;">&nbsp;</div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#wrapper {
  background: url(/images/bg02.jpg) repeat-x left top;
}

#bgtop {
  background: url(/images/bg05.jpg) no-repeat left top;
}

#bgbottom {
  background: url(/images/bg06.jpg) no-repeat left bottom;
}

#content {
  float: left;
  width: 650px;
  padding: 50px 0 0 35px;
  min-height: 400px;
}

</style>
