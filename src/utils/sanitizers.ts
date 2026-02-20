export const sanitizeText = (value: string): string =>
    value.replace(/<[^>]*>/g, '').trim();

export const sanitizeUrl = (value: string): string => {
    const trimmed = value.trim();
    try {
        const parsed = new URL(trimmed);
        if (!['http:', 'https:'].includes(parsed.protocol)) return '';
        return parsed.toString();
    } catch {
        return '';
    }
};
