addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
    const { parse } = wasm_bindgen;
    await wasm_bindgen(wasm)
    const output = parse()
    let res = new Response(output, {status: 200})
    res.headers.set("Content-type", "text/html")
    return res
}
