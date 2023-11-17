

                    //   Javascript Make Your Own Calculator.

/*
var fNum = prompt("First Number : ");
    var lnum = prompt("Last Number : ");

    var x = parseInt(fNum);
    var y = parseInt(lnum);

    var Add,Sub,gun,vag,vagS;

    Add = x+y;
    Sub = x-y;
    gun = x*y;
    vag = x/y;
    vagS = x%y;
    
    document.write("20 + 10 = " + Add + "<br/>");

    document.write("20 - 10 = " + Sub + "<br/>");

    document.write("20 * 10 = " + gun + "<br/>");

    document.write("20 / 10 = " + vag + "<br/>");

    document.write("20 % 10 = " + vagS);

*/



    var fNumber = prompt("First Number : ");
    var sNumber = prompt("Second Number : ");

    
    var ChangeI = parseInt(fNumber);
    var ChangeIt = parseInt(sNumber);

    var result ;

    result = ChangeI + ChangeIt ;
    document.write("<b>" + fNumber + " + " + sNumber + " = " + "</b>" + result + "<br/>");

    
    result = ChangeI - ChangeIt ;
    document.write("<b>" + fNumber + " - " + sNumber + " = " + "</b>" + result + "<br/>");


    result = ChangeI * ChangeIt ;
    document.write("<b>" + fNumber + " * " + sNumber + " = " + "</b>" + result + "<br/>");

    
    result = ChangeI / ChangeIt ;
    document.write("<b>" + fNumber + " / " + sNumber + " = " + "</b>" + result + "<br/>");

    
    result = ChangeI % ChangeIt ;
    document.write("<b>" + fNumber + " % " + sNumber + " = " + "</b>" + result + "<br/>");
   