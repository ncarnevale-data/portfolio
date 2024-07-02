import i18next from "i18next"

export const getTranslatedText = (textObj: { [key: string]: string }) => {
    const currentLanguage = i18next.language
    return textObj[currentLanguage] || textObj.es
}

export const getTranslatedList = (textListObj: { [key: string]: string[] }) => {
    const currentLanguage = i18next.language
    return textListObj[currentLanguage] || textListObj.es
}