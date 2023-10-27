import { safeParseFloat } from "../parsers";

export const formatCurrency = (
  value: number | string,
  withSymbol: boolean = false
): string => {
  const parsedValue = safeParseFloat(value);

  // Verifica se o valor é válido antes de formatar
  if (!isNaN(parsedValue)) {
    if (withSymbol) {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(parsedValue);
    } else {
      return new Intl.NumberFormat("pt-BR", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(parsedValue);
    }
  } else {
    console.log("value invalid ", value);
    return "0,00"; // Ou outra mensagem de erro adequada
  }
};

export const formatPercentage = (value: number | string): string => {
  const parsedValue = safeParseFloat(value) / 100;

  // Verifica se o valor é válido antes de formatar
  if (!isNaN(parsedValue)) {
    const option = {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };

    const formatedValue = new Intl.NumberFormat("pt-BR", option).format(
      parsedValue
    );

    console.log("compare ", { value, formatedValue });

    return formatedValue;
  } else {
    return "0"; // Ou outra mensagem de erro adequada
  }
};

export const arrayOneToFormated = (property: any) => {
  return property && property.length > 0
    ? formatCurrency(property[0].valor)
    : "0,00";
};
