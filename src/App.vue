<template>
  <div id="app">
    <!--Header-->
    <header id="header" class="header-narrow header-full-width header-transparent header-transparent-bottom-border" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 1, 'stickySetTop': '1'}">
         <div class="header-body">
            <div class="header-container container">
               <div class="header-row">
                  <div class="header-column">
                     <div class="header-row">
                        <div class="header-logo">
                           <a href="/#/">
                              <img width="108" height="72" src="img/OfficeWerq2.jpg">
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="header-column justify-content-end">
                     <div class="header-row">
                        <div class="header-nav">
                           <div class="header-nav-main header-nav-main-square custom-header-nav-main-effect-1">
                              <nav class="collapse">
                                 <ul class="nav nav-pills" id="mainNav">
                                    <li>
                                       <a v-if="isLoggedIn()" class="nav-link active" href="/#/workouts/daily" data-hash>
                                          Daily Workout
                                       </a>
                                       
                                    </li>
                                    <li>
                                       <a class="nav-link" href="/#/" data-hash data-hash-offset="78">
                                          Home
                                       </a>
                                    </li>
                                    <li>
                                       <a v-if="isLoggedIn()" class="nav-link" href="/#/users/me" data-hash data-hash-offset="78">
                                          Profile
                                       </a>
                                    </li>
                                    <li>
                                       <a v-if="isLoggedIn()" class="nav-link" href="/#/users" data-hash data-hash-offset="78"> LeaderBoard
                                       </a>
                                    </li>
                                    <li>
                                       <a class="nav-link" href="/#/login" data-hash data-hash-offset="78"> Login
                                          
                                       </a>
                                    </li>
                                    <li>
                                       <a class="nav-link" href="/#/signup" data-hash data-hash-offset="78"> Signup
                                          
                                       </a>
                                    </li>
                                    <li>
                                       <a v-if="isLoggedIn()" class="nav-link" href="/#/logout" data-hash data-hash-offset="78">
                                          Logout
                                       </a>
                                    </li>
                                    </li>
                                    <li>
                                       <a class="nav-link" href="#contact-us" data-hash data-hash-offset="78">
                                          Contact
                                       </a>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                           <ul class="header-social-icons social-icons custom-social-icons-style-1 _white d-none d-sm-block  rm-menu">
                              <li class="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fa fa-facebook-square"></i></a></li>
                              <li class="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i class="fa fa-twitter-square"></i></a></li>
                              <li class="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i class="fa fa-linkedin-square"></i></a></li>
                           </ul>
                           <button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
                              <i class="fa fa-bars"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </header>
      <!--End Header-->
    <div class="container">
     <router-view/>
    </div>
    <footer class="footer stylelamas" id="footer-1">
            <div class="main">
               <div class="container">
                  <div class="row">
                     <div class="col-md-4">
                        <section>
                           <div class="heading">
                              <h4 class="title">Newsletter</h4>
                           </div>
                           <p class="mb-10">
                              Keep up on our always evolving product features and technology. Enter your e-mail and subscribe to our newsletter.
                           </p>

                           <div class="clearfix">
                              <form id="newsletterForm" action="php/newsletter-subscribe.php" method="POST" novalidate="novalidate">
                                 <div class="input-group">
                                    <input class="form-control" placeholder="Email Address" name="newsletterEmail" id="newsletterEmail" type="text">
                                    <span class="input-group-btn">
                                       <button class="btn btn-light" type="submit"><i class="fa fa-search"></i></button>
                                    </span>
                                 </div>
                              </form>
                           </div>

                           <div class="clearfix social-wrap mt-25">
                              <ul class="list-inline">
                                 <li>
                                    <a href="http://twitter.com/" class="asc_twitter clearfix">
                                       <span class="social-icon"><i class="ion-social-twitter"></i></span>
                                       <div class="meta clearfix">
                                          <strong class="asc_count">Follow</strong>
                                          <div class="name">on Twitter</div>
                                       </div>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="http://facebook.com/" class="asc_facebook clearfix">
                                       <span class="social-icon"><i class="ion-social-facebook"></i></span>
                                       <div class="meta clearfix">
                                          <strong class="asc_count">Follow</strong>
                                          <div class="name">on Facebook</div>
                                       </div>
                                    </a>
                                 </li>
                                 <!--<li>
                                    <a href="http://facebook.com/" class="asc_rss clearfix">
                                       <span class="social-icon"><i class="ion-social-rss"></i></span>
                                       <div class="meta clearfix">
                                          <strong class="asc_count">Subscribe</strong>
                                          <div class="name">to RSS Feed</div>
                                       </div>
                                    </a>
                                 </li>-->
                              </ul>
                           </div>
                        </section>
                     </div>

                     <div class="col-md-1"> </div>
                     <div class="col-md-2 col-sm-6">
                        <section>
                           <div class="heading">
                              <h4 class="title">Company</h4>
                           </div>
                           <ul class="list-unstyled">
                              <li> <a href="index.html">FAQ & Terms</a> </li>
                              <li> <a href="custom-fonts/index.html">About Company</a> </li>
                              <li> <a href="index.html">Terms of Service</a> </li>
                              <li> <a href="index.html">Track Order</a> </li>
                              <li> <a href="custom-fonts/index.html">Delivery</a> </li>
                              <li> <a href="index.html">Privacy Policy</a> </li>
                              <li> <a href="index.html">Jobs</a> <span class="label label-default o-8">2</span></li>
                           </ul>
                        </section>
                     </div>
                     <div class="col-md-2 col-sm-6">
                        <section>
                           <div class="heading">
                              <h4 class="title">Usefull Links</h4>
                           </div>
                           <ul class="list-unstyled">
                              <li> <a href="contact/index.html">Knowledge Base</a> </li>
                              <li> <a href="custom-fonts/index.html">Tracking & Reports</a> </li>
                              <li> <a href="index.html">Contact Express</a> </li>
                              <li> <a href="responsive-image/index.html">Conditions</a> </li>
                              <li> <a href="contact/index.html">Privacy Policy</a> </li>
                              <li> <a href="index.html">Documentation</a> </li>
                              <li> <a href="custom-fonts/index.html">All Features</a> </li>
                           </ul>
                        </section>
                     </div>

                     <div class="col-md-3">
                        <section>
                           <div class="heading">
                              <h4 class="title">Contact Us</h4>
                           </div>

                           <div class="map-img">
                              <address>
                                 <i class="ion-ios-location"></i> <strong> Address</strong><br>
                                 795 Folsom Ave, Suite 600 San Francisco, CA 94107<br>
                              </address>
                              <abbr title="Phone Number"><strong>Phone:</strong></abbr> (91) 8547 632521<br>
                              <abbr title="Fax"><strong>Fax:</strong></abbr> (91) 11 4752 1433<br>
                              <abbr title="Email Address"><strong>Email:</strong></abbr> info@express.com
                           </div>
                        </section>
                     </div>
                  </div>
               </div>
            </div>


            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-sm-6">
                        <ul class="list-inline fs-13 mb-none">
                           <li><p class="mb-0 fw-6">© 2015-2018 Express</p></li>
                           <li><a href="pages-about.html">About</a></li>
                           <li><a href="blog-grid.html">Blog</a></li>
                           <li><a href="pages-contact.html">Contact</a></li>
                           <li><a href="#">Terms</a></li>
                           <li><a href="#">Jobs</a></li>
                           <li><a href="#">Sitemap</a></li>
                           <li><a href="#">Public Policy</a></li>
                        </ul>
                     </div>

                     <div class="col-sm-6">
                        <ul class="footer-socials list-inline pull-right mb-none">
                           <li><a href="#" class="tooltips" data-placement="top" data-rel="tooltip" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                           <li><a href="#" class="tooltips" data-placement="top" data-rel="tooltip" data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                           <li><a href="#" class="tooltips" data-placement="top" data-rel="tooltip" data-original-title="Google+"><i class="fa fa-google-plus"></i></a></li>
                           <li><a href="#" class="tooltips" data-placement="top" data-rel="tooltip" data-original-title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                           <li><a href="#" class="tooltips" data-placement="top" data-rel="tooltip" data-original-title="Linkedin"><i class="fa fa-tumblr"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
  </div>
</template>


<style>
  body {
    margin-top: 100px;  
  }
  .header-logo img {
    height: 25%;
    width: 25%;
    margin-left: 20px;
  }
 </style>
<script> 
export default {
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      }
      return false;
    },
  }
};
</script> 