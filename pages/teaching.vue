<template>
  <div class="post">
    <div class="title">
      <h2>Teachings</h2>
    </div>
    <div class="entry">
      <Institution title="ENSIMAG - Grenoble INP">
        <Topic title="Algorithms and Data Structures II">
          An overview of necessary algorithms that accompany computer scientists/engineers all along their career. First
          year engineering school students used Ada programming language to conduct lab work.
        </Topic>
        <Topic title="C Programming Language Project">
          A small project, presented with different themes, to establish engineering students knowledge about C
          programming
          language, the one common language between all developers.
        </Topic>
      </Institution>
      <Institution title="GI - Grenoble INP">
        <Topic title="Product Representation for Design">
          This courses are meant to second year engineering students with different techniques of Computer Aided Design
          such
          as CATIA V5 (tutorials are available <a href="index.php?p=materials#rppc">here</a>), PTC Creo Parametric and
          Product Lifecycle Management such as PTC Windchill.
        </Topic>
        <Topic title="Project Management">
          A tool-kit of necessary techniques and knowledge to handle short- and long-term project that the students
          acquire
          since their first year in their engineering endeavour.
        </Topic>
        <Topic title="Modelling and Optimisation in Product Development">
          An initiation in modeling using UML and database management.
        </Topic>
        <Topic title="Java Programming Project">
          An application of acquired expertise in the domain of information technology in a project reflecting real
          industrial concerns.
        </Topic>
        <Topic title="Advance Object Oriented Modeling and Design">
          An optional module to discuss advanced topics about the object oriented paradigm, and reinforce software
          engineering best practices. An example course syllabus is available <a
            href="index.php?p=materials#mcoa">here</a>.
        </Topic>
      </Institution>
      <Institution title="Université Joseph Fourier - Grenoble II">
        <Topic title="Computer Aided Design">
          A presentation of mainstream CAD systems such as CATIA V5 to professional master's students.
        </Topic>
      </Institution>
    </div>
  </div>
</template>
<script setup lang="ts">

import Institution from "~/components/teaching/Institution.vue";
import Topic from "~/components/teaching/Topic.vue";
</script>
<style scoped>

</style>
