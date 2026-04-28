import { WHATSAPP_PHONE_NUMBER } from "@/presentation/config/contact";

export function buildWhatsAppUrl(message: string): string {
  const params = new URLSearchParams({ text: message });

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?${params.toString()}`;
}
