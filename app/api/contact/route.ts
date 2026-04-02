import { z } from "zod";
import { resend } from "@/lib/resend";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional().default(""),
  country: z.string().min(1, "Country is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const contactEmail = process.env.CONTACT_EMAIL ?? "owner@paytrinity.com";

    await resend.emails.send({
      from: "PayTrinity Contact <onboarding@resend.dev>",
      to: contactEmail,
      subject: `New Inquiry: ${data.service} — ${data.name}`,
      replyTo: data.email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || "N/A"}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { success: false, error: error.issues[0].message },
        { status: 400 },
      );
    }

    return Response.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
