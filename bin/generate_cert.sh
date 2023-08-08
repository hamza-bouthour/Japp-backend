keytool -genkey -alias server-alias -keyalg RSA -keypass changeit -storepass changeit -keystore keystore.jks


keytool -export -alias server-alias -storepass changeit -file server1.cert -keystore keystore.jks


keytool -import -v -trustcacerts -alias server-alias -file server1.cert -keystore cacerts.jks -keypass changeit -storepass changeit


##################
keytool -genkeypair -alias localhost -keyalg RSA -keysize 2048 -keystore .keystore -validity 365 -storepass changeit -dname "CN=japp.domain.com, O=DOMAIN, C=FR"

keytool -certreq -alias localhost -keyalg RSA -keystore .keystore -storepass changeit -file "tmp.csr" 

keytool -srckeystore .keystore -srcstorepass changeit -srcalias localhost -destalias localhost -destkeystore private.p12 -deststoretype PKCS12 -deststorepass changeit -importkeystore
