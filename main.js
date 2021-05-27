axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function(response) {
        console.log(response.data);
        document.getElementById(list)=showText.response.data;

    })
    .catch(function(error) {
        console.log(error);
    });


    function showText(data) {
        HTML= "";
        if (typeof data === 'object') {
            if(Array.isArray(data)){
                HTML += `<ol>`;
                for (let i = 0; i < data.length; i++) {
                    HTML += showText(data[i]);
                    
                }
                HTML += `</ol>`;
            } else {
                HTML += `<ul>`;
                for (const key in data) {
                    HTML += showText(data[key]);
                        
                    }
                    HTML += `</ul>`;
                } 

                } else {
                    HTML += `<li>${data}</li>`;
                }
                return HTML;
            }
        

    

    