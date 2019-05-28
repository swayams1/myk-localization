export class Locale {
    locale: number
    value: string
    constructor(locale: number, value: string) {
        this.locale = locale
        this.value = value
    }
}

export class Term {
    name: string
    locales: Locale[]
    constructor(name: string, locales: Locale[]) {
        this.name = name
        this.locales = locales
    }
}

export class Termset {
    name: string
    terms: Term[]
    constructor(name: string, terms: Term[]) {
        this.name = name
        this.terms = terms
    }
}

