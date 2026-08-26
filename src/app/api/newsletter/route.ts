import { NextResponse } from "next/server";

// TODO: conectar a um provedor de e-mail real (Buttondown, Mailchimp, Resend
// Audiences etc.) antes de publicar. Hoje este endpoint só valida o formato
// do e-mail e responde — ninguém é cadastrado em lugar nenhum ainda.
//
// Exemplo de integração real com Buttondown:
//
// const res = await fetch("https://api.buttondown.email/v1/subscribers", {
//   method: "POST",
//   headers: {
//     Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ email }),
// });

export async function POST(request: Request) {
  const { email } = (await request.json()) as { email?: string };

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  return NextResponse.json(
    { error: "Newsletter ainda não conectada a um provedor de e-mail — ver TODO em route.ts." },
    { status: 501 }
  );
}
