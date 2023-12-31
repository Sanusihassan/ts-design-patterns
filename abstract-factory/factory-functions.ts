interface ILogger {
    log(message: string): void;
    warn(message: string): void;
    debug(message: string): void;
    error(message: string): void;
}

const DevelopmentLogger = (): ILogger => ({
    log(message: string): void {
        console.log(message);
    },
    warn(message: string): void {
        console.warn(message);
    },
    debug(message: string): void {
        console.debug(message);
    },
    error(message: string): void {
        console.error(message);
    }
});

const ProductionLogger = (): ILogger => ({
    log(message: string): void {
        console.log(message);
    },
    warn(message: string): void {
        throw new Error("Method not implemented.");
    },
    debug(message: string): void {
        throw new Error("Method not implemented.");
    },
    error(message: string): void {
        console.error(message);
    }
});


export const createLogger = (): ILogger => {
    if (process.env.NODE_ENV === "production") {
        return ProductionLogger();
    } else {
        return DevelopmentLogger();
    }
}