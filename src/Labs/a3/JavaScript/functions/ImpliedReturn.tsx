const multiply = (a: number, b: number) => a * b;

const ImpliedReturn = () => (
  <>
    <h2>Implied return</h2>
    <p>fourTimesFive = {multiply(4, 5)}</p>
    <p>multiply(4, 5) = {multiply(4, 5)}</p>
  </>
);
export default ImpliedReturn;
