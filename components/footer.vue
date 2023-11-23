<template>
  <div id="footer">
    <div class="socials">
      <a target="_blank" href="https://www.linkedin.com/in/ahmadshahwan/">
        <img alt="LinkedIn" src="/images/linkedin.png"/>
      </a>
      
      <a target="_blank" href="https://github.com/ahmadshahwan">
        <img alt="Github" src="/images/github.png"/>
      </a>
      
      <a target="_blank" href="https://www.researchgate.net/profile/Ahmad_Shahwan">
        <img alt="Research Gate" src="/images/researchgate.png"/>
      </a>
      
      <a target="_blank" href="https://twitter.com/ahmadshahwan">
        <img alt="X" src="/images/x.png"/>
      </a>
      
      <a target="_blank" href="https://www.facebook.com/ahmad.shahwan">
        <img alt="Facebook" src="/images/facebook.ico"/>
      </a>
    </div>
    <p>
      17 rue Antoine Lumière,
      69008 Lyon,
      France
    </p>

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

#footer {
  display: flex;
  flex-direction: column;
  width:  920px;
  height: 100px;
  margin: 0 auto;
  padding: 30px 0 0 0;
  background: url(/images/bg07.jpg) no-repeat left top;

  .socials {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;
    align-items: center;
    margin: 0 auto 10px auto;
  }

  p {
    margin: 0;
    text-align: center;
    font-size: 11px;
  }

  img {
    height: 16px;
    width: 16px;
  }
}

</style>
