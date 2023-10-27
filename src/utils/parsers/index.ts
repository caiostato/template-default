export const safeParseFloat = (
  value: number | string | null | undefined
): number | null => {
  if (typeof value === "number") {
    return value; // Se já for um número, retorne-o diretamente
  }

  if (!value) {
    return 0;
  }

  if (value == null || `${value}`.trim() === "") {
    return 0; // Retorna null se for nulo, vazio ou somente espaços em branco
  }

  const parsedValue = parseFloat(value);

  if (isNaN(parsedValue)) {
    return 0; // Retorna null se a conversão falhar (por exemplo, "abc")
  }

  return parsedValue; // Retorna o valor convertido
};
