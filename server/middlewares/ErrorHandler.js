const errorSubRunner = (sub) =>
    setTimeout(async () => {
        try {
            await sub();
        } catch (error) {
            console.error(`-------error in error subscriber-------`);
            console.error(error);
            console.error("-------------------");
        }
    }, 0);

export const ErrorHandleWrapper = (RouteHandler) => async (req, res, next) => {
    const verb_url = req.method + " " + req.originalUrl;
    req.errorSubs = [];
    try {
        // console.log("-------calls-------");
        // console.log(verb_url);
        // console.log("-------------------");
        await RouteHandler(req, res, next);
    } catch (error) {
        console.error(`-------error-------`);
        console.error(verb_url);
        console.error(error);
        console.error("-------------------");
        res.status(500).end();
        req.errorSubs.forEach(errorSubRunner);
    }
};