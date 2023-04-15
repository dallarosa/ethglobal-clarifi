<template>
    <v-row justify="center">
        <v-col cols="12">
            <v-snackbar v-model="snackbar">
                {{ errorMessage }}
                <template v-slot:actions>
                    <v-btn color="pink" variant="text" @click="snackbar = false">
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center ma-2">
            <v-card class="rounded-xl elevation-6 pa-2" max-width="400">
                <v-card-title>
                    <v-row justify="center">
                        <v-col cols="6" class="d-flex justify-center align-center fill-height">
                            <v-img src="/logo.png" max-width="150"></v-img>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col>
                            <v-form>
                                <v-text-field v-model="email" label="Email Address" required variant="outlined" />
                                <v-text-field v-model="password" label="Password" required variant="outlined"
                                    :type="showPassword ? 'text' : 'password'"
                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append="showPassword = !showPassword" />
                                <v-btn size="large" color="#302D38" @click="emailLogin" block variant="flat"
                                    class="pa-2 text-white">Register</v-btn>
                            </v-form>
                        </v-col>
                        <v-col cols="12" class="d-flex d-flex-column align-center justify-center">
                            <a href="/login">Already have an account?</a>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup>
import { SafeAuthKit, Web3AuthAdapter, Web3AuthEventListener } from '@safe-global/auth-kit';
import { Web3AuthOptions } from '@web3auth/modal';
import { ADAPTER_EVENTS } from '@web3auth/base';

definePageMeta({
    layout: "default",
});

const options = new Web3AuthOptions({
    clientId: 'BI43FDOURD9HHMjFEFA2MxfayS_z4DmReixjhpzsbaeeCEiGvJw-j3LdPSFwjLq26cv5Ha-ouWv5OEBTqoiVLDY',
    web3AuthNetwork: 'testnet',
    chainConfig: {
        chainNamespace: "eip155",
        chainId: "0x5",
    },
});

const authKit = new SafeAuthKit(new Web3AuthAdapter(options), {
    txServiceUrl: 'https://safe-transaction-goerli.safe.global'
});

const connectedHandler = data => {console.log("CONNECTED", data);navigateTo('/user/dashboard')}
const disconnectedHandler = data => console.log("DISCONNECTED", data)

const [safeAuthSignInResponse, setSafeAuthSignInResponse] = useState<SafeAuthSignInData | null>(
    null
  )
  const [safeAuth, setSafeAuth] = useState<SafeAuthKit<Web3AuthAdapter>>()
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null)

authKit.subscribe(ADAPTER_EVENTS.CONNECTED, connectedHandler)

authKit.subscribe(ADAPTER_EVENTS.DISCONNECTED, disconnectedHandler)



setSafeAuth(authKit)

const snackbar = ref(false)
const showPassword = ref(false)
const errorMessage = ref('')

const email = ref('')
const password = ref('')


async function emailLogin() {
    const response =  await authKit.signIn();
    if (response.CONNECTED) {
        navigateTo('/user/dashboard')
    }
    else {
        const message = "メールアドレスまたはパスワードが間違っています。";
        errorMessage.value = message
        snackbar.value = true
    }
}

</script>