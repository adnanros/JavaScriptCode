/**
 * You need to provide 'async' in function declaration when you have 'await' within its body
 * You need to provide 'await' in calling an asynchronous function in assignment
 */
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error('Error in fectching data', error);
    }
}


fetchData();

