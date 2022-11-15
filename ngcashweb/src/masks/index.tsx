import { ValuesOfCorrectTypeRule } from "graphql";

//mascara cpf
export function cpfMask(cpf: string) {
    cpf = cpf.replace(/\D+/g, "");
    cpf = cpf.replace(/(\d{3})(\d{3})/g, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{3})/g, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{2})/g, "$1-$2");
    return cpf;
}

//mascara cartão
export function cardMask(cpf: string) {
    cpf = cpf.replace(/\D+/g, "");
    cpf = cpf.replace(/(\d{4})(\d{4})/g, "$1 $2");
    cpf = cpf.replace(/(\d{4})(\d{4})/g, "$1 $2");
    cpf = cpf.replace(/(\d{4})(\d{4})/g, "$1 $2");
    cpf = cpf.replace(/(\d{4})(\d{4})/g, "$1 $2");
    return cpf;
}

//mascara cep
export function cepMask(cep: string) {
    cep = cep.replace(/\D+/g, "");
    cep = cep.replace(/(\d{5})(\d{3})/g, "$1-$2");
    return cep;
}

//mascara bankAcount
export function bankAcountMask(account: string) {
    account = account.replace(/\D+/g, "");
    account = account.replace(/(\d{5})(\d{1})/g, "$1-$2");
    return account;
}

//mascara uf
export function ufMask(uf: string) {
    uf = uf.replace(/[0-9]/, "");
    uf = uf.toUpperCase();
    return uf;
}

//mascara uf
export function numberMask(number: string) {
    number = number.replace(/\D+/g, "");
    return number;
}

//mascara celular
export function telMask(tel: string) {
    tel = tel.replace(/\D+/g, "");
    tel = tel.replace(/(\d{2})(\d{5})/g, "($1) $2");
    tel = tel.replace(/(\d{5})(\d{4})/g, "$1-$2");
    return tel;
}

export function timeMask(time: string) {
    time = time.replace(/[^\dh:]/, "");
    time = time.replace(/^[^0-2]/, "");
    time = time.replace(/^([2-9])[4-9]/, "$1");
    time = time.replace(/^\d[:h]/, "");
    time = time.replace(/^([01][0-9])[^:h]/, "$1:");
    time = time.replace(/^(2[0-3])[^:h]/, "$1:");
    time = time.replace(/^(\d{2}[:h])[^0-5]/, "$1");
    time = time.replace(/^(\d{2}h)./, "$1:");
    time = time.replace(/^(\d{2}:[0-5])[^0-9]/, "$1");
    time = time.replace(/^(\d{2}:\d[0-9])./, "$1");
    return time;
}

// text currency format
export const money = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
});
