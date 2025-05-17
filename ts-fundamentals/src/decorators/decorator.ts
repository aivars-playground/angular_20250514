export function logInfoDecorator(originalMethod: any, _context: ClassMethodDecoratorContext) {
    function replacementMethod(this: any, ...args:any[]) {

        console.log(`Decorated context kind:${_context.kind} name:${_context.name as string} starts`)

        //decorate function
        const result = originalMethod.call(this, ...args)

        console.log(`Decorator returns:${result}`)

        return result
    }
    return replacementMethod
}