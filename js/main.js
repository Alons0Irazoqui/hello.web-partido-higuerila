(() => {
  const PHONE = "522411127553";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const loader = $("#loader");
  const started = performance.now();
  let loaderDone = false;

  const hideLoader = () => {
    if (loaderDone) return;
    loaderDone = true;
    const elapsed = performance.now() - started;
    const delay = Math.max(0, 1650 - elapsed);
    window.setTimeout(() => {
      loader?.classList.add("hidden");
      document.body.classList.add("loaded");
    }, delay);
  };

  document.addEventListener("DOMContentLoaded", hideLoader);
  window.addEventListener("load", hideLoader);
  window.setTimeout(hideLoader, 2600);

  const navbar = $("#navbar");
  const setNavbar = () => navbar?.classList.toggle("scrolled", window.scrollY > 12);
  setNavbar();
  window.addEventListener("scroll", setNavbar, { passive: true });

  const hamburger = $("#hamburger");
  const mobileMenu = $("#mob-menu");
  hamburger?.addEventListener("click", () => {
    const open = !mobileMenu?.classList.contains("open");
    hamburger.classList.toggle("active", open);
    hamburger.setAttribute("aria-expanded", String(open));
    mobileMenu?.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
  });

  $$("#mob-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger?.classList.remove("active");
      hamburger?.setAttribute("aria-expanded", "false");
      mobileMenu?.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  const marquee = $("#marquee");
  if (marquee) {
    const words = [
      "Partido Higuerillas",
      "Transmision en vivo",
      "Eventos",
      "Contacto directo",
      "Aurelio Cruz",
      "241 112 7553",
      "Identidad premium"
    ];
    const sequence = words.map((word) => `<span>${word}</span>`).join("");
    marquee.innerHTML = sequence + sequence + sequence;
  }

  const typewriter = $(".typewriter");
  if (typewriter) {
    const text = typewriter.dataset.text || "";
    typewriter.textContent = "";
    let i = 0;
    const write = () => {
      typewriter.textContent = text.slice(0, i);
      i += 1;
      if (i <= text.length) window.setTimeout(write, 92);
    };
    window.setTimeout(write, 760);
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -6% 0px" });

  $$(".reveal").forEach((el) => revealObserver.observe(el));

  const countNumber = (el) => {
    const target = Number(el.dataset.count || "0");
    const suffix = el.dataset.suffix || "";
    const duration = target === 0 ? 260 : 1350;
    const start = performance.now();
    const format = new Intl.NumberFormat("es-MX");

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${format.format(value)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        countNumber(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.55 });

  $$(".stat-num").forEach((el) => statObserver.observe(el));

  const hero = $("#hero");
  hero?.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
    hero.style.setProperty("--mx", `${x}px`);
    hero.style.setProperty("--my", `${y}px`);
  });

  const encode = encodeURIComponent;
  const form = $("#wa-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = $("#f-name")?.value.trim() || "";
    const interest = $("#f-interest")?.value || "Informacion general";
    const message = $("#f-msg")?.value.trim() || "";
    const text = [
      "Hola Aurelio, visite la pagina de Partido Higuerillas.",
      `Mi nombre es: ${name}.`,
      `Necesito: ${interest}.`,
      `Detalle del evento: ${message}`
    ].join("\n");

    window.open(`https://wa.me/${PHONE}?text=${encode(text)}`, "_blank", "noopener,noreferrer");
  });

  const makeParticles = (canvas, options = {}) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const palette = options.palette || ["rgba(201,162,39,0.72)", "rgba(168,168,168,0.58)"];
    let width = 0;
    let height = 0;
    let particles = [];
    let frame = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = reduceMotion ? 18 : Math.min(options.max || 70, Math.max(options.min || 28, Math.floor(width * height / 24000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (options.speed || 0.22),
        vy: (Math.random() - 0.5) * (options.speed || 0.22),
        r: 0.7 + Math.random() * 1.7,
        color: palette[Math.floor(Math.random() * palette.length)],
        alpha: 0.25 + Math.random() * 0.75
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        ctx.beginPath();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        for (let j = index + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 110) {
            ctx.globalAlpha = (1 - distance / 110) * 0.16;
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      });
      ctx.globalAlpha = 1;
      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", () => {
      cancelAnimationFrame(frame);
      resize();
      draw();
    }, { passive: true });
  };

  const heroCanvas = $("#hero-canvas");
  if (heroCanvas) {
    makeParticles(heroCanvas, {
      min: 48,
      max: 96,
      speed: 0.18,
      palette: ["rgba(201,162,39,0.82)", "rgba(244,243,239,0.62)", "rgba(168,168,168,0.5)"]
    });
  }

  $$(".section-particles").forEach((canvas) => {
    const gold = canvas.dataset.particles === "gold";
    makeParticles(canvas, {
      min: 18,
      max: 42,
      speed: 0.12,
      palette: gold
        ? ["rgba(201,162,39,0.44)", "rgba(244,243,239,0.26)"]
        : ["rgba(168,168,168,0.34)", "rgba(244,243,239,0.22)"]
    });
  });
})();
