<template>
  <div id="sidebar">
    <ul>
      <li>
        <h2>Links</h2>
        <ul>
          <li>
            <img class="alignleft" src="/images/digamma.png" alt="Digamma Solutions"/>
            <a target="_blank" href="https://digamma.solutions/">Digamma Solutions</a>
          </li>
          <li>
            <img class="alignleft" src="/images/inp.png" alt="INP Grenoble"/>
            <a target="_blank" href="https://www.grenoble-inp.fr/">Grenoble INP</a>
          </li>
          <li>
            <img class="alignleft" src="/images/inria.png" alt="INRIA"/>
            <a target="_blank" href="https://www.inria.fr/en/inria-centre-university-grenoble-alpes">INRIA Rhone-Alpes</a>
          </li>
          <li>
            <img class="alignleft" src="/images/mosig.png" alt="MoSIG"/>
            <a target="_blank" href="https://mosig.imag.fr/">MoSIG Program</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

#sidebar {
  float: right;
  width: 180px;
  padding: 50px 10px 0 0;
}

#sidebar img {
  width: 16px;
  height: 16px;
}

#sidebar ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#sidebar li {
}

#sidebar li ul {
  margin: 15px 15px 25px 15px;
}

#sidebar li li {
  font-size: 11px;
}

#sidebar h2 {
  height: 27px;
  margin: 0;
  padding: 3px 0 0 15px;
  font-size: 24px;
  color: #FFFFFF;
}

#sidebar a {
  color: #BCE8EC;
}
</style>
