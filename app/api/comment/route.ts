import { NextRequest, NextResponse } from "next/server";
import { commentSchema } from "@/app/schema/commentSchema";

export async function GET() {
    const res = await fetch('https://667d9f07297972455f65d4b4.mockapi.io/comments');
    return NextResponse.json(await res.json());
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validated = commentSchema.safeParse(body);
    if (!validated.success) return NextResponse.json(validated.error.errors, { status: 400 })

    const res = await fetch('https://667d9f07297972455f65d4b4.mockapi.io/comments',
        {
            method: 'POST', body: JSON.stringify(body),
            headers: { 'content-type': 'application/json' },
        });

    const newComment = await res.json();

    return NextResponse.json(newComment);
}