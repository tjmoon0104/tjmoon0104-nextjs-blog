import { NextResponse } from 'next/server'

export const middleware = (req, ev) => {
  const { pathname } = req.nextUrl
  if (pathname == '/') {
    return NextResponse.redirect('/blog')
  }
  return NextResponse.next()
}
