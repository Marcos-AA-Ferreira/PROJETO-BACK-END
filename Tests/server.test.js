//npx jest Tests/server.test.js --runInBand

test('server teste', async () => {
    const response = await fetch('http://localhost:3000/')
    expect(response.status).toBe(200);
    
    const body = await response.text();
    console.log(body)
})