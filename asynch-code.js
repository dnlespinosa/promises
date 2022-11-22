

1. let url = 'http://numbersapi.com/'
axios
    .get(url)
    .then(res => {
        return res.data.text;
    })
    .catch(err => console.log(err, 'REJECTED'))


2. let multipleRequests = [1,2,3];
for (let i=1; i<multipleRequests.length; i++) {
    multipleRequests.push(
        axios.get(`http://numbersapi.com/random/number${i}json`)
    )
}
Promise.all(multipleRequests)
    .then(multipleArr => {
        multipleArr.forEach(data => { 
            return data.text
        })
    })
    .catch(err => console.log(err))

3. Promise.all( Array.from({length:4}, () => {
    return axios.get(`${url}`)
}.then(facts => {
    facts.forEach(data =>$('body').append(`<p>${data.text}</p>`))
})
    ))