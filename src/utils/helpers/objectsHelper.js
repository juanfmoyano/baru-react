export function transformObjectToArray(objectToTransform){
    const arrayTransformed = [];
    Object.keys(objectToTransform).forEach(objectProperty => {
        arrayTransformed.push(objectToTransform[objectProperty]);
    });
    return arrayTransformed;
};