let iframes = await page.frames();
console.log('----------------- Número de iframes', iframes.length);
iframes.forEach(element => {
    console.log('NOMBRES', element._url);
});

//FRAME PRINCIPAL, ES DECIR, LA PÁGINA WEB
const frame = await page.mainFrame();
console.log('++++++++++++++++++++++', frame._url);
// PRIMER IFRAME, ES DECIR, IFRAME PADRE
const childFrame = await page.mainFrame().childFrames()[0];
console.log('++++++++++++++++++++++', childFrame._url);
// FRAMES HIJOS
const subChildFrame = await childFrame.childFrames()[0];
console.log('++++++++++++++++++++++', subChildFrame._url);

/**
 * Si no apareciesen los iframes, habría que añadir a la configuración del launch del navegador
 * las siguientes opciones en args
 */
/*
 launch: {
    headless: false,
    // slowMo: 1000,
    devtools: false,
    args: [
        "--disable-web-security",
        "--disable-features=IsolateOrigins, site-per-process"
      ],
},
*/