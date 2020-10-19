/* *
 * Iclui arquivos JavaScript
 * */
function include(file) { 
    var script  = document.createElement('script'); 
    script.src  = file; 
    script.type = 'text/javascript'; 
    script.defer = true; 
    
    document.getElementsByTagName('head').item(0).appendChild(script); 
} 

/* *
 * Icluindo modules JavaScript
 * */
include('../js/modules/requestAPI.js');
include('../js/modules/validaForms.js');
include('../js/modules/sessaoUser.js');
include('../js/modules/eventos.js');