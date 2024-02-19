<p align="center">
    <img width="150" src="https://www.iyzico.com/assets/images/content/logo.svg?v=v4.0.323" alt="iyzico logo">
</p>

<h1 align="center" style="margin-top: 20px">
  <a href="https://github.com/iyzico/iyzico-mobile-sdk">
    iyzico Mobile Sdk
  </a>
</h1>

iyzico mobil SDK; iyzico'nun müşterilerine WEB platformlarında sunduğu hizmetleri mobil uygulamalarda da kullanılmasını sağlayan bir uygulamadır. iyzico SDK'de Pay with iyzico hizmeti yer almaktadır.

- Pay with iyzico, müşterilerin alışverişlerini kolayca yapabildiği ücretsiz ve güvenli bir ödeme yöntemidir.

Bu doküman tüm mobil ortamlardaki (<b>Android / Ios / React Native / vb.</b>) uygulamalar için hazırlanmış, dökümanda SDKʼin 'iyzico ile Öde' hizmetinin uygulamalara nasıl entegre edileceği anlatılmaktadır.

<br />
<br />

# İçerikler

- ## Parametreler
- ## SDK İçeriği
  - ### PWI Akışı
- ## Kullanım
    - ### Android Kullanım
    - ### IOS Kullanım
    - ### React Native Kullanım
    - ### Web Kullanımı (React)

<br />

iyzico Mobil SDK' yi kullanabilmek için <a href="mailto:entegrasyon@iyzico.com"> entegrasyon@iyzico.com </a> üzerinden bizimle iletişime geçmelisiniz

<br />
<br />

# Parametreler


| Parametre | Açıklaması |
| :---:   | :---: |
| thirdPartyClientId | iyzico tarafından verilir. |
| thirdPartyClientId | iyzico tarafından verilir. |
| thirdPartyClientSecret | iyzico tarafından verilir. |
| merchantApiKey | iyzico tarafından verilir. |
| merchantSecretKey | iyzico tarafından verilir. |
| sdkType | Kullanılacak sdk bilgisidir. Alabileceği değerler  (<b>pwi</b>) |
| conversationId | Yapılan işlemin uniq değeridir. Random olarak oluşturulmalıdır. |
| locale | Sdk ve akışın dilini belirler. Alabileceği değerler (<b>tr, en</b>) |
| brand | Markanızın ismidir. |
| price | Toplam sepet tutarıdır. |
| paidPrice | Müşterinin ödeyeceği toplam tutardır. |
| currency | Para birimidir. Alabileceği değerler (<b>TRY, USD, EUR, GBP, IRR</b>) |
| enabledInstallments | Bu dizi taksit seçeneklerini belirler. |
| basketId | Üye şirketin sepet ID değeridir. |
| paymentGroup | Alabileceği değerler (<b>PRODUCT, LISTING, SUBSCRIPTION</b>) |
| paymentSource | Ödeme kaynağı |
| urlCallback | İşlemin başarılı yada başarısız olma durumunun bildirileceği URL adresidir Bu adresin geçerli bir SSL sertifikasına sahip olması gerekir. |
| buyer.id | Üye işyeri tarafındaki müşterinin ID’sidir. |
| buyer.name | Üye işyeri tarafındaki müşterinin ismidir |
| buyer.surname | Üye işyeri tarafındaki müşterinin soyadıdır. |
| buyer.identityNumber | Üye işyeri tarafındaki müşterinin kimlik numarasıdır. |
| buyer.email | Üye işyeri tarafındaki müşterinin e-posta adresidir. |
| buyer.gsmNumber | Üye işyeri tarafındaki müşterinin telefon numarasıdır. |
| buyer.registrationAddress | Üye işyeri tarafındaki müşteriye ait kayıt adresidir |
| buyer.city | Üye işyeri tarafındaki müşterinin yaşadığı şehirdir. |
| buyer.country | Üye işyeri tarafındaki müşterinin yaşadığı ülkedir. |
| buyer.ip | Üye işyeri tarafındaki müşterinin IP adresidir. |
| buyer.zipCode | Üye işyeri tarafındaki müşteriye ait kayıtlı posta kodudur. |
| buyer.lastLoginDate | Üye işyeri tarafındaki müşterinin son giriş tarihidir. |
| buyer.registrationAddress | Üye işyeri tarafındaki müşterinin kayıt olduğu tarihtir. |
| shippingAddress.address | Üye işyeri tarafındaki teslimat adresi. Sepetteki ürünlerden en az 1 tanesi fiziksel ürün (<b>itemType=PHYSICAL</b>) ise zorunludur. |
| shippingAddress.contactName | Üye işyeri tarafındaki teslimat adresi ad soyad bilgisidir. Sepetteki ürünlerden en az 1 tanesi fiziksel ürün (<b>itemType = PHYSICAL<b>) ise zorunludur. |
| shippingAddress.city | Üye işyeri tarafındaki teslimat adresi şehir bilgisidir. Sepetteki ürünlerden en az 1 tanesi fiziksel ürün (<b>itemType = PHYSICAL<b>) ise zorunludur. |
| shippingAddress.country | Üye işyeri tarafındaki teslimat adresi ülke bilgisidir. Sepetteki ürünlerden en az 1 tanesi fiziksel ürün (<b>itemType = PHYSICAL<b>) ise zorunludur. |
| shippingAddress.zipCode | Üye işyeri tarafındaki teslimat adresi posta kodu bilgisidir. |
| billingAddress.address |  Üye işyeri tarafındaki fatura adresidir. |
| billingAddress.contactName | Üye işyeri tarafındaki ad, soyad bilgisidir. |
| billingAddress.city | Üye işyeri tarafındaki fatura adresi şehir bilgisidir. |
| billingAddress.country | Üye işyeri tarafındaki fatura adresi ülke bilgisidir. |
| billingAddress.zipCode | Üye işyeri tarafındaki fatura adresi posta kodu bilgisidir. |
| basketItem.id | Üye işyeri tarafındaki sepetteki ürüne ait id bilgisidir. |
| basketItem.price | Üye işyeri tarafındaki sepetteki ürünün fiyatıdır. |
| basketItem.name | Üye işyeri tarafındaki sepetteki ürünün adıdır. |
| basketItem.category1 | Üye işyeri tarafındaki sepetteki ürüne ait kategoridir. |
| basketItem.category2 | Üye işyeri tarafındaki sepetteki ürüne ait kategoridir. |
| basketItem.itemType | Üye işyeri tarafındaki sepetteki ürüne ait tiptir Alabileceği değerler (<b>PHYSICAL, VIRTUAL</b>) |
| mobileDeviceInfoDto.operatingSystemVersion | Kullanılan mobil cihazın işletim sistemi bilgisidir. |
| mobileDeviceInfoDto.model | Kullanılan mobil cihazın model bilgisidir. |
| mobileDeviceInfoDto.brand | Kullanılan mobil cihazın marka bilgisidir. |

<br />
<br />
<br />

# SDK İçeriği
## PWI Akışı
Pay with iyzico, müşterilerin alışverişlerini kolayca yapabildiği ücretsiz ve güvenli bir ödeme yöntemidir.

Pwi içerisinde bulunan akış sırasıyla;

1. Kullanıcı Üye giriş / Üye olma işlemini gerçekleştirir.
2. OTP girişi gerçekleştirir.
3. Ödeme ekranında, ödeme işlemini gerçekleştirir.
4. Gerekli olduğu durumda bankanın 3D Koruma ekranına yönlendirilir.
5. İşlem başarılı / başarısız tamamlanması durumunda üye iş yerinin vermiş olduğu callback url'ine yönlendirilir.

<br />
<br />
<br />

# Kullanım
iyzico mobil sdk bir web projesidir ve mobil webview üzerinde çalışır. Gerekli olan parametreler ise message event’i üzerinden aktarılır. Bu sayede tüm platformlarda (<b>Android, IOS, React Native v.b.</b>) çalışabilme özelliğine sahiptir.

### Entegrasyon Akış sırasıyla;

1. Projeye Webview entegre edilir. (SADECE MOBIL ENTEGRASYONU İÇİN)
2. Webview(IFrame) üzerinden sdk'in web url'i açılır.
3. Gerekli olan JSON Objesi oluşturulur. <a href="https://github.com/iyzico/iyzico-mobile-sdk/tree/main/examples/exampleSdkJsonObject.json">Beklenen Örnek JSON Objesi </a>
4. Oluşturulan JSON Objesi string formatına çevrilir.
5. Message event'i üzerinden sdk tarafına aktarılır.
6. Kullanılacak olan ürüne yönlendirilir.

<br />

<p style="font-weight:bold; color: #F47C7C">İşlem sonlandıktan sonra Webview'in kapatılması;</p>

İşlem başarılı / başarısız şekilde sonlanması durumunda sdk initialize edilirken göndermiş olduğunuz JSON içerisindeki callback url'e yönlendirilir. Webview üzerinde yönlendirilen url'ler dinlenerek callback url'inin açılması durumunda webview'i otomatik olarak kapatabilirsiniz.


<br />
<br />

## Android Kullanım
<a href="https://github.com/iyzico/iyzico-mobile-sdk/tree/main/examples/sdkAndroidTest">Android kullanımı için github üzerinde örnek java akışı</a>

<br />
<br />

## IOS Kullanım
<a href="https://github.com/iyzico/iyzico-mobile-sdk/tree/main/examples/sdkNativeIosTest">IOS kullanımı için github üzerinde örnek swift akışı </a>

<br />
<br />

## React Native Kullanım
<a href="https://github.com/iyzico/iyzico-mobile-sdk/tree/main/examples/sdkReactNativeTest">React Native kullanımı için github üzerinde örnek javascript akışı </a>

<br />
<br />

## Web(React) Kullanım
<a href="https://github.com/iyzico/iyzico-mobile-sdk/tree/main/examples/sdkReactTest">Web kullanımı için github üzerinde örnek javascript akışı </a>
