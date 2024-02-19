import React, { useRef } from "react";
import "./App.css";

function App() {
  const iframeRef = useRef(null);
  const sdkWebUrl = "https://sandbox-mobil-sdk.iyzipay.com/";

  const onPageLoadEnd = async () => {
    // An additional condition has been added to the if query to understand that the page opened here is the sdk page.
    if (iframeRef.current.src === sdkWebUrl) {
      // Generate of the JSON Object required to initialize Sdk and PWI payment;
      // Descriptions of these parameters can be found in the Integration Document.
      const paymentBody = {
        locale: "tr",
        conversationId: "123456789",
        paidPrice: "50.19",
        enabledInstallments: [2, 3, 6, 9],
        price: "50.19",
        paymentGroup: "PRODUCT",
        paymentSource: "MOBILE_SDK",
        callbackUrl: 'https://www.merchant.com/callback',
        currency: "TRY",
        basketId: "B67832",
        buyer: {
          id: "BY789",
          name: "John",
          surname: "Buyer",
          identityNumber: "74300864791",
          email: "john.buyer@mail.com",
          gsmNumber: "+905555555555",
          registrationAddress: "Adres",
          city: "Istanbul",
          country: "Turkey",
          ip: "buyer Ip",
        },
        shippingAddress: {
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          contactName: "John Buyer",
          city: "Istanbul",
          country: "Turkey",
        },
        billingAddress: {
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          contactName: "John Buyer",
          city: "Istanbul",
          country: "Turkey",
        },
        basketItems: [
          {
            id: "BI101",
            price: "50.19",
            name: "Binocular",
            category1: "Collectibles",
            itemType: "PHYSICAL",
          },
        ],
        mobileDeviceInfoDto: {
          operatingSystemVersion: "iOS - 13",
          model: "iPhone 10",
          brand: "Apple",
        },
      };

      const thirdPartyClientId = 'iyzico';
      const thirdPartyClientSecret = 'iyzicoSecret';
      const merchantApiKey = 'sandbox-FAXC123jF3qdtJw1rpL1FGAS521';
      const merchantSecretKey = 'sandbox-ZavaQFqTtasbAq41A';

      // Send the created JSON Object to the sdk side to initialize the Sdk and the PWI payment;

      setTimeout(() => {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            thirdPartyClientId,
            thirdPartyClientSecret,
            merchantApiKey,
            merchantSecretKey,
            paymentBody,
            sdkType: "pwi",
          }),
          sdkWebUrl
        );
      }, 1000);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>iyzico sdk react test</p>
        <iframe
          src={sdkWebUrl}
          title="Payment page"
          className="paymentPage"
          ref={iframeRef}
          onLoad={onPageLoadEnd}
        />
      </header>
    </div>
  );
}

export default App;
