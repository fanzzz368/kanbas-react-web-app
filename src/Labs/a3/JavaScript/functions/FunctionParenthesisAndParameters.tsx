function FunctionParenthesisAndParameters() {
    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <>
        <h2>Parenthesis and parameters</h2>
        <p>twoSquared = {twoSquared}</p>
        <p>squared(2) = {twoSquared}</p>
        <p>threePlusOne = {threePlusOne}</p>
        <p>plusOne(3) = {threePlusOne}</p>
        </>
    );
}
export default FunctionParenthesisAndParameters