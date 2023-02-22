import { AxiosError } from "axios";

type ApiErrors = {
  message: string;
  code: string;
};

export type ChangeError = {
  message: ApiErrors;
};

export const getAxiosErrorCode = (error: AxiosError<ChangeError>) => {
  if (!error.isAxiosError) return "";
  return error.response?.data?.message?.code || "UnknownError";
};








export function highCognitiveComplexity() {
  let something;
  if (something) return something;

  const seller: any = {};

  const profile = { thumb: "", officePhone: "" };
  const { thumb, officePhone } = profile || {};

  const birthdate = seller?.birthdate ? "" : null;

  const {
    zipCode = "",
    street = "",
    number = "",
    neighborhood = "",
    city = "",
    state = "",
    complement = "",
  }: Record<any, any> = {};

  const testId = "";
  const type = seller?.type || null || "";
  const name = seller?.name || null || "";
  const testB = seller?.testB || null || "";
  const testC = seller?.testC || null || "";
  const testData = seller?.testData || null || "";
  const email = seller?.email || null || "";
  const phone = seller?.phone || officePhone || "";
  const cpf = seller?.cpf || null || "";
  const businessName = seller?.business_name || "";
  const businessDescription = seller?.business_description || "";
  const businessOpeningDate = seller?.business_opening_date ? "" : null;
  const businessCnpj = seller?.business_cnpj || "";

  return {
    test,
    testId,
    type,
    initialPicture: thumb || "",
    picture: "",
    name,
    testB,
    testC,
    testData,
    email,
    cpf,
    birthdate,
    phone,
    zipCode,
    street,
    number,
    neighborhood,
    city,
    state,
    complement,
    businessName,
    businessDescription,
    businessOpeningDate,
    businessCnpj,
    identity: undefined,
    residence: undefined,
    cnpj: undefined,
  };
}
