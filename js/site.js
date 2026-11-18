/* SNS Jewellery — small enhancements (wishlist). Data below mirrors the product list;
   in the PHP phase, replace SNS_PRODUCTS with a server-rendered / API response. */
window.SNS_PRODUCTS = {"p21": {"name": "Panchaloham Polish Screw Back Studs with Ruby & White Stones", "label": "Earrings · Stud", "tokens": "earrings earrings-stud panchalogam", "price": 349, "mrp": 0, "tag": "New", "img": "assets/img/p21.jpg"}, "p22": {"name": "Panchaloham Polish Screw Back Studs with White Stones", "label": "Earrings · Stud", "tokens": "earrings earrings-stud panchalogam", "price": 299, "mrp": 0, "tag": "New", "img": "assets/img/p22.jpg"}, "p01": {"name": "Antique Premium Temple Lakshmi Haram with Ruby Stones", "label": "Haram · Premium Antique Haram", "tokens": "harams harams-antique covering", "price": 1499, "mrp": 2199, "tag": "New", "img": "assets/img/p01.svg"}, "p02": {"name": "Antique Temple Jhumka Earrings with Ruby Stones", "label": "Earrings · Jhumka", "tokens": "earrings earrings-jhumka imitation", "price": 449, "mrp": 649, "tag": "", "img": "assets/img/p02.svg"}, "p03": {"name": "Premium Antique Kemp Choker Necklace with Emerald Stones", "label": "Necklace · Premium Antique Necklace", "tokens": "necklaces necklaces-antique artificial", "price": 1899, "mrp": 2599, "tag": "New", "img": "assets/img/p03.svg"}, "p04": {"name": "Impon Gold-Tone Kada Bangles – Set of 4", "label": "Bangles · Impon Gold Bangle", "tokens": "bangles bangles-impon panchalogam", "price": 999, "mrp": 0, "tag": "", "img": "assets/img/p04.svg"}, "p05": {"name": "AD Stone Pearl Drop Necklace", "label": "Necklace · AD Stone Necklace", "tokens": "necklaces necklaces-adstone imitation", "price": 749, "mrp": 999, "tag": "-25%", "img": "assets/img/p05.svg"}, "p06": {"name": "Antique Premium Temple Maang Tikka", "label": "Accessories · Head Accessories", "tokens": "accessories accessories-head covering", "price": 399, "mrp": 0, "tag": "", "img": "assets/img/p06.svg"}, "p07": {"name": "Panchalogam Ghungroo Anklet – Pair", "label": "Accessories · Leg Accessories", "tokens": "accessories accessories-leg panchalogam", "price": 549, "mrp": 0, "tag": "New", "img": "assets/img/p07.svg"}, "p08": {"name": "Micro-Plated Layered Necklace with Emerald Accent", "label": "Necklace · Micro Gold Necklace", "tokens": "necklaces necklaces-microgold artificial", "price": 1199, "mrp": 1599, "tag": "-25%", "img": "assets/img/p08.svg"}, "p09": {"name": "Sapphire Stone Mugappu-Style Long Chain", "label": "Daily Wear Chain · Mugappu Chain", "tokens": "chains chains-mugappu covering", "price": 1699, "mrp": 0, "tag": "", "img": "assets/img/p09.svg"}, "p10": {"name": "Premium Matte Finish Stone Bangles – Set of 3", "label": "Bangles · Premium Matte Bangle", "tokens": "bangles bangles-matte imitation", "price": 899, "mrp": 1199, "tag": "", "img": "assets/img/p10.svg"}, "p11": {"name": "Peacock Ruby Stud Earrings", "label": "Earrings · Stud", "tokens": "earrings earrings-stud artificial", "price": 299, "mrp": 0, "tag": "", "img": "assets/img/p11.svg"}, "p12": {"name": "Bridal Temple Necklace & Jhumka Combo Set", "label": "Combo Set", "tokens": "combos combos-set covering", "price": 2499, "mrp": 3299, "tag": "New", "img": "assets/img/p12.svg"}, "p13": {"name": "Rose Gold-Tone Pearl Stud Earrings", "label": "Earrings · Rose Gold Earring", "tokens": "earrings earrings-rosegold imitation", "price": 349, "mrp": 0, "tag": "New", "img": "assets/img/p13.svg"}, "p14": {"name": "Micro Gold-Plated Emerald Long Haram", "label": "Haram · Micro Gold Haram", "tokens": "harams harams-microgold covering", "price": 1799, "mrp": 2399, "tag": "", "img": "assets/img/p14.svg"}, "p15": {"name": "Floral Ruby Adjustable Finger Ring", "label": "Accessories · Finger Ring", "tokens": "accessories accessories-ring imitation", "price": 249, "mrp": 0, "tag": "", "img": "assets/img/p15.svg"}, "p16": {"name": "Gold-Tone Pearl Chain Bracelet", "label": "Accessories · Bracelet", "tokens": "accessories accessories-bracelet imitation", "price": 399, "mrp": 549, "tag": "", "img": "assets/img/p16.svg"}, "p17": {"name": "Ruby Temple Pendant with Chain", "label": "Accessories · Pendant", "tokens": "accessories accessories-pendant covering", "price": 599, "mrp": 0, "tag": "New", "img": "assets/img/p17.svg"}, "p18": {"name": "Antique Gold-Tone Hip Chain (Kamarbandh)", "label": "Accessories · Hip Chain", "tokens": "accessories accessories-hip covering", "price": 1299, "mrp": 1799, "tag": "", "img": "assets/img/p18.svg"}, "p19": {"name": "Emerald Temple Necklace & Earring Combo Set", "label": "Combo Set", "tokens": "combos combos-set artificial", "price": 2199, "mrp": 2899, "tag": "", "img": "assets/img/p19.svg"}, "p20": {"name": "Daily Wear Dollar Chain with Ruby Coin", "label": "Daily Wear Chain · Dollar Chain", "tokens": "chains chains-dollar covering", "price": 699, "mrp": 0, "tag": "", "img": "assets/img/p20.svg"}};
(function () {
  "use strict";
  var KEY = "sns_wishlist", P = window.SNS_PRODUCTS, mem = [];
  function read() {
    try { var v = JSON.parse(localStorage.getItem(KEY)); if (Array.isArray(v)) return v; } catch (e) {}
    return mem.slice();
  }
  function write(list) { mem = list.slice(); try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} }
  function inr(n) { return "₹" + Number(n).toLocaleString("en-IN"); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }

  var toastEl, toastTimer;
  function toast(msg, withLink) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "toast"; toastEl.setAttribute("role", "status"); document.body.appendChild(toastEl); }
    toastEl.innerHTML = "<span>" + esc(msg) + "</span>" + (withLink ? '<a href="wishlist.html">View wishlist</a>' : "");
    toastEl.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2600);
  }

  function sync() {
    var list = read();
    document.querySelectorAll("[data-wish]").forEach(function (b) {
      var on = list.indexOf(b.getAttribute("data-wish")) > -1;
      b.setAttribute("aria-pressed", on ? "true" : "false");
      var base = b.getAttribute("aria-label").replace(/^(Add|Remove) /, "").replace(/ (to|from) wishlist$/, "").replace(/^Save /, "");
      b.setAttribute("aria-label", (on ? "Remove " : "Add ") + base + (on ? " from wishlist" : " to wishlist"));
    });
    document.querySelectorAll("[data-wish-count]").forEach(function (c) { c.textContent = list.length; c.hidden = list.length === 0; });
  }

  function cardHTML(id) {
    var p = P[id]; if (!p) return "";
    var old = p.mrp ? "<s>" + inr(p.mrp) + "</s>" : "";
    var tag = p.tag ? '<span class="tag' + (p.tag === "Sale" ? " tag--sale" : "") + '">' + p.tag + "</span>" : "";
    return '<article class="card reveal" data-cat="' + p.tokens + '"><div class="card__frame">' +
      '<a class="card__media" href="product.html">' + tag + '<img src="' + p.img + '" alt=""' + esc(p.name) + '" loading="lazy" width="800" height="1000"></a>' +
      '<button class="wish" type="button" data-wish="' + id + '" aria-pressed="true" aria-label="Remove ' + esc(p.name) + ' from wishlist"><svg class="i" aria-hidden="true"><use href="#i-heart"/></svg></button>' +
      '<a class="card__add" href="cart.html"><svg class="i" aria-hidden="true"><use href="#i-bag"/></svg> Add to cart</a></div>' +
      '<div class="card__body"><p class="card__cat">' + esc(p.label) + '</p><h3 class="card__title"><a href="product.html">' + esc(p.name) + '</a></h3><p class="price">' + inr(p.price) + old + "</p></div></article>";
  }

  function renderPage() {
    var grid = document.getElementById("wishlist-grid"); if (!grid) return;
    var list = read().filter(function (id) { return P[id]; });
    if (!list.length) {
      grid.className = "";
      grid.innerHTML = '<div class="empty"><svg class="i" aria-hidden="true"><use href="#i-heart"/></svg><h2>Your wishlist is empty</h2><p>Tap the heart on any piece to save it here.</p><a class="btn" href="shop.html">Browse jewellery</a></div>';
    } else {
      grid.className = "grid grid--4";
      grid.innerHTML = list.map(cardHTML).join("");
    }
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-wish]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    var id = b.getAttribute("data-wish"), list = read(), i = list.indexOf(id), added = i === -1;
    if (added) list.push(id); else list.splice(i, 1);
    write(list); sync();
    b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop");
    var name = P[id] ? P[id].name : "Item";
    if (document.getElementById("wishlist-grid")) { setTimeout(renderPage, 280); toast(name + " removed", false); }
    else toast(added ? name + " saved to wishlist" : name + " removed from wishlist", added);
  });
  window.addEventListener("storage", function () { sync(); renderPage(); });
  document.addEventListener("DOMContentLoaded", function () { renderPage(); sync(); });
})();

/* Reveal on scroll, menu behaviour, deep-link filters */
(function () {
  var els = [].slice.call(document.querySelectorAll(".reveal, .reveal-img"));
  function show(el, d) { el.style.setProperty("--d", d + "s"); el.classList.add("in"); setTimeout(function () { el.classList.add("done"); }, 1500 + d * 1000); }
  if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in", "done"); }); }
  else {
    var io = new IntersectionObserver(function (entries) {
      var vis = entries.filter(function (e) { return e.isIntersecting; });
      vis.forEach(function (en, i) { show(en.target, Math.min(i, 5) * 0.08); io.unobserve(en.target); });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (e) { io.observe(e); });
    window.addEventListener("load", function () { setTimeout(function () { els.forEach(function (e) { if (!e.classList.contains("in") && e.getBoundingClientRect().top < innerHeight) { show(e, 0); } }); }, 1200); });
  }
  var t = document.getElementById("nav-toggle");
  if (t) {
    document.addEventListener("click", function (e) { if (t.checked && e.target.closest(".nav a")) t.checked = false; });
    window.addEventListener("resize", function () { if (innerWidth > 960) t.checked = false; });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") t.checked = false; });
  }
  function applyHash() {
    var h = location.hash.slice(1); if (!h) return;
    if (h.indexOf(",") > -1) { var parts = h.split(","); parts.forEach(function (x) { var e = document.getElementById(x); if (e && e.type === "radio") e.checked = true; }); var g0 = document.querySelector(".shop"); if (g0) setTimeout(function () { g0.scrollIntoView({ behavior: "smooth", block: "start" }); }, 50); return; }
    var s = h.match(/^s-([a-z]+)-(.+)$/);
    if (s) { var c = document.getElementById("c-" + s[1]); if (c) c.checked = true; }
    var r = document.getElementById(h);
    if (r && r.type === "radio") { r.checked = true; var g = document.querySelector(".shop"); if (g) setTimeout(function () { g.scrollIntoView({ behavior: "smooth", block: "start" }); }, 50); }
  }
  window.addEventListener("hashchange", applyHash); document.addEventListener("DOMContentLoaded", applyHash);
})();
