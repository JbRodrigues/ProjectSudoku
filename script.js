var mainArray = [ [1,2,3],
                  [4,5,6],
                  [7,8,9] ];

mainArray[0] = [1,2,3];
mainArray[1] = [4,5,6];
mainArray[2] = [7,8,9];


function exibe()
{
 var mainArray = [ [1,2,3],
                       [4,5,6],
                       [7,8,9] ];

    for(let lin=0 ; lin<3 ; lin++){
     for(let col=0; col<3 ; col++)
      document.write(mainArray[lin][col] + "  ");


     document.write("<br />");
    }

}

