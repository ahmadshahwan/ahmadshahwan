<template>
  <div class="post">
    <div class="title">
      <h2>Teachings</h2>
    </div>
    <div class="entry">
      <Scrollable max-height="380px">
        <Institution title="Polytech Lyon" image="/images/teaching/polytech.png" alt="Polytech Lyon">
          <Topic title="Object Oriented Modelling and Programming">
            Fundamentals of Object Oriented modelling and programming are taught to first year engineering students.
            This includes UML and Java programming language and.
          </Topic>
          <Topic title="Software Engineering and Information Systems II">
            Advanced conceptional and practical aspects of software engineering are taught to second year engineering
            students.
          </Topic>
        </Institution>
        <Institution title="Université Sorbonne Paris Nord" image="/images/teaching/uspn.png" alt="USPN">
          <Topic title="Algorithms and Data Structures">
            Freshmen were taught Algorithms and Data Structures basics with C programming language.
          </Topic>
          <Topic title="HTML and the Web">
            Essential concepts of Web development. HTML 5 basics taught to freshmen.
          </Topic>
        </Institution>
        <Institution title="ENSIMAG - Grenoble INP" image="/images/teaching/ensimag.png" alt="ENSIMAG">
          <Topic title="Algorithms and Data Structures II">
            An overview of necessary algorithms that accompany computer scientists/engineers all along their career.
            First
            year engineering school students used Ada programming language to conduct lab work.
          </Topic>
          <Topic title="C Programming Language Project">
            A small project, presented with different themes, to establish engineering students knowledge about C
            programming
            language, the one common language between all developers.
          </Topic>
        </Institution>
        <Institution title="Génie Industriel - Grenoble INP" image="/images/teaching/gi.png" alt="GI">
          <Topic title="Product Representation for Design">
            This courses are meant to second year engineering students with different techniques of Computer Aided
            Design
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
        <Institution title="Université Grenoble Alpes - Grenoble II" image="/images/teaching/uga.png" alt="UGA">
          <Topic title="Computer Aided Design">
            A presentation of mainstream CAD systems such as CATIA V5 to professional master's students.
          </Topic>
        </Institution>
      </Scrollable>
    </div>
  </div>
</template>
<script setup lang="ts">

import Institution from "~/components/teaching/Institution.vue";
import Topic from "~/components/teaching/Topic.vue";
</script>
<style scoped>

</style>
