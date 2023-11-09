<template>
  <div class="post">
    <div class="title">
      <h2>Career</h2>
    </div>
    <div class="entry">
      <h3>Professional Experience</h3>
      <experience name="Rtone" image="/images/career/rtone.png">
        <template #period>May 2017, Sep 2017</template>
        <template #job-title>Full-stack developer</template>
        <template #partner>Rtone</template>
        <template #summary>
          Development of an extension to a public lighting management platform for Lacroix City.
        </template>
        <template #more>
          During this mission, I took charge of the entire software development of the extension, while ensuring fluid
          continuity of proper functioning of the product that was already in production in several cities in France and
          abroad.
          The extension covers the following features.
          <ul>
            <li>Improved user experience (dashboard, diagrams and statistics).</li>
            <li>Taking into account new equipment capabilities (configuration, monitoring, etc.).</li>
          </ul>

          The following technical requirements have been met.
          <ul>
            <li>Web interface developed in Java using Material Design components.</li>
            <li>Two-way communication with endpoints via Sierra Wireless AirVantage API (REST and MQTT communication
              protocols).
            </li>
            <li>Management of periodic batch processing.</li>
          </ul>

          Technical environment:
          <ul>
            <li>Java 8, MySQL, git.</li>
            <li>GWT (Google Web Toolkit), GWT Material.</li>
            <li>Spring Core, Spring Batch, Hibernate.</li>
            <li>JUnit, DbUnit, Mockito.</li>
          </ul>
        </template>
      </experience>
      <experience name="Cohorte Technologies" image="/images/career/cohorte.png">
        <template #period>Aug 2015, Feb 2017</template>
        <template #job-title>Research and Development Engineer</template>
        <template #partner>Cohorte Technologies</template>
        <template #summary>Development of the company's flagship artefact, Cohorte Runtime, as well as taking into
          responsibilities different other projects in collaboration with Agilium, such as Agilium GED-Engine.
        </template>
        <template #more>
          <p>Cohorte Technologies specializes in interoperability and service-oriented development.</p>
          <p>
          I have worked with Cohorte Technologies as an employee and as a consultant. During this collaboration I carried out the following projects.
          </p>

          <dl>
            <dt>Cohorte IoT Pack project: a generic IoT solution</dt>
            <dd><ul>
              <li>I developed the communication layer for the terminals (client side), using two protocols: LoRaWAN and HTTPS (via a REST API).</li>
              <li>I integrated the aggregator (server side) with Orange's Live Object REST API.</li>
              <li>I developed a web UI for terminal management in Angular Material and Python.</li>
            </ul></dd>

            <dt>Agilium GED Project</dt>
            <dd><ul>
              <li>I studied the technical choices and defined the architecture of an electronic document management system.</li>
              <li>I designed and developed a REST API based on the JAX-RS standard.</li>
              <li>I designed and developed a WebDAV interface as well as a JavaScript library allowing you to open documents with Microsoft Office with a single click for an authenticated user.</li>
              <li>I developed an internal authentication and user management module, as well as an SPI and an external authentication module.</li>
              <li>I developed a Windows installer, without any dependencies.</li>
            </ul></dd>

            <dt>Agilium License Project</dt>
            <dd><ul>
              <li>I studied the technical choices and defined the architecture of a software package license manager.</li>
              <li>I developed a client certificate generator signed by Agilium following the X.509 standard.</li>
              <li>I developed a software license generator, offering a REST API.</li>
              <li>I developed a license verification and interpretation module, with a temporary trial license manager.</li>
            </ul></dd>

            <dt>Cohorte Studios Project</dt>
            <dd>
              I participated in the design of an Eclipse toolkit to facilitate development with Cohorte framework.
            </dd>
          </dl>

          <p>Technical environment</p>
          <ul>
            <li>Java, JAAS, Eclipse 4, Eclipse PDE</li>
            <li>Git, Maven, Jenkins</li>
            <li>Python, Raspbian, PySerial</li>
            <li>HTML5, JavaScript, AngularJS, Material Design</li>
          </ul>
        </template>
      </experience>
      <experience name="Grenoble INP" image="/images/career/inp.png">
        <template #period>Sep 2013, Aug 2014</template>
        <template #job-title>Full-time lecturer</template>
        <template #partner>Génie Industriel, Grenoble INP</template>
        <template #summary>Teaching included lectures and course materials preparation, tutoring and evaluation,
          besides regular research responsibilities.
        </template>
        <template #more>
          <p>The Institut National Polytechnique de Grenoble brings together several engineering schools, including GI and ENSIMAG.</p>

          <p>
            I tutored programming language projects in Java and C, have given lectures in introduction to database management systems.
            I also monitored practical work and tutorials in algorithms and data structures.
          </p>
        </template>
      </experience>
      <experience name="Grenoble INP" image="/images/career/inp.png">
        <template #period>Oct 2010, Aug 2013</template>
        <template #job-title>PhD Candidate</template>
        <template #partner>G-SCOP, Grenoble INP</template>
        <template #summary>
          As part of my PhD, I developed an algorithm for extracting functional information from a 3D model.
          I participated in conferences in France and abroad, and made scientific publications as first and second author, in national and international journals.
        </template>
        <template #more>
          <p>The work was conducted as part of a collaborative national effort in the frame of ROMMA project.</p>
          <p>
            The project aimed to automate the process of preparation of the digital mock-up;
            that is the geometric representation of a product, in order to meet simulation process requirements. In the
            context of my research, a method to automatically identify components functional properties, and to
            restructure their geometry according to this functional knowledge, was proposed and implemented. This
            implementation provided semantic annotations that are necessary for the finite-element-analysis preparation
            phase. The method validity was against real-life data provided by industrial partner.
          </p>
        </template>
      </experience>
      <experience name="ITS" image="/images/career/its.png">
        <template #period>Jul 2008, Sep 2009</template>
        <template #job-title>Customer Application Analyst</template>
        <template #partner>ITS, Damascus, Syria</template>
        <template #summary>
          As ITS' envoy to Real-Estate Bank of Syria, I have learned how to insure important
          responsibilities, work under pressure, be in direct contact with customer, react fast, and make quick and sane
          decisions.
        </template>
        <template #more>
          Working from customer's premises, I supported one of ITS' major products; Phoenix, the core banking
          system, where all day-to-day banking transactions are processed. Working with ITS has reinforced many values,
          among which commitment, creativity, cooperation and productivity.
        </template>
      </experience>
      <experience name="MABCO" image="/images/career/mabco.png">
        <template #period>Dec 2005, Jul 2008</template>
        <template #job-title>Senior System Engineer, Team Leader</template>
        <template #partner>MABCO, Damascus, Syria</template>
        <template #summary>
          Participated in delivering a variety of projects, I worked on deploying the new
          information system of Points Of Sales and Service (POSS), as well as its mobile version; Vanman.
        </template>
        <template #more>
          After the project has been successfully launched in
          April 2007, focus was shifted to customize POSS. Once the new system was largely stabilized
          and adapted to the company's needs, a new project was initiated and baptized Vanman. It was meant to address
          overlooked issues in original POSS, particularly wholesales management. The initial version of the system was
          put to operation within less than three months, many changes has been made to this module later on, in
          accordance to users' feedback and continuously emerging requirements. Vanman -involving many technologies,
          such as mobile systems development, XML back-end, client-server model communication- was then one of the core
          business software that integrates with Mabco's information system. Along the journey with Mabco many other
          minor projects have been initiated and successfully delivered.
        </template>
      </experience>
      <experience name="Technolead" image="/images/career/technolead.png">
        <template #period>Sep 2005, Oct 2005</template>
        <template #job-title>Web Developer</template>
        <template #partner>Technolead, Damascus, Syria</template>
        <template #summary>
          Working at the Department of Business and Information Technology Solutions (BITS), I
          built a Web-based Content Management System, customizable in a way that complies with requirements of the
          variant customers. I also developed an integrated search engine.
        </template>
        <template #more>
          The job required keeping up to date with
          cutting edge Web technologies of the time, to find efficient solutions for the ever growing Internet users'
          needs.
        </template>
      </experience>

      <h3>Academic Profile</h3>
      <degree>
        <template #academic-title>Ph.D. in Computer Science and Applied Mathematics</template>
        <template #institution>Université de Grenoble</template>
        <template #year>2014</template>
      </degree>
      <degree>
        <template #academic-title>Master of Science in Graphics Vision, and Robotics</template>
        <template #institution>Université Joseph Fourier, Grenoble</template>
        <template #year>2010</template>
      </degree>
      <degree>
        <template #academic-title>Master's Degree in Computer Information Systems</template>
        <template #institution>Arab Academy for Banking and Financial Sciences, Damascus</template>
        <template #year>2009</template>
      </degree>
      <degree>
        <template #academic-title>Bachelor of Engineering in Information Technology</template>
        <template #institution>Damascus University, Damascus</template>
        <template #year>2005</template>
      </degree>
    </div>
  </div>
</template>

<script setup lang="ts">

import Experience from "~/components/career/experience.vue";
import Degree from "~/components/career/degree.vue";
</script>

<style scoped>

</style>
