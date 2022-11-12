function characterCounter(string) {
    const seen = {};

    for (let i = 0; i < string.length; i++) {
        if (!(string[i] in seen)) seen[string[i]] = 0;
        seen[string[i]]++;
    }
    return seen;
}