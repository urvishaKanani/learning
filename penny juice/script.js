document.querySelector(".btn2").addEventListener("click",function(){
    document.querySelector("form").innerHTML = "your order has been submitted."
    document.querySelector("form").style.color = "red";
    document.querySelector("form").style.fontSize = "30px";
    document.querySelector("form").style.textAlign = "center";
    document.querySelector("form").style.margin = "0px";
    document.querySelector("form").style.padding = "0px";
});

document.querySelector(".btn2").addEventListener("click",function(){
    document.querySelector("#card").innerHTML = "We Will get back to you as soon as possible." 
    document.querySelector("#card").style.textAlign = "center";
    document.querySelector("#card").style.fontSize = "30px";
    document.querySelector("#card").style.margin = "0px";
    document.querySelector("#card").style.padding = "0px";
});

document.querySelector(".btn2").addEventListener("click",function(){
    document.querySelector("#card1").innerHTML = "You may pay with your credit card now." 
    document.querySelector("#card1").style.textAlign = "center";
    document.querySelector("#card1").style.fontSize = "30px";
    document.querySelector("#card1").style.margin = "0px";
    document.querySelector("#card1").style.padding = "0px";
    
});


<!--
              //var oACLink = document.getElementById("oACapLink");
              //if (oACLink) oACLink.style.display = "";
              var itemPrice = 164.00;
              var currencyPrefix = "US&nbsp;$";
              var currencySuffix = "";
              var oShipMethods = new Object();
              
              function Range(price, upperLimit) {
                this.price = price;
                this.upperLimit = upperLimit;
              }
              function GetCurrentRadioVal(name) {
                var radios = document.getElementsByName(name);
                if (radios) {
                  var i;
                  for (i=0; i < radios.length; i++) {
                    if (radios[i].checked) return radios[i].value;
                  }
                }
                return null;
              }
              function GetShipFixedPrice() {
                if (!oShipMethods["methids"] || 0 == oShipMethods["methids"].length) {
                  return 0.00;
                } else if (1 == oShipMethods["methids"].length) {
                  var meth = oShipMethods["meth" + oShipMethods["methids"][0]];
                  if (!meth || 0 == meth.length) {
                    return 0.00;
                  } else if (1 == meth.length) {
                      return meth[0].price;
                  }
                }
                return NaN;
              }
              function GetShipMethCurPrice(methId, qty) {
                var shipPrice;
                var i;
                var meth = oShipMethods['meth'+methId];
                if (meth) {
                  var nRange = -1;
                  for (i=0; i < meth.length; i++) {
                    if (meth[i].upperLimit >= qty) {
                      nRange = i;
                      break;
                    }
                  }
                  if (nRange < 0 && meth.length > 0) {
                    nRange = meth.length - 1;
                  }
                  if (nRange < 0) {
                    shipPrice = 0.00;
                  } else {
                    shipPrice = meth[nRange].price;
                  }
                } else {
                  shipPrice = NaN;
                }
                return shipPrice;
              }
              function IsShipMethPriceDynamic(methId) {
                var meth = oShipMethods['meth'+methId];
                return meth && meth.length > 1;
              }
              function GetCurQuantity() {
                var oQty = document.getElementById("txtQuantity");
                if (oQty) {
                  if (oQty.value) {
                    return parseInt(oQty.value);
                  } else {
                    return NaN;
                  }
                } else {
                  return 1;
                }
              }
              function FormatPrice(price, dynamic) {
                if (isNaN(price)) {
                  if (dynamic) {
                    return "--";
                  } else {
                    return "";
                  }
                } else {
                  var s = currencyPrefix + price.toFixed(2);
                  if (dynamic) s += "<span class=\"Dagger\">†</span>";
                  s + currencySuffix;
                  return s;
                }
              }
              function FormatDonationAmount(price) {
                if (isNaN(price)) {
                    return "--";
                } else {
                  var s = currencyPrefix + price.toFixed(2);
                  s + currencySuffix;
                  return s;
                }
              }
              function UpdatePrices() {
                var i;
                // get quantity.
                var qty = GetCurQuantity();
                // update shipping prices.
                if (oShipMethods["methids"]) {
                  for (i=0; i < oShipMethods["methids"].length; i++) {
                    var methId = oShipMethods["methids"][i];
                    if (IsShipMethPriceDynamic(methId)) {
                      var shipPrice = GetShipMethCurPrice(methId, qty);
                      var spn = document.getElementById("spnShipMethodPrice_" + methId);
                      if (spn) {
                        spn.innerHTML = FormatPrice(shipPrice, true);
                      }
                    }
                  }
                }
                // update selected shipping.
                var shipSelDescr = "";
                var shipSelPrice = GetShipFixedPrice();
                if (isNaN(shipSelPrice)) {
                  var spnShipDescr = document.getElementById("spnShipMethodDescrSel");
                  var spnShipPrice = document.getElementById("spnShipMethodPriceSel");
                  if (oShipMethods["methids"] && 1 == oShipMethods["methids"].length) {
                    shipSelPrice = GetShipMethCurPrice(oShipMethods["methids"][0], qty);
                    if (spnShipDescr) shipSelDescr = spnShipDescr.innerHTML;
                  } else {
                    var radval = GetCurrentRadioVal("radShipMethod");
                    if (radval && 0 == radval.indexOf("radShipMethod_")) {
                      radval = radval.replace("radShipMethod_", "");
                      var methId = radval;
                      shipSelPrice = GetShipMethCurPrice(methId, qty);
                      var spn = document.getElementById("spnShipMethodDescr_" + methId);
                      if (spn) shipSelDescr = spn.innerHTML;
                    }
                  }
                  if (spnShipDescr) spnShipDescr.innerHTML = shipSelDescr;
                  if (spnShipPrice) spnShipPrice.innerHTML = FormatPrice(shipSelPrice, true);
                }
                // update total price.
                var spnTotal = document.getElementById("spnTotalPrice");
                if (spnTotal && "1" != spnTotal.getAttribute("fixedprice") && ! false) {
                  var totalPrice = itemPrice * qty + shipSelPrice;
                  spnTotal.innerHTML = FormatPrice(totalPrice, true);
                }
              }
              UpdatePrices();
              
              function UpdateDonationAmount()
              {
                document.getElementById('spnTotalPrice').innerHTML = 
                    FormatDonationAmount(parseFloat(document.getElementById('txtUserItemPriceRad').value));
              }
              -->


