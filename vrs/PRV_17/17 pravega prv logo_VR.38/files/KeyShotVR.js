var r = !0,
  t = null,
  z = !1;
window.keyshotVR = function (
  U,
  v,
  V,
  W,
  pa,
  D,
  qa,
  ra,
  sa,
  ta,
  ua,
  J,
  K,
  X,
  Y,
  va,
  Z,
  wa,
  $,
  xa,
  aa,
  ya,
  za,
  Aa,
  Ba,
  p,
) {
  function O(a, d, b) {
    a.removeEventListener
      ? a.removeEventListener(d, b, z)
      : a.detachEvent &&
        (a.detachEvent('on' + d, a['e' + d + b]), (a['e' + d + b] = t));
  }
  function m(a, d, b) {
    a.addEventListener
      ? a.addEventListener(d, b, z)
      : a.attachEvent &&
        ((a['e' + d + b] = b),
        a.attachEvent('on' + d, function () {
          a['e' + d + b]();
        }));
  }
  function ba() {
    var a = z;
    -1 != navigator.platform.toString().indexOf('Win') &&
      -1 != navigator.appVersion.indexOf('MSIE') &&
      (a = r);
    return a;
  }
  function Ca() {
    var a = document.getElementById(U),
      d =
        a.requestFullScreen ||
        a.webkitRequestFullScreen ||
        a.mozRequestFullScreen ||
        a.msRequestFullScreen;
    'undefined' != typeof d && d && d.call(a);
  }
  function Da(f) {
    a.ma = z;
    f.pointerId in a.F && delete a.F[f.pointerId];
    ca(f);
  }
  function Ea(f) {
    a.ma && ((a.F[f.pointerId] = [f.pageX, f.pageY]), da(f));
  }
  function Fa(f) {
    a.ma = r;
    a.F[f.pointerId] = [f.pageX, f.pageY];
    ea(f);
  }
  function fa() {
    a.l
      ? (setTimeout(function () {
          a.u(z);
        }, 20),
        setTimeout(function () {
          a.u(r);
        }, 120))
      : (setTimeout(function () {
          a.u(r);
        }, 20),
        setTimeout(function () {
          a.u(z);
        }, 120));
  }
  function G() {
    var a = { x: 0, y: 0 },
      d = s;
    if (d.offsetParent) {
      do (a.x += d.offsetLeft), (a.y += d.offsetTop);
      while ((d = d.offsetParent));
    }
    return a;
  }
  function ga() {
    var f = c.g;
    c.g = 1;
    f != c.g && a.T((a.v() * f) / c.g);
    q.setAttribute('width', B.width);
    a.l
      ? (q.removeAttribute('height'),
        (q.style.width = '100%'),
        (q.style[L] = 'scale(' + c.n + ')'),
        (q.style.height = 'auto'),
        (s.style['background-color'] = a.backgroundColor),
        (document.body.style['background-color'] = a.backgroundColor))
      : (q.setAttribute('height', B.height),
        (q.style[L] =
          'translate(' +
          -B.width / 2 +
          'px,' +
          -B.height / 2 +
          'px) scale(' +
          c.g +
          ') translate(' +
          (0.5 * C.width) / c.g +
          'px,' +
          (0.5 * C.height) / c.g +
          'px) translate(' +
          c.j +
          'px,' +
          c.k +
          'px) scale(' +
          c.n +
          ')'),
        (q.style['max-width'] = ''),
        (q.style.width = ''),
        (q.style.height = ''),
        (s.style['background-color'] = a.backgroundColor));
  }
  function M() {
    a.Sa(a.h.offsetWidth, a.h.offsetHeight);
  }
  function ha(a, d) {
    l.start.x = a;
    l.start.y = d;
    l.a.x = a;
    l.a.y = d;
    i.a.x = a;
    i.a.y = d;
  }
  function ia(a, d) {
    l.b.x = a - l.a.x;
    l.b.y = d - l.a.y;
    l.n.x = a;
    l.n.y = d;
    l.a.x = a;
    l.a.y = d;
  }
  function F(f) {
    f || (f = window.event);
    var d = 0;
    f.keyCode ? (d = f.keyCode) : f.which && (d = f.which);
    1 == d ? (j.d |= 1) : 1 < d && (j.d |= 2);
    a.va(f);
    f.preventDefault ? f.preventDefault() : (f.returnValue = z);
  }
  function H(f) {
    f || (f = window.event);
    var d = G();
    a.cursor.x = f.pageX - d.x + k.left;
    a.cursor.y = f.pageY - d.y + k.top;
    f.preventDefault ? f.preventDefault() : (f.returnValue = z);
    0 < j.d &&
      (1 == j.d
        ? ia(f.pageX, f.pageY)
        : 2 == j.d
          ? ((f = a.cursor.y - E.start.y),
            (d = a.v()),
            a.T(c.t * Math.exp(f / 200)),
            (f = a.v()),
            (c.j += parseFloat(a.e * d - a.e * f)),
            (c.k += parseFloat(a.f * d - a.f * f)))
          : 3 == j.d &&
            ((d = a.cursor.x - E.start.x),
            (f = a.cursor.y - E.start.y),
            (c.j += parseFloat((d - c.m.x) / c.g)),
            (c.k += parseFloat((f - c.m.y) / c.g)),
            (c.m.x = d),
            (c.m.y = f)));
  }
  function N(f) {
    f || (f = window.event);
    var d = 0;
    f.keyCode ? (d = f.keyCode) : f.which && (d = f.which);
    1 == d ? (j.d &= -2) : 1 < d && (j.d &= -3);
    a.va(f);
    f.preventDefault ? f.preventDefault() : (f.returnValue = z);
  }
  function P(f) {
    a.Za &&
      ((f = f ? f : window.event),
      a.Ga(0 < (f.detail ? -1 * f.detail : f.wheelDelta / 40) ? 1 : -1),
      ja(f));
  }
  function ea(f) {
    f || (f = window.event);
    var d = ka(),
      b = G();
    a.cursor.x = d[0].pageX - b.x + k.left;
    a.cursor.y = d[0].pageY - b.y + k.top;
    if (1 == d.length && d[0])
      if (
        ((j.start.x = d[0].pageX),
        (j.start.y = d[0].pageY),
        (j.a.x = d[0].pageX),
        (j.a.y = d[0].pageY),
        (a.pa = d[0].target),
        a.pa == a.r)
      )
        (j.d = 1), ha(d[0].pageX, d[0].pageY);
      else
        for (var e = a.pa; e && e != a.r; ) {
          if (e.onclick) e.onclick();
          e = e.parentNode;
        }
    if (2 == d.length && d[0] && d[1]) {
      j.d = 3;
      j.ba.x = d[0].pageX - b.x + k.left;
      j.ba.y = d[0].pageY - b.y + k.top;
      j.ca.x = d[1].pageX - b.x + k.left;
      j.ca.y = d[1].pageY - b.y + k.top;
      var e = d[0].pageX - d[1].pageX,
        g = d[0].pageY - d[1].pageY,
        i = (d[0].pageX - b.x + k.left + (d[1].pageX - b.x + k.left)) / 2,
        d = (d[0].pageY - b.y + k.top + (d[1].pageY - b.y + k.top)) / 2;
      c.oa = z;
      c.Ta = Math.sqrt(e * e + g * g);
      c.t = a.v();
      a.e = parseFloat(i - 0.5 * C.width);
      a.f = parseFloat(d - 0.5 * C.height);
      a.e *= parseFloat(a.R);
      a.f *= parseFloat(a.R);
      a.e -= parseFloat(c.j);
      a.f -= parseFloat(c.k);
      a.e /= parseFloat(c.t);
      a.f /= parseFloat(c.t);
    }
    f.preventDefault();
  }
  function da(f) {
    f || (f = window.event);
    var b = ka(),
      e = G();
    a.cursor.x = b[0].pageX - e.x + k.left;
    a.cursor.y = b[0].pageY - e.y + k.top;
    1 == b.length &&
      b[0] &&
      ((j.a.x = b[0].pageX),
      (j.a.y = b[0].pageY),
      0 <= j.d && ia(j.a.x, j.a.y));
    if (2 == b.length && b[0] && b[1]) {
      var h = a.v(),
        g = b[0].pageX - b[1].pageX,
        i = b[0].pageY - b[1].pageY;
      a.T((c.t / c.Ta) * Math.sqrt(g * g + i * i));
      g = a.v();
      i = a.f * h - a.f * g;
      c.j += a.e * h - a.e * g;
      c.k += i;
      h = (a.cursor.x + b[1].pageX - e.x + k.left) / 2 - (j.ba.x + j.ca.x) / 2;
      b = (a.cursor.y + b[1].pageY - e.y + k.top) / 2 - (j.ba.y + j.ca.y) / 2;
      c.oa == z && ((c.m.x = h), (c.m.y = b), (c.oa = r));
      c.j += (h - c.m.x) / c.g;
      c.k += (b - c.m.y) / c.g;
      c.m.x = h;
      c.m.y = b;
    }
    f.preventDefault();
  }
  function ka() {
    if (!ba()) return window.event.touches;
    var f = [];
    for (id in a.F) {
      var b = a.F[id],
        e = {};
      e.pageX = b[0];
      e.pageY = b[1];
      e.target = a.r;
      e.preventDefault = function () {};
      f.push(e);
    }
    return f;
  }
  function ca(f) {
    f.preventDefault();
    a.pa = t;
    j.d = 0;
    var b = new Date().getTime(),
      e = b - (Q || b + 1);
    clearTimeout(R);
    (500 > e && 0 < e) ||
      ((Q = b),
      (R = setTimeout(
        function () {
          clearTimeout(R);
        },
        500,
        [f],
      )));
    Q = b;
  }
  function Ga(a) {
    a.preventDefault();
    j.d = 0;
  }
  function S() {
    Ha(S);
    a.W == a.Z &&
      (1 == j.d
        ? 0.01 < i.L
          ? ((i.b.x = 0.4 * (l.a.x - i.a.x)),
            (i.b.y = 0.4 * (l.a.y - i.a.y)),
            (i.a.x += i.b.x),
            (i.a.y += i.b.y),
            a.la(i.b.x, i.b.y))
          : (a.la(l.b.x, l.b.y), (l.b.x = 0), (l.b.y = 0))
        : 0.01 < i.L &&
          ((i.b.x *= i.L),
          (i.b.y *= i.L),
          0.055 > i.b.x * i.b.x + i.b.y * i.b.y &&
            ((i.b.x = 0),
            (i.b.y = 0),
            (l.b.x = 0),
            (l.b.y = 0),
            (l.a.x = i.a.x),
            (l.a.y = i.a.y)),
          (0 != i.b.x || 0 != i.b.y) && a.la(i.b.x, i.b.y)));
    a.Ba();
    var f = 0;
    if (-1 == a.ga) {
      for (var b = 1, b = 0; b < a.G.length; b++) {
        var c = a.B[b];
        if (0 == a.w[c] && a.G[b].complete) {
          a.D[c] = a.w[c];
          a.w[c] = -1;
          if (a.W == a.Z) {
            var h = a.G.length + a.za;
            h > e.q && (h = e.q);
            if ((h -= f)) for (var g = 0; g < h; g++) a.fa();
          }
          e.J = r;
          0 == b && a.Ba();
        }
        -1 != a.D[c] && f++;
      }
      b = parseFloat(f / e.q);
      a.Ra(b);
      f == e.q && ((a.ga = 0), a.Qa());
    }
  }
  function la(a) {
    keycode = (a ? a : window.event).keyCode;
    switch (keycode) {
      case 13:
        fa(), ja(a);
    }
  }
  function ja(a) {
    a = a ? a : window.event;
    a.preventDefault() ? a.preventDefault() : (a.returnValue = z);
  }
  var A = '/',
    I = window.location.href,
    ma = I.lastIndexOf('/');
  0 <= ma && (A = I.substr(0, ma + 1));
  var T = (I = z);
  this.Za = X != Y;
  this.ma = z;
  this.F = [];
  this.Ba = function () {
    if (e.J) {
      e.J = z;
      var b = parseInt(e.K * e.c + e.I);
      if (-1 != a.D[b] && (na.setAttribute('src', a.C[b]), void 0 !== p))
        if (((b = a.ha[b]), !b && void 0 == p[b])) {
          if (document.getElementById('vr_hotspot')) {
            var d = document.getElementById('vr_hotspot');
            document.body.removeChild(d);
          }
        } else
          document.getElementById('vr_hotspot') &&
            ((d = document.getElementById('vr_hotspot')),
            document.body.removeChild(d)),
            (d = document.createElement('div')),
            (d.innerHTML = p[b].text),
            (d.id = 'vr_hotspot'),
            (d.style.position = 'absolute'),
            (d.style.left = p[b].position.x + 'px'),
            (d.style.top = p[b].position.y + 'px'),
            (d.style.color = '#000000'),
            void 0 !== p[b].fb &&
              (p[b].options.fontSize &&
                (d.style.fontSize = p[b].options.fontSize),
              p[b].options.Ha && (d.style.color = p[b].options.Ha),
              p[b].options.bgColor &&
                (d.style.backgroundColor = p[b].options.bgColor),
              p[b].options.link && (d.href = p[b].options.link),
              p[b].options.height && (d.style.height = p[b].options.height),
              p[b].options.width && (d.style.width = p[b].options.width),
              p[b].options.textAlign &&
                (d.style.textAlign = p[b].options.textAlign)),
            document.body.appendChild(d);
    }
    if (c.n != c.a || c.j != c.wa || c.k != c.xa)
      (c.a = c.n), (c.wa = c.j), (c.xa = c.k), ga();
  };
  this.bb = function (b) {
    for (
      var d = -1e3,
        c = b,
        h = parseFloat(parseInt(b % e.c)),
        g = parseFloat(parseInt(b / e.c)),
        h = h / e.c,
        h = h * 2 * Math.PI,
        g = g / e.i,
        g = g * Math.PI,
        b = Math.sin(h),
        h = Math.cos(h),
        g = Math.cos(g),
        i = Math.sqrt(b * b + h * h + g * g),
        b = b / i,
        h = h / i,
        g = g / i,
        i = 0;
      i < a.G.length;
      i++
    ) {
      var j = a.B[i];
      if (-1 != a.D[j]) {
        var k = a.Da[j].Xa,
          k = b * k.x + h * k.y + g * k.Ya;
        d < k && ((d = k), (c = j));
      }
    }
    return c;
  };
  this.fa = function () {
    if (a.na < e.q) {
      var b = new Image(),
        d = a.B[a.na];
      a.w[d] = 0;
      b.src = a.C[d];
      a.G.push(b);
      var c = parseInt(d % e.c),
        h = parseInt(d / e.c),
        c = c / e.c,
        c = c * 2 * Math.PI,
        h = h / e.i,
        h = h * Math.PI,
        b = Math.sin(c),
        c = Math.cos(c),
        h = Math.cos(h),
        g = Math.sqrt(b * b + c * c + h * h);
      a.Da[d] = { Xa: { x: b / g, y: c / g, Ya: h / g } };
      a.na++;
    }
  };
  this.Fa = function () {
    for (
      var b = e.qa,
        d = e.ra,
        c = 2,
        h = parseFloat(e.c / c),
        g = parseFloat(e.i / c),
        i = e.q,
        j = 0,
        k = 0,
        m = 0,
        n = 0,
        l = 0;
      a.P < i;

    ) {
      var q = parseInt(b % e.c),
        s = parseInt(d % e.i),
        l = parseInt(s * e.c + q);
      a.C[l] ||
        ((a.B[a.P] = l),
        a.P++,
        (a.C[l] = a.ua(q, s)),
        void 0 !== p && p[s + '_' + q] && (a.ha[l] = s + '_' + q));
      0 == j && ((b += h), k++);
      1 == j && ((d += g), m++);
      n++;
      if (n >= c)
        if (((n = 0), 0 == j)) (j = 1), (k = 0);
        else if (1 == j && ((b += h), k++, k >= c / 2)) {
          c *= 2;
          b = e.qa;
          d = e.ra;
          h = parseFloat(e.c / c);
          g = parseFloat(e.i / c);
          if (1 > h && 1 > g) {
            for (b = 0; b < i; b++)
              (d = parseInt(b % e.c)),
                (c = parseInt(b / e.c)),
                (l = parseInt(c * e.c + d)),
                a.C[l] ||
                  ((a.B[a.P] = l),
                  a.P++,
                  (a.C[l] = a.ua(d, c)),
                  void 0 !== p && p[c + '_' + d] && (a.ha[l] = c + '_' + d));
            break;
          }
          j = m = k = 0;
        }
    }
  };
  this.ua = function (b, d) {
    return A + a.s + '/' + parseInt(d) + '_' + parseInt(b) + '.' + xa;
  };
  this.la = function (b, d) {
    var b = b * (1 < e.c ? a.Va : 0),
      d = d * (1 < e.i ? a.Wa : 0),
      c = Math.sqrt(b * b + d * d);
    if (1e-4 < c && ((e.da += b), (e.ea += d), (e.z += c), 1 < e.z)) {
      var c = parseInt(e.z),
        h = Math.atan2(e.da, e.ea);
      e.z -= c;
      e.da = 0;
      e.ea = 0;
      0 > h && (h += 2 * Math.PI);
      h += Math.PI / 8;
      h = parseInt(h / (Math.PI / 4));
      0 > h && (h += 8);
      h %= 8;
      if (0 != w[h]) {
        if (Aa)
          var g = e.I,
            g = g - c * w[h];
        else (g = e.I), (g += c * w[h]);
        if (e.Ca) {
          for (; 0 > g; ) g += e.c;
          for (; g >= e.c; ) g -= e.c;
        } else g >= e.c && (g = e.c - 1), 0 > g && (g = 0);
        e.I != g && ((e.I = g), (e.J = r));
      }
      if (0 != x[h]) {
        Ba ? ((g = e.K), (g -= c * x[h])) : ((g = e.K), (g += c * x[h]));
        if (e.Ea) {
          for (; 0 > g; ) g += e.i;
          for (; g >= e.i; ) g -= e.i;
        } else g >= e.i && (g = e.i - 1), 0 > g && (g = 0);
        e.K != g && ((e.K = g), (e.J = r));
      }
    }
  };
  this.Ua = function () {
    a.u(!a.l);
    a.l
      ? a.H.setAttribute('src', A + a.s + '/files/GoFullScreenIcon.png')
      : a.H.setAttribute('src', A + a.s + '/files/GoFixedSizeIcon.png');
  };
  this.u = function (b) {
    a.l = b;
    a.l
      ? ((u.style.position = 'relative'),
        (u.style.left = '0px'),
        (u.style.top = '0px'),
        (document.body.style.overflow = ''))
      : ((u.style.position = 'absolute'),
        (b = G()),
        (u.style.left = window.pageXOffset - b.x + k.left + 'px'),
        (u.style.top = window.pageYOffset - b.y + k.top + 'px'),
        (document.body.style.overflow = 'hidden'));
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    M();
  };
  this.Ja = function () {
    var b = new Image();
    b.src = a.O.src;
    a.G[a.Y] = b;
    b = a.B[a.Y];
    a.D[b] = a.w[b];
    a.w[b] = -1;
    a.Y++;
    e.J = r;
    a.Y == e.q && ((a.ga = 0), a.Ka());
  };
  var R,
    Q = t;
  this.va = function (b) {
    var d = G();
    a.cursor.x = b.pageX - d.x + k.left;
    a.cursor.y = b.pageY - d.y + k.top;
    1 == j.d
      ? ha(b.pageX, b.pageY)
      : 2 == j.d
        ? ((E.start.x = a.cursor.x),
          (E.start.y = a.cursor.y),
          (c.t = a.v()),
          (a.e = a.cursor.x - 0.5 * C.width),
          (a.f = a.cursor.y - 0.5 * C.height),
          (a.e *= a.R),
          (a.f *= a.R),
          (a.e -= c.j),
          (a.f -= c.k),
          (a.e /= c.t),
          (a.f /= c.t))
        : 3 == j.d &&
          ((E.start.x = a.cursor.x),
          (E.start.y = a.cursor.y),
          (c.m.x = 0),
          (c.m.y = 0));
  };
  this.Ga = function (b) {
    a.T(c.n * Math.exp(-b / 50));
  };
  this.v = function () {
    return c.n;
  };
  this.T = function (a) {
    a > c.ja / c.g && (a = c.ja / c.g);
    a < c.ka / c.g && (a = c.ka / c.g);
    c.n = a;
  };
  this.ab = function (a, b, c, e) {
    k.left = a;
    k.top = b;
    k.right = c;
    k.bottom = e;
    M();
  };
  this.Sa = function (b, d) {
    a.l || ((b = window.innerWidth), (d = window.innerHeight));
    var c = b - k.left - k.right,
      e = d - k.top - k.bottom;
    C.width = c;
    C.height = e;
    s.style.width = c + 'px';
    a.l && window.innerHeight < B.height && (e = window.innerHeight);
    s.style.height = e + 'px';
    s.style.left = k.left + 'px';
    s.style.top = k.top + 'px';
    ga();
    n.style.width = b + 'px';
    a.l && window.innerHeight < B.height && (d = window.innerHeight);
    n.style.height = d + 'px';
    a.h.style.height = d + 'px';
    n.Aa && n.Aa(b, d);
    $ &&
      ((a.N.style.height = window.innerHeight + 'px'),
      (a.N.style.width = window.innerWidth + 'px'));
  };
  this.U = function (a) {
    m(a, 'mousedown', F);
    m(a, 'mousemove', H);
    m(a, 'mouseup', N);
  };
  this.aa = function (a) {
    O(a, 'mousedown', F);
    O(a, 'mousemove', H);
    O(a, 'mouseup', N);
  };
  this.Qa = function () {
    a.p && ((a.p.style.visibility = 'hidden'), a.aa(a.p), a.aa(a.Q), a.aa(a.o));
  };
  this.Ka = function () {
    a.A.style.visibility = 'hidden';
    a.aa(a.A);
  };
  var Ha =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (a) {
      window.setTimeout(a, 10);
    };
  this.ta = function () {
    a.p = document.createElement('div');
    a.U(a.p);
    a.p.V = function () {
      this.parentNode &&
        ((this.style.left = '16px'), (this.style.top = '16px'));
    };
    b = 'position:absolute;';
    b += 'left: 0px;';
    b += 'top:  0px;';
    b += 'width: 80px;';
    b += 'height: 80px;';
    b += y + 'transform-origin: 50% 50%;';
    b += 'visibility: inherit;';
    a.p.setAttribute('style', b);
    a.Q = document.createElement('div');
    a.U(a.Q);
    b = 'position:absolute;';
    b += 'left: 0px;';
    b += 'top:  29px;';
    b += 'width: 80px;';
    b += 'height: 80px;';
    b += y + 'transform-origin: 50% 50%;';
    b += 'opacity: 1.0;';
    b += 'visibility: inherit;';
    b += 'border: 0px solid #000000;';
    b += 'color: #ffffff;';
    b += 'text-align: left;';
    b += 'white-space: nowrap;';
    b += 'padding: 0px 0px 0px 0px;';
    b += 'overflow: hidden;';
    a.Q.setAttribute('style', b);
    a.o = document.createElement('div');
    a.U(a.o);
    a.o.$ = { Ma: 0, Na: 0, ia: 0, Oa: 1, Pa: 1, eb: 1 };
    b = 'position:absolute;';
    b += 'left: 0px;';
    b += 'top:  0px;';
    b += 'width: 80px;';
    b += 'height: 80px;';
    b += y + 'transform-origin: 50% 50%;';
    b += 'opacity: 1.0;';
    b += 'visibility: inherit;';
    b += 'border: 0px solid #000000;';
    b += 'color: #ffffff;';
    b += 'text-align: left;';
    b += 'white-space: nowrap;';
    b += 'padding: 0px 0px 0px 0px;';
    b += 'overflow: hidden;';
    var c = ya;
    '' == c && (c = 'ks_logo.png');
    a.o.setAttribute('style', b);
    a.o.innerHTML = '<img src="' + A + a.s + '/files/' + c + '"></img>';
    a.p.appendChild(a.o);
    a.p.appendChild(a.Q);
    n.appendChild(a.p);
    a.u(a.l);
    setTimeout(function () {
      a.u(a.l);
    }, 10);
  };
  this.Ra = function (b) {
    if (a.p) {
      a.Q.innerHTML = '<center>' + parseInt(100 * b) + '</center>';
      a.o.$.ia += 2.1;
      b = '';
      if (a.o.$)
        var d = a.o.$,
          b =
            b +
            ('translate(' +
              d.Ma +
              'px,' +
              d.Na +
              'px) rotate(' +
              d.ia +
              'deg) scale(' +
              d.Oa +
              ',' +
              d.Pa +
              ') ');
      a.o.style[L] = b + 'scale(1.0,1.0)';
    }
  };
  this.sa = function () {
    T = r;
    S();
  };
  this.ya = function () {
    m(window, 'resize', M);
    za && m(n, 'dblclick', Ca);
    if (ba())
      if (
        (m(window, 'mousewheel', P),
        m(window, 'keydown', la),
        /Tablet PC/i.test(navigator.userAgent) && window.$a)
      ) {
        var b = new MSGesture();
        b.target = a.h;
        a.h.Ia = b;
        a.h.Ia.pointerType = t;
        a.h.gb = [];
        m(a.h, 'MSPointerDown', Fa);
        m(a.h, 'MSPointerMove', Ea);
        m(a.h, 'MSPointerUp', Da);
      } else
        m(n, 'mousedown', F),
          m(q, 'mousedown', F),
          m(n, 'mousemove', H),
          m(q, 'mousemove', H),
          m(document, 'mouseup', N);
    else
      n.addEventListener &&
        (m(document, 'mouseup', N),
        m(n, 'mousewheel', P),
        m(document, 'keydown', la),
        m(n, 'mousedown', F),
        m(q, 'mousedown', F),
        m(n, 'mousemove', H),
        m(n, 'touchstart', ea),
        m(n, 'touchmove', da),
        m(n, 'touchcancel', Ga),
        m(n, 'touchend', ca),
        m(n, 'DOMMouseScroll', P),
        m(window, 'orientationchange', fa));
  };
  if (document.createElement('canvas').getContext) {
    var a = this,
      u = (a.h = t),
      s = t,
      na = t,
      n = t,
      q = t;
    a.l = Z;
    a.s = v;
    a.cb = z;
    a.Z = z;
    a.W = $;
    a.hb = 0;
    a.P = 0;
    a.Va = parseFloat(ta);
    a.Wa = parseFloat(ua);
    a.za = 1;
    a.Y = 0;
    a.ga = -1;
    var k = { left: 0, top: 0, right: 0, bottom: 0 },
      e = {
        I: 0,
        K: 0,
        c: 1,
        i: 1,
        qa: 0,
        ra: 0,
        z: 0,
        da: 0,
        ea: 0,
        J: z,
        q: 0,
        Ca: r,
        Ea: z,
      };
    J || (J = 0);
    K || (K = 0);
    e.qa = J;
    e.ra = K;
    e.I = J;
    e.K = K;
    e.c = D;
    e.i = qa;
    e.Ca = ra;
    e.Ea = sa;
    e.q = e.c * e.i;
    var B = { width: 0, height: 0 };
    B.width = V;
    B.height = W;
    var y = '',
      L = 'transform',
      C = { x: 640, y: 480 },
      c = {
        n: 1,
        t: 1,
        a: -1,
        j: 0,
        k: 0,
        wa: -1,
        xa: -1,
        g: 1,
        ka: 1,
        ja: 1,
        m: { x: 0, y: 0 },
        oa: z,
      };
    c.ka = parseFloat(X);
    c.ja = parseFloat(Y);
    var l = {
        start: { x: 0, y: 0 },
        a: { x: 0, y: 0 },
        La: { x: 0, y: 0 },
        n: { x: 0, y: 0 },
        b: { x: 0, y: 0 },
      },
      E = { start: { x: 0, y: 0 } },
      j = {
        d: 0,
        start: { x: 0, y: 0 },
        a: { x: 0, y: 0 },
        La: { x: 0, y: 0 },
        n: { x: 0, y: 0 },
        b: { x: 0, y: 0 },
        ba: { x: 0, y: 0 },
        ca: { x: 0, y: 0 },
      },
      i = { a: { x: 0, y: 0 }, b: { x: 0, y: 0 }, L: 0.96 };
    i.L = va;
    a.cursor = { x: 0, y: 0 };
    var w = [],
      x = [];
    w[0] = 0;
    x[0] = 1;
    w[1] = 1;
    x[1] = 1;
    w[2] = 1;
    x[2] = 0;
    w[3] = 1;
    x[3] = -1;
    w[4] = 0;
    x[4] = -1;
    w[5] = -1;
    x[5] = -1;
    w[6] = -1;
    x[6] = 0;
    w[7] = -1;
    x[7] = 1;
    a.e = 0;
    a.f = 0;
    a.na = 0;
    a.G = [];
    a.B = [];
    a.w = [];
    a.D = [];
    a.Da = [];
    for (v = 0; v < e.q; v++) (a.w[v] = -1), (a.D[v] = -1);
    a.C = [];
    a.ha = [];
    v = ['Webkit', 'Moz', '0', 'ms', 'Ms'];
    for (D = 0; D < v.length; D++)
      'undefined' !=
        typeof document.documentElement.style[v[D] + 'Transform'] &&
        ((y = '-' + v[D].toLowerCase() + '-'), (L = v[D] + 'Transform'));
    var b = '';
    a.h = document.getElementById(U);
    b = 'width: ' + V + 'px;';
    b += 'height: ' + W + 'px;';
    b += 'max-width: 100%;';
    a.h.setAttribute('style', b);
    u = document.createElement('div');
    u.setAttribute('id', 'viewwindow');
    b = 'top:  0px;';
    b += 'left: 0px;';
    b += 'position: relative;';
    u.setAttribute('style', b);
    a.h.appendChild(u);
    s = document.createElement('div');
    s.setAttribute('id', 'turntable');
    b = 'top:  0px;';
    b += 'left: 0px;';
    b += 'overflow: hidden;';
    b += 'position:absolute;';
    b += y + 'user-select: none;';
    s.setAttribute('style', b);
    u.appendChild(s);
    q = document.createElement('img');
    q.setAttribute('id', 'backbuffer');
    b = 'top:  0px;';
    b += 'left: 0px;';
    b += 'position:absolute;';
    b += y + 'user-select: none;';
    q.setAttribute('style', b);
    s.appendChild(q);
    na = q;
    n = document.createElement('div');
    a.r = n;
    b = 'top:  0px;';
    b += 'left: 0px;';
    b += 'width:  100px;';
    b += 'height: 100px;';
    b += 'overflow: hidden;';
    b += 'position:absolute;';
    b += 'z-index: 522;';
    b += y + 'user-select: none;';
    n.setAttribute('style', b);
    u.appendChild(n);
    n.Aa = function (a, b) {
      var c = [];
      for (c.push(this); 0 < c.length; ) {
        var e = c.pop();
        e.V && e.V(a, b);
        if (e.hasChildNodes())
          for (var g = 0; g < e.childNodes.length; g++) c.push(e.childNodes[g]);
      }
    };
    this.A = document.createElement('div');
    b = 'position:absolute;';
    b += 'left: 0px;';
    b += 'top:  0px;';
    b += 'width: 256px;';
    b += 'height: 256px;';
    b += 'opacity: 0.0;';
    b += y + 'transform-origin: 50% 50%;';
    b += 'visibility: inherit;';
    b += 'display: none';
    this.A.setAttribute('style', b);
    this.O = document.createElement('img');
    this.O.setAttribute('width', 256);
    this.O.setAttribute('height', 256);
    this.O.onload = function () {
      a.Ja();
    };
    a.U(this.A);
    this.A.appendChild(this.O);
    n.appendChild(this.A);
    this.backgroundColor = s.style.backgroundColor = pa;
    wa &&
      ((a.S = document.createElement('div')),
      (b = 'position:absolute;'),
      (b += 'width: 38px;'),
      (b += 'height: 32px;'),
      (b += y + 'transform-origin: 50% 50%;'),
      (b += 'visibility: inherit;'),
      (b += 'cursor: pointer;'),
      a.S.setAttribute('style', b),
      (a.H = document.createElement('img')),
      a.l
        ? a.H.setAttribute('src', A + a.s + '/files/GoFullScreenIcon.png')
        : a.H.setAttribute('src', A + a.s + '/files/GoFixedSizeIcon.png'),
      a.H.setAttribute(
        'style',
        'position: absolute;top: 0px;left: 0px;width: 38px;height: 32px;',
      ),
      a.S.appendChild(a.H),
      (a.S.V = function (a, b) {
        this.style.left = a - 38 + 'px';
        this.style.top = b - 32 + 'px';
      }),
      (a.S.onclick = function () {
        a.Ua();
      }),
      a.r.appendChild(a.S));
    if (a.W) {
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ) && (I = r);
      a.M = document.createElement('div');
      b = 'position:absolute;';
      b += 'width: 92px;';
      b += 'height: 92px;';
      b += y + 'transform-origin: 50% 50%;';
      b += 'visibility: inherit;';
      b += 'cursor: pointer;';
      a.M.setAttribute('style', b);
      a.X = document.createElement('img');
      I
        ? a.X.setAttribute('src', A + a.s + '/files/vr_hand.gif')
        : a.X.setAttribute('src', A + a.s + '/files/vr_cursor.gif');
      a.X.setAttribute(
        'style',
        'position: absolute;top: 0px;left: 0px;width: 92px;height: 92px;',
      );
      a.M.appendChild(a.X);
      a.M.V = function (a, b) {
        this.style.left = 0.5 * a - 46 + 'px';
        this.style.top = 0.5 * b - 46 + 'px';
      };
      a.N = document.createElement('div');
      b = 'position:absolute;';
      b += y + 'transform-origin: 50% 50%;';
      b += ' width: ' + window.innerWidth + 'px;';
      b += ' height: ' + window.innerHeight + 'px;';
      b += ' background-color: #ccc;';
      b += ' opacity: .7';
      a.N.setAttribute('style', b);
      a.r.appendChild(a.N);
      var oa = function () {
        a.M.style.visibility = 'hidden';
        a.N.style.visibility = 'hidden';
        aa && a.ta();
        a.Z = r;
        for (var b = 0; b < a.za; b++) a.fa();
        a.sa();
      };
      a.r.onmousedown = function (a) {
        T || oa();
        a.preventDefault();
      };
      a.r.ontouchstart = function (a) {
        T || oa();
        a.preventDefault();
      };
      a.r.appendChild(a.M);
      a.ya();
    } else (a.W = r), (a.Z = r), aa && a.ta(), a.ya(), a.sa();
    a.u(Z);
    a.R = 1 / c.g;
    a.T(a.R);
    this.Fa();
    a.fa();
    setTimeout(function () {
      S();
    }, 10);
    setTimeout(function () {
      M();
    }, 15);
  } else alert('Your browser must support HTML5 to show KeyShotVR');
};
