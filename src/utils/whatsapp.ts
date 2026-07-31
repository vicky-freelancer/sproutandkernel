import { SITE_CONFIG } from "../config/siteConfig";
import { Product } from "../types";

export interface OrderWhatsAppParams {
  product: Product;
  quantity: number;
  selectedWeight?: string;
  unitPrice?: number;
  customNote?: string;
}

/**
 * Helper to log simulated Google Analytics / Tag Manager event when user clicks Buy Now
 */
export function trackWhatsAppClick(productName: string, totalPrice: number, quantity: number) {
  try {
    // 1. Console log for developer verification
    console.log("[Analytics Track] WhatsApp Buy Now Clicked:", {
      event: "whatsapp_order_click",
      product_name: productName,
      total_price: totalPrice,
      quantity: quantity,
      timestamp: new Date().toISOString()
    });

    // 2. Push to window.dataLayer if GTM / GA is present
    if (typeof window !== "undefined" && (window as unknown as { dataLayer: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: "whatsapp_buy_now",
        ecommerce: {
          currency: SITE_CONFIG.currencyCode,
          value: totalPrice,
          items: [
            {
              item_name: productName,
              quantity: quantity,
              price: totalPrice / quantity
            }
          ]
        }
      });
    }
  } catch (err) {
    console.error("Error tracking GA event", err);
  }
}

/**
 * Helper to construct absolute image URL for WhatsApp preview message reference
 */
export function getAbsoluteImageUrl(imagePath: string): string {
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  const baseUrl = typeof window !== "undefined" ? window.location.origin : SITE_CONFIG.siteUrl;
  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Builds the WhatsApp order link for a product with quantity and details
 */
export function generateWhatsAppOrderUrl({
  product,
  quantity,
  selectedWeight,
  unitPrice,
  customNote
}: OrderWhatsAppParams): string {
  const finalWeight = selectedWeight || product.weight;
  const price = unitPrice || product.price;
  const total = price * quantity;
  const absoluteImageUrl = getAbsoluteImageUrl(product.image);

  let message = `Hello ${SITE_CONFIG.brandName},\n\n`;
  message += `I would like to order the following product:\n\n`;
  message += `📦 *Product:* ${product.name}\n`;
  message += `⚖️ *Weight/Variant:* ${finalWeight}\n`;
  message += `🔢 *Quantity:* ${quantity}\n`;
  message += `💰 *Unit Price:* ${SITE_CONFIG.currencySymbol}${price}\n`;
  message += `💵 *Total Amount:* ${SITE_CONFIG.currencySymbol}${total}\n\n`;

  if (product.isCombo && product.comboItems && product.comboItems.length > 0) {
    message += `📋 *Included Soups in Combo:*\n`;
    product.comboItems.forEach((item) => {
      message += ` • ${item}\n`;
    });
    message += `\n`;
  }

  message += `🖼️ *Product Reference Image:*\n${absoluteImageUrl}\n\n`;

  if (customNote && customNote.trim().length > 0) {
    message += `📝 *Note:* ${customNote.trim()}\n\n`;
  }

  message += `Please confirm product availability, shipping charges, and payment options. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Builds general WhatsApp inquiry link
 */
export function generateWhatsAppGeneralInquiryUrl(customQuery?: string): string {
  let message = `Hello ${SITE_CONFIG.brandName},\n\n`;
  if (customQuery) {
    message += `${customQuery}\n\n`;
  } else {
    message += `I would like to inquire about your herbal soup powder products, availability, and delivery options.\n\n`;
  }
  message += `Could you please assist me?`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedMessage}`;
}
