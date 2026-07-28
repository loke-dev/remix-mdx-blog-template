import { renderToReadableStream } from 'react-dom/server'
import {
  ServerRouter,
  type EntryContext,
  type RouterContextProvider,
} from 'react-router'

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  // Kept for the framework handler signature.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loadContext: RouterContextProvider
) {
  const body = await renderToReadableStream(
    <ServerRouter context={routerContext} url={request.url} />,
    {}
  )

  responseHeaders.set('Content-Type', 'text/html')
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  })
}
