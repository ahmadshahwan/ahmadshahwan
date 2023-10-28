<template>
    <div id="wrapper">
        <div id="header">
            <div id="logo">
                <h1>Ahmad <span class="sc">Shahwan</span> </h1>
                <h2>Research and Development Engineer, <a href="http://www.cohorte-technologies.com/">Cohorte Technologies</a></h2>
            </div>
            <!-- end #logo -->
            <div id="menu">
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/research">Research</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/teaching">Teaching</NuxtLink>

                    </li>
                    <li>
                        <NuxtLink to="/events">Events</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/career">Career</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contacts">Contacts</NuxtLink>
                    </li>
                </ul>
            </div>
            <!-- end #menu -->
        </div>
        <!-- end #header -->

        <div id="page">
            <div id="bgtop">
                <div id="bgbottom">
                    <div id="content">

                        <slot />

                    </div>
                    <!-- end #content -->
                    <div id="sidebar">
                        <ul>
                            <li>
                                <h2>Links</h2>
                                <ul>
                                    <li><img width="16" height="16" class="alignleft" src="images/inpg.png" alt="INP-G" />
                                        <a target="_blank" href="http://www.grenoble-inp.fr/">Grenoble INP</a></li>
                                    <li><img width="16" height="16" class="alignleft" src="images/g-scop.png" alt="G-SCOP" />
                                        <a target="_blank" href="http://www.g-scop.inpg.fr/">Laboratoire G-SCOP</a></li>
                                    <li><img width="16" height="16" class="alignleft" src="images/inria.png" alt="INRIA" />
                                        <a target="_blank" href="http://www.inria.fr/centre-de-recherche-inria/grenoble-rhone-alpes">INRIA Rhone-Alpes</a></li>
                                    <li><img width="16" height="16" class="alignleft" src="images/ujf.png" alt="UJF" />
                                        <a target="_blank" href="http://www.ujf-grenoble.fr/">UJF - Grenoble I</a></li>
                                    <li><img width="16" height="16" class="alignleft" src="images/mosig.png" alt="MoSIG" />
                                        <a target="_blank" href="http://mosig.imag.fr/">MoSIG Program</a></li>
                                    <li><img width="16" height="16" class="alignleft" src="images/damasuniv.png" alt="Damascus University" />
                                        <a target="_blank" href="http://damasuniv.edu.sy/english/">Damascus University</a></li>

                                </ul>
                            </li>
                            <li>
                                <h2>Join Me</h2>
                                <ul>
                                    <li><img alt="" width="16" height="16" class="alignleft" src="images/linkedin.png" />
                                        <a target="_blank" href="http://www.linkedin.com/profile/view?id=57163147">LinkIn</a></li>
                                    <li><img alt="" width="16" height="16" class="alignleft" src="images/researchgate.png" />
                                        <a target="_blank" href="https://www.researchgate.net/profile/Ahmad_Shahwan">ResearchGate</a></li>
                                    <li><img alt="" width="16" height="16" class="alignleft" src="images/google.png" />
                                        <a target="_blank" href="https://profiles.google.com/104917218848452103275/about">Google+</a></li>
                                    <li><img alt="" width="16" height="16" class="alignleft" src="images/twitter.png" />
                                        <a target="_blank" href="http://twitter.com/#!/ahmadshahwan">Follow me</a></li>
                                    <li><img alt="" width="16" height="16" class="alignleft" src="images/facebook.ico" />
                                        <a target="_blank" href="http://www.facebook.com/ahmad.shahwan">Like me</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!-- end #sidebar -->
                    <div style="clear: both;">&nbsp;</div>
                </div>
            </div>
        </div>
        <!-- end #page -->
        <div id="footer">
            <p>
                17 rue Antoine Lumière,
                69008 Lyon,
                France
            </p>
        </div>
        <!-- end #footer -->
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
