function Spread() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6, ...arr1, 7, 8, 9];
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { ...obj1, d: 4, e: 5, f: 6 };
    const obj3 = { ...obj1, b: 4 };
    const obj4 = { b: 4, ...obj1 };
    return (
        <div>
            <h3>Spread Operator</h3>
            <h4>Array Spread</h4>
            arr1 = {JSON.stringify(arr1)} <br />
            arr2 = {JSON.stringify(arr2)} <br />
            <h4>Object Spread</h4>
            {JSON.stringify(obj1)} <br />
            {JSON.stringify(obj2)} <br />
            {JSON.stringify(obj3)} <br />
            {JSON.stringify(obj4)} <br />
        </div>
    );
}
export default Spread;