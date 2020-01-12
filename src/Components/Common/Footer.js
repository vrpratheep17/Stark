import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="page-footer font-small bg-primary">
          <div class="container">
            <div class="row">
              <div class="col-md-12 py-5 text-center text-light">
                <div class=" flex-center">
                  <a class="fb-ic">
                    <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>

                  <a class="tw-ic">
                    <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>

                  <a class="gplus-ic">
                    <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>

                  <a class="li-ic">
                    <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>

                  <a class="ins-ic">
                    <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>

                  <a class="pin-ic">
                    <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-copyright text-center py-3 text-color text-font">
            Website developed and maintained by Pratheep
          </div>
        </footer>
      </div>
    );
  }
}
