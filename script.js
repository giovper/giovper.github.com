let variableMap = {};

const CM_passaggi_formule = {
    "1.6": "y - Y_p = m(x - X_p)",
    "1.7": "a_f x + b_f y + c_f = 0",
    "1.8": "\\frac{|a_f X_c + b_f Y_c + c_f|}{\\sqrt{a_f^2 + b_f^2}}",
    "1.9": "\\frac{|m X_c - Y_c - m X_p + Y_p|}{\\sqrt{m^2 + 1}}",
    "1.10": "\\frac{|m X_c - Y_c - m X_p + Y_p|}{\\sqrt{m^2 + 1}} = r",
    "1.11": "|m X_c - Y_c - m X_p + Y_p| = r \\sqrt{m^2 + 1}",
    "1.12": "|m(X_c - X_p) - (Y_c - Y_p)| = r \\sqrt{m^2 + 1}",
    "1.13": "m(X_c - X_p) - (Y_c - Y_p) = \\pm r \\sqrt{m^2 + 1}",
    "1.14": "y - Y_p = m(x - X_p)",
    "2.4": "y - Y_p = m(x - X_p)",
    "2.5": "x^2 + \\left[ m(x - X_p) + Y_p \\right]^2 + a x + b \\left[ m(x - X_p) + Y_p \\right] + c = 0",
    "2.6": "(1 + m^2)x^2 + \\left[ a + b m - 2 m^2 X_p + 2 m Y_p \\right]x + \\left[ m^2 X_p^2 - 2 m X_p Y_p + Y_p^2 + b Y_p - a m X_p + c \\right] = 0",
    "2.7": "\\Delta = \\left[ a + b m - 2 m^2 X_p + 2 m Y_p \\right]^2 - 4 (1 + m^2) \\left[ m^2 X_p^2 - 2 m X_p Y_p + Y_p^2 + b Y_p - a m X_p + c \\right] = 0",
    "2.8": "y - Y_p = m(x - X_p)",
    "3.4": "M(X_m, Y_m) = \\left( \\frac{X_c + X_p}{2}, \\frac{Y_c + Y_p}{2} \\right)",
    "3.5": "r_m = \\frac{\\sqrt{(X_c - X_p)^2 + (Y_c - Y_p)^2}}{2}",
    "3.6": "(x - X_m)^2 + (y - Y_m)^2 = r_m^2",
    "3.7": "x^2 + y^2 - 2 X_m x - 2 Y_m y + (X_m^2 + Y_m^2 - r_m^2) = 0",
    "3.8": "\\begin{cases} x^2 + y^2 + a x + b y + c = 0 \\\\ x^2 + y^2 - 2 X_m x - 2 Y_m y + (X_m^2 + Y_m^2 - r_m^2) = 0 \\end{cases}",
    "3.9": "D(X_D, Y_D) ~~~~~~~~ E(X_E, Y_E)",
    "3.10": "m_D = \\frac{Y_D - Y_p}{X_D - X_p} ~~~~~~~~ m_E = \\frac{Y_E - Y_p}{X_E - X_p}",
    "3.11": "y - Y_p = m_D (x - X_p) ~~~~~~~~ y - Y_p = m_E (x - X_p)"
};

const CM_passaggi_calcoli = {
"1.6": "y - 2 = m(x - 1)",
"1.7": "a_f x + b_f y + c_f = 0",
"1.8": "\\frac{|a_f X_c + b_f Y_c + c_f|}{\\sqrt{a_f^2 + b_f^2}}",
"1.9": "\\frac{|m*1 - 1* (-0.5) - m*1 + 2|}{\\sqrt{m^2 + 1}} = \\frac{|0.5 + 2|}{\\sqrt{m^2 + 1}} = \\frac{2.5}{\\sqrt{m^2 + 1}}",
"1.10": "\\frac{2.5}{\\sqrt{m^2 + 1}} = r = 1.118",
"1.11": "2.5 = 1.118 \\sqrt{m^2 + 1}",
"1.12": "2.5^2 = (1.118)^2 * (m^2 + 1)",
"1.13": "6.25 = 1.25 (m^2 + 1) \\Rightarrow 6.25 = 1.25 m^2 + 1.25 \\Rightarrow 6.25 - 1.25 = 1.25 m^2 \\Rightarrow 5 = 1.25 m^2 \\Rightarrow m^2 = 4 \\Rightarrow m = \\pm 2",
"1.14": "y - 2 = 2(x - 1) \\Rightarrow y = 2x, \\quad y - 2 = -2(x - 1) \\Rightarrow y = -2x + 4",

"2.4": "y - 2 = m(x - 1)",
"2.5": "x^2 + [m(x-1) + 2]^2 - 2x + (m(x-1) + 2) = 0",
"2.6": "x^2 + m^2(x-1)^2 + 4 m(x-1) + 4 - 2x + m(x-1) + 2 = 0 \\)<br><br>\\( x^2 + m^2(x^2 -2x +1) + 4 m x - 4 m +4 - 2x + m x - m + 2 = 0\\) <br><br> \\((1 + m^2)x^2 + (-2 m^2 + 5 m - 2)x + (m^2 -5 m + 6) = 0",

"2.7": "\\Delta = (-2 m^2 + 5 m -2)^2 - 4(1 + m^2)(m^2 -5 m + 6) = 0 \\)<br><br>\\(\\Delta = (4 m^4 +25 m^2 +4 -20 m^3 +8m^2 -20m) + (-4 -4m^2)(m^2 -5 m +6) = 0 \\)<br><br>\\(\\Delta = 4 m^4 +25 m^2 +4 -20 m^3 +8m^2 -20m -4m^2 + 20m -24 -4m^4 + 20 m^3 -24m^2 = 0 \\)<br><br>\\(\\Delta = 5m^2 - 20 = 0\\)<br><br>\\(5m^2 = 20\\)<br><br>\\(m^2 = 4 \\Rightarrow m = 2 ~or~ m = -2",
"2.8": "\\text{Risolvendo per } m \\Rightarrow m = 2, m = -2\\)<br><br>\\(y - 2 = 2(x-1) \\Rightarrow y = 2x\\)<br><br>\\(y - 2 = -2(x-1) \\Rightarrow y = -2x + 4",

"3.4": "M(X_m, Y_m) = ((X_c + X_p)/2, (Y_c + Y_p)/2) = ((1+1)/2, (-0.5 + 2)/2) = (1, 0.75)",
"3.5": "r_m = sqrt((X_c - X_p)^2 + (Y_c - Y_p)^2)/2 = sqrt((1-1)^2 + (-0.5-2)^2)/2 = sqrt(0 + 6.25)/2 = sqrt(6.25)/2 = 2.5/2 = 1.25",
"3.6": "(x-1)^2 + (y-0.75)^2 = 1.25^2 = 1.5625",
"3.7": "x^2 -2*1*x +1 + y^2 -2*0.75*y +0.5625 = 1.5625 \\Rightarrow x^2 -2x + y^2 -1.5 y +1.5625 -1.5625 = 0 \\Rightarrow x^2 + y^2 -2x -1.5 y = 0",
"3.8": "\\begin{cases} x^2 + y^2 -2x + y = 0 \\\\ x^2 + y^2 -2x -1.5y = 0 \\end{cases}\\)<br><br>\\(\\text{Sottraendo le due equazioni: } (x^2 + y^2 -2x + y) - (x^2 + y^2 -2x -1.5 y) = 0 \\Rightarrow y + 1.5y = 2.5y = 0 \\Rightarrow y = 0\\)<br><br>\\(\\text{Sostituendo in una delle due circonferenze: } x^2 + 0 -2x + 0 = 0 \\Rightarrow x(x-2)=0 \\Rightarrow x=0 \\text{ o } x=2",
"3.9": "D(0,0), E(2,0)",
"3.10": "m_D = (0-2)/(0-1) = -2/-1 = 2, ~~~ m_E = (0-2)/(2-1) = -2/1 = -2",
"3.11": "y - 2 = 2(x-1) \\Rightarrow y = 2x, ~~~ y - 2 = -2(x-1) \\Rightarrow y = -2x +4"
};

const CM_sistema_calcolo = {
    "1.01": "P(X_p, Y_p)",
    "1.2": "x^2 + y^2 + a x + b y + c = 0",
    "1.4": "C(X_c, Y_c) = \\left( -\\frac{a}{2}, -\\frac{b}{2} \\right)",
    "1.5": "r = \\sqrt{X_c^2 + Y_c^2 - c}",
    "1.6": "y - Y_p = m(x - X_p)",
    "1.7": "a_f x + b_f y + c_f = 0",
    "1.8": "\\frac{|a_f X_c + b_f Y_c + c_f|}{\\sqrt{a_f^2 + b_f^2}}",
    "1.9": "\\frac{|m X_c - Y_c - m X_p + Y_p|}{\\sqrt{m^2 + 1}}",
    "1.10": "\\frac{|m X_c - Y_c - m X_p + Y_p|}{\\sqrt{m^2 + 1}} = r",
    "1.11": "|m X_c - Y_c - m X_p + Y_p| = r \\sqrt{m^2 + 1}",
    "1.12": "|m(X_c - X_p) - (Y_c - Y_p)| = r \\sqrt{m^2 + 1}",
    "1.13": "m(X_c - X_p) - (Y_c - Y_p) = \\pm r \\sqrt{m^2 + 1}",
    "1.14": "y - Y_p = m(x - X_p)",
    
    "2.02": "x^2 + y^2 + a x + b y + c = 0",
    "2.03": "C(X_c, Y_c) = \\left( -\\frac{a}{2}, -\\frac{b}{2} \\right)",
    "2.04": "r = \\sqrt{X_c^2 + Y_c^2 - c}",

    "2.2": "x^2 + y^2 + a x + b y + c = 0",
    "2.3": "r^2 = X_c^2 + Y_c^2 - c \\geq 0",
    "2.4": "y - Y_p = m(x - X_p)",
    "2.5": "x^2 + \\left[ m(x - X_p) + Y_p \\right]^2 + a x + b \\left[ m(x - X_p) + Y_p \\right] + c = 0",
    "2.6": "(1 + m^2)x^2 + \\left[ a + b m - 2 m^2 X_p + 2 m Y_p \\right]x + \\left[ m^2 X_p^2 - 2 m X_p Y_p + Y_p^2 + b Y_p - a m X_p + c \\right] = 0",
    "2.7": "\\Delta = \\left[ a + b m - 2 m^2 X_p + 2 m Y_p \\right]^2 - 4 (1 + m^2) \\left[ m^2 X_p^2 - 2 m X_p Y_p + Y_p^2 + b Y_p - a m X_p + c \\right] = 0",
    "2.8": "y - Y_p = m(x - X_p)",

    "3.01": "P(X_p, Y_p)",
    "3.02": "x^2 + y^2 + a x + b y + c = 0",
    "3.03": "C(X_c, Y_c) = \\left( -\\frac{a}{2}, -\\frac{b}{2} \\right)",
    "3.04": "r = \\sqrt{X_c^2 + Y_c^2 - c}",

    "3.1": "P(X_p, Y_p)",
    "3.2": "x^2 + y^2 + a x + b y + c = 0",
    "3.3": "r^2 = X_c^2 + Y_c^2 - c \\geq 0",
    "3.4": "M(X_m, Y_m) = \\left( \\frac{X_c + X_p}{2}, \\frac{Y_c + Y_p}{2} \\right)",
    "3.5": "r_m = \\frac{\\sqrt{(X_c - X_p)^2 + (Y_c - Y_p)^2}}{2}",
    "3.6": "(x - X_m)^2 + (y - Y_m)^2 = r_m^2",
    "3.7": "x^2 + y^2 - 2 X_m x - 2 Y_m y + (X_m^2 + Y_m^2 - r_m^2) = 0",
    "3.8": "\\begin{cases} x^2 + y^2 + a x + b y + c = 0 \\\\ x^2 + y^2 - 2 X_m x - 2 Y_m y + (X_m^2 + Y_m^2 - r_m^2) = 0 \\end{cases}",
    "3.9": "D(X_D, Y_D) ~~~~~~~~ E(X_E, Y_E)",
    "3.10": "m_D = \\frac{Y_D - Y_p}{X_D - X_p} ~~~~~~~~ m_E = \\frac{Y_E - Y_p}{X_E - X_p}",
    "3.11": "y - Y_p = m_D (x - X_p) ~~~~~~~~ y - Y_p = m_E (x - X_p)"
};

function UpdateCalculationsAndGraph() {
    let interactiveDiv = document.getElementById("interactive");
    interactiveDiv.innerHTML = "";
    const bValues = document.getElementById("check_parametri_numeri").value != "P";
    let x_val = parseFloat(document.getElementById("xp_val").value);
    let y_val = parseFloat(document.getElementById("yp_val").value);
    let a_val = parseFloat(document.getElementById("a_val").value);
    let b_val = parseFloat(document.getElementById("b_val").value);
    let c_val = parseFloat(document.getElementById("c_val").value);

    if (document.getElementById("check_parametri_numeri").value == "E") {
        // Exercise 100 values
        x_val = 1.000;
        y_val = 2.000;
        a_val = -2.000;
        b_val = 1.000;
        c_val = 0.000;
    }

    //alert(bValues);

    // Validate inputs to prevent NaN
    if (isNaN(x_val) || isNaN(y_val) || isNaN(a_val) || isNaN(b_val) || isNaN(c_val)) {
        renderCalculation(interactiveDiv, false, "\\text{Inserire valori numerici validi per tutti i parametri}", true);
        return;
    }

    variableMap = {
        "X_p": x_val.toFixed(3),
        "Y_p": y_val.toFixed(3),
        "a": a_val.toFixed(3),
        "b": b_val.toFixed(3),
        "c": c_val.toFixed(3),
    };

    const method = document.getElementById("select_metodo").value;
    const methodFormulas = Object.keys(CM_sistema_calcolo).filter(id => id.startsWith(method + "."));

    // If checkbox is unchecked, show all formulas in order
    if (!bValues) {
        methodFormulas.forEach(id => {
            renderCalculation(interactiveDiv, false, CM_sistema_calcolo[id], true);
        });
        // Draw only axes if no numerical values
        window.svgCartesianUpdate({});
        return;
    }

    // Checkbox checked: numerical calculations with intermediate steps
    variableMap["X_c"] = (-a_val / 2).toFixed(3);
    variableMap["Y_c"] = (-b_val / 2).toFixed(3);
    variableMap["r2"] = (Math.pow(parseFloat(variableMap["X_c"]), 2) + Math.pow(parseFloat(variableMap["Y_c"]), 2) - c_val).toFixed(3);
    variableMap["r"] = Math.sqrt(Math.max(0, parseFloat(variableMap["r2"]))).toFixed(3);

    // Check if the circle exists
    if (variableMap["r2"] < 0) {
        renderCalculation(interactiveDiv, true, "r^2 = $X_c^2 + $Y_c^2 - $c = $r2", true);
        renderCalculation(interactiveDiv, true, "\\text{La circonferenza non esiste poiché } r^2 < 0", true);
        window.svgCartesianUpdate({});
        return;
    }

    // Check if point P is inside the circle
    const distancePC = Math.sqrt(Math.pow(parseFloat(variableMap["X_p"]) - parseFloat(variableMap["X_c"]), 2) + Math.pow(parseFloat(variableMap["Y_p"]) - parseFloat(variableMap["Y_c"]), 2)).toFixed(3);
    if (distancePC <= parseFloat(variableMap["r"])) {
        renderCalculation(interactiveDiv, true, "\\text{Il punto } P($X_p, $Y_p) \\text{ è interno o sulla circonferenza, nessuna tangente esiste}", true);
        window.svgCartesianUpdate({
            circle: { cx: parseFloat(variableMap["X_c"]), cy: parseFloat(variableMap["Y_c"]), r: parseFloat(variableMap["r"]) },
            point: { x: parseFloat(variableMap["X_p"]), y: parseFloat(variableMap["Y_p"]), label: "P" }
        });
        return;
    }

    //alert("asdas");

    switch (method) {
        case '1':
            // Step 0: Data
            renderCalculation(interactiveDiv, true, "P = ($X_p, $Y_p)", true);
            renderCalculation(interactiveDiv, true, "x^2 + y^2 + $a x + $b y + $c = 0", true);

            // Step 1: Center and radius
            renderCalculation(interactiveDiv, true, "C = \\left( -\\frac{$a}{2}, -\\frac{$b}{2} \\right) = ($X_c, $Y_c)", true);
            renderCalculation(interactiveDiv, true, "r^2 = $X_c^2 + $Y_c^2 - $c = $r2", true);
            renderCalculation(interactiveDiv, true, "r = \\sqrt{$X_c^2 + $Y_c^2 - $c} = $r", true);

            // Step 2: Bundle of lines
            renderCalculation(interactiveDiv, true, "y - $Y_p = m(x - $X_p)", true);

            // Step 3: Distance
            renderCalculation(interactiveDiv, true, "\\frac{|m ($X_c - $X_p) - ($Y_c - $Y_p)|}{\\sqrt{m^2 + 1}} = $r", true);

            // Step 4: Tangency condition
            renderCalculation(interactiveDiv, true, "|m ($X_c - $X_p) - ($Y_c - $Y_p)| = $r \\sqrt{m^2 + 1}", true);
            const A = parseFloat(variableMap["X_c"]) - parseFloat(variableMap["X_p"]);
            const B = parseFloat(variableMap["Y_c"]) - parseFloat(variableMap["Y_p"]);
            const r = parseFloat(variableMap["r"]);
            renderCalculation(interactiveDiv, true, "m ($X_c - $X_p) - ($Y_c - $Y_p) = \\pm $r \\sqrt{m^2 + 1}", true);

            // Solve m(X_c - X_p) - (Y_c - Y_p) = ± r √(m² + 1)
            const a = A * A - r * r;
            const b = -2 * A * B;
            const c = B * B - r * r;
            const delta = b * b - 4 * a * c;
            variableMap["delta"] = delta.toFixed(3);
            renderCalculation(interactiveDiv, true, "\\Delta = (-2 ($X_c - $X_p) ($Y_c - $Y_p))^2 - 4 (($X_c - $X_p)^2 - $r^2) (($Y_c - $Y_p)^2 - $r^2) = $delta", true);
            if (delta < 0) {
                renderCalculation(interactiveDiv, true, "\\text{Non esistono soluzioni reali per } m", true);
                window.svgCartesianUpdate({
                    circle: { cx: parseFloat(variableMap["X_c"]), cy: parseFloat(variableMap["Y_c"]), r: parseFloat(variableMap["r"]) },
                    point: { x: parseFloat(variableMap["X_p"]), y: parseFloat(variableMap["Y_p"]), label: "P" }
                });
                return;
            }
            const m1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(3);
            const m2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(3);
            variableMap["m_1"] = m1;
            variableMap["m_2"] = m2;

            // Step 5: Tangent line equations
            renderCalculation(interactiveDiv, true, "m_1 = $m_1 ~~~~~~~~ m_2 = $m_2", true);
            renderCalculation(interactiveDiv, true, "y - $Y_p = $m_1 (x - $X_p) ~~~~~~~~ y - $Y_p = $m_2 (x - $X_p)", true);
            renderCalculation(interactiveDiv, false, "\\text{E' possibile si verifichino errori di calcolo e di visualizzazione se una delle due rette è verticale:}", true);
            break;

        case '2':
            // Metodo 2: discriminante (rispetto alla quadratica in x), ma risolviamo i m in modo numerico (passo-passo come il metodo 1)
            // Mostriamo i passi 2.1 .. 2.8 usando le formule presenti in calculationMap e poi calcoliamo i coefficienti angolari m1,m2
            // Nota: per semplicità (e perché i metodi sono equivalenti) ricaviamo i m risolvendo la stessa equazione quadratica in m che
            // si ottiene isolando il valore assoluto nel Metodo 1 (così otteniamo due soluzioni reali o none).
            // Step 0: dati
            renderCalculation(interactiveDiv, true, "P = ($X_p, $Y_p)", true);
            renderCalculation(interactiveDiv, true, "x^2 + y^2 + $a x + $b y + $c = 0", true);
            // Step 1: esistenza circonferenza
            renderCalculation(interactiveDiv, true, "r^2 = $X_c^2 + $Y_c^2 - $c = $r2", true);

            // Step 2: fascio di rette
            renderCalculation(interactiveDiv, true, "y - $Y_p = m(x - $X_p)", true);

            // Step 3: sostituzione (mostriamo la forma generale della quadratica in x)
            renderCalculation(interactiveDiv, true, "x^2 + \\left[ m(x - $X_p) + $Y_p \\right]^2 + $a x + $b \\left[ m(x - $X_p) + $Y_p \\right] + $c = 0", true);
            renderCalculation(interactiveDiv, true, "(1 + m^2)x^2 + \\left[ a + b m - 2 m^2 X_p + 2 m Y_p \\right]x + \\left[ m^2 X_p^2 - 2 m X_p Y_p + Y_p^2 + b Y_p - a m X_p + c \\right] = 0", true);

            // Step 4: discriminante rispetto a x (imponiamo Delta = 0). Non espandiamo simbolicamente ulteriormente nel DOM,
            // ma calcoliamo numericamente le pendenze m sfruttando l'equivalenza con il metodo 1 (soluzione diretta per m).
            renderCalculation(interactiveDiv, true, "\\Delta = \\left[ a + b m - 2 m^2 X_p + 2 m Y_p \\right]^2 - 4 (1 + m^2) \\left[ m^2 X_p^2 - 2 m X_p Y_p + Y_p^2 + b Y_p - a m X_p + c \\right] = 0", true);

            // Calcoli numerici (ricaviamo i m con lo stesso approccio del metodo 1 — equivalente — per ottenere due soluzioni)
            const A_m = parseFloat(variableMap["X_c"]) - parseFloat(variableMap["X_p"]); // X_c - X_p
            const B_m = parseFloat(variableMap["Y_c"]) - parseFloat(variableMap["Y_p"]); // Y_c - Y_p
            const r_num = parseFloat(variableMap["r"]);

            // Coefficienti della quadratica in m derivata dal passo che porta a (m(A) - B) = ± r sqrt(m^2+1)
            const qa = A_m * A_m - r_num * r_num;
            const qb = -2 * A_m * B_m;
            const qc = B_m * B_m - r_num * r_num;
            const delta_m = qb * qb - 4 * qa * qc;
            variableMap["delta"] = delta_m.toFixed(3);
            renderCalculation(interactiveDiv, true, "\\Delta = (-2 ($X_c - $X_p) ($Y_c - $Y_p))^2 - 4 (($X_c - $X_p)^2 - $r^2) (($Y_c - $Y_p)^2 - $r^2) = $delta", true);

            if (delta_m < 0) {
                renderCalculation(interactiveDiv, true, "\\text{Non esistono soluzioni reali per } m", true);
                window.svgCartesianUpdate({
                    circle: { cx: parseFloat(variableMap["X_c"]), cy: parseFloat(variableMap["Y_c"]), r: parseFloat(variableMap["r"]) },
                    point: { x: parseFloat(variableMap["X_p"]), y: parseFloat(variableMap["Y_p"]), label: "P" }
                });
                return;
            }

            // evitiamo divisione per zero nel caso qa == 0 (gestione numerica)
            if (Math.abs(qa) < 1e-12) {
                // in questo caso la soluzione si riduce a equazione lineare qb*m + qc = 0
                const m_single = -qc / qb;
                variableMap["m_1"] = m_single.toFixed(3);
                variableMap["m_2"] = m_single.toFixed(3);
            } else {
                const msol1 = ((-qb + Math.sqrt(delta_m)) / (2 * qa));
                const msol2 = ((-qb - Math.sqrt(delta_m)) / (2 * qa));
                variableMap["m_1"] = msol1.toFixed(3);
                variableMap["m_2"] = msol2.toFixed(3);
            }

            // Step 5: equazioni delle rette tangenti (mostriamo le formule e i valori numerici)
            renderCalculation(interactiveDiv, true, "m_1 = $m_1 ~~~~~~~~ m_2 = $m_2", true);
            renderCalculation(interactiveDiv, true, "y - $Y_p = $m_1 (x - $X_p) ~~~~~~~~ y - $Y_p = $m_2 (x - $X_p)", true);
            renderCalculation(interactiveDiv, false, "\\text{E' possibile si verifichino errori di calcolo e di visualizzazione se una delle due rette è verticale:}", true);

            break;


      case '3':
        // Metodo 3: doppia circonferenza — calcoli passo-passo, usiamo il metodo classico per intersezione di due circonferenze
        // Step 0: dati
        renderCalculation(interactiveDiv, true, "P = ($X_p, $Y_p)", true);
        renderCalculation(interactiveDiv, true, "x^2 + y^2 + $a x + $b y + $c = 0", true);
        // Step 1: esistenza circonferenza
        renderCalculation(interactiveDiv, true, "r^2 = $X_c^2 + $Y_c^2 - $c = $r2", true);

        // Step 2: costruzione circonferenza ausiliaria (centro M e r_m)
        variableMap["X_m"] = ((parseFloat(variableMap["X_c"]) + parseFloat(variableMap["X_p"])) / 2).toFixed(3);
        variableMap["Y_m"] = ((parseFloat(variableMap["Y_c"]) + parseFloat(variableMap["Y_p"])) / 2).toFixed(3);
        const dxCM = parseFloat(variableMap["X_c"]) - parseFloat(variableMap["X_p"]);
        const dyCM = parseFloat(variableMap["Y_c"]) - parseFloat(variableMap["Y_p"]);
        variableMap["r_m"] = (Math.sqrt(dxCM * dxCM + dyCM * dyCM) / 2).toFixed(3);
        renderCalculation(interactiveDiv, true, "M(X_m, Y_m) = \\left( \\frac{$X_c + $X_p}{2}, \\frac{$Y_c + $Y_p}{2} \\right) = ($X_m, $Y_m)", true);
        renderCalculation(interactiveDiv, true, "r_m = \\frac{\\sqrt{($X_c - $X_p)^2 + ($Y_c - $Y_p)^2}}{2} = $r_m", true);
        renderCalculation(interactiveDiv, true, "(x - $X_m)^2 + (y - $Y_m)^2 = $r_m^2", true);
        // equazione generale ausiliaria
        const Xm = parseFloat(variableMap["X_m"]), Ym = parseFloat(variableMap["Y_m"]);
        const rm = parseFloat(variableMap["r_m"]);
        const c_m_val = (Xm * Xm + Ym * Ym - rm * rm).toFixed(3);
        variableMap["c_m"] = c_m_val;
        renderCalculation(interactiveDiv, true, "x^2 + y^2 - 2 ($X_m) x - 2 ($Y_m) y + ($X_m^2 + $Y_m^2 - $r_m^2) = 0", true);

        // Step 3: punti di intersezione fra la circonferenza originale (C,r) e ausiliaria (M, r_m)
        renderCalculation(interactiveDiv, true, "\\begin{cases} x^2 + y^2 + $a x + $b y + $c = 0 \\\\ x^2 + y^2 - 2 ($X_m) x - 2 ($Y_m) y + $c_m = 0 \\end{cases}", true);

        // Calcolo delle intersezioni con la formula standard per intersezione di due circonferenze
        const Cx = parseFloat(variableMap["X_c"]), Cy = parseFloat(variableMap["Y_c"]), Rc = parseFloat(variableMap["r"]);
        const Mx = Xm, My = Ym, Rm = rm;
        const dx = Mx - Cx;
        const dy = My - Cy;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < 1e-12) {
            renderCalculation(interactiveDiv, true, "\\text{I centri coincidono: intersezioni non determinate}", true);
            window.svgCartesianUpdate({
                circle: { cx: Cx, cy: Cy, r: Rc },
                auxCircle: { cx: Mx, cy: My, r: Rm },
                point: { x: parseFloat(variableMap["X_p"]), y: parseFloat(variableMap["Y_p"]), label: "P" }
            });
            return;
        }

        // controllo posizione relativa
        if (d > (Rc + Rm) + 1e-9 || d < Math.abs(Rc - Rm) - 1e-9) {
            renderCalculation(interactiveDiv, true, "\\text{Non esistono punti di intersezione reali fra le due circonferenze}", true);
            window.svgCartesianUpdate({
                circle: { cx: Cx, cy: Cy, r: Rc },
                auxCircle: { cx: Mx, cy: My, r: Rm },
                point: { x: parseFloat(variableMap["X_p"]), y: parseFloat(variableMap["Y_p"]), label: "P" }
            });
            return;
        }

        // a = (Rc^2 - Rm^2 + d^2) / (2 d)
        const a_int = (Rc * Rc - Rm * Rm + d * d) / (2 * d);
        // h^2 = Rc^2 - a^2
        const h_sq = Rc * Rc - a_int * a_int;
        if (h_sq < -1e-9) {
            renderCalculation(interactiveDiv, true, "\\text{Errore numerico nel calcolo delle intersezioni (h^2 < 0)}", true);
            return;
        }
        const h = Math.sqrt(Math.max(0, h_sq));

        // punto P2 = C + a * (M - C) / d
        const px2 = Cx + (a_int * (dx)) / d;
        const py2 = Cy + (a_int * (dy)) / d;

        // intersezioni:
        // x3 = px2 ± h * ( - (My - Cy) / d )
        // y3 = py2 ± h * ( (Mx - Cx) / d )
        const rx = - (My - Cy) / d;
        const ry = (Mx - Cx) / d;
        const X_D_num = (px2 + h * rx).toFixed(3);
        const Y_D_num = (py2 + h * ry).toFixed(3);
        const X_E_num = (px2 - h * rx).toFixed(3);
        const Y_E_num = (py2 - h * ry).toFixed(3);
        variableMap["X_D"] = X_D_num;
        variableMap["Y_D"] = Y_D_num;
        variableMap["X_E"] = X_E_num;
        variableMap["Y_E"] = Y_E_num;
        renderCalculation(interactiveDiv, true, "D($X_D, $Y_D) ~~~~~~~~ E($X_E, $Y_E)", true);

        // Step 4: determinazione delle rette tangenti: pendenze e equazioni
        const dxD = parseFloat(X_D_num) - parseFloat(variableMap["X_p"]);
        const dxE = parseFloat(X_E_num) - parseFloat(variableMap["X_p"]);
        if (Math.abs(dxD) < 1e-9 || Math.abs(dxE) < 1e-9) {
            // gestiamo rette verticali separatamente: se dx ~= 0 la retta è x = const
            if (Math.abs(dxD) < 1e-9) {
                variableMap["m_D"] = "verticale";
            } else {
                variableMap["m_D"] = ((parseFloat(Y_D_num) - parseFloat(variableMap["Y_p"])) / dxD).toFixed(3);
            }
            if (Math.abs(dxE) < 1e-9) {
                variableMap["m_E"] = "verticale";
            } else {
                variableMap["m_E"] = ((parseFloat(Y_E_num) - parseFloat(variableMap["Y_p"])) / dxE).toFixed(3);
            }
        } else {
            variableMap["m_D"] = ((parseFloat(Y_D_num) - parseFloat(variableMap["Y_p"])) / dxD).toFixed(3);
            variableMap["m_E"] = ((parseFloat(Y_E_num) - parseFloat(variableMap["Y_p"])) / dxE).toFixed(3);
        }

        // Mostriamo i risultati (pendenze e equazioni)
        renderCalculation(interactiveDiv, true, "m_D = \\frac{$Y_D - $Y_p}{$X_D - $X_p} = $m_D ~~~~~~~~ m_E = \\frac{$Y_E - $Y_p}{$X_E - $X_p} = $m_E", true);

        // Equazioni delle rette (gestiamo il caso "verticale")
        if (variableMap["m_D"] === "verticale" || variableMap["m_E"] === "verticale") {
            let eqs = "";
            if (variableMap["m_D"] === "verticale") {
                eqs += "x = " + parseFloat(variableMap["X_D"]).toFixed(3);
            } else {
                eqs += "y - $Y_p = $m_D (x - $X_p)";
            }
            eqs += " ~~~~~~~~ ";
            if (variableMap["m_E"] === "verticale") {
                eqs += "x = " + parseFloat(variableMap["X_E"]).toFixed(3);
            } else {
                eqs += "y - $Y_p = $m_E (x - $X_p)";
            }
            renderCalculation(interactiveDiv, true, eqs, true);
        } else {
            renderCalculation(interactiveDiv, true, "y - $Y_p = $m_D (x - $X_p) ~~~~~~~~ y - $Y_p = $m_E (x - $X_p)", true);
        }
        renderCalculation(interactiveDiv, false, "\\text{E' possibile si verifichino errori di calcolo e di visualizzazione se una delle due rette è verticale:}", true);

        // Aggiorna grafico con cerchio, circonferenza ausiliaria, punti e tangenti
        const scene3 = {
            circle: { cx: Cx, cy: Cy, r: Rc },
            auxCircle: { cx: Mx, cy: My, r: Rm },
            point: { x: parseFloat(variableMap["X_p"]), y: parseFloat(variableMap["Y_p"]), label: "P" }
        };
        // line1 / line2 se non verticali
        if (variableMap["m_D"] !== "verticale" && variableMap["m_E"] !== "verticale") {
            scene3.line1 = { m: parseFloat(variableMap["m_D"]), b: (parseFloat(variableMap["Y_p"]) - parseFloat(variableMap["m_D"]) * parseFloat(variableMap["X_p"])) };
            scene3.line2 = { m: parseFloat(variableMap["m_E"]), b: (parseFloat(variableMap["Y_p"]) - parseFloat(variableMap["m_E"]) * parseFloat(variableMap["X_p"])) };
        } else {
            // for verticals send x positions for drawing (svgCartesianUpdate può gestirle se implementata)
            if (variableMap["m_D"] === "verticale") scene3.vline1 = { x: parseFloat(variableMap["X_D"]) };
            if (variableMap["m_E"] === "verticale") scene3.vline2 = { x: parseFloat(variableMap["X_E"]) };
        }
        window.svgCartesianUpdate(scene3);

        break;

    }

// Update the graph
const scene = {
    circle: {
        cx: parseFloat(variableMap["X_c"]),
        cy: parseFloat(variableMap["Y_c"]),
        r: parseFloat(variableMap["r"])
    },
    point: {
        x: parseFloat(variableMap["X_p"]),
        y: parseFloat(variableMap["Y_p"]),
        label: "P"
    }
};

// Metodo 1 o 2 → rette con m1, m2
if (variableMap["m_1"] && variableMap["m_2"]) {
    scene.line1 = {
        m: parseFloat(variableMap["m_1"]),
        b: parseFloat(variableMap["Y_p"]) - parseFloat(variableMap["m_1"]) * parseFloat(variableMap["X_p"])
    };
    scene.line2 = {
        m: parseFloat(variableMap["m_2"]),
        b: parseFloat(variableMap["Y_p"]) - parseFloat(variableMap["m_2"]) * parseFloat(variableMap["X_p"])
    };
}

// Metodo 3 → rette tangenti da D ed E + circonferenza ausiliaria
else if (variableMap["m_D"] && variableMap["m_E"]) {
    // Aggiungi circonferenza ausiliaria (stessa della principale se non definita diversamente)
    scene.auxCircle = {
        cx: parseFloat(variableMap["X_c"]),
        cy: parseFloat(variableMap["Y_c"]),
        r: parseFloat(variableMap["r"])
    };

    // Gestione rette (verticali o no)
    if (variableMap["m_D"] === "verticale") {
        scene.vline1 = { x: parseFloat(variableMap["X_D"]) };
    } else {
        scene.line1 = {
            m: parseFloat(variableMap["m_D"]),
            b: parseFloat(variableMap["Y_p"]) - parseFloat(variableMap["m_D"]) * parseFloat(variableMap["X_p"])
        };
    }

    if (variableMap["m_E"] === "verticale") {
        scene.vline2 = { x: parseFloat(variableMap["X_E"]) };
    } else {
        scene.line2 = {
            m: parseFloat(variableMap["m_E"]),
            b: parseFloat(variableMap["Y_p"]) - parseFloat(variableMap["m_E"]) * parseFloat(variableMap["X_p"])
        };
    }

    // Punti di tangenza D ed E
    if (variableMap["X_D"] && variableMap["Y_D"]) {
        scene.pointD = {
            x: parseFloat(variableMap["X_D"]),
            y: parseFloat(variableMap["Y_D"]),
            label: "D"
        };
    }
    if (variableMap["X_E"] && variableMap["Y_E"]) {
        scene.pointE = {
            x: parseFloat(variableMap["X_E"]),
            y: parseFloat(variableMap["Y_E"]),
            label: "E"
        };
    }
}

// Aggiorna la scena SVG
window.svgCartesianUpdate(scene);

}

function renderCalculation(element, useValues, latexStr, add = false) {
    // Replace $Identifier
    const processed = latexStr.replace(/\$([A-Za-z0-9_]+)/g, (match, p1) => {
        if (useValues && variableMap[p1] !== undefined) {
            return variableMap[p1];
        } else {
            return p1;
        }
    });

    // Insert processed into the div
    if (!add) {
        element.innerHTML = `\\(${processed}\\)`;
    } else {
        element.innerHTML += `\\(${processed}\\)<br><br>`;
    }

    // Render with MathJax
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([element]).catch(err => console.error("MathJax error:", err));
    }
}

function aggiornaParametriOCalcoli ()
{
    const parametri = document.querySelector('input[name="rd_passaggi"]:checked').value == "Parametri";

    if (parametri) {
        // Render static calculations
        Object.entries(CM_passaggi_formule).forEach(([id, latex]) => {
            const el = document.getElementById(id);
            if (!el) {
                console.log(`Elemento con id ${id} non trovato`);
            } else if (!latex) {
                el.innerHTML = '';
            } else {
                renderCalculation(el, false, latex);
            }
        });
    } else {
            Object.entries(CM_passaggi_calcoli).forEach(([id, latex]) => {
            const el = document.getElementById(id);
            if (!el) {
                console.log(`Elemento con id ${id} non trovato`);
            } else if (!latex) {
                el.innerHTML = '';
            } else {
                renderCalculation(el, false, latex);
            }
        });
    }
}

window.onload = () => {
    const selectMetodo = document.getElementById("select_metodo");
    const checkParametri = document.getElementById("check_parametri_numeri");
    const parametriContainer = document.getElementById("parametri_container");
    const formuleOCalcoliNeiMetodi = document.getElementById("formule_o_calcoli_nei_metodi");
    const inputs = parametriContainer.querySelectorAll("input[type='number']");
    parametriContainer.style.visibility = checkParametri.value == "I" ? "visible" : "hidden";
    parametriContainer.style.display = "block";

    selectMetodo.addEventListener("change", UpdateCalculationsAndGraph);
    checkParametri.addEventListener("change", () => {
        parametriContainer.style.visibility = checkParametri.value == "I" ? "visible" : "hidden";
        UpdateCalculationsAndGraph();
    });
    inputs.forEach(inp => inp.addEventListener("input", UpdateCalculationsAndGraph));
    UpdateCalculationsAndGraph();
    aggiornaParametriOCalcoli();
};