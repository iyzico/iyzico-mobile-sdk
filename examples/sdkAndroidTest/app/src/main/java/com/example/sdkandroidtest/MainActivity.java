package com.example.sdkandroidtest;

import androidx.appcompat.app.AppCompatActivity;

import android.net.Uri;
import android.os.Build;
import android.os.Bundle;

//Import for Webview
import android.webkit.WebMessage;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

//Import for JSON Generate
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONArray;


public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        WebView myWebView = (WebView) findViewById(R.id.webview);
        WebSettings webSettings = myWebView.getSettings();
        //The following line must be added for the javascript to work.
        webSettings.setJavaScriptEnabled(true);
        String sdkUrl = "http://localhost:3000/";
        myWebView.loadUrl(sdkUrl);


        // The event listener that listens to the loading process of the page opened on the webview.
        myWebView.setWebViewClient(new WebViewClient() {
            public void onPageFinished(WebView view, String url) {

                // An additional condition has been added to the if query to understand that the page opened here is the sdk page.
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT && url.equals(sdkUrl)) {
                    try {
                        // Generate of the JSON Object required to initialize Sdk and PWI payment;
                        // Descriptions of these parameters can be found in the Integration Document.
                        // Main JSON Object is sdkObject and other objects are collected in it.
                        JSONObject sdkObject = new JSONObject();
                        JSONObject paymentBody = new JSONObject();

                        paymentBody.put("price", "50.19");
                        paymentBody.put("paidPrice", "50.19");
                        paymentBody.put("currency", "TRY");
                        JSONArray enabledInstallments = new JSONArray();
                        enabledInstallments.put(2);
                        enabledInstallments.put(3);
                        enabledInstallments.put(6);
                        enabledInstallments.put(9);
                        paymentBody.put("enabledInstallments", enabledInstallments);
                        paymentBody.put("basketId", "B67832");
                        paymentBody.put("paymentGroup", "PRODUCT");
                        paymentBody.put("paymentSource", "MOBILE_SDK");
                        paymentBody.put("callbackUrl", "https://www.merchant.com/callback");

                        JSONObject buyer = new JSONObject();

                        buyer.put("id", "BY789");
                        buyer.put("name", "John");
                        buyer.put("surname", "Buyer");
                        buyer.put("identityNumber", "74300864791");
                        buyer.put("email", "john.buyer@mail.com");
                        buyer.put("gsmNumber", "+905555555555");
                        buyer.put("registrationAddress", "Adres");
                        buyer.put("city", "Istanbul");
                        buyer.put("country", "Turkey");
                        buyer.put("ip", "192.168.1.1");
                        paymentBody.put("buyer", buyer);

                        JSONObject shippingAddress = new JSONObject();

                        shippingAddress.put("address", "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1");
                        shippingAddress.put("contactName", "John Buyer");
                        shippingAddress.put("city", "Istanbul");
                        shippingAddress.put("country", "Turkey");
                        paymentBody.put("shippingAddress", shippingAddress);

                        JSONObject billingAddress = new JSONObject();

                        billingAddress.put("address", "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1");
                        billingAddress.put("contactName", "John Buyer");
                        billingAddress.put("city", "Istanbul");
                        billingAddress.put("country", "Turkey");
                        paymentBody.put("billingAddress", billingAddress);

                        JSONArray basketItems = new JSONArray();
                        JSONObject basketItem1 = new JSONObject();

                        basketItem1.put("id", "BI101");
                        basketItem1.put("price", "50.19");
                        basketItem1.put("name", "Binocular");
                        basketItem1.put("category1", "Collectibles");
                        basketItem1.put("itemType", "PHYSICAL");
                        basketItems.put(basketItem1);
                        paymentBody.put("basketItems", basketItems);

                        JSONObject mobileDeviceInfoDto = new JSONObject();

                        mobileDeviceInfoDto.put("operatingSystemVersion", "Android 6");
                        mobileDeviceInfoDto.put("model", "Samsung Note 5");
                        mobileDeviceInfoDto.put("brand", "Samsung");
                        paymentBody.put("mobileDeviceInfoDto", mobileDeviceInfoDto);
                        sdkObject.put("paymentBody", paymentBody);

                        sdkObject.put("thirdPartyClientId", "iyzico");
                        sdkObject.put("thirdPartyClientSecret", "iyzicoSecret");
                        sdkObject.put("merchantApiKey", "sandbox-FAXC123jF3qdtJw1rpL1FGAS521");
                        sdkObject.put("merchantSecretKey", "sandbox-ZavaQFqTtasbAq41A");
                        sdkObject.put("sdkType", "pwi");

                        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
                            // Send the created JSON Object to the sdk side to initialize the Sdk and the PWI payment;
                            myWebView.postWebMessage(new WebMessage(sdkObject.toString()), Uri.EMPTY);
                        }

                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            }
        });
    }

}