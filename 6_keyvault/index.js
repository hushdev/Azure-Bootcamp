
const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

const keyVaultName = "myKeyvaultUnique";
const keyVaultUri = `https://${keyVaultName}.vault.azure.net`;
const secretName = "mySecret";

const credential = new DefaultAzureCredential();
const client = new SecretClient(keyVaultUri, credential);

const getSecret = async (secretName) => {

    return (await client.getSecret(secretName)).value;
}

getSecret("mySecret").then(secretValue => {
    console.log(`The value of secret 'mySecret' in '${keyVaultName}' is: '${secretValue}'`);
}).catch(err => {
    console.log(err);
})