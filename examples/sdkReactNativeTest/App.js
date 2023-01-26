import React, {useRef} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
//Import for Webview
import {WebView} from 'react-native-webview';

const App = () => {
  const webviewRef = useRef(null);
  const sdkWebUrl = 'http://localhost:3000/';

  const onPageLoadEnd = async ({nativeEvent}) => {
    // Generate of the JSON Object required to initialize Sdk and PWI payment;
    // Descriptions of these parameters can be found in the Integration Document.
    const paymentBody = {
      paidPrice: '50.19',
      enabledInstallments: [2, 3, 6, 9],
      price: '50.19',
      paymentGroup: 'PRODUCT',
      paymentSource: 'MOBILE_SDK',
      callbackUrl: 'https://www.merchant.com/callback',
      currency: 'TRY',
      basketId: 'B67832',
      buyer: {
        id: 'BY789',
        name: 'John',
        surname: 'Buyer',
        identityNumber: '74300864791',
        email: 'john.buyer@mail.com',
        gsmNumber: '+905555555555',
        registrationAddress: 'Adres',
        city: 'Istanbul',
        country: 'Turkey',
        ip: 'buyer Ip',
      },
      shippingAddress: {
        address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
        contactName: 'John Buyer',
        city: 'Istanbul',
        country: 'Turkey',
      },
      billingAddress: {
        address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
        contactName: 'John Buyer',
        city: 'Istanbul',
        country: 'Turkey',
      },
      basketItems: [
        {
          id: 'BI101',
          price: '50.19',
          name: 'Binocular',
          category1: 'Collectibles',
          itemType: 'PHYSICAL',
        },
      ],
      mobileDeviceInfoDto: {
        operatingSystemVersion: 'iOS - 13',
        model: 'iPhone 10',
        brand: 'Apple',
      },
    };
    const thirdPartyClientId = 'iyzico';
    const thirdPartyClientSecret = 'iyzicoSecret';
    const merchantApiKey = 'sandbox-FAXC123jF3qdtJw1rpL1FGAS521';
    const merchantSecretKey = 'sandbox-ZavaQFqTtasbAq41A';

    // An additional condition has been added to the if query to understand that the page opened here is the sdk page.
    if (!nativeEvent?.code && nativeEvent.url === sdkWebUrl) {
      // Send the created JSON Object to the sdk side to initialize the Sdk and the PWI payment;
      webviewRef.current.postMessage(
        JSON.stringify({
          thirdPartyClientId,
          thirdPartyClientSecret,
          merchantApiKey,
          merchantSecretKey,
          paymentBody,
          sdkType: 'pwi',
        }),
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webviewRef}
        style={styles.webviewStyle}
        onLoadEnd={onPageLoadEnd}
        source={{uri: sdkWebUrl}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  webviewStyle: {
    width: '100%',
    flex: 1,
  },
});

export default App;
