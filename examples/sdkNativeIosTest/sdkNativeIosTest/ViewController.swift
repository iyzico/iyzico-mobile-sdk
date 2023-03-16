//
//  ViewController.swift
//  sdkNativeIosTest
//
//  Created by Emre Çetin on 1/13/23.
//

import UIKit
//Import for Webview
import WebKit

class ViewController: UIViewController, WKUIDelegate,WKNavigationDelegate {
    
    var webView: WKWebView!
    let sdkWebUrl: String = "https://sandbox-mobil-sdk.iyzipay.com/";
    
    // The event listener that listens to the loading process of the page opened on the webview.
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        
        // An additional condition has been added to the if query to understand that the page opened here is the sdk page.
        if(sdkWebUrl == webView.url?.absoluteString){
            do {
                // Generate of the JSON Object required to initialize Sdk and PWI payment;
                // Descriptions of these parameters can be found in the Integration Document.
                let sdkObject: [String: Any] = [
                    "paymentBody": [
                        "locale": "tr",
                        "conversationId": "123456789",
                        "paidPrice":"50.19",
                        "enabledInstallments": [2,3,6,9],
                        "price":"50.19",
                        "paymentGroup":"PRODUCT",
                        "paymentSource":"MOBILE_SDK",
                        "callbackUrl":"https://www.merchant.com/callback",
                        "currency":"TRY",
                        "basketId":"B67832",
                        "buyer": [
                            "id":"BY789",
                            "name":"John",
                            "surname":"Doe",
                            "identityNumber":"74300864791",
                            "email":"john.doe@email.com",
                            "gsmNumber":"+905555555555",
                            "registrationAddress":"Adres",
                            "city":"Istanbul",
                            "country":"Turkey",
                            "ip":"buyer Ip"
                        ],
                        "shippingAddress": [
                            "address":"Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
                            "contactName":"Jane Doe",
                            "city":"Istanbul",
                            "country":"Turkey",
                        ],
                        "billingAddress": [
                            "address":"Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
                            "contactName":"Jane Doe",
                            "city":"Istanbul",
                            "country":"Turkey",
                        ],
                        "basketItems":[
                            [
                                "id":"BI101",
                                "price":"50.19",
                                "name":"Binocular",
                                "category1":"Collectibles",
                                "itemType":"PHYSICAL"
                            ]
                        ],
                        "mobileDeviceInfoDto": [
                            "operatingSystemVersion":"iOS - 13",
                            "model":"iPhone 10",
                            "brand":"Apple"
                        ],
                    ],
                    "thirdPartyClientId": "iyzico",
                    "thirdPartyClientSecret": "iyzicoSecret",
                    "merchantApiKey": "sandbox-FAXC123jF3qdtJw1rpL1FGAS521",
                    "merchantSecretKey": "sandbox-ZavaQFqTtasbAq41A",
                    "sdkType": "pwi"
                ]
                
                
                let serializedJson = try JSONSerialization.data(withJSONObject: sdkObject, options: .prettyPrinted)
                let jsonString = String(data: serializedJson, encoding: String.Encoding.utf8) ?? "";
                
                // Send the created JSON Object to the sdk side to initialize the Sdk and the PWI payment;
                let script = "window.postMessage(JSON.stringify(\(jsonString)));"
                webView.evaluateJavaScript(script) { (result, error) in
                    if let result = result {
                        print("Label is updated with message: \(result)")
                    } else if let error = error {
                        print("An error occurred: \(error)")
                    }
                }
            }
            catch _ {
                print ("Error")
            }
        }
    }
    
    override func loadView() {
        let webConfiguration = WKWebViewConfiguration()
        webView = WKWebView(frame: .zero, configuration: webConfiguration)
        webView.uiDelegate = self
        view = webView
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let webviewUrl = URL(string: sdkWebUrl)
        let request = URLRequest(url: webviewUrl!)
        webView.navigationDelegate = self
        webView.load(request)
    }
}

