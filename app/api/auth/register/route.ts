import { NextRequest, NextResponse } from "next/server";
import { signupValidationScheam } from "@/app/schema/signupValidation";
import { cookies } from "next/headers";

export async function GET() {
    const res = await fetch('https://667d9f07297972455f65d4b4.mockapi.io/users');
    return NextResponse.json(await res.json());
}

export async function POST(request: NextRequest) {
    const cookie = cookies();
    const body = await request.json();
    const validated = signupValidationScheam.safeParse(body);
    if (!validated.success) return NextResponse.json(validated.error.errors, { status: 400 })

    const res = await fetch('https://667d9f07297972455f65d4b4.mockapi.io/users',
        {
            method: 'POST', body: JSON.stringify(body),
            headers: { 'content-type': 'application/json' },
        });

    const newUser = await res.json();

    cookie.set({
        name: "loggedUser",
        value: newUser.username,
        httpOnly: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 365 * 1000,
        expires: new Date(Date.now() + 60 * 60 * 24 * 365 * 1000),
    });

    return NextResponse.json(newUser);
}