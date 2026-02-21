/*
import type { Request, Response } from "express";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendContactEmailHandler(req: Request, res: Response) {
  try {
    const data = req.body; // validate in real code

    // IMPORTANT:
    // "from" MUST be a verified Sender in SendGrid (Single Sender or Domain Authentication).
    const from = {
      email: process.env.SENDGRID_FROM_EMAIL!, // e.g. "noreply@renomati.be"
      name: "RenoMati Website",
    };

    const to = process.env.CONTACT_TO_EMAIL!; // where you receive requests

    const replyTo = {
      email: data?.personal?.email,
      name: `${data?.personal?.firstName ?? ""} ${data?.personal?.lastName ?? ""}`.trim(),
    };

    const subject = `Nieuwe aanvraag via website - ${replyTo.name || "Onbekend"}`;

    const text = [
      `Naam: ${replyTo.name}`,
      `Email: ${data?.personal?.email}`,
      `Telefoon: ${data?.personal?.phone}`,
      ``,
      `Adres: ${data?.address?.street}, ${data?.address?.postalCode} ${data?.address?.city}, ${data?.address?.country}`,
      ``,
      `Type werken: ${(data?.work?.types || []).join(", ")}`,
      `Oppervlakte: ${data?.work?.area ?? ""}`,
      ``,
      `Beschrijving:`,
      `${data?.work?.description ?? ""}`,
      ``,
      `GDPR consent: ${data?.consent ? "yes" : "no"}`
    ].join("\n");

    await sgMail.send({
      to,
      from,
      replyTo: replyTo.email ? replyTo : undefined,
      subject,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("SendGrid send failed:", err?.response?.body || err);
    return res.status(500).json({ ok: false, error: "Email sending failed" });
  }
}
*/
