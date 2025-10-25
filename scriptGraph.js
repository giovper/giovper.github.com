(function(){
  const svg = document.getElementById('cartesian');
  const W = 800, H = 600;            // viewBox dimensions (matches the SVG above)
  const unitsPerWidth = 20;         // number of coordinate units across half-width (adjust zoom)
  const scale = Math.min(W, H) / (unitsPerWidth * 2); // pixels per unit
  const halfWUnits = (W / 2) / scale;
  const halfHUnits = (H / 2) / scale;

  // helpers: cartesian -> svg coordinates
  function toSvgX(x){ return W/2 + x * scale; }
  function toSvgY(y){ return H/2 - y * scale; }

  // clear svg children
  function clearSvg(){ while(svg.firstChild) svg.removeChild(svg.firstChild); }

  // draw axes (simple)
  function drawAxes(){
    const axis = (x1,y1,x2,y2, cls) => {
      const l = document.createElementNS("http://www.w3.org/2000/svg","line");
      l.setAttribute("x1", x1); l.setAttribute("y1", y1);
      l.setAttribute("x2", x2); l.setAttribute("y2", y2);
      l.setAttribute("stroke","#333"); l.setAttribute("stroke-width", cls ? cls : 1);
      svg.appendChild(l);
    };
    axis(0, H/2, W, H/2); // x-axis
    axis(W/2, 0, W/2, H); // y-axis

    // ticks and labels
    const step = 1; // unit tick spacing
    const tickLen = 6;
    for(let u = -Math.ceil(halfWUnits); u <= Math.ceil(halfWUnits); u += step){
      const x = toSvgX(u);
      if (x < 0 || x > W) continue;
      const t = document.createElementNS("http://www.w3.org/2000/svg","line");
      t.setAttribute("x1", x); t.setAttribute("y1", H/2 - tickLen/2);
      t.setAttribute("x2", x); t.setAttribute("y2", H/2 + tickLen/2);
      t.setAttribute("stroke","#666"); t.setAttribute("stroke-width",1);
      svg.appendChild(t);
      if(u !== 0){
        const txt = document.createElementNS("http://www.w3.org/2000/svg","text");
        txt.setAttribute("x", x+2); txt.setAttribute("y", H/2 + 14);
        txt.setAttribute("font-size",12); txt.textContent = u;
        svg.appendChild(txt);
      }
    }
    for(let v = -Math.ceil(halfHUnits); v <= Math.ceil(halfHUnits); v += step){
      const y = toSvgY(v);
      if (y < 0 || y > H) continue;
      const t = document.createElementNS("http://www.w3.org/2000/svg","line");
      t.setAttribute("x1", W/2 - tickLen/2); t.setAttribute("y1", y);
      t.setAttribute("x2", W/2 + tickLen/2); t.setAttribute("y2", y);
      t.setAttribute("stroke","#666"); t.setAttribute("stroke-width",1);
      svg.appendChild(t);
      if(v !== 0){
        const txt = document.createElementNS("http://www.w3.org/2000/svg","text");
        txt.setAttribute("x", W/2 + 6); txt.setAttribute("y", y-2);
        txt.setAttribute("font-size",12); txt.textContent = v;
        svg.appendChild(txt);
      }
    }
  }

  // draw circle: center (cx,cy), radius r (in same units)
  function drawCircle(cx, cy, r, opts = {}){
    const c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx", toSvgX(cx));
    c.setAttribute("cy", toSvgY(cy));
    c.setAttribute("r", Math.abs(r) * scale);
    c.setAttribute("fill", opts.fill || "none");
    c.setAttribute("stroke", opts.stroke || "#0077cc");
    c.setAttribute("stroke-width", opts.strokeWidth || 2);
    svg.appendChild(c);
  }

  // draw point
  function drawPoint(x,y, opts = {}){
    const rpx = (opts.r || 4);
    const p = document.createElementNS("http://www.w3.org/2000/svg","circle");
    p.setAttribute("cx", toSvgX(x));
    p.setAttribute("cy", toSvgY(y));
    p.setAttribute("r", rpx);
    p.setAttribute("fill", opts.fill || "#c40000");
    p.setAttribute("stroke", opts.stroke || "#000");
    svg.appendChild(p);

    if(opts.label){
      const t = document.createElementNS("http://www.w3.org/2000/svg","text");
      t.setAttribute("x", toSvgX(x) + 6);
      t.setAttribute("y", toSvgY(y) - 6);
      t.setAttribute("font-size", 13);
      t.textContent = opts.label;
      svg.appendChild(t);
    }
  }

  // draw line: supports y = m x + b  OR vertical {vertical:true, x: val}
  function drawLine(line, opts = {}){
    let x1u = -halfWUnits, x2u = halfWUnits; // units
    let y1u, y2u;
    if(line && line.vertical){
      const xv = line.x;
      y1u = -halfHUnits; y2u = halfHUnits;
      x1u = x2u = xv;
    } else {
      const m = (line && typeof line.m === 'number') ? line.m : 0;
      const b = (line && typeof line.b === 'number') ? line.b : 0;
      y1u = m * x1u + b;
      y2u = m * x2u + b;
    }

    // clip (simple) to viewbox - optional enhancement: more precise clipping
    const L = document.createElementNS("http://www.w3.org/2000/svg","line");
    L.setAttribute("x1", toSvgX(x1u));
    L.setAttribute("y1", toSvgY(y1u));
    L.setAttribute("x2", toSvgX(x2u));
    L.setAttribute("y2", toSvgY(y2u));
    L.setAttribute("stroke", opts.stroke || "#007700");
    L.setAttribute("stroke-width", opts.strokeWidth || 2);
    svg.appendChild(L);
  }

  // main draw function: accepts an object with circle, point, line1, line2
  function drawScene(scene){
    clearSvg();
    drawAxes();

    if(scene.circle){
      const {cx=0, cy=0, r=1} = scene.circle;
      drawCircle(cx, cy, r, {stroke:"#0b63a6", strokeWidth:2, fill:"none"});
    }

    if(scene.point){
      const {x=0, y=0, label="P"} = scene.point;
      drawPoint(x, y, {label: label, r:4, fill:"#e60000"});
    }

    if(scene.line1){
      drawLine(scene.line1, {stroke:"#cc0000", strokeWidth:2});
    }
    if(scene.line2){
      drawLine(scene.line2, {stroke:"#006600", strokeWidth:2});
    }
  }

  // expose a global update function that user JS can call
  window.svgCartesianUpdate = function(params){
    // params example:
    // { circle:{cx:0,cy:0,r:3}, point:{x:4,y:1,label:"P"}, line1:{m:0.5,b:1}, line2:{vertical:true,x:3} }
    drawScene(params || {});
  };

  // initial demo scene
  window.svgCartesianUpdate({
    circle: {cx: 0, cy: 0, r: 4},
    point: {x: 5, y: 1, label: "P"},
    line1: {m: 0.5, b: 1},
    line2: {m: -1.2, b: 3}
  });

})();