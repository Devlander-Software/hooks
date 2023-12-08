declare global {
    namespace NodeJS {
        interface Global {
            document: Document | undefined;
        }
    }
}
export {};
