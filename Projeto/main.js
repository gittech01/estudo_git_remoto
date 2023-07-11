$(document).ready(async function () {  //quando o ducumento estiver pronto, execute a função que estivar dentro do parenteses
// add new line comment
const resposta = await axios.get("https://api.publicapis.org/entries", );
console.log(resposta.data);

$("#corpo").append("<tr>"+
'<th scope="row">'+1+'</th>'+
'<td>Facebook</td>'+
'<td>2.0</td>'+
'<td>gghhh</td>'+
'<td>ffggg</td>'+
'td>668h</td>'+
'<td>nmmmhh</td>'+
'</tr>'
);

}); 

