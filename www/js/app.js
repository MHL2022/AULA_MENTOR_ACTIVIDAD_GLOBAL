function convertir()
{
	//VARIABLES
	var valor=parseFloat(document.getElementById("cantidad").value);
	document.getElementById("valor").innerHTML="<b>"+valor+"</b>";
	var de=document.getElementById("de").value;
	var a=document.getElementById("a").value;
	var=bitcoin=57571.20;
	var=ethereum=3918.11; 
	resultado=0;


	//CONVERSIONES:
	//EURO A BITCOIN
	if(de==1&&a==3)
	{
		resultado=valor/bitcoin;
	}
	//EURO A ETHEREUM
	else if(de==1&&a==4)
	{
		resultado=valor/ethereum;
	}
	//BITCOIN A EURO
	else if(de==3&&a==1)
	{
		resultado=valor*euro;
	}
	//ETHEREUM A EURO
	else if(de==4&&a==1)
	{
		resultado=valor*euro;
	}
	//BITCOIN A DOLAR
	else if(de==3&&a==2)
	{
		resultado=valor*bitcoin;
	}
	//ETHEREUM A DOLAR
	else if(de==4&&a==2)
	{
		resultado=valor*ethereum;
	}
	//DOLAR A BITCOIN 
	else if(de==2&&a==3)
	{
		resultado=valor/dolar;
	}
	// DOLAR A ETHEREUM 
	else if(de==2&&a==4)
	{
		resultado=valor/dolar;
	}
	//CONVERSION DOLAR Y EUROS AL RESTO DE MONEDAS Y VICEVERSA (DASH, LITECOIN...)
	else{
		resultado=valor;
	}
	//FIXED : FUNCIÓN PARA REDONDEAR (LE PUSE 2 CIFRAS) 
	document.getElementById("resultado").innerHTML="resultado: $"+valor.toFixed(2);
}