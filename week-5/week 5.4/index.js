// fetch vs axios


// example of axios:-
  async function sendRequest(){
       const response = await axios.post("http://localhost:3000/sum",{
            a:document.getElementById("first").value,
            b:document.getElementById("second").value
        })
        console.log(response.data);
    }

// example of fetch:-
    async function sendRequest2() {
        const res = fetch("http://localhost:3000/sum",{
             a:document.getElementById("first").value,
            b:document.getElementById("second").value
        })
        const data = await res.json();
        console.log(data);
    }