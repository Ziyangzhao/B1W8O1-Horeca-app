var totalfris = 0;
var totalbier = 0;
var totalwijn = 0; 
var totalbitterbal8 = 0;
var totalbitterbal16 = 0;

const FRISPRICE = 200 / 100;
const BIERPRICE = 300 / 100;
const WIJNPRICE = 400 / 100;
const BITTERBAL8 = 500 / 100;
const BITTERBAL16 = 900 / 100;


//Deze functie zorgt voor dat de bestellingen goed lopen.
function bestelling(drank){

		if(drank == 'fris'){
			
			var fris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
			totalfris = Number(totalfris) + Number(fris)
			var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
			bestelling(drank);


		} else if(drank == 'bier'){
			
			var bier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
			totalbier = Number(totalbier) + Number(bier)
			var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
			bestelling(drank);


		} else if(drank == 'wijn'){

			var wijn = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?");
			totalwijn = Number(totalwijn) + Number(wijn)
			var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
			bestelling(drank);


			if(drank == 'snack'){
				var snack = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?")

				if (snack == '8'){
					var bitterbalschaal8 = prompt("Hoeveel bitterbalschalen(8) wilt u bestellen")
					var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
					bestelling(drank);

				} else {
					var bitterbalschaal16 = prompt("Hoeveel bitterbalschalen(16) wilt u bestellen")
					var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
					bestelling(drank);
				}
			
		} else if(drank == 'stop'){
		document.write("Uw bestellingen:" + "</br>" + "Aantal fris besteld:" + " " + totalfris);
		document.write("</br> Bedrag van 1x fris = " + "€" + FRISPRICE);
		document.write("</br> Totale bedrag van uw fris: " + "€" + FRISPRICE * totalfris)
		
		document.write("</br>")

		document.write("</br> Aantal bier besteld:" + " " + totalbier);
		document.write("</br> Bedrag van 1x bier = " + "€" + BIERPRICE);
		document.write("</br> Totale bedrag van uw bier: " + "€" + BIERPRICE * totalbier)
			
		document.write("</br>")

		document.write("</br> Aantal wijn besteld:" + " " + totalwijn);
		document.write("</br> Bedrag van 1x wijn = " + "€" + WIJNPRICE);
		document.write("</br> Totale bedrag van uw wijn: " + "€" + WIJNPRICE * totalwijn)

		document.write("</br>")
		
		document.write("</br> Aantal bitterbalschalen(8) besteld:" + " " + bitterbalschaal8);
		document.write("</br> Bedrag van 1x bitterbalschaal(8) = " + "€" + BITTERBAL8);
		document.write("</br> Totale bedrag van uw bitterbalschaal: " + "€" + BITTERBAL8 * bitterbalschaal8)

		document.write("</br>")

		document.write("</br> Aantal bitterbalschalen(16) besteld:" + " " + bitterbalschaall16);
		document.write("</br> Bedrag van 1x bitterbalschaal(16) = " + "€" + BITTERBAL16);
		document.write("</br> Totale bedrag van uw bitterbalschaal: " + "€" + BITTERBAL16 * bitterbalschaal16)

		document.write("</br>")

		} else {
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
			var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
			bestelling(drank);
		}


}


// function prijzen(){

// }


//function rekening(){

//}

var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
bestelling(drank);
