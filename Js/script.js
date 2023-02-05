$(document).ready(function () {
  var list = 0;
  var count = 0;
  var noPro = 0;
  var pushData = [];
  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function (data) {
    //First Section
    var clothingHeading = document.createElement("h2");
    clothingHeading.classList.add("h2-left");
    clothingHeading.textContent = "Clothing for Men and Women";
    clothingHeading.style.fontFamily = "montserrat, sans-serif";
    var clothing = document.getElementById("clothing");
    clothing.appendChild(clothingHeading);

    var section = document.createElement("section");
    section.classList.add("flex-layout");
    clothing.appendChild(section);

    function cards(photo, heading, colorName, price, id) {
      var carDiv = document.createElement("div");
      carDiv.classList.add("divClass");
      var image = document.createElement("img");
      var cardHeading = document.createElement("h4");
      cardHeading.classList.add("headingInTheCard");
      var details = document.createElement("p");
      details.classList.add("detailsInCard");
      var amount = document.createElement("p");
      amount.classList.add("amountOnCard");
      image.setAttribute("src", photo);
      image.setAttribute("alt", "Image of a product");
      image.classList.add("imgClass");
      cardHeading.textContent = heading;
      details.textContent = colorName;
      amount.textContent = "Rs " + price;
      carDiv.appendChild(image);
      carDiv.appendChild(cardHeading);
      carDiv.appendChild(details);
      carDiv.appendChild(amount);
      section.appendChild(carDiv);
      carDiv.setAttribute("id", "card" + id);
    }

    for (var i = 0; i < data.length / 2; i++) {
      cards(
        data[i].preview,
        data[i].name,
        data[i].brand,
        data[i].price,
        data[i].id
      );
    }

    //Second Section
    var accessoriesHeading = document.createElement("h2");
    accessoriesHeading.classList.add("h2-left");
    accessoriesHeading.textContent = "Accessories for Men and Women";
    accessoriesHeading.style.fontFamily = "montserrat, sans-serif";
    var accessories = document.getElementById("accessories");
    accessories.appendChild(accessoriesHeading);

    var sec = document.createElement("section");
    sec.classList.add("flex-layout");
    accessories.appendChild(sec);

    function secCards(aphoto, aheading, acolorName, aprice, aid) {
      var carDiv1 = document.createElement("div");
      carDiv1.classList.add("divClass");
      var image1 = document.createElement("img");
      var cardHeading1 = document.createElement("h4");
      cardHeading1.classList.add("headingInTheCard");
      var details1 = document.createElement("p");
      details1.classList.add("detailsInCard");
      var amount1 = document.createElement("p");
      amount1.classList.add("amountOnCard");
      image1.setAttribute("src", aphoto);
      image1.setAttribute("alt", "Image of a product");
      image1.classList.add("imgClass");
      cardHeading1.textContent = aheading;
      details1.textContent = acolorName;
      amount1.textContent = "Rs " + aprice;
      carDiv1.appendChild(image1);
      carDiv1.appendChild(cardHeading1);
      carDiv1.appendChild(details1);
      carDiv1.appendChild(amount1);
      sec.appendChild(carDiv1);
      carDiv1.setAttribute("id", "card" + aid);
    }

    for (var j = data.length / 2; j < data.length; j++) {
      secCards(
        data[j].preview,
        data[j].name,
        data[j].brand,
        data[j].price,
        data[j].id
      );
    }

    $("#card1").click(productDetails1);
    $("#card2").click(productDetails2);
    $("#card3").click(productDetails3);
    $("#card4").click(productDetails4);
    $("#card5").click(productDetails5);
    $("#card6").click(productDetails6);
    $("#card7").click(productDetails7);
    $("#card8").click(productDetails8);
    $("#card9").click(productDetails9);
    $("#card10").click(productDetails10);

    function productDetails1() {
      $("#clothing").hide();
      $("#accessories").hide();
      $("#carousal-sec").hide();
      $.get(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product/1",
        function (data) {
          console.log(data);
          var mainImg = $("<img>");
          mainImg.attr("src", data.preview);
          mainImg.attr("alt", "preview-img");
          $(".left-sec").append(mainImg);

          var heading = $("<h1></h1>");
          heading.text(data.name);
          var para1 = $("<p></p>");
          para1.text(data.brand);
          para1.addClass("product-details");
          var para2 = $("<p></p>");
          var span1 = $("<span></span>").text(data.price);
          para2.text("Price: Rs");
          para2.append(span1);
          para2.addClass("product-details");
          var para3 = $("<p></p>");
          para3.text("Description");
          para3.addClass("product-details");
          var para4 = $("<p></p>");
          para4.addClass("details");
          para4.text(data.description);
          var para5 = $("<p></p>");
          para5.addClass("product-details");
          para5.text("Product Preview");

          $(".details-of-the-product").append(heading);
          $(".details-of-the-product").append(para1);
          $(".details-of-the-product").append(para2);
          $(".details-of-the-product").append(para3);
          $(".details-of-the-product").append(para4);
          $(".details-of-the-product").append(para5);

          var pho = data.photos;
          for (var i = 0; i < pho.length; i++) {
            var productImage = $("<img>");
            productImage.attr("id", "image" + (i + 1));
            productImage.attr("src", data.photos[i]);
            productImage.attr("alt", "photo" + (i + 1));
            $(".select-img").append(productImage);
          }

          $("#image1").addClass("border-color");
          $("#image1").click(function () {
            $(".left-sec img").attr("src", data.photos[0]);
            $("#image1").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image2").click(function () {
            $(".left-sec img").attr("src", data.photos[1]);
            $("#image2").addClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image3").click(function () {
            $(".left-sec img").attr("src", data.photos[2]);
            $("#image3").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image4").click(function () {
            $(".left-sec img").attr("src", data.photos[3]);
            $("#image4").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image5").click(function () {
            $(".left-sec img").attr("src", data.photos[4]);
            $("#image5").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image6").click(function () {
            $(".left-sec img").attr("src", data.photos[5]);
            $("#image6").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image1").removeClass("border-color");
          });
          var button = `<button type="button" class="add-to-cart">Add to Cart</button>`;
          $(".right-sec").append(button);
          var no = 0;
          $(".add-to-cart").click(function () {
            count = localStorage.getItem("count");
            count++;
            localStorage.setItem("count", count);
            $("#cart-logo i p").text(localStorage.getItem("count"));

            no++;
            localStorage.setItem("preview1", data.preview);
            localStorage.setItem("name1", data.name);
            localStorage.setItem("no1", no);
            localStorage.setItem("price1", data.price);
          });
        }
      );
    }
    function productDetails2() {
      $("#clothing").hide();
      $("#accessories").hide();
      $("#carousal-sec").hide();

      $.get(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product/2",
        function (data) {
          console.log(data);
          var mainImg = $("<img>");
          mainImg.attr("src", data.preview);
          mainImg.attr("alt", "preview-img");
          $(".left-sec").append(mainImg);

          var heading = $("<h1></h1>");
          heading.text(data.name);
          var para1 = $("<p></p>");
          para1.text(data.brand);
          para1.addClass("product-details");
          var para2 = $("<p></p>");
          var span1 = $("<span></span>").text(data.price);
          para2.text("Price: Rs");
          para2.append(span1);
          para2.addClass("product-details");
          var para3 = $("<p></p>");
          para3.text("Description");
          para3.addClass("product-details");
          var para4 = $("<p></p>");
          para4.addClass("details");
          para4.text(data.description);
          var para5 = $("<p></p>");
          para5.addClass("product-details");
          para5.text("Product Preview");

          $(".details-of-the-product").append(heading);
          $(".details-of-the-product").append(para1);
          $(".details-of-the-product").append(para2);
          $(".details-of-the-product").append(para3);
          $(".details-of-the-product").append(para4);
          $(".details-of-the-product").append(para5);

          var pho = data.photos;
          for (var i = 0; i < pho.length; i++) {
            var productImage = $("<img>");
            productImage.attr("id", "image" + (i + 1));
            productImage.attr("src", data.photos[i]);
            productImage.attr("alt", "photo" + (i + 1));
            $(".select-img").append(productImage);
          }

          $("#image1").addClass("border-color");
          $("#image1").click(function () {
            $(".left-sec img").attr("src", data.photos[0]);
            $("#image1").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image2").click(function () {
            $(".left-sec img").attr("src", data.photos[1]);
            $("#image2").addClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image3").click(function () {
            $(".left-sec img").attr("src", data.photos[2]);
            $("#image3").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image4").click(function () {
            $(".left-sec img").attr("src", data.photos[3]);
            $("#image4").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image5").click(function () {
            $(".left-sec img").attr("src", data.photos[4]);
            $("#image5").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image6").click(function () {
            $(".left-sec img").attr("src", data.photos[5]);
            $("#image6").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image1").removeClass("border-color");
          });
          var button = `<button type="button" class="add-to-cart">Add to Cart</button>`;
          $(".right-sec").append(button);
          var no = 0;
          $(".add-to-cart").click(function () {
            count = localStorage.getItem("count");
            count++;
            localStorage.setItem("count", count);
            $("#cart-logo i p").text(localStorage.getItem("count"));

            no++;
            localStorage.setItem("preview2", data.preview);
            localStorage.setItem("name2", data.name);
            localStorage.setItem("no2", no);
            localStorage.setItem("price2", data.price);
          });
        }
      );
    }
    function productDetails3() {
      $("#clothing").hide();
      $("#accessories").hide();
      $("#carousal-sec").hide();

      $.get(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product/3",
        function (data) {
          console.log(data);
          var mainImg = $("<img>");
          mainImg.attr("src", data.preview);
          mainImg.attr("alt", "preview-img");
          $(".left-sec").append(mainImg);

          var heading = $("<h1></h1>");
          heading.text(data.name);
          var para1 = $("<p></p>");
          para1.text(data.brand);
          para1.addClass("product-details");
          var para2 = $("<p></p>");
          var span1 = $("<span></span>").text(data.price);
          para2.text("Price: Rs");
          para2.append(span1);
          para2.addClass("product-details");
          var para3 = $("<p></p>");
          para3.text("Description");
          para3.addClass("product-details");
          var para4 = $("<p></p>");
          para4.addClass("details");
          para4.text(data.description);
          var para5 = $("<p></p>");
          para5.addClass("product-details");
          para5.text("Product Preview");

          $(".details-of-the-product").append(heading);
          $(".details-of-the-product").append(para1);
          $(".details-of-the-product").append(para2);
          $(".details-of-the-product").append(para3);
          $(".details-of-the-product").append(para4);
          $(".details-of-the-product").append(para5);

          var pho = data.photos;
          for (var i = 0; i < pho.length; i++) {
            var productImage = $("<img>");
            productImage.attr("id", "image" + (i + 1));
            productImage.attr("src", data.photos[i]);
            productImage.attr("alt", "photo" + (i + 1));
            $(".select-img").append(productImage);
          }

          $("#image1").addClass("border-color");
          $("#image1").click(function () {
            $(".left-sec img").attr("src", data.photos[0]);
            $("#image1").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image2").click(function () {
            $(".left-sec img").attr("src", data.photos[1]);
            $("#image2").addClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image3").click(function () {
            $(".left-sec img").attr("src", data.photos[2]);
            $("#image3").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image4").click(function () {
            $(".left-sec img").attr("src", data.photos[3]);
            $("#image4").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image5").click(function () {
            $(".left-sec img").attr("src", data.photos[4]);
            $("#image5").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image6").click(function () {
            $(".left-sec img").attr("src", data.photos[5]);
            $("#image6").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image1").removeClass("border-color");
          });
          var button = `<button type="button" class="add-to-cart">Add to Cart</button>`;
          $(".right-sec").append(button);
          var no = 0;
          $(".add-to-cart").click(function () {
            count = localStorage.getItem("count");
            count++;
            localStorage.setItem("count", count);
            $("#cart-logo i p").text(localStorage.getItem("count"));

            no++;
            localStorage.setItem("preview3", data.preview);
            localStorage.setItem("name3", data.name);
            localStorage.setItem("no3", no);
            localStorage.setItem("price3", data.price);
          });
        }
      );
    }
    function productDetails4() {
      $("#clothing").hide();
      $("#accessories").hide();
      $("#carousal-sec").hide();

      $.get(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product/4",
        function (data) {
          console.log(data);
          var mainImg = $("<img>");
          mainImg.attr("src", data.preview);
          mainImg.attr("alt", "preview-img");
          $(".left-sec").append(mainImg);

          var heading = $("<h1></h1>");
          heading.text(data.name);
          var para1 = $("<p></p>");
          para1.text(data.brand);
          para1.addClass("product-details");
          var para2 = $("<p></p>");
          var span1 = $("<span></span>").text(data.price);
          para2.text("Price: Rs");
          para2.append(span1);
          para2.addClass("product-details");
          var para3 = $("<p></p>");
          para3.text("Description");
          para3.addClass("product-details");
          var para4 = $("<p></p>");
          para4.addClass("details");
          para4.text(data.description);
          var para5 = $("<p></p>");
          para5.addClass("product-details");
          para5.text("Product Preview");

          $(".details-of-the-product").append(heading);
          $(".details-of-the-product").append(para1);
          $(".details-of-the-product").append(para2);
          $(".details-of-the-product").append(para3);
          $(".details-of-the-product").append(para4);
          $(".details-of-the-product").append(para5);

          var pho = data.photos;
          for (var i = 0; i < pho.length; i++) {
            var productImage = $("<img>");
            productImage.attr("id", "image" + (i + 1));
            productImage.attr("src", data.photos[i]);
            productImage.attr("alt", "photo" + (i + 1));
            $(".select-img").append(productImage);
          }

          $("#image1").addClass("border-color");
          $("#image1").click(function () {
            $(".left-sec img").attr("src", data.photos[0]);
            $("#image1").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image2").click(function () {
            $(".left-sec img").attr("src", data.photos[1]);
            $("#image2").addClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image3").click(function () {
            $(".left-sec img").attr("src", data.photos[2]);
            $("#image3").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image4").click(function () {
            $(".left-sec img").attr("src", data.photos[3]);
            $("#image4").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image5").click(function () {
            $(".left-sec img").attr("src", data.photos[4]);
            $("#image5").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image6").click(function () {
            $(".left-sec img").attr("src", data.photos[5]);
            $("#image6").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image1").removeClass("border-color");
          });
          var button = `<button type="button" class="add-to-cart">Add to Cart</button>`;
          $(".right-sec").append(button);
          var no = 0;
          $(".add-to-cart").click(function () {
            count = localStorage.getItem("count");
            count++;
            localStorage.setItem("count", count);
            $("#cart-logo i p").text(localStorage.getItem("count"));

            no++;
            localStorage.setItem("preview4", data.preview);
            localStorage.setItem("name4", data.name);
            localStorage.setItem("no4", no);
            localStorage.setItem("price4", data.price);
          });
        }
      );
    }
    function productDetails5() {
      $("#clothing").hide();
      $("#accessories").hide();
      $("#carousal-sec").hide();

      $.get(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product/5",
        function (data) {
          console.log(data);
          var mainImg = $("<img>");
          mainImg.attr("src", data.preview);
          mainImg.attr("alt", "preview-img");
          $(".left-sec").append(mainImg);

          var heading = $("<h1></h1>");
          heading.text(data.name);
          var para1 = $("<p></p>");
          para1.text(data.brand);
          para1.addClass("product-details");
          var para2 = $("<p></p>");
          var span1 = $("<span></span>").text(data.price);
          para2.text("Price: Rs");
          para2.append(span1);
          para2.addClass("product-details");
          var para3 = $("<p></p>");
          para3.text("Description");
          para3.addClass("product-details");
          var para4 = $("<p></p>");
          para4.addClass("details");
          para4.text(data.description);
          var para5 = $("<p></p>");
          para5.addClass("product-details");
          para5.text("Product Preview");

          $(".details-of-the-product").append(heading);
          $(".details-of-the-product").append(para1);
          $(".details-of-the-product").append(para2);
          $(".details-of-the-product").append(para3);
          $(".details-of-the-product").append(para4);
          $(".details-of-the-product").append(para5);

          var pho = data.photos;
          for (var i = 0; i < pho.length; i++) {
            var productImage = $("<img>");
            productImage.attr("id", "image" + (i + 1));
            productImage.attr("src", data.photos[i]);
            productImage.attr("alt", "photo" + (i + 1));
            $(".select-img").append(productImage);
          }

          $("#image1").addClass("border-color");
          $("#image1").click(function () {
            $(".left-sec img").attr("src", data.photos[0]);
            $("#image1").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image2").click(function () {
            $(".left-sec img").attr("src", data.photos[1]);
            $("#image2").addClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image3").click(function () {
            $(".left-sec img").attr("src", data.photos[2]);
            $("#image3").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image4").click(function () {
            $(".left-sec img").attr("src", data.photos[3]);
            $("#image4").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image5").click(function () {
            $(".left-sec img").attr("src", data.photos[4]);
            $("#image5").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image6").click(function () {
            $(".left-sec img").attr("src", data.photos[5]);
            $("#image6").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image1").removeClass("border-color");
          });
          var button = `<button type="button" class="add-to-cart">Add to Cart</button>`;
          $(".right-sec").append(button);
          var no = 0;
          $(".add-to-cart").click(function () {
            count = localStorage.getItem("count");
            count++;
            localStorage.setItem("count", count);
            $("#cart-logo i p").text(localStorage.getItem("count"));

            no++;
            localStorage.setItem("preview5", data.preview);
            localStorage.setItem("name5", data.name);
            localStorage.setItem("no5", no);
            localStorage.setItem("price5", data.price);
          });
        }
      );
    }
    function productDetails6() {
      $("#clothing").hide();
      $("#accessories").hide();
      $("#carousal-sec").hide();

      $.get(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product/6",
        function (data) {
          console.log(data);
          var mainImg = $("<img>");
          mainImg.attr("src", data.preview);
          mainImg.attr("alt", "preview-img");
          $(".left-sec").append(mainImg);

          var heading = $("<h1></h1>");
          heading.text(data.name);
          var para1 = $("<p></p>");
          para1.text(data.brand);
          para1.addClass("product-details");
          var para2 = $("<p></p>");
          var span1 = $("<span></span>").text(data.price);
          para2.text("Price: Rs");
          para2.append(span1);
          para2.addClass("product-details");
          var para3 = $("<p></p>");
          para3.text("Description");
          para3.addClass("product-details");
          var para4 = $("<p></p>");
          para4.addClass("details");
          para4.text(data.description);
          var para5 = $("<p></p>");
          para5.addClass("product-details");
          para5.text("Product Preview");

          $(".details-of-the-product").append(heading);
          $(".details-of-the-product").append(para1);
          $(".details-of-the-product").append(para2);
          $(".details-of-the-product").append(para3);
          $(".details-of-the-product").append(para4);
          $(".details-of-the-product").append(para5);

          var pho = data.photos;
          for (var i = 0; i < pho.length; i++) {
            var productImage = $("<img>");
            productImage.attr("id", "image" + (i + 1));
            productImage.attr("src", data.photos[i]);
            productImage.attr("alt", "photo" + (i + 1));
            $(".select-img").append(productImage);
          }

          $("#image1").addClass("border-color");
          $("#image1").click(function () {
            $(".left-sec img").attr("src", data.photos[0]);
            $("#image1").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image2").click(function () {
            $(".left-sec img").attr("src", data.photos[1]);
            $("#image2").addClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image3").click(function () {
            $(".left-sec img").attr("src", data.photos[2]);
            $("#image3").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image4").click(function () {
            $(".left-sec img").attr("src", data.photos[3]);
            $("#image4").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image5").click(function () {
            $(".left-sec img").attr("src", data.photos[4]);
            $("#image5").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image6").click(function () {
            $(".left-sec img").attr("src", data.photos[5]);
            $("#image6").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image1").removeClass("border-color");
          });
          var button = `<button type="button" class="add-to-cart">Add to Cart</button>`;
          $(".right-sec").append(button);
          var no = 0;
          $(".add-to-cart").click(function () {
            count = localStorage.getItem("count");
            count++;
            localStorage.setItem("count", count);
            $("#cart-logo i p").text(localStorage.getItem("count"));

            no++;
            localStorage.setItem("preview6", data.preview);
            localStorage.setItem("name6", data.name);
            localStorage.setItem("no6", no);
            localStorage.setItem("price6", data.price);
          });
        }
      );
    }
    function productDetails7() {
      $("#clothing").hide();
      $("#accessories").hide();
      $("#carousal-sec").hide();

      $.get(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product/7",
        function (data) {
          console.log(data);
          var mainImg = $("<img>");
          mainImg.attr("src", data.preview);
          mainImg.attr("alt", "preview-img");
          $(".left-sec").append(mainImg);

          var heading = $("<h1></h1>");
          heading.text(data.name);
          var para1 = $("<p></p>");
          para1.text(data.brand);
          para1.addClass("product-details");
          var para2 = $("<p></p>");
          var span1 = $("<span></span>").text(data.price);
          para2.text("Price: Rs");
          para2.append(span1);
          para2.addClass("product-details");
          var para3 = $("<p></p>");
          para3.text("Description");
          para3.addClass("product-details");
          var para4 = $("<p></p>");
          para4.addClass("details");
          para4.text(data.description);
          var para5 = $("<p></p>");
          para5.addClass("product-details");
          para5.text("Product Preview");

          $(".details-of-the-product").append(heading);
          $(".details-of-the-product").append(para1);
          $(".details-of-the-product").append(para2);
          $(".details-of-the-product").append(para3);
          $(".details-of-the-product").append(para4);
          $(".details-of-the-product").append(para5);

          var pho = data.photos;
          for (var i = 0; i < pho.length; i++) {
            var productImage = $("<img>");
            productImage.attr("id", "image" + (i + 1));
            productImage.attr("src", data.photos[i]);
            productImage.attr("alt", "photo" + (i + 1));
            $(".select-img").append(productImage);
          }

          $("#image1").addClass("border-color");
          $("#image1").click(function () {
            $(".left-sec img").attr("src", data.photos[0]);
            $("#image1").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image2").click(function () {
            $(".left-sec img").attr("src", data.photos[1]);
            $("#image2").addClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image3").click(function () {
            $(".left-sec img").attr("src", data.photos[2]);
            $("#image3").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image4").click(function () {
            $(".left-sec img").attr("src", data.photos[3]);
            $("#image4").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image5").click(function () {
            $(".left-sec img").attr("src", data.photos[4]);
            $("#image5").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image6").click(function () {
            $(".left-sec img").attr("src", data.photos[5]);
            $("#image6").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image1").removeClass("border-color");
          });
          var button = `<button type="button" class="add-to-cart">Add to Cart</button>`;
          $(".right-sec").append(button);
          var no = 0;
          $(".add-to-cart").click(function () {
            count = localStorage.getItem("count");
            count++;
            localStorage.setItem("count", count);
            $("#cart-logo i p").text(localStorage.getItem("count"));

            no++;
            localStorage.setItem("preview7", data.preview);
            localStorage.setItem("name7", data.name);
            localStorage.setItem("no7", no);
            localStorage.setItem("price7", data.price);
          });
        }
      );
    }
    function productDetails8() {
      $("#clothing").hide();
      $("#accessories").hide();
      $("#carousal-sec").hide();

      $.get(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product/8",
        function (data) {
          console.log(data);
          var mainImg = $("<img>");
          mainImg.attr("src", data.preview);
          mainImg.attr("alt", "preview-img");
          $(".left-sec").append(mainImg);

          var heading = $("<h1></h1>");
          heading.text(data.name);
          var para1 = $("<p></p>");
          para1.text(data.brand);
          para1.addClass("product-details");
          var para2 = $("<p></p>");
          var span1 = $("<span></span>").text(data.price);
          para2.text("Price: Rs");
          para2.append(span1);
          para2.addClass("product-details");
          var para3 = $("<p></p>");
          para3.text("Description");
          para3.addClass("product-details");
          var para4 = $("<p></p>");
          para4.addClass("details");
          para4.text(data.description);
          var para5 = $("<p></p>");
          para5.addClass("product-details");
          para5.text("Product Preview");

          $(".details-of-the-product").append(heading);
          $(".details-of-the-product").append(para1);
          $(".details-of-the-product").append(para2);
          $(".details-of-the-product").append(para3);
          $(".details-of-the-product").append(para4);
          $(".details-of-the-product").append(para5);

          var pho = data.photos;
          for (var i = 0; i < pho.length; i++) {
            var productImage = $("<img>");
            productImage.attr("id", "image" + (i + 1));
            productImage.attr("src", data.photos[i]);
            productImage.attr("alt", "photo" + (i + 1));
            $(".select-img").append(productImage);
          }

          $("#image1").addClass("border-color");
          $("#image1").click(function () {
            $(".left-sec img").attr("src", data.photos[0]);
            $("#image1").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image2").click(function () {
            $(".left-sec img").attr("src", data.photos[1]);
            $("#image2").addClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image3").click(function () {
            $(".left-sec img").attr("src", data.photos[2]);
            $("#image3").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image4").click(function () {
            $(".left-sec img").attr("src", data.photos[3]);
            $("#image4").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image5").click(function () {
            $(".left-sec img").attr("src", data.photos[4]);
            $("#image5").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image6").click(function () {
            $(".left-sec img").attr("src", data.photos[5]);
            $("#image6").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image1").removeClass("border-color");
          });
          var button = `<button type="button" class="add-to-cart">Add to Cart</button>`;
          $(".right-sec").append(button);
          var no = 0;
          $(".add-to-cart").click(function () {
            count = localStorage.getItem("count");
            count++;
            localStorage.setItem("count", count);
            $("#cart-logo i p").text(localStorage.getItem("count"));

            no++;
            localStorage.setItem("preview8", data.preview);
            localStorage.setItem("name8", data.name);
            localStorage.setItem("no8", no);
            localStorage.setItem("price8", data.price);
          });
        }
      );
    }
    function productDetails9() {
      $("#clothing").hide();
      $("#accessories").hide();
      $("#carousal-sec").hide();

      $.get(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product/9",
        function (data) {
          console.log(data);
          var mainImg = $("<img>");
          mainImg.attr("src", data.preview);
          mainImg.attr("alt", "preview-img");
          $(".left-sec").append(mainImg);

          var heading = $("<h1></h1>");
          heading.text(data.name);
          var para1 = $("<p></p>");
          para1.text(data.brand);
          para1.addClass("product-details");
          var para2 = $("<p></p>");
          var span1 = $("<span></span>").text(data.price);
          para2.text("Price: Rs");
          para2.append(span1);
          para2.addClass("product-details");
          var para3 = $("<p></p>");
          para3.text("Description");
          para3.addClass("product-details");
          var para4 = $("<p></p>");
          para4.addClass("details");
          para4.text(data.description);
          var para5 = $("<p></p>");
          para5.addClass("product-details");
          para5.text("Product Preview");

          $(".details-of-the-product").append(heading);
          $(".details-of-the-product").append(para1);
          $(".details-of-the-product").append(para2);
          $(".details-of-the-product").append(para3);
          $(".details-of-the-product").append(para4);
          $(".details-of-the-product").append(para5);

          var pho = data.photos;
          for (var i = 0; i < pho.length; i++) {
            var productImage = $("<img>");
            productImage.attr("id", "image" + (i + 1));
            productImage.attr("src", data.photos[i]);
            productImage.attr("alt", "photo" + (i + 1));
            $(".select-img").append(productImage);
          }

          $("#image1").addClass("border-color");
          $("#image1").click(function () {
            $(".left-sec img").attr("src", data.photos[0]);
            $("#image1").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image2").click(function () {
            $(".left-sec img").attr("src", data.photos[1]);
            $("#image2").addClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image3").click(function () {
            $(".left-sec img").attr("src", data.photos[2]);
            $("#image3").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image4").click(function () {
            $(".left-sec img").attr("src", data.photos[3]);
            $("#image4").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image5").click(function () {
            $(".left-sec img").attr("src", data.photos[4]);
            $("#image5").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image6").click(function () {
            $(".left-sec img").attr("src", data.photos[5]);
            $("#image6").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image1").removeClass("border-color");
          });
          var button = `<button type="button" class="add-to-cart">Add to Cart</button>`;
          $(".right-sec").append(button);
          var no = 0;
          $(".add-to-cart").click(function () {
            count = localStorage.getItem("count");
            count++;
            localStorage.setItem("count", count);
            $("#cart-logo i p").text(localStorage.getItem("count"));
            no++;
            localStorage.setItem("preview9", data.preview);
            localStorage.setItem("name9", data.name);
            localStorage.setItem("no9", no);
            localStorage.setItem("price9", data.price);
          });
        }
      );
    }
    function productDetails10() {
      $("#clothing").hide();
      $("#accessories").hide();
      $("#carousal-sec").hide();

      $.get(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product/10",
        function (data) {
          console.log(data);
          var mainImg = $("<img>");
          mainImg.attr("src", data.preview);
          mainImg.attr("alt", "preview-img");
          $(".left-sec").append(mainImg);

          var heading = $("<h1></h1>");
          heading.text(data.name);
          var para1 = $("<p></p>");
          para1.text(data.brand);
          para1.addClass("product-details");
          var para2 = $("<p></p>");
          var span1 = $("<span></span>").text(data.price);
          para2.text("Price: Rs");
          para2.append(span1);
          para2.addClass("product-details");
          var para3 = $("<p></p>");
          para3.text("Description");
          para3.addClass("product-details");
          var para4 = $("<p></p>");
          para4.addClass("details");
          para4.text(data.description);
          var para5 = $("<p></p>");
          para5.addClass("product-details");
          para5.text("Product Preview");

          $(".details-of-the-product").append(heading);
          $(".details-of-the-product").append(para1);
          $(".details-of-the-product").append(para2);
          $(".details-of-the-product").append(para3);
          $(".details-of-the-product").append(para4);
          $(".details-of-the-product").append(para5);

          var pho = data.photos;
          for (var i = 0; i < pho.length; i++) {
            var productImage = $("<img>");
            productImage.attr("id", "image" + (i + 1));
            productImage.attr("src", data.photos[i]);
            productImage.attr("alt", "photo" + (i + 1));
            $(".select-img").append(productImage);
          }

          $("#image1").addClass("border-color");
          $("#image1").click(function () {
            $(".left-sec img").attr("src", data.photos[0]);
            $("#image1").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image2").click(function () {
            $(".left-sec img").attr("src", data.photos[1]);
            $("#image2").addClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image3").click(function () {
            $(".left-sec img").attr("src", data.photos[2]);
            $("#image3").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image4").click(function () {
            $(".left-sec img").attr("src", data.photos[3]);
            $("#image4").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image5").click(function () {
            $(".left-sec img").attr("src", data.photos[4]);
            $("#image5").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image1").removeClass("border-color");
            $("#image6").removeClass("border-color");
          });
          $("#image6").click(function () {
            $(".left-sec img").attr("src", data.photos[5]);
            $("#image6").addClass("border-color");
            $("#image2").removeClass("border-color");
            $("#image3").removeClass("border-color");
            $("#image4").removeClass("border-color");
            $("#image5").removeClass("border-color");
            $("#image1").removeClass("border-color");
          });
          var button = `<button type="button" class="add-to-cart">Add to Cart</button>`;
          $(".right-sec").append(button);
          var no = 0;
          $(".add-to-cart").click(function () {
            count = localStorage.getItem("count");
            count++;
            localStorage.setItem("count", count);
            $("#cart-logo i p").text(localStorage.getItem("count"));

            no++;
            localStorage.setItem("preview10", data.preview);
            localStorage.setItem("name10", data.name);
            localStorage.setItem("no10", no);
            localStorage.setItem("price10", data.price);
          });
        }
      );
    }
  });
  if (localStorage.getItem("count") != null) {
    $("#cart-logo i p").text(localStorage.getItem("count"));
  }

  var preview10 = localStorage.getItem("preview10");
  var name10 = localStorage.getItem("name10");
  var number10 = localStorage.getItem("no10");
  var price10 = localStorage.getItem("price10");
  pushCartItem(preview10, name10, number10, price10);

  var preview9 = localStorage.getItem("preview9");
  var name9 = localStorage.getItem("name9");
  var number9 = localStorage.getItem("no9");
  var price9 = localStorage.getItem("price9");
  pushCartItem(preview9, name9, number9, price9);

  var preview8 = localStorage.getItem("preview8");
  var name8 = localStorage.getItem("name8");
  var number8 = localStorage.getItem("no8");
  var price8 = localStorage.getItem("price8");
  pushCartItem(preview8, name8, number8, price8);

  var preview7 = localStorage.getItem("preview7");
  var name7 = localStorage.getItem("name7");
  var number7 = localStorage.getItem("no7");
  var price7 = localStorage.getItem("price7");
  pushCartItem(preview7, name7, number7, price7);

  var preview6 = localStorage.getItem("preview6");
  var name6 = localStorage.getItem("name6");
  var number6 = localStorage.getItem("no6");
  var price6 = localStorage.getItem("price6");
  pushCartItem(preview6, name6, number6, price6);

  var preview5 = localStorage.getItem("preview5");
  var name5 = localStorage.getItem("name5");
  var number5 = localStorage.getItem("no5");
  var price5 = localStorage.getItem("price5");
  pushCartItem(preview5, name5, number5, price5);

  var preview4 = localStorage.getItem("preview4");
  var name4 = localStorage.getItem("name4");
  var number4 = localStorage.getItem("no4");
  var price4 = localStorage.getItem("price4");
  pushCartItem(preview4, name4, number4, price4);

  var preview3 = localStorage.getItem("preview3");
  var name3 = localStorage.getItem("name3");
  var number3 = localStorage.getItem("no3");
  var price3 = localStorage.getItem("price3");
  pushCartItem(preview3, name3, number3, price3);

  var preview2 = localStorage.getItem("preview2");
  var name2 = localStorage.getItem("name2");
  var number2 = localStorage.getItem("no2");
  var price2 = localStorage.getItem("price2");
  pushCartItem(preview2, name2, number2, price2);

  var preview1 = localStorage.getItem("preview1");
  var name1 = localStorage.getItem("name1");
  var number1 = localStorage.getItem("no1");
  var price1 = localStorage.getItem("price1");
  pushCartItem(preview1, name1, number1, price1);

  function pushCartItem(imgUrl, productTag, noOfProduct, amount) {
    if (amount != null) {
      var itemBox = `<div class="sec-cart">
      <div class="img-div-cart">
        <img width="80px"
          src= ${imgUrl}
        />
      </div>
      <div class="margin-div">
        <p>${productTag}</p>
        <p>X${noOfProduct}</p>
        <p>Amount: Rs <span>${noOfProduct * amount}</span></p>
      </div>
    </div>`;
      $("#append-item").append(itemBox);
      list = list + noOfProduct * amount;
      $("#total-amount").text(list);
      noPro++;
      $("#no-of-products").text(noPro);
      var obj = {
        productName: productTag,
        priceOfProduct: amount,
      };
      pushData.push(obj);
    }
  }
  $("#place-order").click(function () {
    $("#conform-page").css({
      display: "block",
    });
    $("#display-type").hide();
    localStorage.clear();
    var localData = JSON.stringify(pushData);
    $.post(
      "https://5d76bf96515d1a0014085cf9.mockapi.io/order",
      localData,
      function() {
      }
    );
    setTimeout(function () {
      window.location.replace("./index.html");
    }, 2000);
  });
});
