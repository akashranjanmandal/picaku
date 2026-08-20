// ===== Preloader =====
(function () {
  var pre = document.getElementById("preloader");
  if (!pre) return;
  document.body.style.overflow = "hidden";
  var bars = pre.querySelectorAll(".waveform span");
  var progress = 0;
  var interval = setInterval(function () {
    progress += 2;
    var activeCount = Math.floor(progress / 5);
    bars.forEach(function (bar, i) {
      if (i < activeCount) bar.classList.add("active");
    });
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(function () {
        pre.classList.add("hidden");
        document.body.style.overflow = "";
        setTimeout(function () { pre.style.display = "none"; }, 600);
      }, 500);
    }
  }, 30);
})();

// ===== Navbar =====
(function () {
  var navbar = document.getElementById("navbar");
  var menuBtn = document.getElementById("mobile-menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  var iconMenu = document.getElementById("icon-menu");
  var iconClose = document.getElementById("icon-close");
  var open = false;

  function setOpen(v) {
    open = v;
    if (!mobileMenu) return;
    if (open) {
      mobileMenu.classList.add("open");
      requestAnimationFrame(function () { mobileMenu.classList.add("show"); });
      iconMenu.style.display = "none";
      iconClose.style.display = "block";
    } else {
      mobileMenu.classList.remove("show");
      iconMenu.style.display = "block";
      iconClose.style.display = "none";
      setTimeout(function () { if (!open) mobileMenu.classList.remove("open"); }, 250);
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () { setOpen(!open); });
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
  }

  window.addEventListener("scroll", function () {
    if (!navbar) return;
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });
})();

// ===== Hero mouse parallax =====
(function () {
  var blobs = document.querySelectorAll(".hero-blob");
  if (!blobs.length) return;
  var factors = [
    { x: 80, y: 80 },
    { x: -60, y: -60 },
    { x: 120, y: 120 },
  ];
  var targetX = 0, targetY = 0, curX = 0, curY = 0;

  window.addEventListener("mousemove", function (e) {
    targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function animate() {
    curX += (targetX - curX) * 0.06;
    curY += (targetY - curY) * 0.06;
    blobs.forEach(function (blob, i) {
      var f = factors[i] || { x: 0, y: 0 };
      blob.style.transform = "translate(" + (curX * f.x) + "px, " + (curY * f.y) + "px)";
    });
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
})();

// ===== Scroll reveal =====
(function () {
  var items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(function (el) { obs.observe(el); });
})();

// ===== Animated accuracy bars (whileInView) =====
(function () {
  var bars = document.querySelectorAll(".bar-fill");
  if (!bars.length) return;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("filled");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(function (el) { obs.observe(el); });
})();

// ===== Daily Intelligence step selector =====
(function () {
  var buttons = document.querySelectorAll(".step-btn[data-step]");
  if (!buttons.length) return;
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
    });
  });
})();

// ===== Understands Everything accordion =====
(function () {
  var buttons = document.querySelectorAll(".step-btn[data-card]");
  if (!buttons.length) return;
  var previews = document.querySelectorAll("[data-preview]");
  var titleLabel = document.getElementById("capability-title");

  var titles = {};
  buttons.forEach(function (b) {
    titles[b.getAttribute("data-card")] = b.querySelector(".step-title").textContent;
  });

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.getAttribute("data-card");
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      previews.forEach(function (p) {
        p.style.display = p.getAttribute("data-preview") === key ? "block" : "none";
      });
      if (titleLabel) titleLabel.textContent = titles[key];
    });
  });
})();

// ===== On Demand chat demo =====
(function () {
  var buttons = document.querySelectorAll(".question-btn[data-q]");
  if (!buttons.length) return;
  var userBubble = document.getElementById("chat-user-q");
  var aiBubble = document.getElementById("chat-ai-a");
  var tag = document.getElementById("chat-tag");

  var answers = {
    "What were the action items?": {
      text: "Two action items found:\n· Follow up with design team — due Thursday (Alex)\n· Collect API keys from client — pending (Sam)",
      tag: "From: Team Standup · Oct 3"
    },
    "Summarise my last 3 meetings": {
      text: "Team Standup (Dec 1): Sprint 12 planning, 2 blockers.\nClient Call (Nov 29): Acme Corp onboarding, go-live Jan 10.\nML Lecture (Nov 28): Gradient descent & backprop.",
      tag: "3 recordings analysed"
    },
    "What did we decide about the launch?": {
      text: "Launch confirmed for Oct 15, pending design sign-off by Thursday. Fallback date is Oct 22 if sign-off is missed.",
      tag: "From: Product Sync · 0:47"
    },
    "What should I follow up on?": {
      text: "Three things to follow up:\n· Design approval — Thursday deadline\n· Client API keys (Sam)\n· Confirm launch date once both resolved",
      tag: "Across 2 recordings"
    },
    "Find notes about API keys": {
      text: "Found in 'Client Call — Oct 3': Sam is responsible for collecting API keys from the client. Status: pending. Mentioned at 1:02.",
      tag: "Memory match · 98% confidence"
    }
  };

  function render(q) {
    userBubble.textContent = q;
    var a = answers[q];
    aiBubble.innerHTML = a.text.split("\n").map(function (line, idx) {
      return '<p style="font-size:14px;line-height:1.5;margin-top:' + (idx > 0 ? "6px" : "0") + '">' + line + "</p>";
    }).join("");
    tag.textContent = a.tag;
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      render(btn.getAttribute("data-q"));
    });
  });
})();
