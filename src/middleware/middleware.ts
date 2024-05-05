import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isFloat32Array } from "util/types";

export function middleware(request: NextRequest) {
    const isLogin = false;
    if (!isLogin) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path"]
}