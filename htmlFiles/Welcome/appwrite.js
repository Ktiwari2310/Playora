import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('68c996d2002764e99e5c'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
