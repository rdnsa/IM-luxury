const IDR_FORMATTER = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0
});

export function formatCurrency(value: number): string {
  return IDR_FORMATTER.format(value);
}
