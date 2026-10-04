import { NextResponse } from "next/server";

const required = ["name", "email", "message"] as const;

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  for (const field of required) {
    const value = payload[field];
    if (typeof value !== "string" || value.trim().length === 0) {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
    }
  }

  const email = String(payload.email).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  /*
    Email delivery is not wired up on this deployment. The submission is accepted
    but reported as undelivered, so the form can tell the truth instead of
    pretending the message reached us.
  */
  return NextResponse.json(
    { delivered: false, error: "Email delivery is not configured." },
    { status: 503 },
  );
}