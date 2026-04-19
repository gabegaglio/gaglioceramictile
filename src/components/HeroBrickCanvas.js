import React, { useEffect, useRef } from "react";

const TILE_COLORS = [
  [62, 74, 92],
  [72, 82, 95],
  [88, 96, 108],
  [54, 64, 80],
  [78, 90, 100],
  [95, 100, 108],
  [68, 76, 90],
  [82, 88, 98],
  [58, 70, 84],
  [104, 108, 116],
  [74, 80, 92],
  [50, 60, 76],
];

function rng(seed) {
  let s = (seed ^ 0xdeadbeef) >>> 0;
  s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
  s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
  s ^= s >>> 16;
  return (s >>> 0) / 0xffffffff;
}

function rgb(r, g, b) {
  return `rgb(${r},${g},${b})`;
}

function drawTile(ctx, x, y, w, h, seed) {
  const r0 = rng(seed);
  const r1 = rng(seed + 1);
  const r2 = rng(seed + 2);
  const r3 = rng(seed + 3);
  const r4 = rng(seed + 4);
  const r5 = rng(seed + 5);

  const [br0, bg0, bb0] = TILE_COLORS[Math.floor(r0 * TILE_COLORS.length)];
  const shift = Math.floor(r1 * 36) - 18;
  const br = Math.min(255, Math.max(0, br0 + shift));
  const bg = Math.min(255, Math.max(0, bg0 + shift));
  const bb = Math.min(255, Math.max(0, bb0 + shift));

  ctx.fillStyle = rgb(br, bg, bb);
  ctx.fillRect(x, y, w, h);

  const patches = 4 + Math.floor(r2 * 3);
  for (let p = 0; p < patches; p++) {
    const px = x + rng(seed + 10 + p) * w;
    const py = y + rng(seed + 20 + p) * h;
    const pw = w * (0.2 + rng(seed + 30 + p) * 0.5);
    const ph = h * (0.15 + rng(seed + 40 + p) * 0.4);
    const lum = (rng(seed + 50 + p) > 0.5 ? 1 : -1) * (6 + rng(seed + 60 + p) * 14);
    ctx.globalAlpha = 0.18 + rng(seed + 70 + p) * 0.22;
    ctx.fillStyle = rgb(
      Math.min(255, Math.max(0, br + lum)),
      Math.min(255, Math.max(0, bg + lum)),
      Math.min(255, Math.max(0, bb + lum))
    );
    ctx.fillRect(px, py, pw, ph);
  }
  ctx.globalAlpha = 1;

  ctx.globalAlpha = 0.06;
  for (let g = 0; g < 6; g++) {
    ctx.fillStyle = rng(seed + 110 + g) > 0.5 ? "#fff" : "#000";
    ctx.fillRect(
      x + rng(seed + 80 + g) * w,
      y + rng(seed + 90 + g) * h,
      1 + rng(seed + 100 + g) * 3,
      1 + rng(seed + 100 + g) * 3
    );
  }
  ctx.globalAlpha = 1;

  const grad = ctx.createLinearGradient(x, y, x + w * 0.6, y + h * 0.6);
  grad.addColorStop(0, `rgba(255,255,255,${0.04 + r3 * 0.07})`);
  grad.addColorStop(0.4, `rgba(255,255,255,${0.01 + r4 * 0.02})`);
  grad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(x, y, w, h);

  ctx.fillStyle = `rgba(255,255,255,${0.12 + r5 * 0.1})`;
  ctx.fillRect(x, y, w, 1);
  ctx.fillStyle = `rgba(255,255,255,${0.07 + r5 * 0.06})`;
  ctx.fillRect(x, y, 1, h);
  ctx.fillStyle = `rgba(0,0,0,${0.18 + r3 * 0.12})`;
  ctx.fillRect(x, y + h - 2, w, 2);
  ctx.fillStyle = `rgba(0,0,0,${0.12 + r4 * 0.08})`;
  ctx.fillRect(x + w - 1, y, 1, h);
}

function drawBricks(ctx, W, H) {
  ctx.fillStyle = "#14181f";
  ctx.fillRect(0, 0, W, H);

  const GROUT = 4;
  const TILE_H = 54;
  const MIN_W = 100;
  const MAX_W = 210;
  const rows = Math.ceil(H / (TILE_H + GROUT)) + 2;

  for (let row = 0; row < rows; row++) {
    const y = row * (TILE_H + GROUT);
    const rowOffset = row % 2 === 0 ? 0 : -(MIN_W * 0.52);
    let x = rowOffset;
    let col = 0;
    while (x < W + MAX_W) {
      const seed = row * 2003 + col * 997;
      const w = MIN_W + Math.floor(rng(seed) * (MAX_W - MIN_W));
      const jitter = Math.floor(rng(seed + 7) * 5) - 2;
      drawTile(ctx, x + GROUT, y + GROUT + jitter, w - GROUT, TILE_H - GROUT, seed);
      x += w;
      col += 1;
    }
  }

  const vig = ctx.createRadialGradient(
    W / 2,
    H / 2,
    H * 0.2,
    W / 2,
    H / 2,
    H * 0.85
  );
  vig.addColorStop(0, "rgba(0,0,0,0)");
  vig.addColorStop(1, "rgba(10,14,22,0.55)");
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, W, H);
}

function HeroBrickCanvas() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const paint = () => {
      const rect = wrap.getBoundingClientRect();
      const W = Math.max(1, Math.floor(rect.width));
      const H = Math.max(1, Math.floor(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);

      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawBricks(ctx, W, H);
    };

    paint();

    const ro = new ResizeObserver(() => {
      paint();
    });
    ro.observe(wrap);

    window.addEventListener("resize", paint, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", paint);
    };
  }, []);

  return (
    <div ref={wrapRef} className="hero-brick-canvas-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-brick-canvas" />
    </div>
  );
}

export default HeroBrickCanvas;
