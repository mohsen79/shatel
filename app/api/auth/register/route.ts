import { NextRequest, NextResponse } from "next/server";
import { signupValidationScheam } from "@/app/schema/signupValidation";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validated = signupValidationScheam.safeParse(body);
    if (!validated.success) return NextResponse.json(validated.error.errors, { status: 400 })

    return NextResponse.json(body);
}