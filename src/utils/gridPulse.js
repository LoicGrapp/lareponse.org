/**
 * Grid Pulse — canvas dot-grid with random sparkle in accent color.
 * Fixed behind all content via mix-blend-mode: screen.
 */
export function initGridPulse() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, {
    position:       'fixed',
    inset:          '0',
    width:          '100%',
    height:         '100%',
    zIndex:         '0',
    pointerEvents:  'none',
    mixBlendMode:   'screen',
  });
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx        = canvas.getContext('2d');
  const accent     = [129, 140, 248]; // #818CF8
  const gap        = 28;
  const baseRadius = 1.2;
  const pulseRadius= 3;
  let dots = [], W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    const cols = Math.ceil(W / gap) + 1;
    const rows = Math.ceil(H / gap) + 1;
    dots = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dots.push({
          x:      c * gap,
          y:      r * gap,
          phase:  Math.random() * Math.PI * 2,
          speed:  0.003 + Math.random() * 0.006,
          bright: 0,
        });
      }
    }
  }

  function sparkle() {
    const count = Math.max(1, Math.floor(dots.length * 0.003));
    for (let i = 0; i < count; i++) {
      dots[Math.floor(Math.random() * dots.length)].bright = 1;
    }
  }

  let lastSparkle = 0;
  function draw(t) {
    ctx.clearRect(0, 0, W, H);

    if (t - lastSparkle > 400) {
      sparkle();
      lastSparkle = t;
    }

    for (const d of dots) {
      d.bright *= 0.97;
      const base  = 0.08 + 0.04 * Math.sin(d.phase + t * d.speed);
      const alpha = Math.min(1, base + d.bright * 0.7);
      const r     = baseRadius + d.bright * (pulseRadius - baseRadius);
      ctx.beginPath();
      ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${accent[0]},${accent[1]},${accent[2]},${alpha.toFixed(3)})`;
      ctx.fill();
    }

    document.querySelectorAll('.no-dots').forEach(el => {
      const rect = el.getBoundingClientRect();
      ctx.clearRect(rect.left, rect.top, rect.width, rect.height);
    });

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(draw);
}
