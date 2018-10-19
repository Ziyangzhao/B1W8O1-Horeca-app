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

		//Deze if zorgt voor dat de frisdrank goed wordt opgenomen en onthouden wordt.
		if(drank == 'fris'){
			
			var fris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
			totalfris = Number(totalfris) + Number(fris)
			var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
			bestelling(drank);

			//Deze else if zorgt voor dat de bier goed wordt opgenomen en onthouden wordt.
		} else if(drank == 'bier'){
			
			var bier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
			totalbier = Number(totalbier) + Number(bier)
			var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
			bestelling(drank);

			//Deze else if zorgt voor dat de wijn goed wordt opgenomen en onthouden wordt.
		} else if(drank == 'wijn'){

			var wijn = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?");
			totalwijn = Number(totalwijn) + Number(wijn)
			var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
			bestelling(drank);

			//Deze else if zorgt voor dat de snack goed wordt opgenomen en onthouden wordt.
			} else if(drank == 'snack'){
				var snack = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");

				//Deze if zorgt voor dat het aantal snacks goed wordt opgenomen en onthouden wordt.
				if (snack == 8){
					var bitterbalschaal8 = prompt("Hoeveel bitterbalschalen(8) wilt u bestellen");
					totalbitterbal8 = Number(totalbitterbal8) + Number(bitterbalschaal8);			
					var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
					bestelling(drank);

				//Deze if zorgt voor dat het aantal snacks goed wordt opgenomen en onthouden wordt.
				} else if(snack == 16){
					var bitterbalschaal16 = prompt("Hoeveel bitterbalschalen(16) wilt u bestellen")
					totalbitterbal16 = Number(totalbitterbal16) + Number(bitterbalschaal16);	
					var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
					bestelling(drank);
				//Deze else zorgt voor dat de klant terug wordt verwezen na een foute invoer.
				} else {
					alert('U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling');
					bestelling(drank);
				}
			//Zodra de klant stop invoert dan worden alle bedragen bij elkaar opgeteld van de bestellingen.
		} else if(drank == 'stop'){
		document.write("Uw bestellingen:" + "</br>" + "Aantal fris besteld:" + " " + totalfris);
		document.write("</br> Bedrag van 1x fris = " + "€" + FRISPRICE);
		document.write("</br> Totale bedrag van uw fris: " + "€" + FRISPRICE * totalfris);
		var frispricetotal = totalfris * FRISPRICE
		document.write("</br>")

		document.write("</br> Aantal bier besteld:" + " " + totalbier);
		document.write("</br> Bedrag van 1x bier = " + "€" + BIERPRICE);
		document.write("</br> Totale bedrag van uw bier: " + "€" + BIERPRICE * totalbier);
		var bierpricetotal = totalbier * BIERPRICE
		document.write("</br>")

		document.write("</br> Aantal wijn besteld:" + " " + totalwijn);
		document.write("</br> Bedrag van 1x wijn = " + "€" + WIJNPRICE);
		var wijnpricetotal = totalwijn * WIJNPRICE
		document.write("</br> Totale bedrag van uw wijn: " + "€" + WIJNPRICE * totalwijn)

		document.write("</br>")
		
		document.write("</br> Aantal bitterbalschalen(8) besteld:" + " " + totalbitterbal8);
		document.write("</br> Bedrag van 1x bitterbalschaal(8) = " + "€" + BITTERBAL8);
		var bitterbalprice8 = BITTERBAL8 * totalbitterbal8
		document.write("</br> Totale bedrag van uw bitterbalschaal(8): " + "€" + bitterbalprice8);

		document.write("</br>")

		document.write("</br> Aantal bitterbalschalen(16) besteld:" + " " + totalbitterbal16);
		document.write("</br> Bedrag van 1x bitterbalschaal(16) = " + "€" + BITTERBAL16);
		var bitterbalprice16 = BITTERBAL16 * totalbitterbal16
		document.write("</br> Totale bedrag van uw bitterbalschaal(16): " + "€" + bitterbalprice16);

		document.write("</br>")

		document.write("Totale bedrag van alle bestellingen = " + ' ' + "€" +  ' ' + (frispricetotal + bierpricetotal + wijnpricetotal + bitterbalprice8 + bitterbalprice16));
		} else {
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
			var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
			bestelling(drank);
		}
	}

var drank = prompt('Welke bestelling wilt u toevoegen? (keuze tussen fris, bier, wijn & snack.');
bestelling(drank);
