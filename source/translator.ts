import { Translation, Dictionary } from "./interfaces.ts";

/**
 * Allows handling a set of translations
 */
export class Translator {
    /**
     * @param translations Defines the list of translatable languages
     */
    constructor(protected translations: Translation = {}) {}

    /**
     * Add a new translation to the language list
     * @param language Define the language into which it will translate
     * @param dictionary Defines the dictionary of translatable words. @see {@link Dictionary}
     */
    public appendTranslation(language: string, dictionary: Dictionary): void {
        this.translations[language] = dictionary;
    }

    /**
     * Remove a translation language
     * @param language Defines the language that will no longer be translatable
     */
    public removeTranslation(language: string): void {
        delete this.translations[language];
    }

    /**
     * Update an existing language by creating new words or rewriting them
     * @param language Define the language that will be updated
     * @param dictionary Defines the dictionary of new words or words to update. @see {@link Dictionary}
     */
    public updateTranslation(language: string, dictionary: Dictionary): void {
        for (const key in dictionary) {
            this.translations[language][key] = dictionary[key];
        }
    }

    /**
     * Get a translation from the list of languages
     * @param language Define the language you want to get
     * @returns a translation dictionary
     */
    public selectTranslation(language: string) {
        return this.translations[language];
    }

    /* 
        ? Static Methods 
    */

    /**
     * Get the list of languages of a translation. @see {@link Translator}
     * @param translator Define the translator to use
     * @returns the language list
     */
    public static json(translator: Translator) {
        return translator.translations;
    }
}
