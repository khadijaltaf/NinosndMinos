import React from "react";
import "./Addbtn.css";
import Nav from "../Navbar/Nav1.jsx";
import Footer from "../Footer/Footer.jsx";
import Second from "../Second/Second.jsx";

const Addbtn = () => {
  return (
    <div>
      <Nav />
      <Second />
      <br />
      <br />
      <div class="container-fluid">
        <div class="cart">
            <div class="row row1">
                <div class="col-md-4">
                    <img src="https://g.top4top.io/p_18005g0a61.jpg" width="100%" id="ProductImg"/>
                    <div class="small-imgs">
                        <img src="https://g.top4top.io/p_18005g0a61.jpg" width="100%" class="small-img"/>
                        <img src="https://h.top4top.io/p_1800o53842.jpg" width="100%" class="small-img"/>
                        <img src="https://i.top4top.io/p_1800anjtp3.jpg" width="100%" class="small-img"/>
                        <img src="https://j.top4top.io/p_1800a1b5d4.jpg" width="100%" class="small-img"/>
                    </div>                
                </div>
                <div class="col-md-6">
                    <h1 class="product-title">APRILSPRING Mens Running Sports Non-Slip Sneakers</h1>
                    <div class="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <p>240 reviews</p>
                    </div>
                    <div class="price">
                        <span>$38.00</span>
                        <span>$49.99</span>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <h4>Color</h4>
                            <div class="colors">
                                <div class="black"></div>
                                <div class="red"></div>
                                <div class="white"></div>
                                <div class="yellow"></div>
                            </div>
                        </div>
                        <div class="col-md-4 sze">
                            <h5>Size</h5>
                            <select class="size custom-select">
                                <option>Select Size</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                            </select>
                        </div>
                        <div class="col-md-4 qty">
                            <h5>Quantity</h5>
                            <select class="quantity custom-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                    <div id="product" class="product-inf">
                        <ul>
                          <li class="active"><a href="#Description">Product Description</a></li>
                          <li><a href="#Details">Product Details</a></li>
                        </ul>
                        <div class="tabs-content">
                            <div id="Description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, inventore magnam! Natus, quibusdam ea? Modi nemo corrupti alias quae quis.</p>
                            </div>
                            <div id="Details" >
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sequi eaque quisquam corrupti reprehenderit exercitationem iusto asperiores quae commodi quo?</p>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="#" class="custom-btn">Add To Cart <i class="fas fa-angle-right"></i></a>
                            </div>
                            <div class="col-md-6">
                                <a href="#" class="custom-btn">Buy Now <i class="fas fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    



      <br />

      <Footer />
    </div>
  );
};

export default Addbtn;
