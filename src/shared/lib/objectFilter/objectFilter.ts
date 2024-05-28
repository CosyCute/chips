type ObjectType = Record<string, any>;

export const objectFilter = (
    obj: ObjectType,
    predicate: (key: keyof ObjectType) => boolean,
): ObjectType => {
    const newObj: ObjectType = {};
    Object.keys(obj)
        .filter((key) => predicate(obj[key]))
        .forEach((key) => {
            newObj[key] = obj[key];
        });
    return newObj;
};
