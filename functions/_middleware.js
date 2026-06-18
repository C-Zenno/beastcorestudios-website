export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Regional mirror: beastcorestudios.ca → beastcorestudios.com
  if (url.hostname === "beastcorestudios.ca" || url.hostname === "www.beastcorestudios.ca") {
    url.hostname = "beastcorestudios.com";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
