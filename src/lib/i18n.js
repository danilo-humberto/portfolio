import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import english from '../locale/en-us.json'
import portuguese from '../locale/pt-br.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            ...english
        },
        pt: {
            ...portuguese
        }
    },
    lng: 'pt-BR'
})