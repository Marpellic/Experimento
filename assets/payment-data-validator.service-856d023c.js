import{y as r}from"./index-4ca67c65.js";const a={not_selected:"No has seleccionado el metodo de pago que deseas usar",not_card_number:"No has ingresado el numero de la tarjeta",not_card_name:"No has ingresado el nombre del titular de la tarjeta",not_card_month:"No has ingresado el mes de vencimiento de la tarjeta",not_card_year:"No has ingresado el año de vencimiento de la tarjeta",expired_card:"La tarjeta ha vencido, por favor utiliza una tarjeta válida",not_cvv:"No has ingresado el CVV de la tarjeta",not_wallet:"No has elegido una billetera digital"};function o(e){if(!e.payment.selectedMethod)return a.not_selected;if(e.payment.selectedMethod===r.Tarjeta){if(!e.payment.card.number)return a.not_card_number;if(!e.payment.card.name)return a.not_card_name;if(!e.payment.card.month)return a.not_card_month;if(!e.payment.card.year)return a.not_card_year;const t=new Date().getFullYear(),n=new Date().getMonth();return e.payment.card.year+2e3<t||e.payment.card.year+2e3==t&&e.payment.card.month<n?a.expired_card:!1}else if(e.payment.selectedMethod===r["Billetera Digital"])return e.payment.wallet.id?!1:a.not_wallet}function l(e){try{return!e.payment.paymentMethod||!e.payment.MethodData||!e.payment.MethodData.name?a.not_selected:!1}catch(t){return console.log("Error al validar el metodo de pago: ",t),a.not_selected}}export{l as a,o as v};
