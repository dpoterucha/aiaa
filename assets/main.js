(function () {
  "use strict";
  var S = window.SITE || {}, EV = window.EVENTS || [], OF = window.OFFICERS || [], SP = window.SPONSORS || [];
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var initials = function (n) { return n.split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join("").toUpperCase(); };
  var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var parse = function (d) { var p = d.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); };
  var longDate = function (d) { var x = parse(d); return DAY[x.getDay()] + ", " + MON[x.getMonth()] + " " + x.getDate() + ", " + x.getFullYear(); };
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var TYPE = { speaker: "Speaker", meeting: "Meeting", social: "Social", tour: "Tour", workshop: "Workshop" };

  /* links */
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var u = (S.links || {})[a.getAttribute("data-link")];
    if (u) { a.href = u; a.target = "_blank"; a.rel = "noopener"; }
  });
  if (S.mission) $("#mission").textContent = "“" + S.mission + "”";

  /* mobile menu */
  var nav = $(".nav"), btn = $(".menu-btn");
  btn.addEventListener("click", function () {
    var o = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", o);
  });
  document.querySelectorAll(".links a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); btn.setAttribute("aria-expanded", false); }); });

  /* events */
  var sorted = EV.slice().sort(function (a, b) { return parse(a.date) - parse(b.date); });
  var upcoming = sorted.filter(function (e) { return parse(e.date) >= today; });
  var past = sorted.filter(function (e) { return parse(e.date) < today; }).reverse();

  function meta(e) {
    return [e.time, e.location].filter(Boolean).map(esc).join(" · ");
  }
  function eventCard(e) {
    var x = parse(e.date), m = meta(e);
    var title = e.type === "speaker" && e.speaker ? '<a href="#speaker-' + e.date + '">' + esc(e.title) + "</a>" : esc(e.title);
    return '<article class="event">' +
      '<div class="datebox"><div class="m">' + MON[x.getMonth()] + '</div><div class="d">' + x.getDate() + '</div><div class="w">' + DAY[x.getDay()] + "</div></div>" +
      '<div class="e-body"><h3>' + title + "</h3>" + (m ? '<div class="meta">' + m + "</div>" : "") +
      (e.summary ? "<p>" + esc(e.summary) + "</p>" : "") + "</div>" +
      '<span class="type t-' + esc(e.type) + '">' + (TYPE[e.type] || esc(e.type)) + "</span></article>";
  }
  $("#upcoming").innerHTML = upcoming.length ? upcoming.map(eventCard).join("") :
    '<div class="empty">The next meeting is being scheduled. <a data-x href="' + esc((S.links || {}).slack || "#join") + '" target="_blank" rel="noopener">Join our Slack</a> to hear about it first.</div>';
  $("#past").innerHTML = past.length ? past.map(eventCard).join("") : '<div class="empty">Nothing here yet.</div>';

  /* next event card in hero */
  var nx = upcoming[0], card = $("#next-event");
  if (nx) {
    card.innerHTML = '<div class="label">Next up</div><h3>' + esc(nx.title) + '</h3><div class="meta">' + longDate(nx.date) + (meta(nx) ? " · " + meta(nx) : "") + "</div>" +
      (nx.summary ? '<p class="muted">' + esc(nx.summary.length > 150 ? nx.summary.slice(0, 147) + "…" : nx.summary) + "</p>" : "") +
      '<a class="btn small ghost" href="#events">All events</a>';
  } else {
    var last = sorted.filter(function (e) { return e.type === "speaker"; }).pop();
    card.innerHTML = '<div class="label">Meetings this semester</div><h3>Weekly meetings, announced on Slack</h3>' +
      '<p class="muted">Speakers, socials, and career events throughout the year.' + (last && last.speaker ? " Most recently: " + esc(last.speaker.name) + (last.speaker.org ? " of " + esc(last.speaker.org) : "") + "." : "") + "</p>" +
      '<a class="btn small ghost" href="#speakers">Speaker series</a>';
  }

  /* speakers */
  var talks = sorted.filter(function (e) { return e.type === "speaker" && e.speaker; }).reverse();
  $("#speaker-list").innerHTML = talks.length ? talks.map(function (e) {
    var s = e.speaker, isPast = parse(e.date) < today, slides;
    if (e.slides) {
      slides = '<div class="cta-row"><a class="btn small primary" href="' + esc(e.slides) + '" target="_blank" rel="noopener">View slides</a>' +
        '<a class="btn small ghost" href="' + esc(e.slides) + '" download>Download PDF</a></div>' +
        (/\.pdf($|\?)/i.test(e.slides) ? '<div class="slides-frame"><iframe src="' + esc(e.slides) + '#view=FitH" title="Slides from ' + esc(s.name) + '" loading="lazy"></iframe></div>' : "");
    } else {
      slides = '<span class="slides-pending">Slides ' + (isPast ? "coming soon" : "posted after the talk") + "</span>";
    }
    return '<article class="speaker" id="speaker-' + e.date + '">' +
      '<div class="speaker-side"><div class="speaker-avatar">' + (s.photo ? '<img src="' + esc(s.photo) + '" alt="' + esc(s.name) + '">' : initials(s.name)) + "</div>" +
      "<div>" + (s.org ? '<div class="org">' + esc(s.org) + "</div>" : "") + '<p class="name">' + esc(s.name) + '</p><p class="role">' + esc(s.role || "") + "</p></div></div>" +
      '<div class="speaker-main"><div class="date">' + longDate(e.date) + (meta(e) ? " · " + meta(e) : "") + "</div><h3>" + esc(e.title) + "</h3>" +
      ((s.highlights || []).length ? '<div class="tags">' + s.highlights.map(function (h) { return '<span class="tag">' + esc(h) + "</span>"; }).join("") + "</div>" : "") +
      (e.summary ? "<p>" + esc(e.summary) + "</p>" : "") + slides + "</div></article>";
  }).join("") : '<div class="empty">Our first speaker is coming soon.</div>';

  /* officers */
  $("#officer-grid").innerHTML = OF.map(function (o) {
    return '<article class="officer"><div class="avatar">' + (o.photo ? '<img src="' + esc(o.photo) + '" alt="' + esc(o.name) + '" loading="lazy">' : initials(o.name)) + "</div>" +
      '<p class="o-name">' + esc(o.name) + '</p><p class="o-role">' + esc(o.role) + "</p>" +
      '<p class="o-meta">' + [o.year, o.hometown].filter(Boolean).map(esc).join(" · ") + "</p>" +
      (o.fact ? '<p class="o-fact">' + esc(o.fact) + "</p>" : "") +
      (o.email ? '<a class="o-mail" href="mailto:' + esc(o.email) + '">' + esc(o.email) + "</a>" : "") + "</article>";
  }).join("");

  /* contacts */
  var C = S.contacts || [];
  $("#contacts").innerHTML = C.map(function (c) {
    return '<li><span>' + esc(c.name) + ' <span class="c-role">· ' + esc(c.role) + '</span></span><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a></li>";
  }).join("");
  if (C.length) {
    $("#sponsor-email").href = "mailto:" + C.map(function (c) { return c.email; }).join(",") + "?subject=" + encodeURIComponent("Sponsoring AIAA at UW–Madison");
  }

  /* sponsors */
  $("#sponsor-grid").innerHTML = SP.map(function (s) {
    var img = s.logo ? '<img src="' + esc(s.logo) + '" alt="' + esc(s.name) + '">' : '<b style="color:#0b1330">' + esc(s.name) + "</b>";
    return s.url ? '<a class="sponsor" href="' + esc(s.url) + '" target="_blank" rel="noopener">' + img + "</a>" : '<div class="sponsor">' + img + "</div>";
  }).join("");

  /* footer */
  var L = S.links || {}, f = [];
  if (L.slack) f.push('<a href="' + esc(L.slack) + '" target="_blank" rel="noopener">Slack</a>');
  if (L.interestForm) f.push('<a href="' + esc(L.interestForm) + '" target="_blank" rel="noopener">Interest form</a>');
  if (L.instagram) f.push('<a href="' + esc(L.instagram) + '" target="_blank" rel="noopener">Instagram</a>');
  if (C[0]) f.push('<a href="mailto:' + esc(C[0].email) + '">Email us</a>');
  f.push('<a href="https://www.aiaa.org" target="_blank" rel="noopener">AIAA national</a>');
  $("#foot-links").innerHTML = f.join("");

  /* starfield */
  var cv = $("#stars"), ctx = cv.getContext("2d"), stars = [], still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function size() {
    var r = window.devicePixelRatio || 1;
    cv.width = innerWidth * r; cv.height = innerHeight * r; ctx.setTransform(r, 0, 0, r, 0, 0);
    stars = []; var n = Math.round(innerWidth * innerHeight / 5200);
    for (var i = 0; i < n; i++) stars.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: Math.random() * 1.2 + .2, p: Math.random() * 6.28, s: Math.random() * .015 + .004 });
  }
  function draw() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    var g = ctx.createRadialGradient(innerWidth * .75, innerHeight * .1, 0, innerWidth * .75, innerHeight * .1, innerWidth * .7);
    g.addColorStop(0, "rgba(40,70,160,.25)"); g.addColorStop(1, "rgba(7,11,29,0)");
    ctx.fillStyle = g; ctx.fillRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i]; if (!still) s.p += s.s;
      ctx.globalAlpha = .35 + .65 * Math.abs(Math.sin(s.p));
      ctx.fillStyle = "#cfe0ff"; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!still) requestAnimationFrame(draw);
  }
  size(); draw();
  window.addEventListener("resize", function () { size(); if (still) draw(); });
})();
