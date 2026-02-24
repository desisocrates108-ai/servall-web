"use strict";
var $ = jQuery;

function updateWrapper() {
  var windowHeight = $(window).height();
  var headerHeight = $("#pageHeaderWrapper").outerHeight();
  var footerHeight = $(".footer-wrapper").outerHeight();
  var takeHeight = $(".takeHeight").outerHeight();
  $(".giveHeight").css({ height: takeHeight });
  if ($(window).width() > 1920) {
    $(".thankyou-img").css({
      paddingBottom: windowHeight - headerHeight - footerHeight,
    });
  }
  if ($(window).width() < 576) {
    //$('.home-banner-img,.home-banner-video').css({ paddingBottom: windowHeight - headerHeight - 39 });
  }
}
$(document).ready(function () {
  updateWrapper();
  $(window).resize(function () {
    updateWrapper();
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("#pageHeaderWrapper").addClass("is-sticky");
    } else {
      $("#pageHeaderWrapper").removeClass("is-sticky");
    }
  });
});
$(document).ready(function () {
  $(".nav-container .nav").meanmenu({
    meanScreenWidth: "991.98",
  });
});
$(document).ready(function () {
  updateContainer();
  $(window).resize(function () {
    updateContainer();
  });
});

function updateContainer() {
  // $(".inner-menu").next().remove("a.mean-expand");
}
window.addEventListener("load", function () {
  //$("body, #wrapper, .footer-wrapper").css({ opacity: 1 });
});

//Match title height
function MatchHeight() {
  $(".secondary-nav-holder ul li a").matchHeight();
  $(".equalheight").matchHeight();
  $(".equalheight1").matchHeight();
  $(".equalheight2").matchHeight();
  $(".equalheight3").matchHeight();
  $(".equalheight4").matchHeight();
  $(".equalheight5").matchHeight();
  $(".hww-box-info").matchHeight();
  $(".service-content").matchHeight();
  $(".about-box").matchHeight();
  $("").matchHeight();
  $("").matchHeight();
}
jQuery("img").removeAttr("width").removeAttr("height");
$(document).ready(function () {
  //Comment it for Megamenu
  jQuery(".meanmenu-reveal").on("click", function () {
    jQuery(".mean-nav").toggleClass("active");
    jQuery("body").toggleClass("body-noscroll");
  });
  $('[data-bs-toggle="tooltip"]').tooltip({
    placement: "auto",
  });
  $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function () {
    MatchHeight();
  });
  $(".tab-content,.accordion").on("hidden.bs.collapse", function () {
    MatchHeight();
  });
  $(".modal").on("shown.bs.modal", function () {
    $(".slick-slider").slick("setPosition");
  });
  //fancybox
  Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
    Toolbar: false,
    // Image: {
    //     zoom: false,
    //     click: false,
    //     wheel: "slide",
    // },
  });
  //fancybox END
  //NiceSelect
  $(".NiceSelect select").niceSelect();
  $("select").on("change", function () {
    $(this).parent().addClass("nice-selected");
  });
  //NiceSelect END
  //single-slider
  $(".single-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    setPosition: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slide: "div",
    arrows: true,
    infinite: true,
    //appendDots: ".single-slider-dots",
    //appendArrows: $('.single-slider-arrows'),
    //rows: 3,
    focusOnSelect: false,
    adaptiveHeight: false,
    centerMode: false,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button"><i class="fa-solid fa-arrow-right-long"></i></button>',
  });
  //single-slider
  //slider-2col
  $(".slider-2col").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    setPosition: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slide: "div",
    arrows: true,
    infinite: true,
    //appendDots: ".slider-dots",
    //appendArrows: $(".slider-2col-arrows"),
    //rows: 2,
    focusOnSelect: true,
    centerMode: false,
    centerPadding: 0,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button"><i class="fa-solid fa-arrow-right-long"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  //slider-2col
  //slider-3col
  $(".slider-3col").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    setPosition: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slide: "div",
    arrows: true,
    infinite: true,
    //appendDots: ".slider-dots",
    //appendArrows: $(".slider-3col-arrows"),
    //rows: 2,
    focusOnSelect: true,
    centerMode: false,
    centerPadding: 0,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button"><i class="fa-solid fa-arrow-right-long"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  //slider-3col
  //slider-3col
  $(".client-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    setPosition: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slide: "div",
    arrows: true,
    infinite: true,
    //appendDots: ".slider-dots",
    //appendArrows: $(".slider-3col-arrows"),
    //rows: 2,
    focusOnSelect: true,
    centerMode: false,
    centerPadding: 0,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button"><i class="fa-solid fa-arrow-right-long"></i></button>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  //slider-3col
  //slider-4col
  $(".slider-4col").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    setPosition: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slide: "div",
    arrows: true,
    infinite: true,
    //appendDots: ".slider-dots",
    //appendArrows: $(".slider-4col-arrows"),
    //rows: 2,
    focusOnSelect: true,
    centerMode: false,
    centerPadding: 0,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button"><i class="fa-solid fa-arrow-right-long"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //slider-5col
  $(".slider-5col").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    setPosition: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slide: "div",
    arrows: true,
    infinite: true,
    //appendDots: ".slider-dots",
    appendArrows: $(".slider-5col-arrows"),
    //rows: 2,
    focusOnSelect: true,
    centerMode: false,
    //centerPadding: 0,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button"><i class="fa-solid fa-arrow-right-long"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  //slider-5col
  //slider-6col
  $(".slider-6col").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    setPosition: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slide: "div",
    arrows: true,
    infinite: true,
    //appendDots: ".slider-dots",
    //appendArrows: $(".slider-6col-arrows"),
    //rows: 2,
    focusOnSelect: true,
    centerMode: false,
    centerPadding: 0,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button"><i class="fa-solid fa-arrow-right-long"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  //slider-6col

  //Gallery Slider
  $(".gallery-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: ".gallery-nav",
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button"><i class="fa-solid fa-arrow-right-long"></i></button>',
  });
  $(".gallery-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".gallery-main",
    dots: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    infinite: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button"><i class="fa-solid fa-arrow-right-long"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  //Gallery Slider END
  /*--tab + accordion + slick slider + matchheight--*/
  $('a[data-toggle="tab"]').on("shown.bs.tab", function () {
    setTimeout(function () {
      MatchHeight();
      $(".slick-slider").slick("setPosition");
    }, 10);
    $(".slick-slider").slick("setPosition");
  });
  $(".accordion").on("shown.bs.collapse", function () {
    setTimeout(function () {
      MatchHeight();
      $(".slick-slider").slick("setPosition");
    }, 10);
    $(".slick-slider").slick("setPosition");
  });
  $(".card").on("shown.bs.collapse", function () {
    setTimeout(function () {
      MatchHeight();
      $(".slick-slider").slick("setPosition");
    }, 10);
    $(".slick-slider").slick("setPosition");
  });
  /*-tab + accordion + slick slider + matchheight-  END*/
  //Sscroll
  jQuery("a.sscroll,.sscroll a").click(function (e) {
    jQuery("html,body").animate(
      {
        scrollTop: jQuery(this.hash).offset().top - 120,
      },
      10
    );
    return false;
  });
  // Mobile Scroll
  if ($(window).width() < 992) {
    jQuery("a.sscroll,.sscroll a").click(function (e) {
      jQuery("html,body").animate(
        {
          scrollTop: jQuery(this.hash).offset().top - 105,
        },
        10
      );
      return false;
    });
  }
  //Sscroll END
  // Load-more
  $(".loadmore-list").loadMore({
    selector: ".loadmore-item",
    loadBtn: ".loadMoreBtn",
    limit: 9,
    load: 9,
    animate: false,
    //animateIn: 'fadeInUp',
  });
  // Load-more END
  $(".fileinput").fileinput({
    browseIcon: "",
    browseClass: "custom-button no-icon btn-upload",
    browseLabel: "Upload file",
    showPreview: false,
    showRemove: false,
    removeClass: "button",
    showCancel: false,
    showUpload: false,
    initialCaption: "Resume",
  });

  //Search
  $("#quickSearch").on("shown.bs.modal", function () {
    $("input[name=quickSearch]").trigger("focus");
  });
  //Search END
  //AOS
  AOS.init({
    duration: 800,
    once: true,
    disable: function () {
      var maxWidth = 992;
      return window.innerWidth < maxWidth;
    },
  });
  //AOS END
  // Drawer
  if ($(window).width() < 992) {
    $("#trigger-drawer").click(function () {
      $(".top-nav-holder").toggleClass("active");
      $(this).toggleClass("active");
      $("body").toggleClass("body-noscroll");
    });
    $(".top-nav a").click(function () {
      $(".top-nav-holder").toggleClass("active");
      $("#trigger-drawer").toggleClass("active");
      $("body").toggleClass("body-noscroll");
    });
  }
  // Drawer
  // Form-Floating-Lables
  $(".floating-label .form-control").focus(function () {
    $(this).parent().addClass("focus");
    $(this).parent().parent().addClass("focus");
  });
  $(".floating-label .form-control").focusout(function () {
    $(this).parent().removeClass("focus");
    $(this).parent().parent().removeClass("focus");
  });
  $(".floating-label .form-control").blur(function () {
    var tmpval = $(this).val();
    if (tmpval == "") {
      $(this).parent().addClass("empty");
      $(this).parent().removeClass("not-empty");
      $(this).parent().parent().addClass("empty");
      $(this).parent().parent().removeClass("not-empty");
    } else {
      $(this).parent().addClass("not-empty");
      $(this).parent().removeClass("empty");
      $(this).parent().parent().addClass("not-empty");
      $(this).parent().parent().removeClass("empty");
    }
  });
  var inputs = $(".floating-label .form-control");
  for (var i = 0; i < inputs.length; i++) {
    if ($(inputs[i]).val() == "") {
      $(inputs[i]).parent().addClass("empty");
      $(inputs[i]).parent().removeClass("not-empty");
      $(inputs[i]).parent().parent().addClass("empty");
      $(inputs[i]).parent().parent().removeClass("not-empty");
    } else {
      $(inputs[i]).parent().addClass("not-empty");
      $(inputs[i]).parent().removeClass("empty");
      $(inputs[i]).parent().parent().addClass("not-empty");
      $(inputs[i]).parent().parent().removeClass("empty");
    }
  }
  // Form-Floating-Lables END
  /*--Custom-checkbox--*/
  $(".checkbox label input").change(function () {
    if ($(this).is(":checked")) {
      $(this).parent("label").addClass("label-selected");
    } else {
      $(this).parent("label").removeClass("label-selected");
    }
  });
  /*--Custom-checkbox END--*/
  MatchHeight();
  jQuery().UItoTop({
    easingType: "easeOutQuart",
  });
  //Slick Slider in Tab-Accordion
  $(".nav-tabs .nav-link,.accordion-header a").click(function () {
    $(".slick-slider").slick("setPosition");
    MatchHeight();
  });
  //Slick Slider in Tab-Accordion END
  jQuery(".AccordionFilterNav").navAccordion(
    {
      expandButtonText: '<i class="fa-solid fa-caret-down"></i>', //Text inside of buttons can be HTML
      collapseButtonText: '<i class="fa-solid fa-caret-up"></i>',
    },
    function () {
      console.log("Callback");
    }
  );

  jQuery(".comment-form-cookies-consent").addClass("checkbox");

  jarallax(document.querySelectorAll(".jarallax"), {
    speed: 0.5,
    //imgWidth: 1366,
    //imgHeight: 768,
  });

  $(".close-InfoBar").on("click", function (event) {
    $("#InfoBar").remove();
    updateWrapper();
    event.preventDefault();
  });

  // Counter
  const stats = document.querySelectorAll(".counter");
  stats.forEach((stat) => {
    // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
    const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
    const time = 100;
    let result = [...patt.exec(stat.textContent)];
    let fresh = true;
    let ticks;
    // Remove first full match from result array (we dont need the full match, just the individual match groups).
    result.shift();
    // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
    result = result.filter((res) => res != null);
    while (stat.firstChild) {
      stat.removeChild(stat.firstChild);
    }
    for (let res of result) {
      if (isNaN(res)) {
        stat.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
      } else {
        for (let i = 0; i < res.length; i++) {
          stat.insertAdjacentHTML(
            "beforeend",
            `<span data-value="${res[i]}">
					<span>0</span>
						${Array(parseInt(res[i]) + 1)
              .join(0)
              .split(0)
              .map((x, j) => `<span>${j}</span>`)
              .join("")}
					</span>`
          );
        }
      }
    }
    ticks = [...stat.querySelectorAll("span[data-value]")];
    let activate = () => {
      let top = stat.getBoundingClientRect().top;
      let offset = window.innerHeight * 0.8;
      setTimeout(() => {
        fresh = false;
      }, time);
      if (top < offset) {
        setTimeout(
          () => {
            for (let tick of ticks) {
              let dist = parseInt(tick.getAttribute("data-value")) + 1;
              tick.style.transform = `translateY(-${dist * 100}%)`;
            }
          },
          fresh ? time : 0
        );
        window.removeEventListener("scroll", activate);
      }
    };
    window.addEventListener("scroll", activate);
    activate();
  });
  // Counter
});
//(document).ready function-END
//Sscroll
(function ($, window) {
  var adjustAnchor = function () {
    var $anchor = $(":target");
    if ($anchor.length > 0) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $anchor.offset().top - 120,
          },
          10
        );
    }
  };
  $(window).on("hashchange load", function () {
    adjustAnchor();
  });
})(jQuery, window);
// Mobile Scroll
if ($(window).width() < 992) {
  (function ($, window) {
    var adjustAnchor = function () {
      var $anchor = $(":target");
      if ($anchor.length > 0) {
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $anchor.offset().top - 105,
            },
            10
          );
      }
    };
    $(window).on("hashchange load", function () {
      adjustAnchor();
    });
  })(jQuery, window);
}
//Sscroll END
//mCustomScrollbar
(function (jQuery) {
  jQuery(window).load(function () {
    $(".Scrollcontent").mCustomScrollbar({
      //axis:"x", // horizontal scrollbar
      //axis:"y", // vertical scrollbar
      theme: "dark",
      //scrollbarPosition: 'outside',
      //autoHideScrollbar:false,
      autoExpandScrollbar: true,
      mouseWheel: {
        enable: true,
      },
      keyboard: {
        enable: true,
      },
      advanced: {
        autoExpandHorizontalScroll: true,
        updateOnContentResize: true,
        autoScrollOnFocus: false,
      },
      updateOnContentResize: true,
    });
    var amount = Math.max.apply(
      Math,
      $(".Scrollcontent-horizontal-list li")
        .map(function () {
          return $(this).outerWidth(true);
        })
        .get()
    );
    $(".Scrollcontent-horizontal-list").mCustomScrollbar({
      axis: "x", // horizontal scrollbar
      //axis:"y", // vertical scrollbar
      theme: "dark",
      //scrollbarPosition: 'outside',
      //autoHideScrollbar:false,
      autoExpandScrollbar: true,
      mouseWheel: {
        enable: true,
      },
      keyboard: {
        enable: true,
      },
      advanced: {
        autoExpandHorizontalScroll: true,
        updateOnContentResize: true,
        autoScrollOnFocus: false,
      },
      updateOnContentResize: true,
    });
  });
})(jQuery);
//mCustomScrollbar END
$(function () {
  $(".datepicker").datetimepicker({
    format: "DD/MM/YYYY",
    minDate: new Date(),
  });
});
$(function () {
  $(".inline-datepicker").datetimepicker({
    format: "DD/MM/YYYY",
    inline: true,
  });
});
$(function () {
  $(".timepicker").datetimepicker({
    format: "LT",
    stepping: 15,
  });
});

//ISOTOPE
$(window).load(function () {
  // init Isotope
  var initial_items = 9;
  var next_items = 9;
  var $grid = $(".grid-listing").isotope({
    itemSelector: ".grid-item",
    //layoutMode: 'masonry',
    layoutMode: "fitRows",
    percentPosition: true,
    columnWidth: ".grid-sizer",
    transitionDuration: "0.4s",
  });
  // bind filter button click
  $(".filter-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
    updateFilterCounts();
  });
  function updateFilterCounts() {
    // get filtered item elements
    var itemElems = $grid.isotope("getFilteredItemElements");
    var count_items = $(itemElems).length;
    if (count_items > initial_items) {
      $(".load-more-btn").show();
    } else {
      $(".load-more-btn").hide();
    }
    if ($(".grid-item").hasClass("visible-grid-item")) {
      $(".grid-item").removeClass("visible-grid-item");
    }
    var index = 0;
    $(itemElems).each(function () {
      if (index >= initial_items) {
        $(this).addClass("visible-grid-item");
      }
      index++;
    });
    $grid.isotope("layout");
  }
  // change is-checked class on buttons
  $(".filter-button-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function () {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
  function showNextItems(pagination) {
    var itemsMax = $(".visible-grid-item").length;
    var itemsCount = 0;
    $(".visible-grid-item").each(function () {
      if (itemsCount < pagination) {
        $(this).removeClass("visible-grid-item");
        itemsCount++;
      }
    });
    if (itemsCount >= itemsMax) {
      $(".load-more-btn").hide();
    }
    $grid.isotope("layout");
  }
  // function that hides items when page is loaded  <<   comment below whole function when no need LOAD MORE
  /*function hideItems(pagination) {
        var itemsMax = $('.grid-item').length;
        var itemsCount = 0;
        $('.grid-item').each(function () {
            if (itemsCount >= pagination) {
                $(this).addClass('visible-grid-item');
            }
            itemsCount++;
        });
        if (itemsCount < itemsMax || initial_items >= itemsMax) {
            $('.load-more-btn').hide();
        }
        $grid.isotope('layout');
    }
    $('.load-more-btn').on('click', function (e) {
        e.preventDefault();
        showNextItems(next_items);
    });
    hideItems(initial_items);*/
});
//ISOTOPE END
