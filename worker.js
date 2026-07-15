import { createRequestHandler } from '@remix-run/cloudflare'
import * as build from './build/server/index.js'

const handleRequest = createRequestHandler(build, 'production')

export default {
  fetch(request, env, ctx) {
    return handleRequest(request, { env, ctx })
  },
}
