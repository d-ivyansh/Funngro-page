var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


document.addEventListener("DOMContentLoaded", function () {
    const elementToAnimate = document.querySelector(".element-to-animate");
  
    window.addEventListener("scroll", function () {
      const elementTop = elementToAnimate.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight * 0.75) {
        elementToAnimate.style.opacity = "1";
        elementToAnimate.style.transform = "translateY(0)";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const elementToAnimate = document.querySelector(".element-to-animate2");
  
    window.addEventListener("scroll", function () {
      const elementTop = elementToAnimate.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight * 0.75) {
        elementToAnimate.style.opacity = "1";
        elementToAnimate.style.transform = "translateY(0)";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const elementToAnimate = document.querySelector(".element-to-animate3");
  
    window.addEventListener("scroll", function () {
      const elementTop = elementToAnimate.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight * 0.75) {
        elementToAnimate.style.opacity = "1";
        elementToAnimate.style.transform = "translateY(0)";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const elementToAnimate = document.querySelector(".element-to-animate4");
  
    window.addEventListener("scroll", function () {
      const elementTop = elementToAnimate.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight * 0.75) {
        elementToAnimate.style.opacity = "1";
        elementToAnimate.style.transform = "translateY(0)";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const elementToAnimate = document.querySelector(".element-to-animate5");
  
    window.addEventListener("scroll", function () {
      const elementTop = elementToAnimate.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight * 0.75) {
        elementToAnimate.style.opacity = "1";
        elementToAnimate.style.transform = "translateY(0)";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const elementToAnimate = document.querySelector(".element-to-animate6");
  
    window.addEventListener("scroll", function () {
      const elementTop = elementToAnimate.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight * 0.75) {
        elementToAnimate.style.opacity = "1";
        elementToAnimate.style.transform = "translateY(0)";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const elementToAnimate = document.querySelector(".element-to-animate7");
  
    window.addEventListener("scroll", function () {
      const elementTop = elementToAnimate.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight * 0.75) {
        elementToAnimate.style.opacity = "1";
        elementToAnimate.style.transform = "translateY(0)";
      }
    });
  });

  