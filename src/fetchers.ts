import settings from "./settings";

export async function fetchNamesTrueOrFalse(): Promise<string[]> {
    const res = await fetch(settings.dataUrls.names.trueOrFalse);
    return res.json();
}
